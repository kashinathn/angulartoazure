import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  profileForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.maxLength(5)]],
    lastName: ['', [Validators.required]],
  });

  ngOnInit() {
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    } else {
      console.warn(this.profileForm.value);
    }
  }
}
