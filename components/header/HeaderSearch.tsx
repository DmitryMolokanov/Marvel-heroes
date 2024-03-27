"use client";

import { useState } from "react";
import { publicKey, timestamp, hash } from "../../utils/config/config";
import Image from "next/image";
import { setHero } from "@/store/reducers/heroSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import style from "./style.module.scss";

interface HeaderSearchProps {
  input: string;
  setInput: (el: string) => void;
  setShowSearch: (el: boolean) => void;
}

export default function HeaderSearch({
  input,
  setInput,
  setShowSearch,
}: HeaderSearchProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [err, setErr] = useState(false);

  const getSingleHero = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(
      `https://gateway.marvel.com/v1/public/characters?limit=30&ts=${timestamp}&apikey=${publicKey}&hash=${hash}&name=${input}`
    );
    const result = await res.json();
    const hero = result.data.results;
    if (hero.length === 0) {
      console.log("err");
      setInput("");
      setErr(true);
      return;
    } else {
      setInput("");
      setErr(false);
      setShowSearch(false);
      dispatch(setHero(hero));
      router.push("/hero");
    }
  };
  return (
    <div className={style.searchContainer}>
      <form onSubmit={getSingleHero}>
        <input
          value={input}
          placeholder={err ? "Please enter a correct value" : ""}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <Image
            src={"/vectors/search.png"}
            width={20}
            height={20}
            alt="search"
          />
        </button>
      </form>
    </div>
  );
}
