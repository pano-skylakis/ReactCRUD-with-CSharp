using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace ReactCRUD.Pages
{
    public class EmployeeDataAccessLayer
    {
        /*myTestDBContext db = new myTestDBContext();

        public IEnumerable<TblEmployee> GetAllEmployees()
        {
            return db.TblEmployee.ToList();
        }

        public int AddEmployee(TblEmployee employee)
        {
            db.TblEmployee.Add(employee);
            db.SaveChanges();
            return 1;
        }

        public int UpdateEmployee(TblEmployee employee)
        {
            db.Entry(employee).State = EntityState.Modified;
            db.SaveChanges();
            return 1;
        }

        public TblEmployee GetEmployeeData(int id)
        {
            TblEmployee employee = db.TblEmployee.Find(id);
            return employee;
        }

        public int DeleteEmployee(int id)
        {
            TblEmployee employee = db.TblEmployee.Find(id);
            db.TblEmployee.Remove(employee);
            db.SaveChanges();
            return 1;
        }

        public List<TblCities> GetCities()
        {
            List<TblCities> lstCity = new List<TblCities>();
            lstCity = (from CityList in db.TblCities select CityList).ToList();
            return lstCity;
        }*/
    }
}