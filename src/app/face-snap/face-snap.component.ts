import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
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
      this.snaps++;
      this.buttonText = "Oops, unsnap";
    }
    else{
      this.snaps--;
      this.buttonText = "oh snap!";
    }
  }
}
