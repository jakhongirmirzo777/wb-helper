import { FC, useLayoutEffect } from "react";
import Cookies from "js-cookie";
import { LoginProps } from "@/components/layout/Login/Login.types";
import { useLoginUserMutation } from "@/store/api/api";
import { ACCESS_TOKEN_KEY } from "@/utils/constants";

const Login: FC<LoginProps> = ({ children }) => {
  const isAuthenticated = Cookies.get(ACCESS_TOKEN_KEY);
  const [loginUser] = useLoginUserMutation();

  useLayoutEffect(() => {
    if (!isAuthenticated) loginUser();
  }, []);

  return <>{children}</>;
};

export default Login;
