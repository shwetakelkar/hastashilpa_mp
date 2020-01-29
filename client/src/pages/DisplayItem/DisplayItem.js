import React,{Component} from "react";
import API from "../../utils/API";
import "./DisplayItem.css";
import Rating from "../../components/Rating/Rating"

class DisplayItem extends Component
{
    state={
        title:'',
        email:'',
        summary:'',
        description:'',
        price:'',
        address:'',
        id:'',
        rating:0,
        reviews:[],
        bestSeller:false
    }

    componentDidMount(){
        
        let id = this.props.match.params.id
        
            API.getItem(id).then(res=>{
            //console.log(res)
                this.setState({title:res.data.title,
                    email:res.data.email,
                    bestSeller:res.data.bestSeller,
                    description:res.data.description,
                    price:res.data.price,
                    address:res.data.address,
                    id:res.data._id,
                    summary:res.data.summary,
                    rating:res.data.rating,
                    reviews:res.data.reviews})})
            .catch(err => console.log(err));  
    }

    renderReviews(){
        console.log(this.state.reviews)
        return (
        this.state.reviews.map(elem=>
            <div className="mt-2"><Rating numberOfStars="5"
            currentRating={elem.stars}
            makeDissable="true"/>
            {/* {this.setState({rating:elem.stars})} */}
            <div>{elem.review}</div></div>)
        )
    }
    renderItem(){
        let id = this.props.match.params.id
        let title = this.state.title;
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="row m-2">
                            <h5>{this.state.title}</h5><br/>
                            <h5 className="ml-2">
                            <Rating numberOfStars="5"
                                currentRating={this.state.rating}
                                makeDissable="true"/>
                            </h5></div><br/> 
                    
                        <div className="row ml-2">
                            <h5>{this.state.summary}</h5>
                        </div>
                        {this.state.bestSeller ? 
                        <div className = " mt-4 btn custom-btn">BestSeller</div>:<div/>}
                        <div className="row m-2 mt-4">
                            <h5 className="border-cls"> ${this.state.price}</h5>
                        </div>
                        
                        <div className="m-2"><h6 className="border-cls">Description:</h6> {this.state.description}</div>
                        <div className="m-2">
                            <h6 className="border-cls">SellerInfo:</h6>
                            <div className="row ml-3">{this.state.email} </div>
                            <div className="row ml-3"> Address : {this.state.address}</div>
                        </div>
                        <div className="row mt-5 ml-1">
                            <a  href=
                            {this.props.currentUser?(`/orderPlace/${title} && ${id} && ${this.state.id}`):(`/signin`)} className="btn large editbtn">OrderNow</a>
                        </div>
                    </div>

                    <div className =" col-sm-3 mb-3">
                    <img src={ id ? `/api/new/file/${id}` : `http://placehold.it/200x200`} 
                        className="img-cls" alt=""></img></div>
                    <div className="col-sm-12 mt-3">
                        <h5>Reviews</h5>
                        {this.state.reviews.length>0 ? this.renderReviews() :`No reviews available`}
                    </div>    
                </div>
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