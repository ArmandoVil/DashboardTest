import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiFacadeService } from 'src/app/services/api-facade.service';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.scss']
})
export class DialogDeleteComponent implements OnInit {

  constructor( private ApiFacade: ApiFacadeService,
               private router: Router,
               public dialogRef: MatDialogRef<DialogDeleteComponent>,
               @Inject(MAT_DIALOG_DATA) public data) {  
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  deleteProduct() {
    this.ApiFacade.deleteProduct(this.data.product)
    .subscribe(
      (response) => {
        console.log("Deleted id: ", this.data.product);    
        this.dialogRef.close(); 
        this.router.navigateByUrl('/', { skipLocationChange: false }).then(() => {
          this.router.navigate(['/products']);
        });
      });   
  }

  ngOnInit(): void {
  }

}
