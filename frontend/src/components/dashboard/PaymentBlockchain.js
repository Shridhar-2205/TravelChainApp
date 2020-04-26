import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import {
    FaPlusSquare
  } from "react-icons/fa";

class PaymentBlockchain extends Component { 
    constructor(props) {
        super(props);   

        this.state = {
            payment: []
        }
    }
    
    componentDidMount(){
        axios.get("http://3.23.89.106:3001/paymentBlockchain")
            .then( (response) => {
                    if(response.status === 200){
                        console.log("success!")
                        this.setState({
                            payment: response.data
                        });
                    }
            })
            .catch( err => {
                console.log("err: ", err)
            })
    }

    render() {

        const data = this.state.payment;
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
                    <h1>Booking Blockchain</h1>
                </div>
                <div>
                { data.map( (item, index)=>
                <div className="row" style={{margin:"15px"}}>
                    <div class="card bg-light" style={{width : "100%"}}>
                        <div class="card-header">Booking ID: {item.aa}</div>
                        <div class="card-body">
                            <h5 class="card-text"><b>Name: </b> {item.name}</h5>
                            <h5 class="card-text"><b>Phone: </b> {item.phone}</h5>
                            <h5 class="card-text"><b>Owner Name: </b>{item.bb}</h5>
                            <h5 class="card-text"><b>Resource Name: </b>{item.cc}</h5>
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

export default PaymentBlockchain;