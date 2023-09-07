import React, { FC } from "react";
import { Link } from "react-router-dom";

const HeaderName: FC = () => {
  return (
    <Link to="/">
      <div>
        <div className="hidden lg:block">
          Please be calm and take your profit
        </div>
        <div className="lg:hidden">Please take your profit</div>
      </div>
    </Link>
  );
};

export default HeaderName;
