import React, { FormEvent, useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useNavigate } from "@remix-run/react";
import { getUserFromToken, navigateToUnAuth } from "~/util/Cookie";

function Dashboard() {
  interface User {
    role: string;
  }
    const isInitialized = useRef(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      navigateToUnAuth(isInitialized,navigate)
    }, []);
 
  const DashboardNavigation = (url) => {
    navigate(url);
  };
  return (
    <div className="h-full w-full flex flex-row items-center justify-center ">
      <div className="w-3/4 ">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-y-5">
          <div>
            <button
              onClick={() => DashboardNavigation("Update/Role")} 
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 "
            >
              Update rolle for bruger
            </button>
          </div>
          <div>
            <button
              onClick={() => DashboardNavigation("Remove/Role")} 
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 "
            >
              Fjern rolle fra bruger
            </button>
          </div>
          <div>
            <button
              onClick={() => DashboardNavigation("Remove/Scammer")} 
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
