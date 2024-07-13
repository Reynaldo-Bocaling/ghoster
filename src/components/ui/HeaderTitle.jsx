import React from "react";

const HeaderTitle = () => {
  return (
    <div className="flexCenter gap-2">
      <img src="/img/hero.png" className="w-[50px]" alt="" />
      <div className="flexColStart">
        <h1 className="title-font text-violet-500">Ghoster</h1>
        <span className="text-white">The Ghost Friend</span>
      </div>
    </div>
  );
};

export default HeaderTitle;
