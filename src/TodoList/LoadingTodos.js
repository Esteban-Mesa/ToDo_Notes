import React from "react";
import "./LoadingTodos.css";

function LoadingTodos() {
  let delay = 0;

  const sumDelay = () => {
    delay += 0.1;
    return delay;
  };

  return (
    <div className="Loading-container center">
      <span className="sms">
        <span className="loading-anim">G</span>
        <span style={{ animationDelay: `${sumDelay()}s` }} className="loading-anim">
          a
        </span>
        <span style={{ animationDelay: `${sumDelay()}s` }} className="loading-anim">
          r
        </span>
        <span style={{ animationDelay: `${sumDelay()}s` }} className="loading-anim">
          g
        </span>
        <span style={{ animationDelay: `${sumDelay()}s` }} className="loading-anim">
          a
        </span>
        <span style={{ animationDelay: `${sumDelay()}s` }} className="loading-anim">
          n
        </span>
        <span style={{ animationDelay: `${sumDelay()}s` }} className="loading-anim">
          d
        </span>
        <span style={{ animationDelay: `${sumDelay()}s` }} className="loading-anim">
          o
        </span>
        <span style={{ animationDelay: `${sumDelay()}s` }} className="loading-anim">
          .
        </span>
        <span style={{ animationDelay: `${sumDelay()}s` }} className="loading-anim">
          .
        </span>
        <span style={{ animationDelay: `${sumDelay()}s` }} className="loading-anim">
          .
        </span>
      </span>
    </div>
  );
}

export { LoadingTodos };
