import React from 'react'
import { Link } from 'react-router-dom'
import {deleteEmployeeApi, getEmployeeListApi} from "../api/employeeApi";

export class FetchEmployee extends React.Component {
    constructor(props) {
        super(props); 
        
        this.state = {
            empList: [], 
            loading: true
        };
    }
    
    componentDidMount() {
        this.refreshList()
    }
    
    refreshList = () => {
        getEmployeeListApi()
            .then(res => {
                this.setState({ empList: res, loading: false })
            })
    };

    handleDelete = id => {
        deleteEmployeeApi(id)
            .then(data => {
                console.log('jsx: ' + data);
                this.setState({
                    empList: this.state.empList.filter(rec => {
                        return (rec.employeeId !== id)
                })
            })
        })
    };
    
    handleEdit = id => {
        this.props.history.push(`/employee/edit/${id}`);
    };
    
    render() {
        let contents = this.state.loading ? <p><em>Loading...</em></p> : this.renderEmployeeTable(this.state.empList);
        return(
            <React.Fragment>
                <h1>Employee Data</h1>
                <p>
                    This component demonstrates fetching Employee data from the server
                </p>
                <p>
                    <Link to="/addemployee">Create New</Link>
                </p>
                {contents}
            </React.Fragment>
        )
    }
    
    renderEmployeeTable = () => {
        return(
            <React.Fragment>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>EmployeeId</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Department</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.empList.map(emp => 
                        <tr key={emp.employeeId}>
                            <td>{emp.employeeId}</td>
                            <td>{emp.name}</td>
                            <td>{emp.gender}</td>
                            <td>{emp.department}</td>
                            <td>{emp.city}</td>
                            <td>
                                <a className="action" onClick={(id) => this.handleEdit(emp.employeeId)}>Edit</a>  |
                                <a className="action" onClick={(id) => this.handleDelete(emp.employeeId)}>Delete</a>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

