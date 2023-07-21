import React, { createContext, useState } from "react";


export const SideContext = createContext();

export const SideBarProvider = ({ children }) => {
    const [activeCategory, setActiveCategory] = useState('Profile');

  return (
    <SideContext.Provider value={[activeCategory, setActiveCategory]}>
      {children}
    </SideContext.Provider>
  );
};