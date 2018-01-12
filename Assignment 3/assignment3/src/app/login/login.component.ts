import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  valid() {
    const pas = document.getElementById('password') as HTMLInputElement;
    const password = pas.value;
    console.log(password);
    const re = /(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    console.log(re.test(password));
    if ( re.test(password) == false) {
      alert("Password is not correct. Conditions are: minimum length of 8, 1 uppercase letter and 1 lowercase letter.");
    }
    else {this.router.navigate(['/list']); }
  }

}
