import React from "react";

// Presentational Component;
// It has no state nor lifecycle methods;
// All it does, and all it ever will do, is render HTML + JavaScript aka JSX;
function AccountBalance(props) {
    return <h4>{props.debitsSum-props.creditsSum}</h4>
}

export default AccountBalance;