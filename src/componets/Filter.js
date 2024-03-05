import React, {useState, useEffect} from 'react';
import json from "../clients.json";
import Table from "./Table.js";
import AddUser from "./AddUser.js";

function Filter(){

    const [inputText,setInputText] = useState("")

    const [stateAddUserMenu,setStateAddUserMenu] = useState(false)

    const handleStateAddUserMenu = () => {
        setStateAddUserMenu(!stateAddUserMenu)
    }

    const [clientsJson,setClientsJson] = useState(json)

    const [filterClientsJson, setFilterClientsJson] = useState([{}])

    const handleInputText = (e) => {
        setInputText(e.target.value)
    }

    const searchUserName = (client) => {
        const newFilterClientsJson = clientsJson.filter(clientFilter => clientFilter.username === client.username)

        if(newFilterClientsJson.length === 0) 
            return false
        else 
            return true      
    }

    const addClient = (client) => {
        setClientsJson([client,...clientsJson])
    }

    const deleteClient = (userName) => {
        setClientsJson(clientsJson.filter(client => client.username !== userName)) //Remove client
        console.log(clientsJson)
    }

    useEffect(() => {
        console.log("actualiza")
        setFilterClientsJson(clientsJson.filter(client => 
            client.name.toLowerCase().includes(inputText.toLowerCase()) || 
            client.username.toLowerCase().includes(inputText.toLowerCase()))
            );
    },[inputText,clientsJson])

    return(
        <div className="w-100">
            <div className="container d-flex align-items-center justify-content-center mt-3">
                <input className="w-25 " onChange={handleInputText}></input>
                <button type="button" className="btn btn-secondary ms-2" onClick={handleStateAddUserMenu}>
                    <i className="bi bi-person-plus"></i>
                </button>
            </div>

            <AddUser 
                state={stateAddUserMenu}
                handleStateAddUserMenu={handleStateAddUserMenu}
                searchUserName={searchUserName}
                addClient={addClient}
            />

            <Table 
                clients={filterClientsJson}
                deleteClient={deleteClient}/>
            
        </div>
    );
}

export default Filter;
