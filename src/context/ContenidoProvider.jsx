import { useEffect,useState } from "react";
import { ContenidoContext } from "./ContenidoContext";

export const ContenidoProvider = ({children})=>{


    return(
        <ContenidoContext.Provider
        value={{
            
        }}>
            {children}
        </ContenidoContext.Provider>

    );

};
