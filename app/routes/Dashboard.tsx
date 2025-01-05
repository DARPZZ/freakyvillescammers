import React, { FormEvent, useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useNavigate } from "@remix-run/react";
import { getUserFromToken } from "~/util/Cookie";

function Dashboard() {
  interface User {
    role: string;
  }
    const isInitialized = useRef(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!isInitialized.current) {
        isInitialized.current = true;
        const role = getUserFromToken();

        if(role!= 'owner')
        {
          navigate('/unauthorized')
        }
      }
    }, []);
 
  const handleSubmit = () => {
    navigate("Ralle");
  };
  return (
    <div className="h-screen w-full flex flex-row items-center ">
      <div className="w-2/3 ">
        <div className="grid grid-cols-2 gap-y-5">
          <div>
            <button
              onClick={handleSubmit}
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 "
            >
              Update rolle for bruger
            </button>
          </div>
          <div>
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 "
            >
              Fjern rolle fra bruger
            </button>
          </div>
          <div>
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 "
            >
              Fjern en scammer
            </button>
          </div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
