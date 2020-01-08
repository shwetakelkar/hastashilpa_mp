import React, { Component } from "react"
import API from "../../utils/API";
import "./MyOrder.css"

class MyOrders extends Component{
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
                <div className="card ordercard mt-4">
                    <div className="row">
                        <div className="col-sm-4">
                            <img src={`/api/new/file/${elem.fileId}`} 
                                className="imgTumbnail" alt=""></img>
                        </div>
                        <div className="col-sm-8">
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
                        :<h2>No orders found</h2>}
                </div>
            </div>
        )
    }

}

export default MyOrders