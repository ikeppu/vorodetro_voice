import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent implements OnInit {
  contactUsForm: FormGroup;
  constructor(private readonly _fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactUsForm = this._fb.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      phone: ['', Validators.required],
      comment: ['', Validators.required],
    });
  }

  submit() {
    console.log(this.contactUsForm.value);
  }
}
