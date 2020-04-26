import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import {
    FaPlusSquare
  } from "react-icons/fa";

class ProductBlockchain extends Component { 
    constructor(props) {
        super(props);   

        this.state = {
            product: []
        }
    }
    
    componentDidMount(){
        axios.get("http://3.23.89.106:3001/productBlockchain")
            .then( (response) => {
                    if(response.status === 200){
                        console.log("success!")
                        this.setState({
                            product: response.data
                        });
                    }
            })
            .catch( err => {
                console.log("err: ", err)
            })
    }

    render() {

        const data = this.state.product;
        console.log("data: ", data);
        if(data !== undefined){
        return (
            <div className="conatainer">
                <div>
                    <Link
                        to="/ownerdashboard"
                        className="btn btn-light float-right"
                    >
                        <FaPlusSquare></FaPlusSquare> Dashboard
                    </Link>  
                </div>
                <div className="container">
                    <h1>Product Blockchain</h1>
                </div>
                <div>
                { data.map( (item, index)=>
                <div className="row" style={{margin:"15px"}}>
                    <div class="card bg-light" style={{width : "100%"}}>
                        <div class="card-header">Blockchain ID: {item._id}</div>
                        <div class="card-body">
                            <h5 class="card-text"><b>Resource Owner Name: </b> {item.houseOwnerName}</h5>
                            <h5 class="card-text"><b>Resource Location: </b> {item.houseLocation}</h5>
                            <h5 class="card-text"><b>Resource Name: </b>{item.houseName}</h5>
                            <h5 class="card-text"><b>Resource Price: </b>$ {item.housePrice}</h5>
                        </div>
                    </div>
                 </div>   
                )}
                </div>
            </div>
        );
        }else{
            return(
                <div className="conatainer">
                <div className="row">
                    <Link
                        to="/ownerdashboard"
                        className="btn btn-light float-right"
                    >
                        <FaPlusSquare></FaPlusSquare> Dashboard
                    </Link>  
                </div>
                <div className="row">
                    No products
                </div>
            </div>
            )
        }
    }
}

export default ProductBlockchain;