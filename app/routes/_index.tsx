import React from "react";

import ScammerTable from "~/Controllers/ScammerTable";
function _index() {
  return (
    <div className=" flex h-screen w-full">
      <div className="flex justify-center w-full p-5 ">
        <ScammerTable></ScammerTable>
      </div>
    </div>
  );
}

export default _index;
