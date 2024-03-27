import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent {

  constructor(private _carsService:CarsService){}

  public carForm:FormGroup = new FormGroup(
    {
      Vehicle: new FormControl(),
      manufacturer: new FormControl(),
      model: new FormControl(),
      color: new FormControl(),
      type: new FormControl(),
      fuel: new FormControl(),
      image: new FormControl()
    }
  )

  submit(){
    this._carsService.createCar(this.carForm.value).subscribe(
      (data:any)=>{
        alert("Created succesfully");
        this.carForm.reset();
      },
      (err:any)=>{
        alert("creation failed");
      }
    )
  }


}
