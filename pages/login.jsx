import { useState } from "react";
import Router from "next/router";
import Layout from "../components/layoutComponent";

const signin = async (email, password) => {
  const response = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (response.status !== 200) {
    throw new Error(await response.text());
  }

  Router.push("/profile");
};

function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    error: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();
    setUserData({ ...userData, error: "" });

    const email = userData.email;
    const password = userData.password;

    try {
      await signin(email, password);
    } catch (error) {
      console.error(error);
      setUserData({ ...userData, error: error.message });
    }
  }

  return (
    <Layout>
      <div className="login">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>

          <input
            type="text"
            id="email"
            name="email"
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
          />

          <button type="submit">Login</button>

          {userData.error && <p className="error">Error: {userData.error}</p>}
        </form>
      </div>
    
    </Layout>
  );
}

export default Login;
