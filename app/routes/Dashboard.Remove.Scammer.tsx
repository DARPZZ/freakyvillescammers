import React, { ChangeEvent, FormEvent, useState } from 'react'
import { RemoveScammerCall } from '~/Controllers/ApiCalls/scammercalls';
import { updateRoleCall } from '~/Controllers/ApiCalls/Usercalls';

function RemoveScammer() {
 const [formData, setFormData] = useState({
    fldMinecraftNavn: "",
   });
   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
     const { name, value } = e.target;
     setFormData({
       ...formData,
       [name]: value,
     });
   };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     try {
       const response = await RemoveScammerCall(formData);
       
       if (!response.ok) {
         throw new Error("Failed to submit data");
       }
 
       const result = await response.json();
       console.log("Submission successful:", result);
     } catch (error) {
       console.error("Error submitting form:", error);
       alert("Noget gik galt. Prøv igen.");
     }
   };
 
     return (
         <div>
           <form
             className="flex flex-col w-full space-y-5"
             onSubmit={handleSubmit}
           >
             <input
               type="text"
               name="fldMinecraftNavn"
               value={formData.fldMinecraftNavn}
               onChange={handleChange}
               className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-blue-300 shadow-sm focus:shadow"
               placeholder="Navn"
             />
             <input
               className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
               type="submit"
               value="Indsend"
             />
           </form>
         </div>
   
     );
   };
 

export default RemoveScammer