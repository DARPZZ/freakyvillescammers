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
  export const navigateToUnAuth = (isInitialized, navigate)=>{
          if (!isInitialized.current) {
            isInitialized.current = true;
            const role = getUserFromToken();
    
            if(role!= 'owner')
            {
              navigate('/unauthorized')
            }
          }
  }