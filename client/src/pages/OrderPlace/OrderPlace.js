import React, { useState } from "react"
import "./OrderPlace.css"
import API from "../../utils/API";




function OrcerPlace(props){

    const [fields,setFields] = useState({
        to:'',
        from:'',
        subject:'',
        message:''

    })

    const handleInputChange= e =>{
        e.preventDefault();
        const { name, value } = e.target;
        setFields({ ...fields, [name]: value });
      }

    const sendEmail = e =>{

            e.preventDefault();
            console.log("here")

        const msg = {
            to: fields.to,
            from: fields.from,
            subject:fields.subject,
            html:fields.message
            
          };
           API.sendEmail(msg).then(res=>{
            console.log(res)
            setFields({fields:{to:'',from:'',subject:'',message:''}})
            props.history.push("/")})
            .catch(err=> console.log(err))

           
          

    }


    return(
        <div className="container">
            <div className="row">
                <div className="card card-mail mt-3">
                    <form onSubmit={sendEmail}>
                        <div className="form-group m-3">
                            <label className="mr-5">To</label>
                            <input type="text" className="form-control" name="to" value={fields.to} onChange={handleInputChange}/>
                        </div>
                        <div className="form-group m-3">
                            <label className="mr-4">From</label>
                            <input type="text" className="form-control" name="from" value={fields.from} onChange={handleInputChange}/>
                        </div>
                        
                        <div className="form-group m-3 ">
                            <label className="mr-3">Subject</label>
                            <input type="text"  className="form-control" name="subject" value={fields.subject} onChange={handleInputChange}/>
                        </div>
                        
                        <div className="form-group m-3">
                            <label className="mr-3 mb-2">Message</label>
                            <textarea type="text" className="form-control" name="message" value={fields.message} onChange={handleInputChange}/>
                        </div>
                        
                        <button className="btn m-3">Submit</button>

                    </form>
                </div>
            </div>
        </div>

    )

}


export default OrcerPlace