import React from "react";
import { useMediaQuery } from "react-responsive";
import GoogleButton from "./GoogleLoginButton";
import GoogleMobileButton from "./GoogleMobileButton/GoogleMobileButton";

const ResponsiveGoogleButton = ({ onClick }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return isMobile ? (
    <GoogleMobileButton onClick={onClick} />
  ) : (
    <GoogleButton onClick={onClick} />
  );
};

export default ResponsiveGoogleButton;