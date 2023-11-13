import React from "react";
import "./AppProfile.css";

export default function AppProfile({isNew }) {
  return (
    <>
        {isNew && <span className="new"></span>}
        <img
          className="photo"
          src="https://plus.unsplash.com/premium_photo-1666265384842-31bdda25f026?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        </>
  );
}
