import React from "react";
import { Link } from "@remix-run/react";
function Navbar() {
  return (
    <div className="w-full h-screen  bg-gray-100">
      <div className=" h-screen flex items-center bg-blue-900 p-6">
        <table className="w-full border-separate justify-center border-spacing-3 mt-10 text-white font-semibold">
          <tbody className="">
            <tr className="py-2">
              <td>
                <Link
                  to="/Login"
                  className="block p-3 bg-blue-700 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Login
                </Link>
              </td>
            </tr>
            <tr className="py-2">
              <td>
                <Link
                  to="/Rappoterespiller"
                  className="block p-3 bg-blue-700 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Rappotere en spiller
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Navbar;
