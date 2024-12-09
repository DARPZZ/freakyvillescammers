import React from "react";
import { Link } from "@remix-run/react";
function Navbar() {
  return (
    <div className=" h-screen w-full  bg-gray-100">
      <div className=" h-screen flex flex-col w-full  items-center bg-blue-900 ">
        <img className="p-2 pt-5" src="freakyvile.png" alt="Freakyville" />
        <table className="w-full border-separate justify-center border-spacing-3 mt-10 text-white font-semibold">
          <tbody className="">
            <tr className="py-2">
              <td className="flex justify-center">
                <Link
                  to="/"
                  className="flex p-3 w-full  items-center  justify-center  bg-blue-700 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Hjem
                </Link>
              </td>
            </tr>
            <tr className="py-2">
              <td>
                <Link
                  to="/Login"
                  className="flex p-3 justify-center bg-blue-700 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Login
                </Link>
              </td>
            </tr>
            <tr className="py-2">
              <td>
                <Link
                  to="/Rappoterespiller"
                  className="flex p-3  bg-blue-700 justify-center rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Rappotere en spiller
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
        <img className="h-1/5 pt-5" src="corruption.png" alt="awdw" />
      </div>
    </div>
  );
}

export default Navbar;
