import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user = { name: 'Mannie' };
  getUserDetails() {
    // Create an observables.
    const userObservables = Observable.create(
      (observer: Observer<{ name: string }>) => {
        setTimeout(() => {
          observer.next(this.user);
        }, 8000);
      }
    );
    return userObservables;
  }
  
}
