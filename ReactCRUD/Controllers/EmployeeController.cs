using System.Collections;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ReactCRUD.Pages;


namespace ReactCRUD.Controllers
{
    public class EmployeeController : Controller
    {
        EmployeeDataAccessLayer _objemployee = new EmployeeDataAccessLayer();

        //get all employee deets
        [HttpGet]
        [Route("api/Employee/Index")]
        public IEnumerable<Tblemployee> Index()
        {
            return _objemployee.GetAllEmployees();
        }

        //get specific employee deets
        [HttpGet]
        [Route("api/Employee/Details/{id}")]
        public Tblemployee Details(int id)
        {
            return _objemployee.GetEmployeeData(id);
        }
        
        [HttpPost]
        [Route("api/Employee/Create")]
        public int Create(Tblemployee employee)
        {
            return _objemployee.AddEmployee(employee);
        }

        [HttpPut]
        [Route("api/Employee/Edit")]
        public int Update(Tblemployee employee)
        {
            return _objemployee.UpdateEmployee(employee);
        }
        
        [HttpDelete]
        [Route("api/Employee/Delete/{id}")]
        public int Delete(int employeeId)
        {
            return _objemployee.DeleteEmployee(employeeId);
        }

        [HttpGet]
        [Route("api/Employee/GetCityList")]
        public IEnumerable<TblCities> Details()
        {
            return _objemployee.GetCities();
        }
    }
}