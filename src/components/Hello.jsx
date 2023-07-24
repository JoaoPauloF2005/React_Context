import React, { useContext } from "react";

import { CustomerContext } from "../contexts/customer";

const Hello = () => {
    const { name } = useContext(CustomerContext);
    const { email } = useContext(CustomerContext);


    return <h1>{name}, {email}</h1>
}

export default Hello;