import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import NavBar from '../Shared/NavBar';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';



class PopulationView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zip: [],
        };
    }

    // getData = async () => {
    //     let response = await axios.get("https://data.cityofnewyork.us/resource/6bic-qvek.json?jurisdiction_name=");
    //     let { data } = response.data;
    //     this.setState({ zip: data })
    //     console.log(response, "This is the Axios call")
    // };

    handleClick = async () => {
        let response = await axios.get("https://data.cityofnewyork.us/resource/6bic-qvek.json?jurisdiction_name=11203");
        let { data } = response.data;
        this.setState({ zip: data })
        console.log(response, "This is the Axios call")
        console.log(response.data[0].jurisdiction_name, "This is the Axios call also")


        this.setState({ buttonState: 'loading' })
        // make asynchronous call
        setTimeout(() => {
            this.setState({ buttonState: 'success' })
        }, 3000)
    }

    // componentDidMount() {
    //     this.getData()
    //     console.log(this.state.zip, "Over Here")
    // }

    render() {
        return (

            <div className="PopulationView">

                <h1 className="heading">Population</h1>

                <aside>
                    <NavBar />
                </aside>

                <Table className="table" responsive="sm" striped bordered hover>
                    <thead className="table-bordered">
                        <tr>
                            <th>Zip: ?????</th>
                            {console.log()}
                            <th>Percentage</th>
                            {/* <th>Last Name</th> */}
                        </tr>
                    </thead>
                    <tbody className="table-bordered">
                        {/* <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                        </tr> */}
                        <tr>
                            <td>Male</td>
                            <td>50% {this.response}</td>
                            {/* <td>Thornton</td> */}
                        </tr>
                        <tr>
                            <td>Female</td>
                            <td>50%</td>
                            {/* <td>Clayton</td> */}
                            {/* <td colSpan="2">Larry the Bird</td> */}
                        </tr>
                    </tbody>
                </Table>

                <div>
                    <Button onClick={this.handleClick} className="btn-secondary">Submit</Button>{' '}
                </div>

                <Link to="/">Back to Landing</Link>

            </div>

        );
    }
}

export default PopulationView;

