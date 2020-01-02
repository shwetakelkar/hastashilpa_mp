import React,{useState} from 'react';
import "./Event.css"
import API from '../../utils/API';



function Event(props)
{
    const [fields, setFields]= useState(
        {
        title:'',
        time:'',
        date:'',
        venue:'',
        description:''
    });

    const handleInputChange= e =>{
        e.preventDefault();
        const { name, value } = e.target;
        setFields({ ...fields, [name]: value });
      }

    //   const validateForm=()=>{
    //       //todo
    //   }

    const saveEvent=(event)=>{
        event.preventDefault();
       
        let data ={
            title:fields.title,
            date:fields.date,
            time:fields.time,
            venue:fields.venue,
            description:fields.description
        }
        API.saveEvent(data).then(res=>{
            setFields({fields:{title:'',time:'',date:'',venue:'',description:''}})
        if(res){
            
         props.history.push("/")
            
        }

        
    
    })
        
    }
    
    return(
        <div className="container">
            <div className="row justify-content-center">
                <form className="mt-3" onSubmit={saveEvent}>
                    <div className="form-group">
                        <label>Event Name</label>
                        <input type="text" className="form-control" name="title" value={fields.title} onChange={handleInputChange}/></div>
                    <div className="form-group">    
                        <label>Event Date</label>
                        <input type="date" className="form-control" name="date" value={fields.date} onChange={handleInputChange}/></div>
                        <div className="form-group">    
                        <label>Event Time</label>
                        <input type="time" className="form-control" name="time" value={fields.time} onChange={handleInputChange}/></div>
                    <div className="form-group">    
                        <label>Event Venue</label>
                        <textarea type="text" className="form-control" name="venue" value={fields.venue} onChange={handleInputChange}/></div>
                    <div className="form-group">    
                    <label>Event description</label>
                    <textarea type="text" className="form-control" name="description" value={fields.description} onChange={handleInputChange}/></div>
                
                    <button className="btn">Save Event</button>
                </form>
                
            </div>
        </div>
    )
}

export default Event