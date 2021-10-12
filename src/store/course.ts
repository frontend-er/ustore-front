
import { makeAutoObservable } from "mobx";

export default class Course {
   course = [{
      "userId": 4,
      "id": 32,
      "title": "doloremque illum aliquid sunt",
      "body": "deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime"
   }]
   isAuth = false;
   isLoading = false;

   constructor() {
      makeAutoObservable(this);
   }

   fetchCourse() {
      fetch('https://jsonplaceholder.typicode.com/posts')
         .then(response => response.json())
         .then(json => {
            this.course = [...this.course, ...json]
         })
   }
}



