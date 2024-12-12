import React from "react";

function unauthorized() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#342643] p-4">
      <div className="text-5xl font-bold text-[#EE4B5E]" data-content="404">
        403 - ACCESS DENIED
      </div>

      <div className="text-3xl font-bold text-[#1FA9D6] mt-4">
        Oops, You don't have permission to access this page.
      </div>

      <div className="text-lg text-white text-center mx-8 my-4 p-5">
        A web server may return a 403 Forbidden HTTP status code in response to
        a request from a client for a web page or resource to indicate that the
        server can be reached and understood the request, but refuses to take
        any further action. Status code 403 responses are the result of the web
        server being configured to deny access, for some reason, to the
        requested resource by the client.
      </div>

      <div className="mt-8">
        <a
          href="/"
          className="inline-block px-8 py-4 border-2 border-[#EE4B5E] text-[#EE4B5E] font-bold uppercase rounded-full hover:bg-[#EE4B5E] hover:text-white transition-all duration-200"
        >
          Go to homepage
        </a>
      </div>
    </div>
  );
}

export default unauthorized;
