import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private _httpClient:HttpClient) { }

  getCars():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction");
  }

  getFilteredCars(term:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter="+term);
  }

  getPagedCars(pageNo:number):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=10&page="+pageNo);
  }

  getSortedCars(column:string, order:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy="+column+"&order="+order);
  }

  createCar(data:any):Observable<any>{
    return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction",data);
  }

  deleteCar(id:string):Observable<any>{
    return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
  }









  loadData(queries:any){

    let str = "";

    if(queries.filter){
      str += "filter="+queries.filter+"&";
    }
    if(queries.pageNo){
      str += "page="+queries.pageNo+"&";
      str += "limit="+queries.limit+"&";
    }
    if(queries.sortBy){
      str += "sortBy="+queries.sortBy+"&";
    }
    if(queries.order){
      str += "order="+queries.order+"&";
    }

    console.log(queries, str);
    
    
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?"+str);
  }


  
}
