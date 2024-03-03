import React from "react";

function AddUser({state,handleStateAddUserMenu}){
    return(
            <>
                {state && //Only if the condition is true you can see the card
                    <div className="position-absolute top-0 start-0 w-100 h-100" style={{backgroundColor: "rgba(0, 0, 0, 0.549)"}}> 
                        <div className="card position-absolute top-50 start-50 translate-middle">
                            
                            <div className="position-absolute d-flex justify-content-end mt-2" style={{width:"97%"}}> 
                                <a onClick={handleStateAddUserMenu}><i class="bi bi-x-lg"></i></a> {/*Exit Icon*/}
                            </div>

                            <form class="row">
                                <div className="row d-flex g-3 align-items-center justify-content-center">
                                    <div class="col-md-5">
                                        <label for="inputName" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="inputName" required style={{ border: "1px solid black" }}/>
                                    </div>
                                    <div class="col-md-5">
                                        <label for="inputUserName" class="form-label">UserName</label>
                                        <input type="text" class="form-control" id="inputUserName" required style={{ border: "1px solid black" }}/>
                                    </div>
                                </div>
                                
                                <div class="col-12 mt-4 mb-4">
                                    <button type="submit" class="btn btn-primary">SAVE</button>
                                </div>
                            </form>
                        </div>
                    </div>
                }  
            </>
    );
}

export default AddUser;

