import React from "react";

const LangBlock = ({ lang }) => {
  return (
    <>
      <p>
        {lang.languages}: <span>{lang.languages_level}</span>
      </p>
    </>
  );
};

export default LangBlock;
