import React from "react";


function OrderReceived(){


    return(

        <div className="container">
            <div className="row justify-content-center">
                <div className="mt-3">
                    <label className="ml-2">Please enter your Seller Email</label>
                    <input className="form-control" name="email"/>
                </div>
                
            </div>
        </div>
    )
}

export default OrderReceived