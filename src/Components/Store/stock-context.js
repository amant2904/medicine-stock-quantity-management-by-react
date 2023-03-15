import React from "react";

const StockContext = React.createContext({
    medicines: [],
    medicineUpdate: () => { },
    medicineAddInCart: () => { },
    cartItem: null
});

export default StockContext;