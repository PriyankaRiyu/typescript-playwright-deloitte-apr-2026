import { Employee } from "./demo4-employee.js"


Employee.setCompanyName("Deloitte")
console.log(Employee.getCompanyName())
Employee.printCompanyName()

// call non-static method printEmployeeDetails()
let emp1:Employee=new Employee(101,"saul",4000,"Good")
let emp2:Employee=new Employee(102,"Kim",5000,"Excellent")

emp2.printEmployeeDetails()
emp1.printEmployeeDetails()

emp1.setName("Peter")
emp1.printEmployeeDetails()