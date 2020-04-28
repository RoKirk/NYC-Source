import React, { Component } from 'react';
import NavBar from '../Shared/NavBar';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'


class PopulationView extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (

            <div className="PopulationView">

                <h1 className="heading">Population</h1>

                <aside>
                    <NavBar />
                </aside>

                <Table className="table" responsive="sm" striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>George</td>
                            <td>Clayton</td>
                            {/* <td colSpan="2">Larry the Bird</td> */}
                        </tr>
                    </tbody>
                </Table>

                <Link to="/">Back to Landing</Link>

            </div>

        );
    }
}

export default PopulationView;

