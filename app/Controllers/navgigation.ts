import { useNavigate } from "@remix-run/react";

export const useHandleNavigation = () => {
  const navigate = useNavigate();
  return (navigationLink: string) => {

    navigate(navigationLink);
  };
};