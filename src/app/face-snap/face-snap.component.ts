import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps-service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  constructor(private faceSnapService:FaceSnapsService){}
  @Input() faceSnap!: FaceSnap

  buttonText!: string;

  ngOnInit(){
    this.buttonText = 'oh snap!';
  }

  onSnap(){
    if(this.buttonText == "oh snap!"){
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = "Oops, unsnap";
    }
    else{
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = "oh snap!";
    }
  }
}
