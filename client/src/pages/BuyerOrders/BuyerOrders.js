import React, { Component } from "react"
import API from "../../utils/API";
import "./BuyerOrders.css"

class BuyerOrders extends Component{
    state={

        orders:[]
        
    }
    componentDidMount(){

        let userId = this.props.currentUser._id
        
        API.getOrders(userId).then(res=>{
            //console.log(res)
            if(res)
                this.setState({orders:res.data})
        }).catch(err=>console.log(err))

    }

    renderOrders(){

        return(
            this.state.orders.map(elem=>
                <div className="card ordercard mt-4 mb-2">
                    <div className="row">
                        <div className="col-md-4 col my-auto my-md-0">
                            <img src={`/api/new/file/${elem.fileId}`}
                                onError={(e)=>e.target.src="../images/Discontinued.png"}
                                className="imgTumbnail" alt=""></img>
                        </div>
                        <div className="col-md-8 col">
                            <a className="mt-4 ml-4 itemLink" href={`/displayItem/${elem.fileId}`} alt=""><h4>{elem.orderTitle}</h4></a><hr/>
                            <p>To : {elem.sellerEmail}</p><hr/>
                            <p> Description : {elem.orderInfo}</p>
                            <p>Order Date : {((elem.createdDate).split("T"))[0]}</p>
                        </div>
                    </div>
                </div>
            )
        )

    }
    render(){
        
        return(
            <div className="container">
                <div className="row">
                    {this.state.orders.length>0 ? 
                        this.renderOrders()
                        :<h3 className="mt-3">No orders found</h3>}
                </div>
            </div>
        )
    }

}

export default BuyerOrders