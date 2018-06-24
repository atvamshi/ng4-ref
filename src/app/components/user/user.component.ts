import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: String = "Steve Smith";
  age: number;
  email: String;
  // address: {
  //   street: String,
  //   city: String,
  //   state: String
  // }
  address: Address;
  hobbies: String[];
  hello: any;
  // posts:Post[];
  // posts$:Object;
  posts$:any;

  constructor(private dataService: DataService) {
    console.log("constructor ran");
  }

  //is a life cycle hook which would get created every time when component is intialized
  //it is recomennded here
  ngOnInit() {
    console.log("ngOnInit ran");
    this.name = "John Doe";
    this.age = 21;
    this.email = 'atvamshi@gmail.com';
    this.address = {
      street: '50 Main St',
      state: 'MN',
      city: 'Boston'
    }

    
    this.hobbies = ['Write Code','Watch Movies','Listen to music'];
    this.hello = 'hello';

    this.dataService.getPosts().subscribe(
      response => {
        console.log(response)
        this.posts$ = response;
      });
  }


  onClick(){
    console.log('onClick ');
    this.name = "Vamsi";
    this.hobbies.push('New Hobby');

  }

  addHobby(hobby){
    console.log(hobby+'addHobby(hobby)');
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    console.log(hobby+'deleteHobby(hobby)');
    for(let i=0; i< this.hobbies.length; i ++){
      if (this.hobbies[i] == hobby){
        this.hobbies.splice(i,1);
      }
    }
  }

}

interface Address{
  street: String,
    city: String,
    state: String
}

interface Post{
  id: number,
  title:String,
  body: String,
  userId: number
}
