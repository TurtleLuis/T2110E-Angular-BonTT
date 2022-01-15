import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @ViewChild("f") editForm!: NgForm;
  onSubmit(){
    console.log(this.editForm.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
