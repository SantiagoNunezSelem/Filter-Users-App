import React from "react";
import "../App.css";

function Table( {clients, deleteClient} ){
    return(
        <table className='table m-auto mt-4 mb-5'>
                <thead>
                    <tr>
                        <th scope="col">NAME</th>
                        <th scope="col">USERNAME</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clients.map((client,index) => 
                        <tr key={index} >
                            <td>{client.name}</td>
                            <td>{client.username}</td>
                            <td id="trash-column">
                                <a>
                                    <i onClick={() => deleteClient(client.username)} class="bi bi-trash3"></i> {/* Trash Icon */}
                                </a>
                            </td>
                        </tr>)
                    }
                </tbody>

            </table>
    );
}




export default Table;
