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
      API.getAllItems(search).then(res=>{//console.log(res)
        if(res.data)
            this.setState({result:res.data})
          else{
            this.setState({result: "no product found"});
          }})
          .catch(err=>console.log(err))
    }

    renderAllSearchedItems()
    {
      
      return(this.state.result.map(elem=>
        <div className="card seachcard mt-4">
          <div className="row">
              <div className="col-sm-3">
                  <img src={`/api/new/file/${elem.fileID}`} 
                    className="imgTumbnail" alt=""></img>
              </div>
              <div className="col-sm-8">
                <a className="mt-4 ml-4 itemLink" href={`/displayItem/${elem.fileID}`} alt=""><h4>{elem.title} : {elem.description}</h4></a><hr/>
                <p className="ml-4"> Description : {elem.description}</p>
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