import React from 'react'
import { RouteComponentProps } from 'react-router'
import { Link, NavLink } from 'react-router-dom'

export class FetchEmployee extends React.Component {
    constructor(props) {
        super(props); 
        
        this.state = {
            empList: [], 
            loading: true
        };
        
        fetch('api/Employee/Index')
            .then(res => res.json())
            .then(data => {
                this.setState({empList: data, loading: false});
            })
    }
    
    handleDelete = id => {
        fetch(`api/Employee/Delete/${id}`, {
            method: 'delete'
        }).then(data => {
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
                        <tr key={emp.EmployeeId}>
                            <td>{emp.employeeId}</td>
                            <td>{emp.name}</td>
                            <td>{emp.gender}</td>
                            <td>{emp.department}</td>
                            <td>{emp.city}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

