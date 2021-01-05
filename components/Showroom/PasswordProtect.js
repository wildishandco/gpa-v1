import { useState } from "react";
import Login from "./Login";

export default function PasswordProtect({ children }) {
  const [password, setPassword] = useState("password");

  if (password !== "password") {
    return <Login setPassword={setPassword} />;
  }

  return <div>{children}</div>;
}
