import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { createTeam, deleteTeam, fetchTeam } from "../../Api/index";

const TeamAdmin = () => {
  let [team, setTeam] = useState([]);
  const [postData, setPostData] = useState({
    name: "",
    position: "",
    image: "",
  });
  const onload = async () => {
    const { data } = await fetchTeam();
    setTeam(data);
    console.log(team.length, "Team");
  };
  useEffect(() => {
    onload();
  }, []);
  const handleSubmit = (e) => {
    createTeam(postData);
  };
  return (
    <div className="tagline-part container ">
      <p>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTeam"
          aria-expanded="false"
          aria-controls="collapseTeam"
        >
          Team preview
        </button>
      </p>
      <div class="collapse preview" id="collapseTeam">
        <div class="container">
          {team.length !== 0 ? (
            <div class="row">
              {team.map((s) => (
                <div class="col-sm" key={s._id}>
                  <p>{s.name}</p>

                  <form>
                    <button
                      type="submit"
                      method="delete"
                      class="btn btn-danger btn-sm"
                      onClick={() => {
                        deleteTeam(s._id);
                      }}
                    >
                      Delete
                    </button>
                  </form>
                </div>
              ))}
            </div>
          ) : (
            <div class="alert alert-secondary" role="alert">
              No Team Member Available Add One
            </div>
          )}
        </div>
      </div>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <div>
          <div className="custom-file">
            <FileBase
              type="file"
              multipla={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, image: base64 })
              }
            />
          </div>
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            aria-label="Name"
            value={postData.name}
            onChange={(e) => {
              setPostData({ ...postData, name: e.target.value });
            }}
          />
        </div>
        <div class="input-group">
          <textarea
            class="form-control"
            aria-label="With textarea"
            value={postData.description}
            onChange={(e) => {
              setPostData({ ...postData, position: e.target.value });
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

export default TeamAdmin;
