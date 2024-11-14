import React from "react";
import Directory from "./directory";
import members from "./member.json"; 

export default function DirectoryList() {
  return (
    <div className=" bg-gray-100">
      <div className="grid grid-cols-3 gap-4 ">
      {members.map((member, index) => (
        <Directory key={index} memberObj={member} />
      ))}
      </div>
    </div>
  );
}
