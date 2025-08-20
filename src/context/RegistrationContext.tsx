// RegistrationContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

type RegistrationContextType = {
  registrations: number[];
  registerEvent: (eventId: number) => void;
};

const RegistrationContext = createContext<RegistrationContextType | undefined>(
  undefined
);

export const RegistrationProvider = ({ children }: { children: ReactNode }) => {
  const [registrations, setRegistrations] = useState<number[]>([]);

  const registerEvent = (eventId: number) => {
    setRegistrations((prev) => [...prev, eventId]);
  };

  return (
    <RegistrationContext.Provider value={{ registrations, registerEvent }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistration = () => {
  const context = useContext(RegistrationContext);
  if (!context) {
    throw new Error("useRegistration must be used within RegistrationProvider");
  }
  return context;
};
