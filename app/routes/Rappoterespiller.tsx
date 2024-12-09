import React, { ChangeEvent, FormEvent, useState } from "react";

function Rappoterespiller() {
  const [formData, setFormData] = useState({
    navnPåSpiller: "",
    VærdiScammetFor: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    console.log(formData);
    e.preventDefault();
  };

  return (
    <div className="h-screen  w-full">
      <div className="flex  items-center flex-col">
        <h1 className="text-xl font-bold"> Velkommen</h1>
        <h2 className="font-bold">
          Her har du muligheden for at Rappotere en spiller, der scammer på
          freakyville
        </h2>
      </div>
      <div className=" h-screen  w-full flex  justify-center items-center">
        <div>
          <form
            className="flex flex-col w-full space-y-5 "
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="navnPåSpiller"
              value={formData.navnPåSpiller}
              onChange={handleChange}
              className=" w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-blue-300 shadow-sm focus:shadow  "
              placeholder="Navn på scammer"
            />
            <input
              type="text"
              name="VærdiScammetFor"
              value={formData.VærdiScammetFor}
              onChange={handleChange}
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-blue-300 shadow-sm focus:shadow   "
              placeholder="Værdi scammet for"
            />
            <input
              className="  text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              type="submit"
              
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Rappoterespiller;
