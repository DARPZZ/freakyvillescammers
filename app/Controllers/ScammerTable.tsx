import React, { useEffect, useState } from "react";

// Define the Scammer type for TypeScript
interface Scammer {
  fldScammerId: number;
  fldMinecraftNavn: string;
  fldScammetVærdi: number;
}

function ScammerTable() {
  const [scammers, setScammers] = useState<Scammer[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Fetch data from the backend
  useEffect(() => {
    const fetchScammers = async () => {
      try {
        const response = await fetch("http://localhost:3000/scammer/all");
        if (!response.ok) { 
          throw new Error("Failed to fetch data");
        }
        const data: Scammer[] = await response.json();
        setScammers(data);
      } catch (error) {
        console.error("Error fetching scammers:", error);
      }
    };

    fetchScammers();
  }, []);

  return (
    <div className="w-full h-full flex justify-center">
      <div className="flex flex-col w-full items-center">
        <h1 className="text-2xl font-bold">Scammers på Freakyville</h1>

        <div className="pt-10 w-4/5">
          <form
            className="max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <label
              form="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block placeholder:text-white text-white w-full p-4 ps-10 text-sm border animated-background bg-gradient-to-r from-blue-500 via-blue-500 to-indigo-500 border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Søg efter en person"
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Søg
              </button>
            </div>
          </form>
        </div>

        <div className="relative overflow-x-auto w-full pt-7">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Scammer Navn
                </th>
                <th scope="col" className="px-6 py-3">
                  Scammet for i DB(s)
                </th>
              </tr>
            </thead>
            <tbody>
              {scammers.length > 0 ? (
                scammers.map((scammer) => (
                  <tr
                    key={scammer.fldScammerId}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {scammer.fldMinecraftNavn}
                    </th>
                    <td className="px-6 py-4">{scammer.fldScammetVærdi}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="px-6 py-4 text-center text-gray-500 dark:text-gray-400"
                  >
                    Ingen scammers fundet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ScammerTable;
