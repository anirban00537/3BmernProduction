import React from "react";
import Intro from "../../Intro/Intro";
import FileBase from "react-file-base64";
import { useState, useEffect } from "react";

import { fetchIntro, updateIntroPost } from "../../Api/index";

const IntroAdmin = () => {
  const [introData, setIntroData] = useState({
    title: "",
    introId: 1234,
    personName: "",
    description: "",
    image: "",
  });

  const onload = async () => {
    const { data } = await fetchIntro();
    console.log(data, "dataaaaa");

    const { title, introId, personName, description, image } = data[0];
    setIntroData({
      title: title,
      introId: introId,
      personName: personName,
      description: description,
      image: image,
    });
  };

  useEffect(() => {
    onload();
  }, []);

  const handleSubmit = (e) => {
    updateIntroPost(introData);
  };

  return (
    <div className="tagline-part container">
      <p>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseintro"
          aria-expanded="false"
          aria-controls="collapseintro"
        >
          Intro preview
        </button>
      </p>
      <div class="collapse preview" id="collapseintro">
        <Intro />
      </div>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <div className="custom-file">
          <FileBase
            type="file"
            multipla={false}
            onDone={({ base64 }) =>
              setIntroData({ ...introData, image: base64 })
            }
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="title"
            aria-label="title"
            value={introData.title}
            onChange={(e) => {
              setIntroData({ ...introData, title: e.target.value });
            }}
          />

          <input
            type="text"
            className="form-control"
            placeholder="Person Name"
            aria-label="person name"
            value={introData.personName}
            onChange={(e) => {
              setIntroData({ ...introData, personName: e.target.value });
            }}
          />
        </div>
        <div class="input-group">
          <textarea
            class="form-control"
            aria-label="With textarea"
            aria-disabled="true"
            value={introData.description}
            onChange={(e) => {
              setIntroData({ ...introData, description: e.target.value });
            }}
          ></textarea>
        </div>
        <button type="submit" class="btn btn-outline-primary submit_button">
          Set
        </button>
      </form>
    </div>
  );
};

export default IntroAdmin;
