import React from 'react';
import IssueApi from '../Data/issueApi'

export default class AddIssue extends React.Component {
    constructor(props) {
        super(props);
        this.saveIssue = this.saveIssue.bind(this)
        this.updateId = 0;
        this.state={
            issue:{}
        }
        this.issue = {};
        if(this.props.match.params.id)
        {
            this.updateId = parseInt(this.props.match.params.id);
            this.issue = IssueApi.getIssueApi(this.updateId)
           
           
        }
        else
        {
            this.updateId = 0;
        }
    }
    saveIssue(event){
        event.preventDefault();
        let issue = {};
        issue.description = this.refs.description.value;
        issue.status = this.refs.status.value;
        issue.serverity = this.refs.serverity.value;
        issue.createdDate = this.refs.createdDate.value;
        issue.resolvedDate = this.refs.resolvedDate.value;
        if(this.updateId === 0)
        IssueApi.saveApi(issue,() => {this.props.history.push('/');});
        else{
            console.log('else')
            issue.id = this.issue.id;
            IssueApi.updateIssueApi(issue,() => {this.props.history.push('/');});

        }
        

    }
  
  



    render(){
        if(this.updateId === 0)
        {
            return (
                <form>
                    <label htmlFor="description">Enter a description:</label><br/>
                    <textarea rows="8" name="description" ref="description"></textarea><br/><br/>
                    <label htmlFor="serverity">serverity</label>
                    <select name="serverity" ref="serverity">
                        <option value="Minor">Minor</option>
                        <option value="Major">Major</option>
                        <option value="Critical">Critical</option>
                    </select>
                    <label htmlFor="status">status:</label>
                     <select  name="status"  ref="status">
                        <option value="Open">Open</option>
                        <option value="In-progress">In-progress</option>
                        <option value="Closed">Closed</option>
                    </select><br/><br/>
                    <label htmlFor="createdDate">createdDate:</label>
                    <input type="date"  name="createdDate"  ref="createdDate"/>
                    <label htmlFor="resolvedDate">resolvedDate:</label>
                    <input type="date"  name="resolvedDate"  ref="resolvedDate"/><br/><br/>
                    <input type="submit" value="Save" onClick={this.saveIssue}/>
                </form>
            );
           
        }
        else {
            return (
                <form>
                    <label className="l" htmlFor="description">Enter a description:</label><br/>
                    <textarea rows="8" name="description" ref="description" defaultValue={this.issue.description} ></textarea><br/><br/>
                    <label htmlFor="serverity">serverity</label>
                    <select name="serverity" ref="serverity" defaultValue={this.issue.serverity}>
                        <option value="Minor">Minor</option>
                        <option value="Major">Major</option>
                        <option value="Critical">Critical</option>
                    </select>
                    <label htmlFor="status">status:</label>
                     <select  name="status"  ref="status"  defaultValue={this.issue.status}>
                        <option value="Open">Open</option>
                        <option value="In-progress">In-progress</option>
                        <option value="Closed">Closed</option>
                    </select><br/><br/>
                    <label htmlFor="createdDate">createdDate:</label>
                    <input type="date"  name="createdDate"  ref="createdDate"  defaultValue={this.issue.createdDate}/>
                    <label htmlFor="resolvedDate">resolvedDate:</label>
                    <input type="date"  name="resolvedDate"  ref="resolvedDate"  defaultValue={this.issue.resolvedDate}/><br/><br/>
                    <input type="submit" value="Save" onClick={this.saveIssue}/>
                </form>
            );
        }

    }
}