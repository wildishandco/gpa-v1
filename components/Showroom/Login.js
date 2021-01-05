import { useState } from "react";

export default function Login({ setPassword }) {
  const [handlePassword, setHandlePassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
      setPassword(handlePassword);
      
  };

  return (
    <>
      <div style={{ padding: 400 }}>Login</div>
      <div>
        <form onSubmit={handleSubmit}>
          <input onChange={(e) => setHandlePassword(e.target.value)} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
