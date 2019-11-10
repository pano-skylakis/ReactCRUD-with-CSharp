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
        masterContext db = new masterContext();

        public IEnumerable<Tblemployee> GetAllEmployees()
        {
            return db.Tblemployee.ToList();
        }

        public int AddEmployee(Tblemployee employee)
        {
            db.Tblemployee.Add(employee);
            db.SaveChanges();
            return 1;
        }

        public int UpdateEmployee(Tblemployee employee)
        {
            db.Entry(employee).State = EntityState.Modified;
            db.SaveChanges();
            return 1;
        }

        public Tblemployee GetEmployeeData(int id)
        {
            Tblemployee employee = db.Tblemployee.Find(id);
            return employee;
        }

        public int DeleteEmployee(int id)
        {
            Tblemployee employee = db.Tblemployee.Find(id);
            Console.WriteLine(employee);
            db.Tblemployee.Remove(employee);
            db.SaveChanges();
            return 1;
        }

        public List<TblCities> GetCities()
        {
            List<TblCities> lstCity = new List<TblCities>();
            lstCity = (from CityList in db.TblCities select CityList).ToList();
            return lstCity;
        }
    }
}