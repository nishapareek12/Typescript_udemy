// Code goes here!
type Admin = {
    name: string;
    privilages: string[];
};

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee =  Admin & Employee;
type UnknownEmployee = Employee | Admin
//here employee e1 have type of elevatedEmployee
const e1: ElevatedEmployee = {
   name: "Nisha",
   privilages: ['create-server'],
   startDate: new Date()
}

//union type
type Combinable = string | number ;
type Numeric  = number | boolean;

type Universal = Combinable & Numeric

function printEmployeeInformation(emp: UnknownEmployee){
    console.log("Name: " + emp.name);
    if ("privilages" in emp){
        console.log("privilages:" +emp.privilages)
    }
    if ("startDate" in emp){
        console.log("start Date: ",+emp.startDate)
    }
}

printEmployeeInformation(e1)


class car {
    drive(){
       console.log("Driving..") 
    }
}

class truck {
    drive(){
       console.log("Driving a truck.."); 
    }
    loadCargo(amount: number){
        console.log("loading cargo..." + amount)
    }
}

type Vehicle = car | truck;

const v1 = new car();
const v2 = new truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive();
    if(vehicle instanceof truck){
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1); 
useVehicle(v2);


interface ErrorContainer {
    [props: string] : string;
}

const errorBag: ErrorContainer = {
    email: "Not a valid email!",
    userName: "Must start with capital letter"
}


const fetchedUserData = {
    id: "ul",
    name: "Nisha",
    job: {title: "CEO", description: "my own company"}
}

console.log(fetchedUserData?.job?.title)

const userInput = " ";
const storedData = userInput ?? "DEFAULT";
console.log(storedData)



