import React, { FC, useState } from "react";

interface IToolTip {
  text: string;
  children: React.ReactNode;
}

const ToolTips: FC<IToolTip> = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && <div>{text}</div>}
    </div>
  );
};

export default ToolTips;
