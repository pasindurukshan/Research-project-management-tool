import { BehaviorSubject } from 'rxjs';

import handleResponse from '../_helpers/handle-response';
import { history } from '../_helpers/history';
const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

const signin = (email, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return fetch(`http://localhost:4000/api/v1/users/auth`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUserSubject.next(user);
            if(user._doc.role === "Admin") {
                history.push('/admin');
            } else if(user._doc.role === "Student") {
                history.push('/student');    
            } else if(user._doc.role === "Panel") {
                history.push('/panel');
            } else if(user._doc.role === "Supervisor") {
                history.push('/supervisor');
            } else
                history.push('/profile');
            window.location.reload(true);
            return user;
        });
}

const signout = () => {
    // remove user details from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}

export const authenticationService = {
    signin,
    signout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};