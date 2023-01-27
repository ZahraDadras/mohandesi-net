import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { __param } from 'tslib';
import { createItem } from '../model/digi-kala.model';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.scss']
})
export class DetailItemComponent implements OnInit {
  tabletMood:boolean=false;
  count:any;
  mobileMooed:boolean=false;
  tabletCards: createItem[] = [{
    brand: "Lenovo",
    name: "تبلت Lenovo A5500",
    type: "",
    category: "تبلت",
    simCount: "",
    hafezeDakheli: "16 گیگابایت",
    RAM: "2 گیگابایت",
    price: "1150000",
    status: "موجود در انبار",
    color: "قرمز",
    operationSystem: "Android",
    pageSize: "۸ تا ۱۰ اینچ"
  }, {
    brand: "",
    name: "تبلت هوآوی",
    type: "",
    category: "تبلت",
    simCount: "",
    hafezeDakheli: "16 گیگابایت",
    RAM: "6 گیگابایت",
    price: "3300000",
    status: "موجود در انبار",
    color: "سرمه ای",
    operationSystem: "Android",
    pageSize: "9 تا 10 اینچ"
  }, {
    brand: "",
    name: "تبلت سامسونگ مدل Galaxy Tab A ",
    type: "",
    category: "تبلت",
    simCount: "",
    hafezeDakheli: "32 گیگابایت",
    RAM: "6 گیگابایت",
    price: "4600000",
    status: "عدم موجود در انبار ",
    color: "خاکستری",
    operationSystem: "Android",
    pageSize: "8 تا 10 اینچ"
  }, {
    brand: "",
    name: "ایپد Air2 ",
    type: "",
    category: "تبلت",
    simCount: "",
    hafezeDakheli: "64 گیگابایت",
    RAM: "6 گیگابایت",
    price: "5500000",
    status: " موجود در انبار ",
    color: "طلایی",
    operationSystem: "iOS - iPadOS",
    pageSize: "8 تا 10 اینچ"
  }, {
    brand: "",
    name: "تبلت سامسونگ Tab 4 SM-T530 Galaxy",
    type: "",
    category: "تبلت",
    simCount: "",
    hafezeDakheli: "16 گیگابایت",
    RAM: "6 گیگابایت",
    price: "19000000",
    status: " موجود در انبار ",
    color: "آبی",
    operationSystem: "Android",
    pageSize: "8 تا 10 اینچ"
  }, {
    brand: "",
    name: "ipad pro 2021",
    type: "",
    category: "تبلت",
    simCount: "",
    hafezeDakheli: "256 گیگابایت",
    RAM: "6 گیگابایت",
    price: "29500000",
    status: " موجود در انبار ",
    color: "آبی",
    operationSystem: "iOS - iPadOS",
    pageSize: "11 تا 13 اینچ"
  },];
  constructor(private router: Router) { 
    // console.log(this.router.snapshot.data)
  }

  ngOnInit(): void {
    if(this.tabletCards[0].category==='موبایل')
    this.mobileMooed=true
    else
    this.tabletMood=true
  }
  createItem(){
    this.router.navigate(['create'])
      }
      shopping(){
        this.router.navigate(['shopping-page'])
      }
      addToShop(){
        
        this.count=this.count+1;
        console.log(this.count)
      }
}
