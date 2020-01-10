import React,{Component} from "react";
import API from "../../utils/API";
import "./DisplayItem.css"

class DisplayItem extends Component
{
    state={
        title:'',
        email:'',
        description:'',
        price:'',
        address:'',
        id:''
    }

    componentDidMount(){
        
        let id = this.props.match.params.id
        
            API.getItem(id).then(res=>{
            //console.log(res)
                this.setState({title:res.data.title,
                    email:res.data.email,
                    description:res.data.description,
                    price:res.data.price,
                    address:res.data.address,id:id})})
            .catch(err => console.log(err));  
    }


    renderItem(){
        let id = this.state.id;
        let title = this.state.title;
        return(
            <div className="container">
            <div className="row ml-2">
                <h2>{this.state.title}</h2></div><br/>
            <div className="row ml-2">
                <h5> Price: ${this.state.price}</h5></div><hr/>
            <div className ="card img-card mb-3">
                <img src={ id ? `/api/new/file/${id}` : `http://placehold.it/200x200`} 
                    className="img-cls" alt=""></img></div><hr/>
            <div className="ml-2">Description: {this.state.description}</div><hr/>
            <div className="ml-2">
                <h5>SellerInfo:</h5>
                <div className="row ml-3">{this.state.email} </div>
                <div className="row ml-3"> Address : {this.state.address}</div>
            </div>
            <div className="row m-3">
                <a  href=
                {this.props.currentUser?(`/orderPlace/${title} && ${id}`):(`/signin`)} className="btn large">OrderNow</a></div>
            </div>
        )
    }
   
    render(){
    return(<div className="container">
        <div className="row mt-5">
           {this.renderItem()}
        </div>
    </div>)
    }

}

export default DisplayItem