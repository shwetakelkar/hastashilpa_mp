import React, { Component } from 'react'
import API from '../../utils/API'
import './Home.css';


class Home extends Component{

    state={
       
        events:[],
        files:[]
    }

    componentDidMount(){

        // API.getLatestItems().then(res=>this.setState({result:res.data}))
        // .catch(err => console.log(err));
        
        API.getEvent().then(res=>this.setState({events:res.data}))
        .catch(err => console.log(err));

        API.getImages().then(res=>{
            this.setState({files: res.data})
            
        })
        .catch(err => console.log(err));

    }
    
    
    renderImages(){
       
        return (
            this.state.files.map((elem)=>{
               
               
                return<div className ="card col-sm-4 img-card mb-3" id={elem._id}>
                    <img src={`/api/new/${elem.filename}`} alt="" id="imge"></img>
                    
                    <a href={`/displayItem/${elem._id}`} className="btn btn-view small" type="button" >View</a>
                    
                </div> }
              )
        )
    }
    
    renderEvents(){
        

        return(
        
            this.state.events.map((elem)=>
                <div  key={elem._id} className="card eventCard">
                    <h5>{elem.title}</h5>
                    <h6>Date:{((elem.date).split("T"))[0]}</h6>
                    <h6>time:{elem.time}</h6>
                    <h6>Venue:{elem.venue}</h6>
                    <h6>Info:{elem.description}</h6>
                    
                </div>
            )
        
        )  

    }
    render(){
        
        return(<div className="container-fluid homeClass">
            <div className="row">
                <div className="col-sm-3 eventClass pt-2"><h3 className="text-center">Events</h3>
                
                {this.renderEvents()}
                
                
                <a href ="/event" className="btn eventBtn m-2" onClick={this.addingEvent}>AddEvent</a> 
                </div>
                <div className="col-sm-6 pt-2"><h3 className="text-center">Recently added Items</h3>
                <div className="row">
                {this.state.files ?
                    this.renderImages():(<div> No Item available</div>)}
                </div></div>
                <div className="col-sm-3 pt-2 adClass">
                   <h3> Advertisments</h3>
                </div>
            </div>
        </div>)
    }

}

export default Home