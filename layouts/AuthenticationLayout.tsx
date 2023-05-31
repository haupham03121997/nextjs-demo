import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

/**
 *
 * @param layout for login, register...
 * @returns  JSX.Element
 */
const AuthenticationLayout: FC<Props> = ({ children }): JSX.Element => {
  return <div>{children}</div>;
};

export default AuthenticationLayout;
