import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  mySnap! : FaceSnap;
  myOtherSnap! : FaceSnap;
  myLastSnap! : FaceSnap;

  ngOnInit() {
    this.mySnap = {
      title : 'Yumeko',
      description:'My fav waifu',
      createdDate: new Date(),
      snaps: 0,
      image : '../../assets/Yumeko.jpg',
    };
    this.myOtherSnap = {
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      image : '../../assets/mieruko 2.jpg',
      createdDate: new Date(),
      snaps: 0
    };
    this.myLastSnap = {
      title: 'Un bon repas',
      description: 'Mmmh que c\'est bon !',
      image : '../../assets/toru.jpg',
      createdDate: new Date(),
      snaps: 0
    };
  }
}
