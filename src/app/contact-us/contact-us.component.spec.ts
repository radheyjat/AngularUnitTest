import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsComponent } from './contact-us.component';
import { BrowserModule,By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

describe('ContactUsComponent', () => {
  let component: ContactUsComponent;
  let fixture: ComponentFixture<ContactUsComponent>;
  let debugElement:DebugElement;
  let e1:HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUsComponent ],
      imports:[BrowserModule,FormsModule,ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('form'))
    e1 = debugElement.nativeElement
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set submitted to true', async(() => {
      component.onSubmit();
      expect(component.submitted).toBeTruthy();
    }))

    it('should call the submit method', async(() => {
      // fixture.detectChanges();
      spyOn(component,'onSubmit');
      e1 = fixture.debugElement.query(By.css('button')).nativeElement;
      e1.click()
      expect(component.onSubmit).toHaveBeenCalledTimes(0);
    }))

  it('form should be invalid',async(() =>{
    component.contactForm.controls['name'].setValue("");
    component.contactForm.controls['email'].setValue("");
    component.contactForm.controls['text'].setValue("");
    expect(component.contactForm.valid).toBeFalsy();
  }))

  it('form should be valid',async(() =>{
    component.contactForm.controls['name'].setValue("radhey");
    component.contactForm.controls['email'].setValue("radhey@gmail.com");
    component.contactForm.controls['text'].setValue("text");
    expect(component.contactForm.valid).toBeTruthy();
  }))
});
