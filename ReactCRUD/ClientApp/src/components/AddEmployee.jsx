import React from 'react'
import { getCityListApi } from "../api/employeeApi";

export class AddEmployee extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            title: '',
            loading: true,
            cityList: [],
            empData: []
        };
    }
    
    componentDidMount() {
        getCityListApi()
            .then(res => {
                this.setState({ cityList: res })
            })
    }

    renderCreateForm = () => {
        return (
            <form>
                <div className="form-group row" >
                    <input type="hidden" name="employeeId" value={this.state.empData.employeeId} />
                </div>
                < div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="Name">Name</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="name" defaultValue={this.state.empData.name} required />
                    </div>
                </div >
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="Gender">Gender</label>
                    <div className="col-md-4">
                        <select className="form-control" data-val="true" name="gender" defaultValue={this.state.empData.gender} required>
                            <option value="">-- Select Gender --</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div >
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="Department" >Department</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="Department" defaultValue={this.state.empData.department} required />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="City">City</label>
                    <div className="col-md-4">
                        <select className="form-control" data-val="true" name="City" defaultValue={this.state.empData.city} required>
                            <option value="">-- Select City --</option>
                            {this.state.cityList.map(city =>
                                <option key={city.cityId} value={city.cityName}>{city.cityName}</option>
                            )}
                        </select>
                    </div>
                </div >
                <div className="form-group">
                    <button type="submit" className="btn btn-default">Save</button>
                    <button className="btn">Cancel</button>
                </div >
            </form>
        )
    }
    
    render() {
        let contents = this.state.loading ? <p><em>Loading...</em></p> : this.renderCreateForm(this.state.cityList);
        return (
            <React.Fragment>
                <h1>{this.state.title}</h1>
                <h3>Employee</h3>
                <hr />
                {contents}
            </React.Fragment>
        )
    }
}