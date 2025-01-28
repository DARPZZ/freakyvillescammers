import React from "react";

function unauthorized() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#342643] p-4">
      <div className="text-5xl font-bold text-[#EE4B5E]" data-content="403">
        403 - ADGANG NÆGTET
      </div>
  
      <div className="text-3xl font-bold text-[#1FA9D6] mt-4">
        Beklager, du har ikke de nødvendige rettigheder til at tilgå denne side.
      </div>
  
      <div className="text-lg text-white text-center mx-8 my-4 p-5">
        Serveren har nægtet adgang til den ønskede ressource. Dette kan skyldes, 
        at din brugerrolle ikke giver tilladelse til at tilgå denne side. Kontakt 
        en administrator, hvis du mener, dette er en fejl.
      </div>
  
      <div className="mt-8">
        <a
          href="/"
          className="inline-block px-8 py-4 border-2 border-[#EE4B5E] text-[#EE4B5E] font-bold uppercase rounded-full hover:bg-[#EE4B5E] hover:text-white transition-all duration-200"
        >
          Gå til forsiden
        </a>
      </div>
    </div>
  );  
}

export default unauthorized;
