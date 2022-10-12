import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})


export class FaceSnapListComponent implements OnInit {
  faceSnaps! : FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [{
      title : 'Yumeko',
      description:'My fav waifu',
      createdDate: new Date(),
      snaps: 0,
      image : '../../assets/Yumeko.jpg',
    },
 {
      title: 'Mieruko Chan',
      description: 'Best horror-comedy show',
      image : '../../assets/mieruko 2.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Kyoto',
    },
{
      title: 'Toru',
      description: 'Miss Kobayashi san\'s maid!',
      image : '../../assets/toru.jpg',
      createdDate: new Date(),
      snaps: 0
    }];
  }
}
