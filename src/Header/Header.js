import React  from 'react';
import './Header.css'
import { Link } from 'react-router-dom';


export default class Header extends React.Component {
   
    render(){
        return (
            <div className="header">
                <span className="viewissue"><Link to="/">VIEW ISSUE</Link></span>
                <span className="addissue"><Link to="/addIssue">ADD ISSUE</Link></span>
            </div>
        );
    }
}