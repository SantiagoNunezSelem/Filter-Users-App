import React, {useState, useEffect} from 'react';
import clientsJson from "../clients.json";
import Table from "./Table.js";
import AddUser from "./AddUser.js";

function Filter(){

    const [inputText,setInputText] = useState("")

    const [stateAddUserMenu,setStateAddUserMenu] = useState(false)

    const handleStateAddUserMenu = () => {
        setStateAddUserMenu(!stateAddUserMenu)
    }

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
            <div className="container d-flex align-items-center justify-content-center mt-3">
                <input className="w-25 " onChange={handleInputText}></input>
                <button type="button" class="btn btn-secondary ms-2" onClick={handleStateAddUserMenu}>
                    <i class="bi bi-person-plus"></i>
                </button>
            </div>

            <AddUser 
                state={stateAddUserMenu}
                handleStateAddUserMenu={handleStateAddUserMenu}
            />

            <Table clients={filterClientsJson}/>
            
        </div>
    );
}

export default Filter;
