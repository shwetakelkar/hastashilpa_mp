import React, { Component } from "react"
import API from "../../utils/API";
import "./BuyerOrders.css";
import {Modal,Button,FormControl} from "react-bootstrap"
import Rating from "../../components/Rating/Rating"


class BuyerOrders extends Component{
    state={
        
        show:false,
        orders:[],
        starRating:0,
        review:"",
        itemId:""
        
    }
    showModal = (id,e) => {
        e.preventDefault();
        this.setState({
          show: true,
          itemId:id
        });
      };
      onClose = e => {
        this.setState({
            show: false
          });
      };
    
    componentDidMount(){

        let userId = this.props.currentUser._id
        
        API.getOrders(userId).then(res=>{
            //console.log(res)
            if(res)
                this.setState({orders:res.data})
        }).catch(err=>console.log(err))

    }

    handleReviewChange(e){

        let review = this.state.review;
        let stars =this.state.starRating;
        let itemId = this.state.itemId;
        let data = {
            stars:stars,
            review:review
        }
        API.updateReview(itemId,data)
        .then(res=>{console.log(res)
            this.setState({
                show: false
              });})
        .catch(err=>console.log(err))

    }

    renderOrders(){

        return(
            this.state.orders.map(elem=>
                <div className="card ordercard mt-4 mb-2">
                    <div className="row">
                        <div className="col-md-4 col my-auto">
                            <img src={`/api/new/file/${elem.fileId}`}
                                onError={(e)=>e.target.src="../images/Discontinued.png"}
                                className="imgTumbnail" alt=""></img>
                        </div>
                        <div className="col-md-8 col">
                            <a className="mt-4 ml-4 itemLink" href={`/displayItem/${elem.fileId}`} alt=""><h6>{elem.orderTitle}</h6></a>
                            <p>To : {elem.sellerEmail}</p>
                            <p> Description : {elem.orderInfo}</p>
                            <p>Order Date : {((elem.createdDate).split("T"))[0]}</p>
                            <form onClick={(e)=>this.showModal(elem.itemId,e)}>
                                <button className= "btn review-btn ml-auto">Review</button></form>
                        </div>
                    </div>
                </div>
            )
        )

    }
    handleInput=(e)=>{
        
        this.setState({review:e.target.value})

    }
    onValueChanged=(newRating)=>{
        this.setState({starRating : newRating})
    }
    render(){
        
        return(
            <div className="container">
                <div className="row">
                    {this.state.orders.length>0 ? 
                        this.renderOrders()
                        :<h3 className="mt-3">No orders found</h3>}
                </div>
                <Modal show={this.state.show} onHide={this.onClose} >
                    <Modal.Header closeButton>
                    <Modal.Title>Review</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Rating numberOfStars="5"
                                currentRating={this.state.starRating}
                                onClick={this.setRating}
                                onValueChanged={this.onValueChanged}/>
                        <FormControl
                            type="textarea"
                            placeholder=""
                            aria-label="Review"
                            aria-describedby="basic-addon2"
                            value={this.state.review}
                            onChange={this.handleInput}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                            <Button variant="secondary" onClick={this.onClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>this.handleReviewChange()}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }

}

export default BuyerOrders