import React from "react";

function Button(props) {
  const { text, func } = props;
  return (
    <div className="text-center">
      <button
        onClick={func}
        className="px-8 mx-auto py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200"
      >
        <p>{text}</p>
      </button>
    </div>
  );
}

export default Button;
