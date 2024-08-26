import { createContext } from "react";
import all_products from '../Components/Assets/all-products';

// Sukuriamas kontekstas, kurio pradine reiksme yra nulis:
export const ShopContext = createContext(null);

// Sukuriamas konteksto provideris, kad butu galima pasiekti konteksto reiksmes:
const ShopContextProvider = (props) => {
   const contextValue = { all_products }; //pasiekiame visus produktus su ju informacija. Tai bus konteksto reiksme

   return (

      // Sukuriamas Provider'is ir suteikiama reiskme, kuri bus pasiekiama visuose reikiamuose komponentuose
      <ShopContext.Provider value={contextValue} >
         {props.children}
      </ShopContext.Provider>
   )
};

export default ShopContextProvider;