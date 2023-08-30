import React, { FC } from "react";
import Header from "./Header/Header";

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="mb-8">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
