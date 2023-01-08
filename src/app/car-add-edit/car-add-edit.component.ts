import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { CoreService } from '../core/core.service';
import { CarItem } from '../models/car';
import { addCarItemFormSubmitted, editCarItemFormSubmitted } from '../store/cars.actions';
import { selectCarItems } from '../store/cars.selector';

@Component({
  selector: 'app-car-add-edit',
  templateUrl: './car-add-edit.component.html',
  styleUrls: ['./car-add-edit.component.scss'],
})
export class CarAddEditComponent implements OnInit {
  carForm: FormGroup;
  carList: CarItem[] = [];


  constructor(
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<CarAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService,
    private store: Store

  ) {
    this.carForm = this._fb.group({
      carNumber: '',
      ownerName: ''
    });
    (this.carForm.get('carNumber') as FormControl).setValidators([
      Validators.pattern(/^[a-zA-Z]{3}\d{3}$/)
    ]);


  }

  ngOnInit(): void {
    this.carForm.patchValue(this.data);
    this.getList();
  }

  onFormSubmit() {

    if (this.carForm.valid) {
      if (this.data) {
        console.log('edit');
        this.store.dispatch(
          editCarItemFormSubmitted({
            carItem: {
              ...this.carForm.value,
              id: this.data.id,
            },
          })
        );
        this._coreService.openSnackBar('Details updated!');
        this._dialogRef.close(true);
      } else {
        console.log('add');
        this.store.dispatch(
          addCarItemFormSubmitted({
            carItem: Object.assign(this.carForm.value,  {id: this.getId() })
          })
        )
        this._coreService.openSnackBar('Details added successfully');
        this._dialogRef.close(true);
      }
    }
  }

  async getList() {
    const carItems$ = await this.store.select(selectCarItems);

    carItems$.subscribe((content: CarItem[]) => {

      this.carList = content;
    })

  }
  getId() {
    return this.carList.length > 0 ?
      Math.max(...this.carList.map((c: CarItem) => c.id)) + 1 : 1;
  }
}
