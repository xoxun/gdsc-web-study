import React from "react";
import "./AppProfile.css";

import Avator from "./Avator";

export default function AppProfile({ name = "아무개", job = "아무개", isNew }) {
  return (
    <div className="profile">
      <Avator />
      <h1>{name}</h1>
        <p>{job}</p>
    </div>
  );
}
