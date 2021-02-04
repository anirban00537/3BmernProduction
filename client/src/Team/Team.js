import React, { useState, useEffect } from "react";
import { fetchTeam } from "../Api/index.js";

const Team = () => {
  let [team, setTeam] = useState([]);
  const onload = async () => {
    const { data } = await fetchTeam();
    setTeam(data);
    console.log(team, "Team");
  };
  useEffect(() => {
    onload();
  }, []);

  return (
    <div>
      <div className="basic-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Team Behind Brainboxbd</h2>
              <p className="p-heading">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              {/* === */}
              {team.map((s) => (
                <div className="team-member">
                  <div className="image-wrapper">
                    <img
                      className="img-fluid-pic"
                      src={s.image}
                      key={s._id}
                      alt="alternative"
                    />
                  </div>

                  <p className="p-large">{s.name}</p>
                  <p className="job-title">{s.position}</p>
                </div>
              ))}

              {/* === */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
