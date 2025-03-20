import React, { useState } from "react";
import "./styles.css";

const FullNameDisplay = () => {
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;

    if (!firstName || !lastName) {
      return;
    }
    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div className="container">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>First Name:</label>
          <input type="text" name="firstName" required />
        </div>
        <div className="input-group">
          <label>Last Name:</label>
          <input type="text" name="lastName" required />
        </div>
        <button type="submit">Submit</button>
      </form>
      {fullName && <h2>You entered: {fullName}</h2>}
    </div>
  );
};

export default FullNameDisplay;
