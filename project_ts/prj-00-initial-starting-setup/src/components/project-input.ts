import { Component } from "./base-component";
import * as Validation  from "../utils/validation";
import { autobind } from "../decorators/autobind";
import { projectState } from "../state/project-state";
//project input class
export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;
    constructor() {
      super("project-input", "app", true, "user-input");
      this.titleInputElement = this.element.querySelector(
        "#title"
      ) as HTMLInputElement;
      this.descriptionInputElement = this.element.querySelector(
        "#description"
      ) as HTMLInputElement;
      this.peopleInputElement = this.element.querySelector(
        "#people"
      ) as HTMLInputElement;
      this.configure();
    }
    configure() {
      this.element.addEventListener("submit", this.submitHandler.bind(this));
    }
    renderContent() {}
  
    private gatherUserInput(): [string, string, number] | void {
      const enteredTitle = this.titleInputElement.value;
      const enteredDescription = this.descriptionInputElement.value;
      const enteredPeople = this.peopleInputElement.value;
  
      const titleValidatable: Validation.validatable = {
        value: enteredTitle,
        required: true,
      };
      const descriptionValidatable: Validation.validatable = {
        value: enteredDescription,
        required: true,
        minLength: 5,
      };
      const peopleValidatable: Validation.validatable = {
        value: enteredPeople,
        required: true,
        min: 1,
        max: 5,  
      };
      if (
        !Validation.validate(titleValidatable) ||
        !Validation.validate(descriptionValidatable) ||
        !Validation.validate(peopleValidatable)
      ) {
        alert("Invalid Input, please try again!");
        return;
      } else {
        return [enteredTitle, enteredDescription, +enteredPeople];
      }
    }
  
    private clearInput() {
      this.titleInputElement.value = " ";
      this.descriptionInputElement.value = " ";
      this.peopleInputElement.value = " ";
    }
    @autobind
    private submitHandler(event: Event) {
      event.preventDefault();
      const userInput = this.gatherUserInput();
      if (Array.isArray(userInput)) {
        const [title, desc, people] = userInput;
        console.log(title, desc, people);
        projectState.addProject(title, desc, people);
        this.clearInput();
      }
    }
  }