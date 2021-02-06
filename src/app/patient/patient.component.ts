import { Component } from '@angular/core';
import {FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import { FormBuilder, FormGroup } from "@angular/forms";


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {

  form: FormGroup;

  constructor(public fb: FormBuilder,
    private http: HttpClient) {
    this.form = this.fb.group({
      surname: [''],
      name:[''],
      patronymic:[''],
      dateBirth:[''],
      gender:[''],
      bloodType:[''],
      phone:[''],
      email: [''],
      country:[''],
      region:[''],
      street:[''],
      houseDetails:[''],
      socialStatus:[''],
      maritalStatus:[''],
    })
  }

  ngOnInit() { }


  submitForm() {
    var formData: any = new FormData();
    formData.append("surname", this.form.get('surname').value);
    formData.append("name", this.form.get('name').value);
    formData.append("patronymic", this.form.get('patronymic').value);
    formData.append("dateBirth", this.form.get('dateBirth').value);
    formData.append("gender", this.form.get('gender').value);
    formData.append("bloodType", this.form.get('bloodType').value);
    formData.append("phone", this.form.get('phone').value);
    formData.append("email", this.form.get('email').value);
    formData.append("country", this.form.get('country').value);
    formData.append("region", this.form.get('region').value);
    formData.append("street", this.form.get('street').value);
    formData.append("houseDetails", this.form.get('houseDetails').value);
    formData.append("socialStatus", this.form.get('socialStatus').value);
    formData.append("maritalStatus", this.form.get('maritalStatus').value);


    this.http.post('http://httpbin.org/post', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }
}
