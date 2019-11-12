import React from 'react'
import {addEmployeeApi, editEmployeeApi, getCityListApi, getEmployeeByIdApi} from "../api/employeeApi";
import Redirect from "react-router-dom/Redirect";

export class AddEmployee extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            title: '',
            loading: true,
            cityList: [],
            empData: {
                name: '',
                gender: '',
                department: '',
                city: ''
            },
            redirect: false
        };
    }
    
    componentDidMount() { 
        this.editEmployeeCheck();
        this.getCityListSetToState()
    }
    
    createNewEmployeeInitialState = () => {
        this.setState({ title: "Create", loading: false })
    };
    
    getCityListSetToState = () => {
        getCityListApi()
            .then(res => {
                this.setState({ cityList: res })
            })
    };
    
    editEmployeeCheck = () => {
        let empId = this.props.match.params["empid"];
        if (empId > 0 || empId !== undefined) {
            getEmployeeByIdApi(empId)
                .then(res => {
                    this.setState({ title: 'Edit', empData: res, loading: false })
                })
        } else {
            this.createNewEmployeeInitialState();
        }
    }
    
    handleChange = e => {
        const EmployeeStateMap = () => {
            Object.keys(this.state.empData).map(i => {
                if (i === e.target.name) {
                   return this.state.empData[i] = e.target.value
                } else {
                   return this.state.empData[i] = this.state.empData[i]
                }
            });
            return this.state.empData
        };
        this.setState(EmployeeStateMap());
    };
    
    handleSave = e => {
        e.preventDefault();
        if(this.state.empData.employeeId) {
            editEmployeeApi(this.state.empData)
                .then(this.setState({ redirect: true }))
        } else {
            addEmployeeApi(this.state.empData)
                .then(this.setState( { redirect: true }))
        }
    };
    
    handleCancel = () => {
        this.props.history.push("/");
    };

    renderCreateForm = () => {
        return (
            <form onSubmit={this.handleSave}>
                <div className="form-group row" >
                    <input type="hidden" name="employeeId" value={this.state.empData.hasOwnProperty('employeeId') ? this.state.employeeId : null} />
                </div>
                < div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="Name">Name</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="name" defaultValue={this.state.empData.name} onChange={this.handleChange} required />
                    </div>
                </div >
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="Gender">Gender</label>
                    <div className="col-md-4">
                        <select className="form-control" data-val="true" name="gender" defaultValue={this.state.empData.gender} onChange={this.handleChange} required>
                            <option value="">-- Select Gender --</option>
                            <option value={this.state.empData.gender}>{this.state.empData.gender}</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div >
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="Department" >Department</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="department" defaultValue={this.state.empData.department} onChange={this.handleChange} required />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="City">City</label>
                    <div className="col-md-4">
                        <select className="form-control" data-val="true" name="city" defaultValue={this.state.empData.city} onChange={this.handleChange} required>
                            <option value="">-- Select City --</option>
                            {this.state.cityList.map(city =>
                                <option key={city.cityId} value={city.cityName}>{city.cityName}</option>
                            )}
                        </select>
                    </div>
                </div >
                <div className="form-group">
                    <button type="submit" className="btn btn-default">Save</button>
                    <button className="btn" onClick={this.handleCancel}>Cancel</button>
                </div >
            </form>
        )
    };
    
    render() {
        let contents = this.state.loading ? <p><em>Loading...</em></p> : this.renderCreateForm(this.state.cityList);
        return (
            <React.Fragment>
                {this.state.redirect ? <Redirect to={"/"} /> : <React.Fragment/>}
                <h1>{this.state.title}</h1>
                <h3>Employee</h3>
                <hr />
                {contents}
            </React.Fragment>
        )
    }
}