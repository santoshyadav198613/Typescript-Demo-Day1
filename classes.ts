import { EmployeeService } from './employeeService';

class Employee {
    private id: number;
    name: string;
    designation: string;
    dob: Date
    // emplService: EmployeeService;
    //emplService = new EmployeeService();
    constructor(name: string = 'name1', designation: string, private empService: EmployeeService) {
        this.name = name;
        this.designation = designation;
    }

    get getDesignation() {
        return this.designation;
    }

    set setDesignation(designation: string) {
        this.designation = designation;
    }


    getName(): string {
        return this.empService.getEmployeeList();
    }

    setName(): void {
        this.name = 'test';
    }

}


let empClass = new Employee('rajesh', 'tester');

console.log(empClass);
console.log(empClass.getName());

let empClass1 = new Employee('test');

let empClass2 = new Employee();
