import React from "react";

export const inputTOdo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input placeholder="ToDOを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
