// var fname= 'test';

// fname =10;

let fname: string; //string

fname = 'test';

let lname: String = 'test';

let Lname: string = "t1";

let age: number = 10;//integer

age = 56.06;


let dob: Date = new Date('10-Sep-2017'); //Date

let isValid: boolean = false;//boolean

console.log('IsValid' + isValid);

let anytype: any;

anytype = 'hsdgg';
anytype = 18;
anytype = false;

let employeeList = [];

employeeList.push({ id: 1, name: 'test1', age: 10 });
employeeList.push({ id: 2, name: 'test2', age: 20 });
employeeList.push({ id: 3, name: 'test3', age: 30 });
employeeList.push(10);

let empList: Array<string> = new Array<string>();

empList.push('test1');
empList.push('test2');


empList.forEach(function (emp) {
    console.log(emp);
});


console.log('This is for of loop')
for (let emp of empList) {
    console.log(emp)
}

console.log('This is for in loop')
for (let emp in empList) {
    console.log(emp)
}

