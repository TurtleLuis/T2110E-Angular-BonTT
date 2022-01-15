import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practical',
  templateUrl: './practical.component.html',
  styleUrls: ['./practical.component.css']
})
export class PracticalComponent implements OnInit {
  created:boolean = false;
  notification:string = "";
  productname:string = "";
  productprice:string ="";
  name = [""];
  price = [""];
  click(){
    if(this.productname.length > 0 && this.productprice.length > 0){
      this.name.push(this.productname);
      this.price.push(this.productprice);
      this.notification ="Sản phẩm "+this.productname+" đã được tạo!"
      this.created = true;
    } else if(this.productname.length <= 0 || this.productprice.length <= 0){
      this.notification = "Sản phẩm chưa được khởi tạo!";
    }
    this.productname ="";
    this.productname ="";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
