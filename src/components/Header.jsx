import React from "react";
import Container from "./ui/Container";
import { navlinks } from "../constants";
import HeaderTitle from "./ui/HeaderTitle";

const Header = () => {
  return (
    <header>
      <Container variant="relative flexBetween px-5 py-4 ">
        <HeaderTitle />
        <nav>
          <ul className="flexCenter gap-5">
            {navlinks.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.url} className="text-lg font-medium text-white">
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="absolute bottom-0 h-[2px] w-full bg-white">{""}</div>
        <div className="absolute bottom-0 h-[2px] w-full bg-violet-500 -rotate-1">
          {""}
        </div>
      </Container>
    </header>
  );
};

export default Header;
