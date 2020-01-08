import React, { useState } from "react"
import "./OrderPlace.css"
import API from "../../utils/API";


function OrcerPlace(props){

    const [fields,setFields] = useState({
        to:'',
        from:'',
        subject:'',
        message:'',
    })

    const handleInputChange= e =>{
        e.preventDefault();
        const { name, value } = e.target;
        setFields({ ...fields, [name]: value });
    }

    function Capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const validateForm=() =>{
    
        return(fields.to
            && fields.from 
            && fields.message)
    }

    const sendEmail = e =>{

        e.preventDefault();
        const msg = {
            to: fields.to,
            from: fields.from,
            subject:Capitalize(fields.subject),
            html:Capitalize(fields.message)
        
        };
        let data={
            orderTitle:props.match.params.title,
            fileId:props.match.params.id,
            orderInfo:Capitalize(fields.message),
            userId:props.currentUser._id,
            sellerEmail:fields.to,
            buyerEmail:fields.from,
        }
        API.saveOrder(data).then(res=>{console.log(res)
        API.sendEmail(msg).then(res=>{
        console.log(res)
        setFields({fields:{to:'',from:'',subject:'',message:''}})
        props.history.push("/")})
        .catch(err=> console.log(err))}).catch(err=> console.log(err))

    }
   

    return(

        <div className="container">
            <div className="row mt-4"><div className="mt-3"><strong>Placing order for " {props.match.params.title} "</strong></div></div>
            <div className="row">
                <div className="card card-mail mt-3 mb-3">
                    <form onSubmit={sendEmail}>
                        <div className="form-group m-3">
                            <label className="mr-5">To*</label>
                            <input type="text" className="form-control" name="to" value={fields.to} onChange={handleInputChange}/>
                        </div>
                        <div className="form-group m-3">
                            <label className="mr-4">From*</label>
                            <input type="text" className="form-control" name="from" value={fields.from} onChange={handleInputChange}/>
                        </div>
                        
                        <div className="form-group m-3 ">
                            <label className="mr-3">Subject*</label>
                            <input type="text"  className="form-control t-name" name="subject" value={fields.subject} onChange={handleInputChange}/>
                        </div>
                        
                        <div className="form-group m-3">
                            <label className="mr-3 mb-2">Message*</label>
                            <textarea type="text" className="form-control" name="message" placeholder="eg. Quantity, shipping address" value={fields.message} onChange={handleInputChange}/>
                        </div>
                        
                        <button className="btn m-3" disabled={!validateForm()} type="submit">Submit</button>

                    </form>
                </div>
            </div>
        </div>

    )

}


export default OrcerPlace