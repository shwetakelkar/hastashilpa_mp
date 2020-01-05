import React, { Component } from 'react'
import API from '../../utils/API'
import './Home.css';
import Slideshow from '../../components/Slideshow/Slideshow';



class Home extends Component{

    state={
       
        events:[],
        files:[]
    }

    componentDidMount(){
        
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
               
               
                return<div className ="col-sm-5 img-card mb-3 mr-2 ml-md-0" id={elem._id}>
                    <a href={`/displayItem/${elem._id}`} ><img src={`/api/new/${elem.filename}`} alt="" id="imge"></img></a>
                    
                    
                    
                </div> }
              )
        )
    }
    
    renderEvents(){
        

        return(
        
            this.state.events.map((elem)=>
                <div  key={elem._id} className="card ml-md-4 eventCard">
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
        
        return(
        
        <div>
        
            <div className="container-fluid homeClass">
                <div className="row">
                    <div className="col-sm-3 eventClass pt-2 ml-5 ml-md-0 order-md-1 order-2"><h3 className="mt-3 ml-0">Events</h3>
                        <img className="addImg ml-md-1" src="/images/desssign.png"></img>
                        {this.renderEvents()}
                    <a href ="/event" className="btn eventBtn m-2" onClick={this.addingEvent}>AddEvent</a> 
                    </div>
                    <div className="col-sm-7 pt-2 order-md-2"><h3 className="text-center">Recently Added Items</h3>   
                        <div className="row">  
                        {this.state.files ?
                            this.renderImages():(<div> No Item available</div>)}
                        </div></div>
                    <div className="col-sm-2 pt-2 m-2 m-md-0 adClass order-md-12 order-12">
                        <h3 className="mt-3"> Advertisments</h3>
                        <img className="addImg" src="/images/desssign.png"></img>
                        <Slideshow />
                    </div>
                </div>
            </div>
        </div>)
    }

}

export default Home