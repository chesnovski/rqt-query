import React, { FC } from "react";

const LinkContainer: FC = () => {
  return (
    <>
      <a className="mx-2" href="/">
        Home
      </a>
      <a className="mx-2" href="/about">
        About
      </a>
    </>
  );
};

export default LinkContainer;
