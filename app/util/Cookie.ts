import { RoleEnum } from "./roleEnum";
export const getUserFromToken = () => {
    const token = document.cookie
      .split(";")
      .find((row) => row.trim().startsWith("role="));
  
    if (token) {
      const role = token.split("=")[1];
      return role || null;
    }
  
    return null;
  };
  export const navigateToUnAuth = (isInitialized, navigate, roles :string[])=>{
    if (!isInitialized.current) {
      isInitialized.current = true;
      const role = getUserFromToken();
      if(role != null)
      {
        if (!roles.includes(role) && roles.includes(RoleEnum.owner)) {navigate('/unauthorized')}
      }
    };
           
  }

  export const DelteRoleCookie =()=>{
    document.cookie = "role=; path=/; max-age=0; samesite=Lax; secure";
    window.location.reload();
  }