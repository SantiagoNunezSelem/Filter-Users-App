import React, {useState, useEffect} from 'react';
import clientsJson from "../clients.json";

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

            <table className='table w-75 m-auto mt-4 mb-5'>
                <thead>
                    <tr>
                        <th scope="col">NAME</th>
                        <th scope="col">USERNAME</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filterClientsJson.map(client => 
                        <tr>
                            <td>{client.name}</td>
                            <td>{client.username}</td>
                        </tr>)
                    }
                </tbody>

            </table>
        </div>
    );
}

export default Filter;
