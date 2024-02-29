import React from "react";

function Table( {clients} ){
    return(
        <table className='table w-75 m-auto mt-4 mb-5'>
                <thead>
                    <tr>
                        <th scope="col">NAME</th>
                        <th scope="col">USERNAME</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clients.map(client => 
                        <tr>
                            <td>{client.name}</td>
                            <td>{client.username}</td>
                        </tr>)
                    }
                </tbody>

            </table>
    );
}

export default Table;
