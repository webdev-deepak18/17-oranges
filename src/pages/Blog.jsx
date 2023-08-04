/** @format */

import React from "react";
import Wrapper from "../assets/wrappers/Blog";
import { nanoid } from "nanoid";
import Animate from "../components/Animate";

const Blog = () => {
  return (
    <Wrapper>
      <section className="section">
        <div className="section-center">
          <div className="section-title">
            <Animate>
              <h1 className="heading-one-small">17 Oranges Blog</h1>
              <span className="wiggle-lg"></span>

              <div className="heading-one">
                17 Oranges <span className="orange-bold">NEWS</span> &{" "}
                <span className="orange-bold">VIEWS</span>
              </div>
            </Animate>
          </div>
        </div>
      </section>
      <h2 className="heading-two">
        Coming soon
      </h2>
    </Wrapper>
  );
};

export default Blog;
