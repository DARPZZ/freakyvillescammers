import endpoint from "./Endpoint";
export async function UserLogin(formData)
{
    const response = await fetch(
        `${endpoint}/user/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Email: formData.Email,
            password: formData.Password,
          }),
          credentials: "include",
        }
      ); 
      return response;     
}

export async function SignupCall(formData) {
    const response = await fetch(`${endpoint}/user/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Email: formData.Email,
          password: formData.Password,
        }),
      });
      return response
}

export async function updateRoleCall(formData) {
    const response = await fetch(`${endpoint}/user/updateRole`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Email: formData.Email,
          Role: formData.Role,
        }),
      });
      return response
}