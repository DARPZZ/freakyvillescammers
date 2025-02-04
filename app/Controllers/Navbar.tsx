import React, { useEffect, useState } from "react";
import { Link } from "@remix-run/react";
import { jwtDecode } from "jwt-decode";
import { useLocation } from "@remix-run/react";
import { getUserFromToken, DelteRoleCookie } from "~/util/Cookie";
import { RoleEnum } from "~/util/roleEnum";
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
    <div className="w-full flex flex-col  bg-blue-900">
      <div className="w-full flex flex-col  items-center bg-blue-900">
        <img className=" w-32 pt-5" src="freakyvile.png" />
        <table className="w-full border-separate  border-spacing-3 mt-10 text-white font-semibold">
          <tbody>
            <tr className="py-2">
              <td className="flex justify-center">
                <Link
                  to=""
                  className=" p-3 w-full text-center bg-blue-700 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Hjem
                </Link>
              </td>
            </tr>
            <tr className="py-2">
              <td className="flex justify-center">
                <a
                  href="https://namemc.com/"
                  target="_blank"
                  className=" text-center p-3 w-full bg-blue-700 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Link til NameMC
                </a>
              </td>
            </tr>

            {userLoggedin == false && (
              <>
                <tr className="py-2">
                  <td>
                    <Link
                      to="Login"
                      className="flex p-3 justify-center bg-blue-700 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                      Login
                    </Link>
                  </td>
                </tr>
                <tr className="py-2">
                  <td>
                    <Link
                      to="Signup"
                      className="flex p-3 justify-center bg-blue-700 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                      Signup
                    </Link>
                  </td>
                </tr>
              </>
            )}
            {userLoggedin == true && (
              <tr className="py-2">
                <td>
                  <button
                    onClick={DelteRoleCookie}
                    className="flex p-3 bg-blue-700 justify-center rounded-lg hover:bg-blue-600 transition duration-300 w-full"
                  >
                    Logud
                  </button>
                </td>
              </tr>
            )}
            {user?.role == RoleEnum.admin || user?.role == RoleEnum.mod || user?.role == RoleEnum.owner  && (
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
        <img className="w-2/4 pt-5" src="corruption.png" />
      </div>
    </div>
  );
}

export default Navbar;
