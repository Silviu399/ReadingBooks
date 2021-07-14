import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private afs: AngularFirestore) {}

  public getUserData(uid: string) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${uid}`
    );

    userRef.valueChanges().subscribe((data) => {
      const user: User = {
        uid: data.uid,
        displayName: data.displayName,
        email: data.email,
        photoURL: data.photoURL,
        isAdmin: data.isAdmin ? true : false,
      };

      const jsonUser = JSON.stringify(user);
      sessionStorage.setItem('user', jsonUser);
    });
  }

  public isAdmin(): boolean {
    const stringUser = sessionStorage.getItem('user');
    const user: User = JSON.parse(stringUser);

    return user.isAdmin;
  }
}
