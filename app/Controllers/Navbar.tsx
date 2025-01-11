import React, { useEffect, useState } from "react";
import { Link } from "@remix-run/react";
import { jwtDecode } from "jwt-decode";
import { useLocation } from "@remix-run/react";
import { getUserFromToken } from "~/util/Cookie";

interface User {
  role: string;
}

function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const [userLoggedin, setUserLoggedin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const role = getUserFromToken();

    if (role) {
      setUserLoggedin(true);
      setUser({ role });
    } else {
      setUserLoggedin(false);
    }
  }, [location.pathname]);

  return (
      <div className="h-full flex flex-col w-full items-center bg-blue-900">
        <img className=" w-32 pt-5" src="freakyvile.png" alt="Freakyville" />
        <table className="w-full border-separate justify-center border-spacing-3 mt-10 text-white font-semibold">
          <tbody>
            <tr className="py-2">
              <td className="flex justify-center">
                <Link
                  to=""
                  className="flex p-3 w-full justify-center bg-blue-700 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Hjem
                </Link>
              </td>
            </tr>
           
            {userLoggedin == false && (
              <><tr className="py-2">
                <td>
                  <Link
                    to="Login"
                    className="flex p-3 justify-center bg-blue-700 rounded-lg hover:bg-blue-600 transition duration-300"
                  >
                    Login
                  </Link>
                </td>
              </tr><tr className="py-2">
                  <td>
                    <Link
                      to="Signup"
                      className="flex p-3 justify-center bg-blue-700 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                      Signup
                    </Link>
                  </td>
                </tr></>
            )}
            {userLoggedin == true && (
              <tr className="py-2">
                <td>
                  <button className="flex p-3 bg-blue-700 justify-center rounded-lg hover:bg-blue-600 transition duration-300 w-full">
                    Logud
                  </button>
                </td>
              </tr>
            )}
            {user?.role == "owner" && (
              <>
                <tr className="py-2">
                  <td>
                    <Link
                      to="Rappoterespiller"
                      className="flex p-3 bg-blue-700 justify-center rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                      Rappotere en spiller
                    </Link>
                  </td>
                </tr>
                <tr>
                <td>
                  <Link
                    to="/Dashboard"
                    className="flex p-3 justify-center bg-blue-700 rounded-lg hover:bg-blue-600 transition duration-300"
                  >
                    Dashboard
                  </Link>
                </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
        <img className="w-1/2 pt-5" src="corruption.png" alt="awdw" />
      </div>
  );
}

export default Navbar;
