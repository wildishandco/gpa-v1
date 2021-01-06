import { useState } from "react";
import Login from "./Login";

export default function PasswordProtect({ children, showroomPassword }) {
  const [password, setPassword] = useState("");

  if (password !== showroomPassword) {
    return (
      <Login setPassword={setPassword} showroomPassword={showroomPassword} />
    );
  }

  return <div>{children}</div>;
}
