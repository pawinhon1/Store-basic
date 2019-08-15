import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  // ตัวแปรทั่วไป
  private productName:string;
  private productType:string;
  private price:string;

  // Dictionary
  private type:{
    typeName:string,
    price:string
  };

  // ตัวแปรอาเรย์
  private anime:string[];

  constructor() { }

  ngOnInit() {
    this.productName = "CD Dragonball GT";
    this.productType = "CD/DVD";
    this.price = "35 Bath.-";

    this.type = {
      typeName:"CD/DVD",
      price:"20"
    }

    this.anime = ["Naruto","Bleach","OnePiece","Dragonball Z"];
    console.log("Product is running...");
  }

  showData(){
    alert("Show Data Now");
    console.log("Show Data Now...");
  }

  addCartoon(cartoon){
    this.anime.push(cartoon);
    return false;
  }
  
  removeCartoon(anime){
    this.anime.forEach((element, index) => {
      if(element == anime){
        this.anime.splice(index,1);
      }
    });
  }

}
