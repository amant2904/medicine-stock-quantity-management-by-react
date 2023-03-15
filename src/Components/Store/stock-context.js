import React from "react";

const StockContext = React.createContext({
    medicines: [],
    medicineUpdate: () => { },
    medicineAddInCart: () => { }
});

export default StockContext;