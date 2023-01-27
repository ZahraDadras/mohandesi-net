import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { createItem } from '../model/digi-kala.model';
import { DigiKalaService } from '../service/digi-kala.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {
  createItem: createItem = {
    brand: "",
    name: "",
    type: "",
    category: "",
    simCount: "",
    hafezeDakheli: "",
    RAM: "",
    price: "",
    status: "",
    color: "",
    operationSystem: "",
    pageSize: ""
  }
  detailForm: FormGroup = new FormGroup({
    brand: new FormControl(''),
    name: new FormControl(),
    type: new FormControl(),
    category: new FormControl(),
    simCount: new FormControl(),
    hafezeDakheli: new FormControl(),
    RAM: new FormControl(),
    price: new FormControl(),
    status: new FormControl(),
    color: new FormControl(),
    operationSystem: new FormControl(),
    pageSize: new FormControl()
  })
  constructor(private router: Router,
    private service : DigiKalaService
   ) {

  }
  mobileMood: boolean = false;
  tabletMood: boolean = false;
  changeType(params: any) {
    console.log(params)
    if (params === "موبایل"){
      this.mobileMood = true;
      this.tabletMood=false;
    }
      
    else if (params === "تبلت"){
      this.tabletMood = true;
      this.mobileMood=false
    }
      
  }
  ngOnInit(): void {
    // this.testForm= new FormGroup({
    //   test: new FormControl()
    // })
  }
  addItem() {
    Object.keys(this.detailForm.value).forEach((element: any) => {
      Object.keys(this.createItem).forEach((item : any) => {
        if (item === element) {
          console.log(Object(this.createItem)[item])
          Object(this.createItem)[item]=this.detailForm.value[element]
        }
      });
      });
      console.log(this.createItem)
      // this.router.navigate([''])
this.service.createItem(this.createItem).subscribe(res=>{
console.log(res)
})
    }
   
}
