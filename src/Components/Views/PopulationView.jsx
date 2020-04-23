import React from 'react';
import NavBar from '../Shared/NavBar';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'


export const PopulationView = () => {
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
                        <td>Jacob</td>
                        <td>Thornton</td>
                        {/* <td colSpan="2">Larry the Bird</td> */}
                    </tr>
                </tbody>
            </Table>

            <Link to="/">Back to Landing</Link>

           
        </div>
    )
}

export default PopulationView;

