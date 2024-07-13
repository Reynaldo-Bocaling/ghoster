import React from "react";
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Title from "../components/ui/Title";
import { tokenomics } from "../constants";

const Tokenomics = () => {
  return (
    <>
      <Section id="tokenomics">
        <Container variant="flexCenter gap-12 flexColCenter">
          <Title label="Our Tokenomics " />
          <p className="text-center text-white max-w-2xl -mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ex
            atque, temporibus obcaecati provident exercitationem illum aliquid
            inventore vel laboriosam?
          </p>
          <div className="relative  rounded-full h-[17drem] w-full border">
            <div className="rounded-full h-[17redm] w-full border border-violet-500 -rotate-2 flexBetween px-16 py-24">
              {tokenomics.map((item, index) => (
                <h1
                  key={index}
                  className="text-white text-[2rem] md:text-[3rem] -rotate-3"
                >
                  {item}
                </h1>
              ))}
            </div>
          </div>
        </Container>
        <img
          src="/svg/bg-grid.svg"
          alt=""
          className="absolute -top-14 left-0 w-full h-full opacity-20"
        />
      </Section>
    </>
  );
};

export default Tokenomics;
