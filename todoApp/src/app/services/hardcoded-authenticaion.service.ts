import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticaionService {

  constructor() {
  }

  authenticate(username, password) {
    if (username === "Haudi" && password === 'Schaudi') {
      return true;
    }
    return false;

  }
}
