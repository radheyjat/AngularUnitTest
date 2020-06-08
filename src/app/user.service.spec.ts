import { TestBed, fakeAsync, tick, ComponentFixture } from '@angular/core/testing';

import { UserService } from './user.service';
import { UserComponent } from './user/user.component';
import { Observer, Observable, of } from 'rxjs';

describe('UserService', () => {
  let service: UserService;
  let userComponent: ComponentFixture<UserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    });
    service = TestBed.inject(UserService);
    userComponent = TestBed.createComponent(UserComponent);
  });

  describe('getUserDetails',() =>{

    it('should return a logged in user', () => {
      const mockUser = { name: 'Mannie' };

      let response;
      spyOn(service, 'getUserDetails').and.returnValue(of(mockUser));

      service.getUserDetails().subscribe(res => {
        response = res;
      });
      expect(response).toEqual(mockUser);
    })

    it('should return error', () => {
      const mockError = 'something went wrong';

      let response;
      spyOn(service, 'getUserDetails').and.returnValue(of(mockError));

      service.getUserDetails().subscribe(res => {
        response = res;
      });
      expect(response).toEqual(mockError);
    })

  });


  describe(':', () => {
    function setup() {
      // const fixture = TestBed.createComponent(UserComponent);
      const app = userComponent.debugElement.componentInstance;
      const userAsyncService = userComponent.debugElement.injector.get(UserService);

      return { userComponent, app, userAsyncService };
    }

    it('should create the app component', () => {
      const { app } = setup();
      expect(app).toBeTruthy();
    });


    it('should display user name', fakeAsync(() => {
      const { userComponent, app, userAsyncService } = setup();
      const mockUser = { name: 'Mannie' };
      spyOn(userAsyncService, 'getUserDetails').and.returnValue(
        Observable.create((observer: Observer<{ name: string }>) => {
          observer.next(mockUser);
          return observer;
        })
      );

      tick();

      userComponent.detectChanges();
      const userAsyncElement = userComponent.debugElement.nativeElement;
      const loggedInUserName = userAsyncElement.querySelector('p');
      expect(loggedInUserName.textContent).toBe(' Mannie ');
    }));


    it('should display a system error', fakeAsync(() => {
      const { app, userComponent, userAsyncService } = setup();
      spyOn(userAsyncService, 'getUserDetails').and.returnValue(
        Observable.create((observer: Observer<{ name: string }>) => {
          return observer.error('something went wrong');
        })
      );

      tick();
      userComponent.detectChanges();

      const userAsyncElement = userComponent.debugElement.nativeElement;
      const systemError = userAsyncElement.querySelector('p');
      expect(systemError.textContent).toBe('something went wrong');
    }));

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
