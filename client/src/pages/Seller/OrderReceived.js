import React, { useState } from "react";
import API from "../../utils/API";
import "./Seller.css"


function OrderReceived(props){
    const[ email,setEmail]=useState('');
   
    const [result, setResult]=useState([]);

    const [showResults, setShowResult]=useState(false);



    const renderOrders=(e)=>{
        e.preventDefault();
        setShowResult(true)
        //console.log(props.currentUser)
        API.getSellerOrder(email).then(res=>{
            if(res){

                console.log(props.currentUser)
                console.log(props.currentUser.assocEmail.indexOf((email)) )
               
                if(props.currentUser.assocEmail.indexOf((email)) !== -1){
                    setResult(res.data)
                }
                
            }}) 
        }

    const displayOrders=()=>
    {
       return(result.length ? (result.map(elem=>
            <div className="card order-card mt-4">
                <div className="row">
                    <div className="col-sm-4">
                        <img src={`/api/new/file/${elem.fileId}`} 
                            onError={(e)=>e.target.src="../images/Discontinued.png"}
                            className="imgTumbnail" alt=""></img>
                    </div>
                    <div className="col-sm-8">
                        <a className="mt-4 ml-4 itemLink" href={`/displayItem/${elem.fileId}`} alt=""><h4>{elem.orderTitle}</h4></a><hr/> 
                        <p> From : {elem.buyerEmail} </p>
                        <p> Description : {elem.orderInfo}</p>
                        <p>Order Received Date : {((elem.createdDate).split("T"))[0]}</p>
                    </div>
                </div>       
            </div>))
            :<div>No Orders found</div>

        )
    }

    const handleInputChange=e=>{
        e.preventDefault();
        setResult([]);
        setEmail(e.target.value)
    }


    return(

        <div className="container">
            <div className="row justify-content-center text-center">
                <form onSubmit={renderOrders}>
                    <div className="mt-3">
                        <label>Please enter your (Seller) Email</label>
                        <input className="form-control" 
                            name="email" 
                            value={email} 
                            onChange={handleInputChange}/>
                    </div>
                    <button className="btn m-3">Find</button>
                </form>
            </div>
            <div className="row">
                {showResults ? 
                    displayOrders() :<div/>}
            </div>
        </div>
    )
}

export default OrderReceived