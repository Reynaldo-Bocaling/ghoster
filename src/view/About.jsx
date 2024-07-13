import React from "react";
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Title from "../components/ui/Title";
import Button from "../components/ui/Button";

const About = () => {
  return (
    <>
      <Section id="about">
        <Container variant="flexCenter flex-col md:flex-row gap-12">
          <img src="/img/about.png" alt="" className="max-w-sm" />
          <div className="relative z-[98]">
            <div className="relative ">
              <Title label=" Premium Digital Token Collection." />
              <div className="absolute left-1/3 translate-x-16 bottom-5 h-[2px] w-[220px] bg-white">
                {""}
              </div>
              <div className="absolute left-1/3 translate-x-16 bottom-5 h-[2px] w-[220px] bg-violet-500 -rotate-[5deg]"></div>
            </div>
            <p className="text-white mt-7 tracking-wider">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              perferendis vero vitae dolorem maxime ratione minus autem deleniti
              commodi aliquid pariatur asperiores excepturi laboriosam quisquam,
              cum optio inventore reiciendis quo.
            </p>
            <Button label=" More About Us" variant="w-52" />
          </div>
        </Container>
        <img
          src="/svg/bg-grid.svg"
          alt=""
          className="absolute -top-14 left-0 w-full h-full opacity-50"
        />
      </Section>
    </>
  );
};

export default About;
