import React, { useState, useEffect } from "react";
import { fetchAbout, createAbout } from "../Api/index";

const About = () => {
  const [about, setAbout] = useState({
    aboutId: 1234,
    title: "",
    description: "",
    image: "",
  });
  const onload = async () => {
    const { data } = await fetchAbout();
    if (data.length === 0) {
      createAbout(about);
      console.log("about db creating");
    } else {
      const { title, description, image } = data[0];
      setAbout({
        aboutId: 1234,
        title,
        description,
        image,
      });
    }
  };
  useEffect(() => {
    onload();
  }, []);
  return (
    <div>
      <div id="about" className="counter">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xl-6">
              <div className="image-container">
                <img
                  className="img-fluid"
                  src={about.image}
                  alt="alternative"
                />
              </div>{" "}
              {/* end of image-container */}
            </div>{" "}
            {/* end of col */}
            <div className="col-lg-7 col-xl-6">
              <div className="text-container">
                <div className="section-title">ABOUT BRAINBOXBD</div>
                <h2>{about.title}</h2>
                <p>{about.description}</p>

                {/* end of counter */}
              </div>{" "}
              {/* end of text-container */}
            </div>{" "}
            {/* end of col */}
          </div>{" "}
          {/* end of row */}
        </div>{" "}
        {/* end of container */}
      </div>{" "}
      {/* end of counter */}
      {/* end of about */}
    </div>
  );
};

export default About;
