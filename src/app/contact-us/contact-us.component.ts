import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  text = "This is contact us component"
  contactForm: FormGroup;

  contact = {
    name:'',
    email:'',
    text:''
  }
  submitted = false;
  constructor() {
    this.createForm()
   }

  ngOnInit(): void {
  }

  createForm():void{
    this.contactForm = new FormGroup(
      {
        'name': new FormControl(this.contact.name,[
          Validators.required,
          Validators.minLength(4)
        ]),
        'email': new FormControl(this.contact.email,[
          Validators.required,
          Validators.email
        ]),
        'text': new FormControl(this.contact.text,Validators.required)
      }
    )
  }

  onSubmit():void{
    this.submitted = true;
  }
}
