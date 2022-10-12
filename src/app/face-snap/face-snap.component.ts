import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!:number;
  image!:string;
  buttonText!: string;

  ngOnInit(){
    this.title = 'Delz';
    this.description = 'The best persona in the world';
    this.createdDate = new Date();
    this.snaps = 6;
    this.image = "../../assets/Yumeko.jpg";
    this.buttonText = 'oh snap!';
  }

  onSnap(){
    if(this.buttonText == "oh snap!"){
      this.faceSnap.snaps++;
      this.buttonText = "Oops, unsnap";
    }
    else{
      this.faceSnap.snaps--;
      this.buttonText = "oh snap!";
    }
  }
}
