import issueData from './issueData'
import axios from 'axios';


export default class IssueApi {
    constructor(){
        this.issues = [];
    }
    static getAllIssue (cb) {
        axios.get('http://localhost:8088')
            .then(response => {
                this.issues = response.data.issue;
                cb(response.data.issue)
            })
			.catch(error => {throw error});
        //return issueData.issues;
    }
    static saveApi (issue,cb) {
        //issue.id = Math.max(...issueData.issues.map(issue => issue.id)) + 1;
        axios.post('http://localhost:8088/create',issue)
        .then(response=>{console.log(response)
            cb()})
        .catch(error=>console.log(error))
        //issueData.issues.push(issue);
        //console.log(issueData.issues);
    }
    static getIssueApi(id){
        // axios.get('http://localhost:8088')
        //     .then(response => {
        //         cb(response.data.issue)
        //     })
		// 	.catch(error => {throw error});
        return this.issues.find(issue => issue.id === id)
    }
    static updateIssueApi(issue,cb){
        // issueData.issues = issueData.issues.map(item => {
        //     if(issue.id === item.id)
        //     {
        //          return issue;
        //     }
        //     else
        //         return item;
        // })
        //console.log('2')
        axios.put('http://localhost:8088/update/' + issue.id, issue)
        .then(response=>{console.log(response)
        cb()})
        .catch(error=>console.log(error))
        //console.log(issue)
        //console.log(issueData.issues)
    }
    static deleteIssueApi(id,cb){
        // id = parseInt(id)
        // console.log(typeof(id))
        // issueData.issues = issueData.issues.filter(issue => issue.id !== id)
         axios.delete('http://localhost:8088/delete/' + id)
         .then(response=>{cb()});

    }
} 