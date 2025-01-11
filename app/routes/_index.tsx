import React from "react";

import ScammerTable from "~/Controllers/ScammerTable";
function _index() {
  return (
    <div className=" flex h-full w-full">
      <div className="flex justify-center w-full">
        <ScammerTable></ScammerTable>
      </div>
    </div>
  );
}

export default _index;
