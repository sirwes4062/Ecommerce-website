import React, { useEffect, useState } from "react";

export const responsiveContetxt = React.createContext({});

const ResponsiveProvider = ({ children }) => {
    const [mediaWidth, setMediaWidth] = useState(window.innerWidth)

    function obeserveMediaWidth(){
        setMediaWidth(window.innerWidth)
    } 

    useEffect(() => {
        window.addEventListener('resize', obeserveMediaWidth)

        return () => window.removeEventListener('resize', obeserveMediaWidth)
    }, [mediaWidth])

    return <responsiveContetxt.Provider value={{mediaWidth}}>
        {children}
    </responsiveContetxt.Provider>

};

export default ResponsiveProvider