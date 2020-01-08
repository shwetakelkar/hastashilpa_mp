import React,{Component} from "react";
import API from "../../utils/API";
import "./ItemEdit.css"


class ItemEdit extends Component{

   state={
       result:[],
       fileId:''
   };
  

   componentDidMount(){

    this.loadProducts();
    }

 
   removeItem =(id,fileId)=>{
        
        API.deleteItem(id).then(res=>{
            console.log("inside")  
        }).catch(err=>console.log(err));
        API.removeImage(fileId).then(res=>{
            console.log(res)
            this.loadProducts()
        }).catch(err=>console.log(err))
    }

    displayitems=()=>
    {
       
       return(this.state.result.length>0 ? 
        (this.state.result.map(elem=>
            <div className="card order-card mt-2 mb-2">
                <div className="row">
                    
                    <div className="col-sm-4">
                        <img src={`/api/new/file/${elem.fileID}`} className="imgTumb" alt=""></img>
                    </div>
                    <div className="col-sm-8">
                        <a className="mt-4 ml-4 itemLink" href={`/displayItem/${elem.fileID}`} alt=""><h4>{elem.title}</h4></a><hr/> 
                        <p> Description : {elem.description}</p>
                        <form onSubmit={()=> { 
                            if (window.confirm('Are you sure you wish to delete this item? Please check the orders First!'))                   
                                this.removeItem(elem._id,elem.fileID)}}>
                            <button className="btn mb-2 mr-auto">Delete</button></form>  
                    </div>
                </div>
            </div>))
            :<h2 className="text-center">No products available to edit</h2> 

        )
    }

    loadProducts() {
        let email = this.props.currentUser.email;
        API.getItemsByAssocEmail(email).then(result => {
            if (result.data) {
                this.setState({ result: result.data });
            }
        })
            .catch(err => console.log(err));
    }

    render(){

    
    return(

        <div className="container">
            <div className="row mt-4">   
                {this.displayitems()}
            </div>
        </div>
    )
}
}


export default ItemEdit;