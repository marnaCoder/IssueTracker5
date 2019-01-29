import React from 'react';
import './Issue.css'
import { Link } from 'react-router-dom';

 
export default class Issue extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         delete:false
    //     }
    // }
    
    render() {
        const path = `/AddIssue/${this.props.id}`;
        const pathDelete = `/Delete/${this.props.id}`;
        return(
            <tr>
        <td><input type="checkbox"  onChange={this.props.deleteMany.bind(this,this.props.id)} defaultChecked={false}/></td>
          <td>{this.props.customizeID?this.props.id:""}</td>
          <td>{this.props.customizeSTATUS?this.props.status:""}</td>
          <td>{this.props.customizeSERVERITY?this.props.serverity:""}</td>
          <td>{this.props.customizeCREATED_DATE?this.props.createdDate:""}</td>
          <td>{this.props.customizeRESOLVED_DATE?this.props.resolvedDate:""}</td>
          <td>{this.props.customizeDescription?this.props.description:""}</td>
          <td><Link to={path}>UPDATE</Link></td>
          {/* <td onClick={this.props.update.bind(this,this.props.id)}>UPDATE</td> */}
          <td onClick={this.props.delete.bind(this,this.props.id)} className="delete">DELETE</td>

            
        </tr>
        );
    }
}