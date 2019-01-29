import React from 'react'
import Issue from './Issue'
import './Issue.css'


export default class IssueList extends React.Component {
  
    render(){
        
        
        
        let issueNodes = this.props.issues.map(issue => {
            if((!this.props.searchID || this.props.searchID==issue.id)&&
            (!this.props.searchServerity || this.props.searchServerity===issue.serverity)&&
            (!this.props.searchStatus || this.props.searchStatus===issue.status)&&
            (!this.props.searchCreateddate || this.props.searchCreateddate===issue.createdDate)&&
            (!this.props.searchResolveddate || this.props.searchResolveddate===issue.resolvedDate)){
                return (
                    <Issue key={issue.id} id={issue.id} status={issue.status} serverity={issue.serverity}
                    createdDate={issue.createdDate} resolvedDate={issue.resolvedDate} 
                    description={issue.description} 
                    delete={this.props.Delete} 
                    deleteMany={this.props.DeleteManyArray}
                    customizeID={this.props.customizeID}
                    customizeSTATUS={this.props.customizeSTATUS}
                    customizeSERVERITY={this.props.customizeSERVERITY}
                    customizeCREATED_DATE={this.props.customizeCREATED_DATE}
                    customizeRESOLVED_DATE={this.props.customizeRESOLVED_DATE}
                    customizeDescription={this.props.customizeDescription}
                    >
                    </Issue>
                )
            }
           
        });
       // var a=true;
        return(
          <div className="issuetable">
          <table>
              <thead>
              <tr className="tableheader">
                    <td><button onClick={this.props.deleteMany}>DELETE</button></td>
                  <td>{this.props.customizeID?"ID":""}</td>
                  <td>{this.props.customizeSTATUS?"STATUS":""}</td>
                  <td >{this.props.customizeSERVERITY?"SERVERITY":""}</td>
                  <td>{this.props.customizeCREATED_DATE?"CREATED-DATE":""}</td>
                  <td>{this.props.customizeRESOLVED_DATE?"RESOLVED-DATE":""}</td>
                  <td>{this.props.customizeDescription?"DESCRIPTION":""}</td>

              </tr>
              </thead>
              <tbody>
              {issueNodes}
              </tbody>
          </table>
          </div>  
        );
    }
}