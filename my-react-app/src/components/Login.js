import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return React.createElement(
    "form",
    { onSubmit: handleSubmit },
    React.createElement("input", {
      type: "email",
      placeholder: "Email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
    }),
    React.createElement("input", {
      type: "password",
      placeholder: "Password",
      value: password,
      onChange: (e) => setPassword(e.target.value),
    }),
    React.createElement("button", { type: "submit" }, "Login")
  );
}

export default Login;
