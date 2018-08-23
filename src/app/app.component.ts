import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Observable } from '../../node_modules/rxjs';

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
  posts: any;

  title:string;
  content:string;

  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;

  constructor(private afs: AngularFirestore) {
  }

  ngOnInit() {
    this.postsCol = this.afs.collection('posts');
    this.posts = this.postsCol.valueChanges()
  }

  addPost() {
    // this.afs.collection('posts').doc('my-custom-id').set({'title': this.title, 'content': this.content});
    this.afs.collection('posts').add({'title': this.title, 'content': this.content});
  }

  getPost(postId) {
    this.postDoc = this.afs.doc('posts/'+postId);
    this.post = this.postDoc.valueChanges();
  }
}
