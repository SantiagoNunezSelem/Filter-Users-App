import React,{useState,useEffect} from "react";

function AddUser({state,handleStateAddUserMenu,searchUserName,addClient}){

    const [formDataName,setFormDataName] = useState("")

    const [formDataUserName,setFormDataUserName] = useState("")

    const [errorMessage,setErrorMessage] = useState("")

    const [stateErrorMessage,setStateErrorMessage] = useState("")

    const handleSubmit = (ev) => {
        const user = createUser()
        ev.preventDefault();

        //You can add a new user if their username is unique
        if(!searchUserName(user)){
            addClient(user)
            clearInputs()
            handleStateAddUserMenu() //Close the menu
        }
    }

    const clearInputs = () => {
        setFormDataName("")
        setFormDataUserName("")
    }

    const createUser = () => {
        const formData = {
            name:formDataName,
            username:formDataUserName
        }
        return formData
    }

    useEffect(() => {
        const user = createUser()

        if(searchUserName(user)){
            setErrorMessage("ERROR: UserName already exist")
            setStateErrorMessage(true)
        }
        else{
            setErrorMessage("Valid UserName")
            setStateErrorMessage(false)
        }
            
    },[formDataUserName])

    return(
            <>
                {state && //Only if the condition is true you can see the card
                    <div className="position-absolute top-0 start-0 w-100 h-100" style={{backgroundColor: "rgba(0, 0, 0, 0.549)"}}> 
                        <div className="card position-absolute top-50 start-50 translate-middle">
                            
                            <div className="position-absolute d-flex justify-content-end mt-2" style={{width:"97%"}}> 
                                <a onClick={handleStateAddUserMenu}><i className="bi bi-x-lg"></i></a> {/*Exit Icon*/}
                            </div>

                            <form onSubmit={handleSubmit} className="row">
                                <div className="row d-flex g-3 align-items-center justify-content-center">
                                    <div className="col-md-5">
                                        <label for="inputName" className="form-label">Name</label>
                                        <input 
                                            onChange={ev => setFormDataName(ev.target.value)} 
                                            type="text" className="form-control" 
                                            id="inputName"
                                            value={formDataName}
                                            autoComplete="off"
                                            required 
                                            style={{ border: "1px solid black" }}
                                        />
                                    </div>
                                    <div className="col-md-5">
                                        <label for="inputUserName" className="form-label">UserName</label>
                                        <input 
                                            onChange={ev => setFormDataUserName(ev.target.value)} 
                                            type="text" 
                                            className="form-control" 
                                            id="inputUserName"
                                            value={formDataUserName}
                                            autoComplete="off"
                                            required 
                                            style={{ border: "1px solid black" }}
                                        />
                                        {formDataUserName !== "" &&
                                            <div className={`position-absolute ${stateErrorMessage ? "text-danger" : "text-success"}`}>
                                                {errorMessage}
                                            </div>

                                        }
                                    </div>
                                </div>
                                
                                <div className="col-12 mt-4 mb-4">
                                    <button type="submit" className="btn btn-primary">save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                }  
            </>
    );
}

export default AddUser;

