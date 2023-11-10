import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProjects } from "../../store/projects/ProjectsActions";

const ProjectsList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { projects, loading } = useSelector((state) => state.projects);
    useEffect(() => {
        dispatch(getProjects());
    }, []);
    console.log(projects);
    return (
        <div>
            {loading ? (
                <h2>loading...</h2>
            ) : (
                <>{projects.map((item, index) => `${item.title}`)}</>
            )}
        </div>
    );
};

export default ProjectsList;
