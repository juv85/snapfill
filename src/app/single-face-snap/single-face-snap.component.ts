import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps-service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  constructor(private faceSnapService: FaceSnapsService, private route: ActivatedRoute) { }

  faceSnap!: FaceSnap

  buttonText!: string;

  ngOnInit() {
    const snapId = +this.route.snapshot.params['id'];
    this.buttonText = 'oh snap!';

    this.faceSnap = this.faceSnapService.getFaceSnapById(snapId);

  }


  onSnap() {
    if (this.buttonText == "oh snap!") {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = "Oops, unsnap";
    }
    else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = "oh snap!";
    }
  }
}
