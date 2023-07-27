/** @format */

import React from "react";

import Wrapper from "../assets/wrappers/Consultancy";
import consultancyCardsData from "../utils/consultancyCardsData";

import audits from "../assets/images/audits.webp";
import roadmaps from "../assets/images/roadmaps.webp";
import processes from "../assets/images/processes.webp";
import futuristicWoman from "../assets/images/futuristic-woman.webp";
import smilingWomanWithHeadset from "../assets/images/smiling-woman-with-headset.webp";

import Cta from "../components/Cta";
import CardVertical from "../components/CardVertical";
import { nanoid } from "nanoid";

const cardDataOne = {
  title: "Audits",
  desc: "We can conduct a full systems audit of your technology stack to identify problems, gaps and opportunities to improve efficiency, productivity, etc.",
  img: audits,
  cardClass: "",
  id: nanoid(),
};
const cardDataTwo = {
  title: "Roadmaps",
  desc: "We can build a roadmap for your technology development, giving you timelines to expect and confidence in where you’re headed.",
  img: roadmaps,
  cardClass: "",
  id: nanoid(),
};

const cardDataThree = {
  title: "Proecesses",
  desc: "We can manage your technology projects, so you’ll know they’re in expert hands. We can define scope and deliver results accordingly.",
  cardClass: "",
  img: processes,
  id: nanoid(),
};

const Consultancy = () => {
  return (
    <Wrapper>
      <section className="section">
        <div className="section-center">
          <div className="section-title">
            <h1 className="">
              Technology Strategy{" "}
              <span className="orange-bold">DONE RIGHT </span>&
              <span className="orange-bold">MADE SIMPLE</span>
            </h1>
            <h4>
              We guide you as you grow rapidly yet organically. We help you
              truly see the future of your technology. All using an
              easy-to-understand framework.
            </h4>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-center">
          <div className="icons-cards-container">
            {consultancyCardsData.map((item) => {
              const { icon, title, desc } = item;
              return (
                <article className="strategy-card" key={nanoid()}>
                  <div className="icon">
                    <span>{icon}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* cards */}
      <div className="card-container">
        <CardVertical {...cardDataOne} />
        <CardVertical {...cardDataTwo} />
        <CardVertical {...cardDataThree} />
      </div>
      {/* end cards */}

      {/* answers section */}

      <section className="section">
        <div className="section-center">
          <div className="answers">
            <div className="info">
              <h1 className="title">
                We have <span className="orange-bold">ANSWERS</span> for your
                “impossible” questions
              </h1>
              <h3>(because we’ve heard most of them before)</h3>
            </div>
            <div className="img-container">
              <img
                src={futuristicWoman}
                alt="futuristic woman"
                className="img"
              />
            </div>
          </div>
        </div>
      </section>

      <Cta img={smilingWomanWithHeadset} />

      {/* end answers section */}
    </Wrapper>
  );
};

export default Consultancy;
