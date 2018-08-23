import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';

var firebaseConfig = {
  apiKey: "AIzaSyAXGPYEMWr1TBE6YBy6pZJYGArNvxi2Ou4",
  authDomain: "firestoreapp-fbe24.firebaseapp.com",
  databaseURL: "https://firestoreapp-fbe24.firebaseio.com",
  projectId: "firestoreapp-fbe24",
  storageBucket: "firestoreapp-fbe24.appspot.com",
  messagingSenderId: "841314865032"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFirestoreModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
