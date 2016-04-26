import {Injectable, bind} from 'angular2/core';
import {Subject, BehaviorSubject} from 'rxjs';
import {User} from '../models';

@Injectable()
export class UserService {    
    // `currentUser` contains the current user
    currentUser: Subject<User> = new BehaviorSubject<User>(null);

    public setCurrentUser(newUser: User): void {
        this.currentUser.next(newUser);
    }
}