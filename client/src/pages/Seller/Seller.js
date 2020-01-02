import React,{useState} from 'react'
import "./Seller.css"
import API from "../../utils/API"


function Seller(props){

    const [fields, setFields] = useState({

        title:"",
        email:"",
        address:"",
        image:null,
        description:"",
        price:""

    });



    function validateForm() {

       return fields.title 
            && fields.email
            && fields.price
            && fields.description
        
    
      }

      const handleInputChange= e=>{

        e.preventDefault();
        const { name, value } = e.target;
        setFields({ ...fields, [name]: value });
    
      }
    
      function handleSubmit(event) {
        event.preventDefault();
        
        const formData = new FormData()
        formData.append("myImage",fields.image)
        
        formData.append("title",fields.title)
        formData.append("address",fields.address)
        formData.append("email",fields.email)
        formData.append("description",fields.description)

        
        formData.append("price",fields.price)
        
        API.postTestData(formData).then(res=>{
            setFields({fields:{title:'',email:'',address:'',image:'',description:'',price:''}})
            
            props.history.push("/")})
        
      }

      const handleFilechange=(event) =>{
        const file = event.target.files[0];
        
        setFields({...fields,image: file });
      }

    return(
        <div className="container">
            <div className="row justify-content-center">
                <form onSubmit={handleSubmit} className="sellerform mt-3" enctype="multipart/form-data">
                    <div className="form-group" >
                        <label>Title</label>
                        <input className="form-control" type="text"  name="title" value={fields.title} onChange={handleInputChange}/>
                    </div>
                    <div className="form-group" >
                        <label>Quote Price</label>
                        <input  className="form-control" type="Number" name="price" value={fields.price} onChange={handleInputChange}/>
                    </div>
                    <div className="form-group" >
                        <input  className="form-control" type="file" name="myImage" onChange={handleFilechange}/></div>
                    <div className="form-group" >
                        <label>Description</label>
                        <textarea  className="form-control" type="text" name="description" value={fields.description} onChange={handleInputChange}></textarea></div>
                    <div className="form-group" >
                        <label>Email</label>
                        <input  className="form-control" type="text"  name="email" value={fields.email} onChange={handleInputChange} /></div>
                    <div className="form-group" >
                        <label>Address</label>
                        <textarea className="form-control" type="text" name="address" value={fields.address} onChange={handleInputChange} /></div>
                    <button className="btn btn-seller m-2" disabled={!validateForm()} type="submit">Add Item</button>
                   
                </form>
            </div>
        </div>
    )

}
export default Seller