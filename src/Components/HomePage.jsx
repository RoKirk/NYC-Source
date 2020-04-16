import React, { Component } from 'react';
import { Link } from "react-router-dom";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import { Icon } from 'react-icons-kit';

import { home } from 'react-icons-kit/icomoon/home';
import { group } from 'react-icons-kit/typicons/group'




class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            
            /*Javascript Land*/
            <div> 
            {/* JSX Land */}
                {console.log()}

                <h1>HomePage</h1>

                <Link to="/">Back to Landing</Link>

                <SideNav style={{ background: "rgb(59, 91, 110)", opacity:0.8}}
                    onSelect={(selected) => {
                        console.log(selected, "Here")
                        this.props.history.push(selected);
                        // Added code here for "onSelect" event.
                    }}
                >
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="/population">
                        <NavItem eventKey="/population">
                            <NavIcon>
                                <Icon size={36} icon={group}/>
                            </NavIcon>
                            <NavText>
                                Population
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts">
                            <NavIcon>
                                <Icon size={36} icon={home} />

                                {/* <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} /> */}
                            </NavIcon>
                            <NavText>
                                Homepage
            </NavText>
                            <NavItem eventKey="charts/linechart">
                                <NavText>
                                    Line Chart
                </NavText>
                            </NavItem>
                            <NavItem eventKey="charts/barchart">
                                <NavText>
                                    Bar Chart
                </NavText>
                            </NavItem>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>



            </div>


        );
    }
}

export default HomePage;
