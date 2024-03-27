// Code goes here!
// const names: Array<string> = [];

// const promise: Promise<number> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     },2000)
// });

// promise.then((data) => {
//     //data.split("")
// })

function merge<T extends object , U extends object> (objA: T, objB: U) {
    return Object.assign(objA, objB)
}

const mergedObj = merge({name: "Nisha"},{age: 30});
console.log(mergedObj.age);

interface Lengthy {
    length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string]{
    let descriptionText = "Got no value.";
    if(element.length === 1){
        descriptionText = "Got 1 element";
    } else if (element.length > 1) {
        descriptionText = "Got" + element.length + "elements.";
    }
    return [element, descriptionText]
}

console.log(countAndDescribe("Hi there"))

function extractAndConvert<T extends object,U extends keyof T>(obj: T , key : U){
    return "Value: " + obj[key];
}

extractAndConvert({name: "Nisha"},"name")

class DataStorage <T> {
  private data : T[] = [];
  addItem(item : T){
    this.data.push(item);
  }
  removeItem(item : T){
    this.data.splice(this.data.indexOf(item), 1)
  }
  getItems(){
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Nisha");
textStorage.addItem("Monika");
textStorage.removeItem("Nisha")
console.log(textStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date();
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal{

    let CourseGoal: Partial<CourseGoal> = {};
    CourseGoal.title = title;
    CourseGoal.description = description;
    CourseGoal.completeUntil = date;
    return CourseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Max","Anna"]
names.push("Nisha")