import React from "react";
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Lottie from "lottie-react";
import arrow from "../assets/json-animations/hero_arrow.json";
import hero_float from "../assets/json-animations/hero_main_float.json";
import Button from "../components/ui/Button";
import SlidingText from "../components/SlidingText";
const Hero = () => {
  return (
    <>
      <Section id="hero">
        <Container variant="md:-translate-y-16">
          <div className="flexBetween flex-col sm:flex-col md:flex-row px-12">
            <h1 className="gradient-text title-font text-white text-4xl md:text-8xl">
              GHOSTER
            </h1>
            <div className="max-w-[170px] absolute top-7 left-0 md:static">
              <Lottie animationData={arrow} />
            </div>
            <img src="/img/hero.png" alt="" className="max-w-xs" />
          </div>
          <div className="relative flexEnd flex-col md:flex-row gap-5 -mt-28">
            <div className="absolute -bottom-60 md:-bottom-32  -left-16 max-w-[450px] translate-x-12">
              <Lottie animationData={hero_float} />
            </div>
            <div className="flexColStart">
              {" "}
              <h1 className="title-font text-white text-5xl md:text-8xl">
                PEER-TO-
                <span className=" title-font ">PEER</span>
              </h1>
              <h1 className="title-font text-white text-5xl md:text-8xl">
                TRADING <span className="gradient-text">*</span>
              </h1>
            </div>
          </div>
          <div className="relative flexBetween flex-wrap gap-14 px-9 mt-28 md:mt-9 z-[98]">
            <Button label="Buy Now" variant="w-40" />

            <div className=" max-w-3xl">
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                molestiae quos dolorum beatae cum reiciendis dolor inventore!
                Eaque ex corporis odit esse. Obcaecati porro dolor quas in?
                Sunt, et quaerat.
              </p>
            </div>
          </div>
        </Container>
        <SlidingText />
      </Section>
    </>
  );
};

export default Hero;
