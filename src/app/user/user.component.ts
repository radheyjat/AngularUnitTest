import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  isLoggedIn = false;
  user: { name: string };
  userDetail;
  systemError = false;
  systemErrorMessage = '';

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService = this.userService.getUserDetails().subscribe(
      (respone: string) => {
        this.userDetail = respone;
        this.isLoggedIn = true;
      },
      (error: string) => {
        this.systemError = true;
        this.systemErrorMessage = error;
      }
    );
  }

}
