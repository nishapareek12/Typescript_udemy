// Code goes here!
class Department {
    // private id: string;
    // private name: string;
    private employees: string[] = [];
    constructor(private readonly id: string, public name: string){
        // this.name = n;
    }
    describe(this: Department){
        console.log("Department: ", this.name)
    }

    addEmployee(employee: string){
        this.employees.push(employee)
    }
    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department{
      admins: string[];
      constructor(id: string, admins:string[]){
        super(id, "IT");
        this.admins = admins
      }
}
class AccountingDepartment extends Department{
    
}
const IT = new ITDepartment('d1',["Max"])
IT.addEmployee("Max");
IT.addEmployee("Nisha");
IT.printEmployeeInformation()
// console.log(IT)
IT.describe();
// const accountingCopy = { name:"s", describe: accounting.describe};
// accountingCopy.describe();  