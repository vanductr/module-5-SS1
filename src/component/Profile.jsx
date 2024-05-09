import React from "react";

export default function Profile() {
    let name = "hung";
    let age = 20;
    let major = "Pro";
  return (
    <div>
      <h2>Student Profile</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Major: {major}</p>
    </div>
  );
}
