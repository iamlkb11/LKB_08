/**
 *Interface
 */
/**
 *Generic Classes
 */
var Employee = (function () {
    function Employee() {
        this.employeeDetails = [];
    }
    return Employee;
}());
/**
 *creating data
 */
var firstData = { fullName: "Lokesh Bhardwaj" };
var secondData = { empId: 11234, age: 21 };
/**
 *creating instance of class
 */
var empName = new Employee();
var empInfo = new Employee();
/**
 *pushing the value to class
 */
empName.employeeDetails.push(firstData);
empInfo.employeeDetails.push(secondData);
/**
 *checking the value has passed to class or not
 */
console.log(empName.employeeDetails);
console.log(empInfo.employeeDetails);