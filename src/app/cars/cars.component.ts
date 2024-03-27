import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  public term:string = "";
  public pageNo:number = 0;
  public column:string = "";
  public order:string = "";
  public cars:any = [];

  public queries:any = {
    filter:"",
    limit:10,
    pageNo:0,
    sortBy:"",
    order:""
  }

  constructor(private _carsService:CarsService){

    _carsService.getCars().subscribe(
      (data:any)=>{
        this.cars = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )

  }
  filterCars(){
    this._carsService.getFilteredCars(this.term).subscribe(
      (data:any)=>{
        this.cars = data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }
  getPagedCars(){
    this._carsService.getPagedCars(this.pageNo).subscribe(
      (data:any)=>{
        this.cars = data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }

  getSortedCars(){
    this._carsService.getSortedCars(this.column, this.order).subscribe(
      (data:any)=>{
        this.cars = data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }

  loadData(){
    this._carsService.loadData(this.queries).subscribe(
      (data:any)=>{
        this.cars = data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }

  deleteCar(id:string){
    this._carsService.deleteCar(id).subscribe(
      (data:any)=>{
        alert("deleted succesfully");
        location.reload();
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }


}
