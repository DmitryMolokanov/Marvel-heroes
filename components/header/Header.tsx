"use client";
import Link from "next/link";
import Image from "next/image";
import HeaderSearch from "./HeaderSearch";
import { useState } from "react";
import style from "./style.module.scss";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [input, setInput] = useState("");
  const handleshowSearch = () => {
    setShowSearch((cur) => !cur);
  };
  return (
    <div className={style.Header}>
      <div className={style.HeaderMain}>
        <Link href={"/"}>
          <Image src="/img/logo.png" width={300} height={100} alt="logo" />
        </Link>
      </div>
      <div className={style.HeaderMenu}>
        <div className={style.HeaderMenuContainer}>
          <Link href={"/heroes"}>Heroes</Link>
          <Link href={"/favorites"}>Favorites</Link>
          <button onClick={handleshowSearch}>Search</button>
        </div>
        <div className={style.HeaderInputContainer}>
          {showSearch ? (
            <HeaderSearch
              input={input}
              setInput={setInput}
              setShowSearch={setShowSearch}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default Header;
