import React, { useEffect, useState } from "react";
import { GetAllScammersCall } from "./ApiCalls/scammercalls";
import { start } from "node:repl";

interface Scammer {
  fldScammerId: number;
  fldMinecraftNavn: string;
  fldScammetVærdi: number;
}

function ScammerTable() {
  const [scammers, setScammers] = useState<Scammer[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filtredScammers, setFiltredScammers] = useState<Scammer[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filtredScammers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentScammers = filtredScammers.slice(startIndex, endIndex);
  useEffect(() => {
    setCurrentPage(1);
    const filteredScammers = scammers.filter((scammer) =>
      scammer.fldMinecraftNavn.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFiltredScammers(filteredScammers);
  }, [searchTerm]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    const fetchScammers = async () => {
      try {
        const response = await GetAllScammersCall();

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: Scammer[] = await response.json();

        setScammers(data);
        setFiltredScammers(data);
      } catch (error) {
        console.error("Error fetching scammers:", error);
      }
    };

    fetchScammers();
  }, []);

  return (
    <div className="w-full  h-full flex justify-center">
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
            </div>
          </form>
        </div>

        <div className="relative overflow-x-auto w-full pt-7">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 flex justify-center">
                  Scammer Navn
                </th>
              </tr>
            </thead>
            <tbody>
              {currentScammers.length > 0 ? (
                currentScammers.map((scammer) => (
                  <tr
                    key={scammer.fldScammerId}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th className="px-6 flex justify-center text-xl   py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white">
                      {scammer.fldMinecraftNavn}
                    </th>
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
          <div className="flex justify-center items-center space-x-5 mt-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 mx-1 text-sm font-medium text-gray-700 bg-gray-200 rounded disabled:opacity-50"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-1 mx-1 text-sm font-medium ${
                  currentPage === index + 1
                    ? "text-white bg-blue-500"
                    : "text-gray-700 bg-gray-200"
                } rounded`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 mx-1 text-sm font-medium text-gray-700 bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScammerTable;
