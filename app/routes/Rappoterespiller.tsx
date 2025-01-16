import React, { ChangeEvent, FormEvent, useState, useEffect, useRef } from "react";
import { useNavigate } from "@remix-run/react";
import { ReportScammerCall } from "~/Controllers/ApiCalls/scammercalls";
import { getUserFromToken, navigateToUnAuth } from "~/util/Cookie";

interface User {
  role: string;
}
function Rappoterespiller() {
  const isInitialized = useRef(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    minecraftNavn: "",
    fldScammetVærdi: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
    useEffect(() => {
      navigateToUnAuth(isInitialized,navigate)
    }, []);
  

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await ReportScammerCall(formData);
      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      const result = await response.json();
      console.log("Submission successful:", result);
      alert("Spiller rapporteret med succes!");
      setFormData({
        minecraftNavn: "",
        fldScammetVærdi: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Noget gik galt. Prøv igen.");
    }
  };

  return (
    <div className="h-full w-full">
      <div className="flex items-center flex-col">
        <h1 className="text-xl font-bold">Velkommen</h1>
        <h2 className="font-bold text-center pt-5">
          Her har du muligheden for at rapportere en spiller, der scammer på
          Freakyville.
        </h2>
      </div>
      <div className="h-full w-full flex justify-center mt-40 ">
        <div>
          <form
            className="flex flex-col w-full space-y-5"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="minecraftNavn"
              value={formData.minecraftNavn}
              onChange={handleChange}
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-blue-300 shadow-sm focus:shadow"
              placeholder="Navn på scammer"
            />
            <input
              type="text"
              name="fldScammetVærdi"
              value={formData.fldScammetVærdi}
              onChange={handleChange}
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-blue-300 shadow-sm focus:shadow"
              placeholder="Værdi scammet for"
            />
            <input
              className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              type="submit"
              value="Rapporter"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Rappoterespiller;
