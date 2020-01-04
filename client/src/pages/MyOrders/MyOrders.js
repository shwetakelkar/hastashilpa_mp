import React, { Component } from "react"
import API from "../../utils/API";
import "./MyOrder.css"

class MyOrders extends Component{
    state={

        orders:[]
        
    }
    componentDidMount(){

        console.log("inside Myorder")
        let userId = this.props.currentUser._id
        let id = this.props.match.params.id

        console.log(userId,id)
        API.getOrders(userId).then(res=>{
            console.log(res)
            if(res)
                this.setState({orders:res.data})
        }).catch(err=>console.log(err))

    }

    renderOrders(){

        return(
            this.state.orders.map(elem=>
                <div className="card ordercard">
                    <a className="mt-4 ml-4 itemLink" href={`/displayItem/${elem.fileId}`} alt=""><h4>{elem.orderTitle}</h4></a><hr/>
                    <p> Description : {elem.orderInfo}</p>
                </div>
            )
        )

    }
    render(){
        
        return(
            <div className="container">
                <div className="row">
                    {this.renderOrders()}
                </div>
            </div>
        )
    }

}

export default MyOrders