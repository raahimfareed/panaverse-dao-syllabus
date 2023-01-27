import React from "react";

const EnrollBtn = ({ className = undefined }: { className?: string }) => {
  return (
    <a
      href="https://portal.piaic.org/signup"
      className={
        "btn w-fit block" + (className !== undefined ? " " + className : "")
      }
      target="_blank"
      rel="noreferrer"
    >
      Enroll Today
    </a>
  );
};

export default EnrollBtn;
