import React from "react";
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Title from "../components/ui/Title";
import { social } from "../constants";

const Contact = () => {
  return (
    <>
      <Section>
        <Container variant="flexCenter gap-12 flexColCenter mt-12">
          <Title label="Contact Us" />
          <div className="flexStart gap-7 mt-3">
            {social.map((Item, index) => (
              <a href={Item.url} className="p-3 rounded-full bg-violet-500">
                <img src={Item.icon} alt="" className="w-[35px] h-[30px]" />
              </a>
            ))}
          </div>
          <p className="text-white">Copyright © 2024. All rights reserved.</p>
        </Container>
      </Section>
    </>
  );
};

export default Contact;
