import { Injectable } from "@angular/core";
import { observable, Subject } from "rxjs";

// import { JobPatternModel } from "../../models/job-pattern.model";
import { HttpClient } from "@angular/common/http";
import { createItem } from "../model/digi-kala.model";
// import { JobPattern } from "src/models/job-pattern.model";

@Injectable()
export class DigiKalaService{
// url =''
constructor(private http: HttpClient){

}
    

createItem(data: createItem){
    return this.http.post<any[]>("http://192.168.124.99:8080/insertproduct", data);
}

}