import { useState } from "react";

const Community = () => {
  console.log("COMMUNITY Component - PAGES ROUTER");
  const [title, setTitle] = useState<string>("hello");
  return (
    <div>
      {" "}
      COMMUNITY{" "}
      <button onClick={() => alert("Hello")} style={{ margin: "30px" }}>
        Press Me
      </button>{" "}
    </div>
  );
};

export default Community;
