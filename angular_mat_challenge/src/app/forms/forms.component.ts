import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatOption } from '@angular/material/core';
import { MatCheckbox } from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSliderModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, FormsModule, ReactiveFormsModule, MatOption, MatCheckbox, MatSlideToggleModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

  

  private readonly _formBuilder = inject(FormBuilder);

  readonly faveEvent = this._formBuilder.group({
    Introduction: false,
    Lesson1: false,
    Lesson2: false,
    Lesson3: false,
  });

  


  fullName: string = "";
  email: string = "";
  overSatis: string = "";
  message: string = "";
  satisfactionLevel: number = 5;
  submitted = false;
  minSatis:number = 1;
  maxSatis:number = 10;
  reasonAttend: string = "";

  //password: string = "";
  //gender:string = "";
  //birthDate!: Date;
  //address: string = "";

  formdata: FormGroup = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    overSatis: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
    reasonAttend: new FormControl('', [Validators.required]),
    //faveEvent: new FormControl('', [Validators.required]),
    satisfactionLevel: new FormControl(5)//password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    //birthDate: new FormControl(null, [Validators.required]),
    //address: new FormControl(''),
  });
  
  onClickSubmit(data:{
    fullName: string;
    email: string;
    overSatis: string;
    message: string;
    satisfactionLevel: number;
    reasonAttend: string;
    //aveEvent: string;
    //password: string;
    //gender: string;
    //address: string;
    //birthDate: Date;
  })

  {
    this.submitted = true;
    this.fullName = data.fullName;
    this.email = data.email;
    this.overSatis = data.overSatis;
    this.message = data.message;
    this.satisfactionLevel = data.satisfactionLevel;
    this.reasonAttend = data.reasonAttend;

    //this.birthDate = data.birthDate;
    //this.password = data.password;
    //this.gender = data.gender;
    //this.address = data.address;

    if(this.formdata.valid){
      console.log("Form Submitted!", this.formdata.value);
    }else{
      console.log("Form is not Valid!");
    }
  }
}
