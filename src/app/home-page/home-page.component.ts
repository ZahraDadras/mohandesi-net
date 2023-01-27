import { Component, OnInit } from '@angular/core';
import { NavigationBehaviorOptions, Route, Router } from '@angular/router';
import { createItem, showItemCardModel } from '../model/digi-kala.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  photoGraphyCards: createItem[] = [{
    brand: "",
    name: "iPhone 13 pro 256",
    type: "",
    category: "موبایل",
    simCount: "1",
    hafezeDakheli: "256 گیگابایت",
    RAM: "6 گیگابایت",
    price: "52000000",
    status: "موجود در انبار",
    color: "مشکی",
    operationSystem: "",
    pageSize: ""
  }, {
    brand: "",
    name: "Xiaomi Redmi Note 8 Pro",
    type: "",
    category: "موبایل",
    simCount: "2",
    hafezeDakheli: "128 گیگابایت",
    RAM: "8گیگابایت",
    price: "4900000",
    status: "موجود در انبار",
    color: "سفید",
    operationSystem: "",
    pageSize: ""
  }, {
    brand: "",
    name: "Xiaomi Redmi Note 11 ",
    type: "",
    category: "موبایل",
    simCount: "2",
    hafezeDakheli: "128 گیگابایت",
    RAM: "6 گیگابایت",
    price: "6300000",
    status: "عدم موجود در انبار ",
    color: "خاکستری",
    operationSystem: "",
    pageSize: ""
  }, {
    brand: "",
    name: "Samsung Galaxy A12 ",
    type: "",
    category: "موبایل",
    simCount: "2",
    hafezeDakheli: "128 گیگابایت",
    RAM: "6 گیگابایت",
    price: "3650000",
    status: "عدم موجود در انبار ",
    color: "مشکی",
    operationSystem: "",
    pageSize: ""
  }, {
    brand: "",
    name: "iPhone 12 pro",
    type: "",
    category: "موبایل",
    simCount: "2",
    hafezeDakheli: "128 گیگابایت",
    RAM: "6 گیگابایت",
    price: "19000000",
    status: " موجود در انبار ",
    color: "آبی",
    operationSystem: "",
    pageSize: ""
  }, {
    brand: "",
    name: "Samsung Galaxy A12",
    type: "",
    category: "موبایل",
    simCount: "2",
    hafezeDakheli: "64 گیگابایت",
    RAM: "4 گیگابایت",
    price: "3500000",
    status: " موجود در انبار ",
    color: "آبی",
    operationSystem: "",
    pageSize: ""
  },];
  tabletCards: createItem[] = [{
    brand: "",
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
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  detailPage(params:any){
    console.log(params)

this.router.navigate(['detail-item'],params);
  }
  createItem(){
this.router.navigate(['create'])
  }
  shopping(){
    this.router.navigate(['shopping-page'])
  }
}
