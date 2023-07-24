import React, {useState, useContext} from "react"
import { CustomerContext } from "../contexts/customer";


const CustomerForm = () => {
    const { submit } = useContext(CustomerContext)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("dados Componente", { name, email })

        submit({ name, email })
    }

    return (
        <form className="formulario" onSubmit={handleSubmit}>
            <label htmlFor="name">Nome:</label>
            <input 
                type="text" 
                name="name" 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} />

            <label htmlFor="email">Email:</label>
            <input 
                type="text" 
                name="email" 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} />

            <button type="submit">Enviar</button>
        </form>
    )
}

export default CustomerForm;