import React, { Component } from 'react'
import API from '../../utils/API'
import './Home.css';




class Home extends Component{

    state={
       
        bestSellers:[],
        events:[],
        files:[]
    }

    componentDidMount(){

        if(this.props.match){
            let category = this.props.match.params.name;
            API.getCategoryItem(category).then(res=>{
                this.setState({files: res.data})
                
            })
            .catch(err => console.log(err));
        }
        else{

            API.getImages().then(res=>{
                this.setState({files:res.data})})
            .catch(err => console.log(err));
            API.getBestSellers().then(res=>{
                this.setState({bestSellers:res.data})})
            .catch(err => console.log(err));

        }
        
        // API.getEvent().then(res=>this.setState({events:res.data}))
        // .catch(err => console.log(err)); 

    }
    
    
    renderImages(){

        let allItems;
        if(this.props.match)
            allItems = this.state.files
        else
            allItems = this.state.files.slice(0, 5)
        return (
             
            allItems.map((elem)=>{
            
                return<div className ="col-sm-5 img-card mb-3 mr-2 ml-2" id={elem._id}>
                    <a href={`/displayItem/${elem._id}`} ><img src={`/api/new/${elem.filename}`} alt="" id="imge"></img></a> 
                </div> }
            )
        )
    }

    renderTopImages(){
       
        return (
            this.state.files.slice(5, 10).map((elem)=>{
               
                return<div className ="col-sm-5 img-card mb-3 mr-2 ml-2" id={elem._id}>
                    <a href={`/displayItem/${elem._id}`} ><img src={`/api/new/${elem.filename}`} alt="" id="imge"></img></a> 
                </div> }
              )
        )
    }

    renderBestSellerImages(){
      
        return (
            this.state.bestSellers.map((child)=>{
               
                return<div className ="col-sm-5 img-card mb-3 mr-2 ml-2" id={child._id}>
                    <a href={`/displayItem/${child.fileID}`}><img src={`/api/new/file/${child.fileID}`} alt="" id="imge"></img></a> 
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
                    <h6>Time:{elem.time}</h6>
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
                    {/* <div className="col-sm-2 eventClass pt-2 ml-3 ml-md-0 order-md-1 order-2"><h3 className="mt-3 ml-0">Events</h3>
                        <img className="addImg ml-md-1" src="/images/desssign.png" alt=""></img>
                        {this.renderEvents()}
                        <p><a href ="/event" className="btn eventBtn text-center m-2" onClick={this.addingEvent}>AddEvent</a></p> 
                    </div> */}
                    <div className="col-sm-12 main-card"><h5 className="p-3 label">{this.props.match ? (this.props.match.params.name):(`Freshly Added Products`)}</h5>   
                        <div className="row justify-content-center">  
                        {this.state.files ?
                            this.renderImages():(<div> No Item available</div>)}
                        </div>
                    </div>
                    {this.props.match ? <div/> :
                        <div className="col-sm-12 main-card mt-1"><h5 className="p-3 label">{this.props.match ? (this.props.match.params.name):(`Best Sellers of the Week`)}</h5>   
                            <div className="row justify-content-center">  
                            {this.state.files ?
                                this.renderBestSellerImages():(<div> No Item available</div>)}
                            </div>
                        </div>
                    }
                    {this.props.match ? <div/> :
                        <div className="col-sm-12 main-card mt-1"><h5 className="p-3 label">{this.props.match ? (this.props.match.params.name):(`Top Trends and Special Offers`)}</h5>   
                            <div className="row justify-content-center">  
                            {this.state.files ?
                                this.renderTopImages():(<div> No Item available</div>)}
                            </div>
                        </div>
                    }
                    {/* <div className="col-sm-2 pt-2 m-2 m-md-0 adClass order-md-12 mx-auto order-12">
                        <h3 className="mt-3"> Advertisments</h3>
                        <img className="addImg" src="/images/desssign.png" alt=""></img>
                        <Slideshow />
                    </div> */}
                </div>
            </div>
        </div>)
    }

}

export default Home