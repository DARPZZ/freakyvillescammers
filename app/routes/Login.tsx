import { useNavigate, Link } from "@remix-run/react";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { UserLogin } from "~/Controllers/ApiCalls/Usercalls";

function Login() {
  const [corretLogin, setCorretLogin] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
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

    const response = await UserLogin(formData);

    if (!response.ok) {
      console.log(response.status);
      if (response.status == 401) {
        setCorretLogin(false);
      }
      throw new Error("Failed to submit data");
    }

    const data = await response.json();
    const role = data.message;
    document.cookie = `role=${role}; path=/; max-age=3600; samesite=Lax`;
    navigate("/");
  };

  return (
    <section className="w-full h-full flex justify-center   dark:bg-gray-900">
      <div className="w-full flex flex-col items-center justify-center ">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Log på
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="Email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Din email
                </label>
                <input
                  type="text"
                  name="Email"
                  id="Email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  value={formData.Email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="Password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Adgangskodeord
                </label>
                <input
                  type="password"
                  name="Password"
                  id="Password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formData.Password}
                  onChange={handleChange}
                />
              </div>
              {corretLogin == false && (
                <div>
                  <h1 className=" flex justify-center font-bold text-red-700 text-sm">
                    Forkert Email eller Adgangskode
                  </h1>
                </div>
              )}
              <div className="flex items-center justify-between">
                <div className="flex items-start"></div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Glemt kodeord?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-black bg-gray-200 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Log på
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Har du ikke en konto endnu?{" "}
                <Link
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  to="/Signup"
                >
                  Lav en konto
                </Link>
                ;
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
