import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TestModel1, TestModel2 } from 'src/app/api/models/test1.model';

@Component({
  selector: 'app-local-govt',
  templateUrl: './local-govt.component.html',
  styleUrls: ['./local-govt.component.scss']
})
export class LocalGovtComponent implements OnInit {
  @ViewChild('form')
  form!: NgForm;
  displayForm = false;
  operation = 'Add'; 
  displaySectionForm=true;
  hover="true"
  responsive="true"
  striped="true"

  datum: TestModel1[]=[]; 
  apiModel:TestModel2= {
    id: 0,
    email: '',
    phone_number: '',
    name: '',
    status: '',
    avater: ''
  };
  id: number | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  newRecord(){}
  datas=[
  {id:1,avater:'picture',status:'active',name:'imrana',phone_number:'3413222222525', email:'dsfafds@s.yue',state:'kano',country:'fert',usage:"geterfer",period:'jeyster',payment:'saaa', activity:'weert',color:'white'},
  {id:2,avater:'picture',status:'active',name:'imrana',phone_number:'3413222222525', email:'dsfafds@s.yue',state:'kano',country:'fert',usage:"geterfer",period:'jeyster',payment:'saaa', activity:'weert',color:'white'},
  {id:3,avater:'picture',status:'active',name:'imrana',phone_number:'3413222222525', email:'dsfafds@s.yue',state:'kano',country:'fert',usage:"geterfer",period:'jeyster',payment:'saaa', activity:'weert',color:'white'},
  {id:4,avater:'picture',status:'active',name:'imrana',phone_number:'3413222222525', email:'dsfafds@s.yue',state:'kano',country:'fert',usage:"geterfer",period:'jeyster',payment:'saaa', activity:'weert',color:'white'}              
]
// /////////////////////////////////////////////////

 
  

    
  

  // constructor(private addUserEndpoint:AddUserEndpoint) {  
  //   this.loadItem = this.loadItem.bind(this);
  //   this.deleteItem = this.deleteItem.bind(this);
  // }

  // ngOnInit(): void {
   
  //   this.addUserEndpoint.list()
  //   .subscribe({
  //     next: (data) => this.datum = data,
  //     error: (error) => console.log(error),
  //   });
  // }
  showForm() {
   
    this.displayForm = true;
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }
  hideForm() {
    this.displayForm = false;
    this.form?.reset();
  }
  
processForm() {
//   this.save();
}
// save() {
  
//   Swal.showLoading( );
 
//   let httpCall =
//     this.operation === 'Update'
//       ? this.addUserEndpoint.update(this.id,this.apiModel)    
//       : this.addUserEndpoint.create(this.apiModel);
//   httpCall.subscribe(
//     success => {
//       Swal.close();
//       this.updateList(this.id, success.data);  
//       Swal.fire({
//         icon: 'success',
//         title: 'Success!',
//         text: 'Operation successful',
//         customClass: {
//           confirmButton: 'btn btn-success'
//         }
//       });
//       this.resetForm();
//     },
//     error => {
//       Swal.close();
//       console.log(error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Error!!',
//         text: error,
//         customClass: {
//           confirmButton: 'btn btn-danger'
//         }
//       });
//     }
//   );
// }

updateList(id: number, datass: TestModel1) {
  this.datum = this.datum.filter(e => e.id !== id);
  this.datum.push(datass);
  this.datum.sort(function (a, b) {
    return a.id - b.id;
  });
}
  loadItem(id: { row: { data: { id: number; }; }; }) {
    let addUserResource = this.datum.find(
      item => item.id === id.row.data.id
    );
    console.log(addUserResource);
    Object.assign(this.apiModel, addUserResource);
    this.id = id.row.data.id;
    
    
    this.operation = 'Update';
    this.showForm();
  }
  // deleteItem(id) {
  //   Swal.fire({
  //     title: 'Delete',
  //     text: "Are you sure you want to delete this record?",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonText: 'Yes, delete it!',
  //     customClass: {
  //       confirmButton: 'btn btn-primary',
  //       cancelButton: 'btn btn-danger ml-1'
  //     }
  //   }).then(result => {
  //     if (result.value) {
  //       this.addUserEndpoint.delete(id.row.data.id).subscribe(
  //         _ => {
  //           this.datum = this.datum.filter(
  //             e => e.id !== id.row.data.id
  //           );
  //           // this.alert.success('Record deleted');
  //           Swal.fire({
  //             icon: 'success',
  //             title: 'Deleted!',
  //             text: 'Your record has been deleted.',
  //             customClass: {
  //               confirmButton: 'btn btn-success'
  //             }
  //           });
  //         },
  //         error => {
  //           console.log(error);
  //           Swal.close();
  //           Swal.fire({
  //             text:'Process Unsuccessful'+ error.error.message +'error',
  //            icon: 'error',
  //             title: 'Error!', 
  //             customClass: {
  //               confirmButton: 'btn btn-danger'
  //             }});
  //         });
  //     } else if (result.dismiss === Swal.DismissReason.cancel) {
  //     }
  //   });
  // }
  addItem() {
    this.showForm();
    this.resetForm();
  }
  resetForm() {
    this.form?.reset();
    this.operation = "Add"; 
  }
  
}
