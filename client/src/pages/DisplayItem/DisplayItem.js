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
        console.log(this.props)
        console.log(this.props.match.params.id);
        let id = this.props.match.params.id
        
            API.getItem(id).then(res=>{
            console.log(res)
            this.setState({title:res.data.title,
                email:res.data.email,
                description:res.data.description,
                price:res.data.price,
            address:res.data.address,id:id})
           
            
        })
        .catch(err => console.log(err));  
    }


    renderItem(){
        let id = this.state.id;
        let title = this.state.title;
        console.log(id)
        return(
            <div className="container">
            <div className="row"><h2>{this.state.title}</h2></div><br/>
            <div className="row ml-2"><h5> Price: {this.state.price}$</h5></div><hr/>
            <div className ="card img-card mb-3">
                <img src={ id ? `/api/new/file/${id}` : `http://placehold.it/200x200`} className="img-cls" alt=""></img></div><hr/>
            <div className="row ml-2">Description: {this.state.description}</div><hr/>
            <div className="row ml-2">SellerInfo:
                <p className="ml-3">{this.state.email},</p><br/>
                <p className="ml-3">{this.state.address}</p></div>
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