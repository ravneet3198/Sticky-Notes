import { Component, OnInit } from '@angular/core';
import {StickyserviceService} from '../stickyservice.service'



@Component({
  selector: 'app-stickynote',
  templateUrl: './stickynote.component.html',
  styleUrls: ['./stickynote.component.css']
})
export class StickynoteComponent implements OnInit {
  allSticky:any = []
  index:number
  constructor(private Stickyservice:StickyserviceService) { }

  ngOnInit(): void {
    this.Stickyservice.getAllSticky().subscribe((data)=>{
      this.allSticky = data;
      //console.log(this.allSticky.length)
    });

  }

  deleteSticky(id:number){
    this.allSticky = this.allSticky.filter((sticky)=>{
      return sticky._id !== id
    })

    this.Stickyservice.deleteSticky(id)
    // console.log("sticky deleted")

  }

  likeSticky(id:number){
    this.index= this.allSticky.findIndex((sticky)=>{
      return sticky._id == id
    })
    this.allSticky[this.index].likes = this.allSticky[this.index].likes +1;
    this.Stickyservice.incrementLikes(id)
    // console.log("incremented")
  
  }

  addSticky(){

  }

  editSticky(id:number){
      console.log('called edit'+id)
  }


}
