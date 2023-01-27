import { Component, OnInit } from '@angular/core';
import { createItem } from '../model/digi-kala.model';

@Component({
  selector: 'app-shopping-page',
  templateUrl: './shopping-page.component.html',
  styleUrls: ['./shopping-page.component.scss']
})
export class ShoppingPageComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

}
