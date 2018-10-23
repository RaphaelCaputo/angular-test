import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input('isActive') isActive: boolean;
  @Input('likesCount') likesCount: number;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    // WRONG this.isActive = !this.isActive; Needs to change the value after the if state
    // if(this.isActive)
    //   this.likesCount++;
    // else
    //   this.likesCount--;

    this.likesCount += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
  }

}
