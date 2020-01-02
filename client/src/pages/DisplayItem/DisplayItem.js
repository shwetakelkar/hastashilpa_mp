import React,{Component} from "react";
import API from "../../utils/API"

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
        console.log(id)
        return(
            <div className="container">
            <div classname="row"><h2>{this.state.title}</h2></div><br/>
            <div className="row">price: {this.state.price}$</div><hr/>
            <div className ="card img-card mb-3">
                <img src={ id ? `/api/new/file/${id}` : `http://placehold.it/200x200`} height="300px" alt=""></img></div><hr/>
            <div className="row">description: {this.state.description}</div><hr/>
            <div className="row">sellerInfo: {this.state.email}+{this.state.address}</div>
            <div className="row m-3">
            <a  href="/orderPlace" className="btn large">OrderNow</a></div>
            
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