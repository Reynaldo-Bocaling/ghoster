import React from "react";
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Title from "../components/ui/Title";

const Banner = () => {
  return (
    <>
      <Section id="banner">
        <Container variant="flexCenter gap-12  mt-7 flexColCenter">
          <div className="flexColCenter max-w-3xl">
            <Title label="The Future of Token Trading " />
            <p className="text-white text-center tracking-wider mt-7">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              harum adipisci debitis doloribus animi aperiam molestiae quidem
              provident, architecto accusamus.
            </p>
          </div>
          <div className="relative  rounded-full  border p-1 z-[98]">
            <div className="rounded-full border border-violet-500 -rotate-3 flexBetween px-4 py-4">
              <img
                src="/img/banner.jpg"
                alt=""
                className="max-w-[500px] w-full rounded-full"
              />
            </div>
          </div>
        </Container>
        <img
          src="/svg/bg-grid.svg"
          alt=""
          className="absolute -top-14 left-0 w-full h-full opacity-70s"
        />
      </Section>
    </>
  );
};

export default Banner;
