import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import NavBar from '../Shared/NavBar';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col  from 'react-bootstrap/Col'


class PopulationView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // zip: [], (Initial State value for map render)
            zip: null,
            zip_code: "",
        };
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        });
        console.log(event.target.value)
    };

    handleClick = async (e) => {
        e.preventDefault();
        let response = await axios.get(`https://data.cityofnewyork.us/resource/6bic-qvek.json?jurisdiction_name=${this.state.zip_code}`);
        let data = response.data;
        this.setState({ zip: data })
        this.setState({zip_code: ""})
        console.log(response, "This is the Axios call.")
        console.log(data)
        console.log(response.data[0].jurisdiction_name, "This is where the data I want lives.")
    }

    render() {

        // console.log(this.state.zip_code)

        return (

            <div className="PopulationView">

                <h1 className="heading">Population</h1>

                <aside>
                    <NavBar />
                </aside>

                <Table className="table" responsive="sm" striped bordered hover>
                    <thead className="table-bordered">
                        <tr>
                            <th>Zip: {this.state.zip && this.state.zip[0].jurisdiction_name}</th>
                            <th>Percentage</th>
                        </tr>
                    </thead>
                    <tbody className="table-bordered">
                        <tr>
                            <td>Male</td>
                            <td>{this.state.zip ? `${this.state.zip[0].percent_male * 100}%` : "0%"}</td>
                            {/* Above: If(?) this.state.zip is true... => `${this.state....(so on..), else(:) => "0%"}` */}
                            {/* <td>Thornton</td> */}
                        </tr>
                        <tr>
                            <td>Female</td>
                            <td>{this.state.zip ? `${this.state.zip[0].percent_female * 100}%` : "0%"}</td>
                            {/* <td colSpan="2">Larry the Bird</td> */}
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>
                                {this.state.zip ? `${this.state.zip[0].percent_gender_total}%` : "0%"}
                            </td>
                        </tr>
                    </tbody>
                </Table>

                {/* // Explicit return requires "return" key => "{}", Implicit "()" does not. */}
                
                {/* Render using a map() */}
                {/* {this.state.zip.map((area, index) => {
                    return (
                        <div key={index}>

                            *Div and page content here.*
            
                            <h6>{area.jurisdiction_name}</h6>

                        </div>
                    )
                })} */}

                {/* {this.state.zip.map(() => (
                   <div></div> 
                ))} */}

                <div>

                    <form onSubmit={this.handleClick}>
                        <input
                            className="input"
                            placeholder="Zip Code"
                            name="zip_code"
                            onChange={this.handleChange}
                            value={this.state.zip_code}
                            padding="10px">
                        </input>
                    </form>

                </div>

                <div>
                    <Button onClick={this.handleClick} className="btn-secondary">Submit</Button>{' '}
                </div>

                <Link to="/">Back to Landing</Link>

            </div>

        );
    }
}

export default PopulationView;

