import React, {useState, useEffect} from 'react';
import clientsJson from "../clients.json";
import Table from "./Table.js";

function Filter(){

    const [inputText,setInputText] = useState("")

    const [filterClientsJson, setFilterClientsJson] = useState([{}])

    const handleInputText = (e) => {
        setInputText(e.target.value)
    }

    useEffect(() => {
        setFilterClientsJson(clientsJson.filter(client => 
            client.name.toLowerCase().includes(inputText.toLowerCase()) || 
            client.username.toLowerCase().includes(inputText.toLowerCase()))
            );
    },[inputText])

    return(
        <div className="w-100">

            <input className="w-25 mt-3" onChange={handleInputText}></input>

            <Table clients={filterClientsJson}/>
            
        </div>
    );
}

export default Filter;
