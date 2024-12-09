import React from "react";
import Navbar from "../Controllers/Navbar";
import ScammerTable from "~/Controllers/ScammerTable";
function _index() {
  return (
    <div className=" flex h-screen w-full">
      <div className="w-1/6">
        <Navbar></Navbar>
      </div>
      <div className="flex justify-center w-full p-5 ">
        <ScammerTable></ScammerTable>
      </div>
    </div>
  );
}

export default _index;
