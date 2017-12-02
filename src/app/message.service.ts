import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class MessageService {

  constructor(private db: AngularFireDatabase) { 
  } 

  getContent(): Observable<any> {
    const ref = this.db.object('alerts/testAlert');
    return ref.valueChanges().delay(1000);
  }


}
