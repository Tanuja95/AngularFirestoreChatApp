import { Component } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
//import { Observable } from 'rxjs/Observable';
import { Observable } from '../../node_modules/rxjs';
//import 'rxjs/add/operator/map'; 
import { map } from 'rxjs/operators'

interface Post {
  title: string;
  content: string;
}

interface PostId extends Post { 
  id: string; 
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;

  title:string;
  content:string;

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.postsCol = this.afs.collection('posts');
    this.posts = this.postsCol.valueChanges();
  }

  addPost() {
    //this.afs.collection('posts').add({'title': this.title, 'content': this.content}); 
    this.afs.collection('posts').doc('my-custom-id').set({'title': this.title, 'content': this.content});
  }
}