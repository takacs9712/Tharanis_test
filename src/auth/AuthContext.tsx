import React, { createContext, useState } from "react";

const AuthContext = createContext<{ isLoggedIn: boolean }>({
  isLoggedIn: false,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  return (
    <AuthContext.Provider value={{ isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
