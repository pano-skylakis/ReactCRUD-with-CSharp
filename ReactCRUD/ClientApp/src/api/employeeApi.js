import request from 'superagent'

export function getEmployeeListApi() {
    return request.get('api/Employee/Index')
        .then(res => res.body)
}

export function getEmployeeByIdApi(id) {
    return request.get(`api/Employee/Details/${id}`)
        .then(res => res.body)
}

export function editEmployeeApi(employeeData) {
    return request.put('api/Employee/Edit')
        .send(employeeData)
        .then(res => res.ok)
        .catch(err => err.badRequest)
}

export function addEmployeeApi(employeeData) {
        return request.post('api/Employee/Create')
            .send(employeeData)
            .then(res => res.ok)
}

export function getCityListApi() {
    return request.get('api/Employee/GetCityList')
        .then(res => res.body)
}

export function deleteEmployeeApi(id) {
    return request.delete(`api/Employee/Delete/${id}`)
        .then(res => res.ok)
        .catch(err => err.badRequest)
}

