import React,{useState} from 'react'
import "./Seller.css"
import API from "../../utils/API"
import AuthHelper from '../../AuthHelper';


function Seller(props){

    const [fields, setFields] = useState({

        title:"",
        email:"",
        address:"",
        image:null,
        description:"",
        price:"",
        category:"",
        summary:""

    });



    function validateForm() {

       return fields.title 
            && fields.email
            && fields.price
            && fields.description
            && fields.category
        
      }

      const handleInputChange= e=>{

        e.preventDefault();
        const { name, value } = e.target;
        setFields({ ...fields, [name]: value });
    
      }

      function Capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
        }
    
      function handleSubmit(event) {
        event.preventDefault();
        let userid = (props.currentUser._id)
        let assocEmail =(props.currentUser.email)
        
        const formData = new FormData()
        formData.append("myImage",fields.image)
        
        formData.append("title",Capitalize(fields.title))
        formData.append("address",Capitalize(fields.address))
        formData.append("email",fields.email)
        formData.append("description",Capitalize(fields.description))
        formData.append("summary",fields.summary)
        formData.append("category",fields.category)
        formData.append("price",fields.price)
        formData.append("assoEmail",assocEmail)

        let data={
            assocEmail:fields.email
        }
        
        API.postTestData(formData).then(res=>{
            setFields({fields:{title:'',email:'',address:'',image:'',description:'',price:'',summary:''}})
            
            props.history.push("/")})
        AuthHelper.updateUser(userid,data).then(res=>{
            console.log("success!")
        })
        
      }

      const handleFilechange=(event) =>{
        const file = event.target.files[0];
        
        setFields({...fields,image: file });
      }

      const handleSelectChange=(event) =>{

          setFields({...fields,category:event.target.value });
      }

    return(
        <div className="container">
            <div className="row justify-content-center">
                
                <form onSubmit={handleSubmit} className="sellerform mt-3" enctype="multipart/form-data">
                    <div className="form-group" >
                        <label>Title*</label>
                        <input className="form-control t-name" 
                            type="text"  
                            name="title" 
                            value={fields.title} 
                            onChange={handleInputChange}/>
                    </div>
                    <div className="form-group" >
                        <label>Item Summary*</label>
                        <textarea className="form-control t-name" 
                            type="text"  
                            name="summary" 
                            value={fields.summary} 
                            onChange={handleInputChange}/>
                    </div>
                    <div className="form-group" >
                        <label>Quote Price(in $)*</label>
                        <input  className="form-control" 
                            type="Number" 
                            name="price" 
                            value={fields.price} 
                            onChange={handleInputChange}/>
                    </div>
                    <div className="form-group" >
                        <label>Add Product Image* </label>
                        <input  className="form-control" 
                            type="file" 
                            name="myImage" 
                            onChange={handleFilechange}/></div>
                    <div className="form-group" >
                        <label>Categories* </label>
                        <select class="form-control" id="cata" onChange={handleSelectChange} value={fields.category}>
                            <option>Select category</option>
                            <option>Jewelry & Accessories</option>
                            <option>Home Decore</option>
                            <option>Clothing</option>
                            <option>Fabrics</option>
                            <option>Kitchen</option>
                            <option>Stationary</option>    
                        </select></div>
                    <div className="form-group" >
                        <label>Item Details*</label>
                        <textarea  className="form-control" 
                            type="text" 
                            name="description" 
                            value={fields.description} 
                            onChange={handleInputChange}></textarea></div>
                    <div className="form-group" >
                        <label>Email*</label>
                        <input  className="form-control" 
                            type="text"  
                            name="email" 
                            value={fields.email} 
                            onChange={handleInputChange} /></div>
                    <div className="form-group" >
                        <label>Address*</label>
                        <textarea className="form-control t-name" 
                            type="text" 
                            name="address" 
                            value={fields.address} 
                            onChange={handleInputChange} /></div>
                    <button className="btn btn-seller m-2" disabled={!validateForm()} type="submit">Add Item</button>
                
                </form>
               
            </div>
        </div>
    )

}
export default Seller