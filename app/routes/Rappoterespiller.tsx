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
            className="flex flex-col w-full space-y-5"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="navnPåSpiller"
              value={formData.navnPåSpiller}
              onChange={handleChange}
              className="border-2  "
              placeholder="Navn på scammer"
            />
            <input
              type="text"
              name="VærdiScammetFor"
              value={formData.VærdiScammetFor}
              onChange={handleChange}
              className="border-2 "
              placeholder="Værdi scammet for"
            />
            <input
              className="pt-5 align-top border-2 bg-blue-600 text-xl text-white"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Rappoterespiller;
