import React from 'react'
import API from '../../utils/API'
import "./Search.css"

class Search extends React.Component{

    state={
        search:"",
        result:[]
    }

    componentDidMount(){

      let search = this.props.match.params.name
      this.setState({search:search})
      if(search){
        API.getAllItems(search).then(res=>{//console.log(res)
          if(res.data)
              this.setState({result:res.data})
            else{
              this.setState({result: "no product found"});
            }})
            .catch(err=>console.log(err))}
      else{
        API.getLatestItems().then(res =>{
          if(res.data)
              this.setState({result:res.data})
            else{
              this.setState({result: "no product found"});
            }})
            .catch(err=>console.log(err))
        }
            

    }

    renderAllSearchedItems()
    {
      
      return(this.state.result.map(elem=>
        <div className="card seachcard mt-2 mb-2">
          <div className="row">
              <div className="col-md-3 col">
                  <img src={`/api/new/file/${elem.fileID}`} 
                    className="imgTumbnail" alt=""></img>
              </div>
              <div className="col-md-8 col">
                <a className="mt-4 ml-4 itemLink" href={`/displayItem/${elem.fileID}`} alt=""><h5>{elem.title}</h5></a>
                <p> Description : {elem.description}</p>
              </div>
            </div>
        </div>
      ))
    }


    render() {

        return (
          <div className="container">
              <div className="row mt-4">
                {this.state.result.length>0 ?
                (this.renderAllSearchedItems())
                :
                (<h3>{`No product found for ' ${this.state.search} ' `}</h3>)}
              </div>
          </div>)
        }

}

export default Search