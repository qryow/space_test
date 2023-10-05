import React, { useState, useRef, useEffect } from 'react';
import style from './VideoStyles.module.css';

import video from '../../img/video.mp4';
import play from '../../img/play.svg';
import pause from '../../img/pause.svg';
import backward from '../../img/backward.svg'
import forward from '../../img/forward.svg'

const VideoPlayer = () => {
  const videoRef = useRef();
  const clickRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0); // Длительность видео
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    videoElement.addEventListener('timeupdate', () => {
      if (!isDragging) {
        const duration = videoElement.duration;
        const currentTime = videoElement.currentTime;
        setVideoProgress((currentTime / duration) * 100);
      }
    });

    // Устанавливаем длительность видео после того, как метаданные загрузились
    videoElement.addEventListener('loadedmetadata', () => {
      setVideoDuration(videoElement.duration);
    });

  }, [isPlaying, isDragging]);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  const PlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const checkWidth = (e) => {
    const width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;
    const progress = (offset / width) * 100;
    const duration = videoRef.current.duration;
    videoRef.current.currentTime = (progress / 100) * duration;
  };

  // Функция для преобразования секунд в минуты и секунды
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const rewindForwardHandler = () => {
    const currentTime = videoRef.current.currentTime;
    const newTime = currentTime + 10; // Перемотка вперед на 10 секунд
    const duration = videoRef.current.duration;
    if (newTime < duration) {
      videoRef.current.currentTime = newTime;
    }
  };

  const rewindBackwardHandler = () => {
    const currentTime = videoRef.current.currentTime;
    const newTime = currentTime - 10; // Перемотка назад на 10 секунд
    if (newTime >= 0) {
      videoRef.current.currentTime = newTime;
    } else {
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <>
      <div className={style.video__player}>
        <video className={style.video} ref={videoRef}>
          <source src={video} type="video/mp4" />
        </video>
        <img className={style.play} src={isPlaying ? pause : play} alt="play" onClick={PlayPause} />


        <div className={style.video_info}>
          <div className={style.control_back}>
            <img src={backward} alt="" onClick={rewindBackwardHandler}  />
          </div>

          <div className={style.progress_info}>
            {formatTime((videoProgress / 100) * videoDuration)}
          </div>
          <div className={style.navigation}>
            <div className={style.navigation_wrapper} onClick={checkWidth} ref={clickRef}>
              <div className={style.seek_bar} style={{ width: `${videoProgress}%` }}>
                <div className={style.cursor}></div>
              </div>
            </div>
          </div>
          <div className={style.duration_info}>
            {formatTime(videoDuration)}
          </div>

          <div className={style.control_forward}>
            <img src={forward} alt="" onClick={rewindForwardHandler}  />
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoPlayer;
