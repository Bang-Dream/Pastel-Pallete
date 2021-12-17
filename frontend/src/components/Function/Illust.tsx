import React from "react";
import "../../scss/Reset.scss";
import "../../scss/Main.scss";
import data from "../Data/Data";
export default function illust() {
  return (
    <div style={{ marginTop: "65px" }}>
      {data.map((data, index: number) => {
        return (
          <div
            className="mx-auto"
            key={index}
            style={{ marginTop: "30px", textAlign: "center" }}
          >
            <img src={data.image} alt="" width="100%" />
            <h2>{data.name}</h2>
          </div>
        );
      })}
    </div>
  );
}
