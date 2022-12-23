import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { UserService } from '../_services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    registerForm!: FormGroup;
    loading = false;
    submitted = false;
    returnUrl?: string;
    error!: string

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword : ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';

  }
  
  get f() { return this.registerForm?.controls; }
  onSubmit(): void {
    this.submitted = true;

    if(this.registerForm?.invalid) {
      return ;
    }
    this.loading = true;

    this.userService.register(this.f?.username.value, this.f?.email.value, this.f?.password.value, this.f?.confirmPassword.value)
    .pipe(first())
    .subscribe(
          data => {
            this.router.navigate([this.returnUrl]);
            console.log('registered user');
          },
          error => {
            this.error = error.error;
            this.loading = false;
          }
        );

  //   this.userService.login(this.f?.username.value, this.f?.password.value)
  //   .pipe(first())
  //   .subscribe(
  //     data => {
  //       this.router.navigate([this.returnUrl]);
  //     },
  //     error => {
  //       this.error = error.error;
  //       this.loading = false;
  //     }
  //   )
   }

}
