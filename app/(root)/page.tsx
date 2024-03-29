import { UserButton } from "@clerk/nextjs";
import React from "react";

const homePage = () => {
  return (
    <div>
      <p>Home Page</p>

      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default homePage;
