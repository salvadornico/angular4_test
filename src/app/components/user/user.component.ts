import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  hello: any;
  posts: Post[];
  isEdit = false;

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.name = 'John Doe';
    this.age = 30;
    this.email = 'john@johndoe.com';
    this.address = {
      street: '22 Oakville',
      city: 'New York',
      state: 'NY',
    };
    this.hobbies = [
      'Eating',
      'Drinking',
      'Sleeping'
    ];
    this.hello = 42;

    this.dataservice.getPosts().subscribe((posts) => {
      // alert(posts);
      this.posts = posts;
    });
  }

  onClick() {
    this.name = 'Ricky Bobby';
    this.hobbies.push('New Hobby');
  }

  addHobby(hobby) {
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; ++i) {
      if (this.hobbies[i] === hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

}

interface Address {
  street: string;
  city: string;
  state: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
