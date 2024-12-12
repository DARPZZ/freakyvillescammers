import { useNavigate } from "@remix-run/react";

export const useHandleNavigation = (p0?: string) => {
  const navigate = useNavigate();
  return (navigationLink: string) => {

    navigate(navigationLink);
  };
};