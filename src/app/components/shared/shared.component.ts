import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';
@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {
  userProfileForm:any;
  buttonName:string ='';

  constructor(public fb:FormBuilder,public config: DynamicDialogConfig){}

  ngOnInit(): void {
    console.log(this.config.data.buttonName)

    this.buttonName = this.config.data.buttonName;

    this.userProfileForm = this.fb.group({
      id: [null,Validators.required],
      empName: ['',Validators.required],
      empCode: ['',Validators.required],
      designation: ['',Validators.required],
      location: ['',Validators.required]
    })
  }

}
