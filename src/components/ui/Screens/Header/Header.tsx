import React, { useState } from "react";

import SearchContainer from "./SearchContainer";
import LinkContainer from "./LinkContainer";
import BarButton from "./BarButton";
import styles from "./Header.module.scss";
import HeaderName from "./HeaderName";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div className={styles.parent}>
        <HeaderName />

        <div className=" max-lg:hidden flex justify-between content-center text-center">
          <SearchContainer />
          <div className="font-bold">
            <LinkContainer />
          </div>
        </div>
        <div
          onClick={handleMenu}
          className="my-2 mx-2 space-y-2 max-lg:mr-4 lg:hidden"
        >
          <BarButton />
        </div>
      </div>
      {/* Mobile */}
      {open ? (
        <div className={styles.mobile}>
          <SearchContainer />
          <div className="font-bold px-2">
            <LinkContainer />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Header;
