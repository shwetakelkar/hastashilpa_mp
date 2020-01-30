import React,{Component} from "react";
import API from "../../utils/API";
import "./ItemEdit.css"


class ItemEdit extends Component{

   state={
       result:[],
       fileId:'',
       bestSeller:false
   };
  

   componentDidMount(){

    this.loadProducts();
    }

 
   removeItem =(id,fileId)=>{
        
        API.deleteItem(id).then(res=>{
              
        }).catch(err=>console.log(err));
        API.removeImage(fileId).then(res=>{
            console.log(res)
            this.loadProducts()
        }).catch(err=>console.log(err))
    }

    handleBtn =(id,i)=>
    {
       const value = !this.state.bestSeller;
        this.setState({bestSeller:value});
        
        
        API.updateItemAsBestSeller(id,{value:!value}).then(res=>
            console.log("bestSeller"))
            .catch(err=>console.log(err));
    }

    displayitems=()=>
    {
       
       return(this.state.result.length>0 ? 
        (this.state.result.map((elem,i)=>{
            
            return <div className="card order-card mt-2 mb-2">
                    <div className="row">
                    
                    <div className="col-sm-4">
                        <img src={`/api/new/file/${elem.fileID}`} className="imgTumb" alt=""></img>
                    </div>
                    <div className="col-sm-8">
                        <a className="mt-4 ml-4 itemLink" href={`/displayItem/${elem.fileID}`} alt=""><h4>{elem.title}</h4></a><hr/> 
                        <p> Description : {elem.description}</p>
                        <div className="row">
                        <form onSubmit={()=> { 
                            if (window.confirm('Are you sure you wish to delete this item? Please check the orders First!'))                   
                                this.removeItem(elem._id,elem.fileID)}}>
                            <button className="btn mb-2 mr-auto editbtn">Delete</button></form>
                            <form onChange={()=>this.handleBtn(elem._id)}>
                                <input type="checkbox" className="mb-2 ml-5" defaultChecked={elem.bestSeller}/>
                                <label className="ml-2 mt-2">BestSeller</label>
                            </form>
                            </div>
                    </div>
                </div>
            </div>}))
            :<h3 className="text-center">No products available to edit</h3> 
            
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