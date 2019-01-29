import React from 'react';
import IssueList from './IssueList'
import IssueApi from '../Data/issueApi'
import './Issue.css'


export default class AllIssueListPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            issues:[],
            id:true,
            status:true,
            serverity:true,
            createdDate:true,
            resolvedDate:true,
            description:true,
            searchID:false,
            searchServerity:false,
            searchStatus:false,
            searchCreateddate:false,
            searchResolveddate:false,
            deleteId:[]


        }
                this.delete = this.delete.bind(this)
                this.customizeID = this.customizeID.bind(this)
                this.customizeSTATUS = this.customizeSTATUS.bind(this)
                this.customizeSERVERITY = this.customizeSERVERITY.bind(this)
                this.customizeCREATED_DATE = this.customizeCREATED_DATE.bind(this)
                this.customizeRESOLVED_DATE = this.customizeRESOLVED_DATE.bind(this)
                this.customizeDescription = this.customizeDescription.bind(this)
                this.filter = this.filter.bind(this)
                this.deleteManyArray = this.deleteManyArray.bind(this)
                this.deleteMany = this.deleteMany.bind(this)
        
    }
    componentDidMount(){
        //this.setState({ issues:IssueApi.getAllIssue()})
        IssueApi.getAllIssue(data => {this.setState({ issues: data})})
        
        
    }
    customizeID() {
         this.setState({id: !this.state.id})
    }
    customizeSTATUS() {
        this.setState({status: !this.state.status})
    }
    customizeSERVERITY() {
        this.setState({serverity: !this.state.serverity})
    }
    customizeCREATED_DATE() {
    this.setState({createdDate: !this.state.createdDate})
    }
    customizeRESOLVED_DATE() {
    this.setState({resolvedDate: !this.state.resolvedDate})
    }
    customizeDescription() {
        this.setState({description: !this.state.description})
        }
    delete(id){
        IssueApi.deleteIssueApi(id,() => {   IssueApi.getAllIssue(data => {this.setState({ issues: data})}) });
        //this.setState({ issues:IssueApi.getAllIssue()});

    }
    deleteManyArray(deleteId){
        let array=this.state.deleteId;
        if(array.indexOf(deleteId)!==-1){
            array=array.filter((item)=>item!==deleteId)
           
        }
        else{
            array.push(deleteId)
            this.setState({deleteId:array})
        }
    }
    deleteMany(){
        for(let i=0;i<this.state.deleteId.length;i++){
            this.delete(this.state.deleteId[i])
        }
    }
    filter(){

        if(this.refs.searchid.value)
        {
            this.setState({searchID: this.refs.searchid.value})
        }
        else
        {
            this.setState({searchID: false})

        }
        if(this.refs.searchServerity.value!=="none")
        {
            this.setState({searchServerity: this.refs.searchServerity.value})
        }
        else
        {
            this.setState({searchServerity: false})

        }
        if(this.refs.searchStatus.value!=="none")
        {
            this.setState({searchStatus: this.refs.searchStatus.value})
        }
        else
        {
            this.setState({searchStatus: false})

        }
        if(this.refs.searchCreateddate.value)
        {
            this.setState({searchCreateddate: this.refs.searchCreateddate.value})
        }
        else
        {
            this.setState({searchCreateddate: false})

        }if(this.refs.searchResolveddate.value)
        {
            this.setState({searchResolveddate: this.refs.searchResolveddate.value})
        }
        else
        {
            this.setState({searchResolveddate: false})

        }

       
    }
    
    render(){

        return (
            <div>
                <div className="search">
                <label htmlFor="searchid">ID</label>
                        <input type="text"  name="searchid"ref="searchid"></input>
                        <label htmlFor="searchServerity">Serverity</label>
                    <select name="searchServerity" ref="searchServerity" >
                        <option value="none">None</option>
                        <option value="Minor">Minor</option>
                        <option value="Major">Major</option>
                        <option value="Critical">Critical</option>
                    </select>
                    <label htmlFor="searchStatus">Status</label>
                     <select  name="searchStatus"  ref="searchStatus"  >
                         <option value="none">None</option>
                        <option value="Open">Open</option>
                        <option value="In-progress">In-progress</option>
                        <option value="Closed">Closed</option>
                    </select><br/><br/>
                    <label htmlFor="searchCreateddate">CreatedDate</label>
                    <input type="date"  name="searchCreateddate"  ref="searchCreateddate" />
                    <label htmlFor="searchResolveddate">ResolvedDate</label>
                    <input type="date"  name="searchResolveddate"  ref="searchResolveddate" /><br/><br/>
                        <button onClick={this.filter}>Filter</button>
                </div>
                    <div className="customize">
                    <label htmlFor="customizeID">ID:</label>
                        <input type="checkbox" name="customizeID" onChange={this.customizeID} defaultChecked={this.state.id}/>
                        <label htmlFor="customizeSTATUS">STATUS:</label>
                        <input type="checkbox" name="customizeSTATUS" onChange={this.customizeSTATUS} defaultChecked={this.state.status}/>
                        <label htmlFor="customizeSERVERITY">SERVERITY:</label>
                        <input type="checkbox" name="customizeSERVERITY" onChange={this.customizeSERVERITY} defaultChecked={this.state.serverity}/><br/><br/>
                        <label htmlFor="customizeCREATED_DATE">CREATED-DATE:</label>
                        <input type="checkbox" name="customizeCREATED_DATE" onChange={this.customizeCREATED_DATE} defaultChecked={this.state.createdDate}/>
                        <label htmlFor="customizeRESOLVED_DATE">RESOLVED-DATE:</label>
                        <input type="checkbox" name="customizeRESOLVED_DATE" onChange={this.customizeRESOLVED_DATE} defaultChecked={this.state.resolvedDate}/>
                        <label htmlFor="customizeDescription">DESCRIPTION</label>
                        <input type="checkbox" name="customizeDescription" onChange={this.customizeDescription} defaultChecked={this.state.description}/>
                    </div>
                        <div className="table">
                        <IssueList issues={this.state.issues}  customizeID={this.state.id} 
                        customizeSTATUS={this.state.status}
                        customizeSERVERITY={this.state.serverity}
                        customizeCREATED_DATE={this.state.createdDate}
                        customizeRESOLVED_DATE={this.state.resolvedDate}
                        customizeDescription={this.state.description}
                        Delete={this.delete}
                        deleteMany={this.deleteMany}
                        searchID={this.state.searchID}
                        searchServerity={this.state.searchServerity}
                        searchStatus={this.state.searchStatus}
                        searchCreateddate={this.state.searchCreateddate}
                        searchResolveddate={this.state.searchResolveddate}
                        DeleteManyArray={this.deleteManyArray}

                        />
                        </div>
                        
            </div>
        );
    }
}