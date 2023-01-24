import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators ,FormBuilder} from '@angular/forms'; 
import { TestModel1, TestModel2 } from '../../../api/models/test1.model';  

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

   
  displayForm =false;
  operation = 'Add'; 
   

  datum: TestModel1[]=[]; 
  apiModel:TestModel2= {
    id: undefined,
    name: undefined,
    email: undefined,
    status: undefined,
    avater: undefined,
    phone_number: undefined
  };
  id: number | undefined;
  constructor(private fb: FormBuilder) { }
 
  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
    
  }
  get f() { return this.form.controls; }

  submit() {
    this.submitted = true;
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

 ant (){
  console.log("this is me")
 }
  newRecord(){}
  datas=[
  {id:1,user:'imran',avater:'picture',message:'hhjgjhgd nccsc  cfhhjvcf nbdfgcgf gfdcbhdgbdfc cdkjhgdhugd gdjdghgkdgd',
  status:'active',name:'imrana',phone_number:'3413222222525', email:'dsfafds@s.yue',state:'kano',country:'fert',usage:"geterfer",period:'jeyster',payment:'saaa', activity:'weert',color:'white'},
  {id:2,user:'imran',avater:'picture',message:'hhjgjhgd nccsc  cfhhjvcf nbdfgcgf gfdcbhdgbdfc cdkjhgdhugd gdjdghgkdgd',
  status:'active',name:'imrana',phone_number:'3413222222525', email:'dsfafds@s.yue',state:'kano',country:'fert',usage:"geterfer",period:'jeyster',payment:'saaa', activity:'weert',color:'white'},
  {id:3,user:'imran',avater:'picture',message:'hhjgjhgd nccsc  cfhhjvcf nbdfgcgf gfdcbhdgbdfc cdkjhgdhugd gdjdghgkdgd',
  status:'active',name:'imrana',phone_number:'3413222222525', email:'dsfafds@s.yue',state:'kano',country:'fert',usage:"geterfer",period:'jeyster',payment:'saaa', activity:'weert',color:'white'},
  {id:4,user:'imran',avater:'picture',message:'hhjgjhgd nccsc  cfhhjvcf nbdfgcgf gfdcbhdgbdfc cdkjhgdhugd gdjdghgkdgd',
  status:'active',name:'imrana',phone_number:'3413222222525', email:'dsfafds@s.yue',state:'kano',country:'fert',usage:"geterfer",period:'jeyster',payment:'saaa', activity:'weert',color:'white'}              
]  
showForm()
{
  this.displayForm = true;
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}
  hideForm() {
    this.displayForm = false;
    this.form?.reset();
  }
  
processForm() {
//   this.save();
}
delete(){
  alert('Delete Succesfully')
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

// updateList(id: number, datass: TestModel1) {
//   this.datum = this.datum.filter(e => e.id !== id);
//   this.datum.push(datass);
//   this.datum.sort(function (a, b) {
//     return a.id - b.id;
//   });
// }
  // loadItem( ) {
    // let addUserResource = this.datum.find(
    //   item => item.id === id.row.data.id
    // );
    // console.log(addUserResource);
    // Object.assign(this.apiModel, addUserResource);
    // this.id = id.row.data.id;
    
    
    // this.operation = 'Update';
  //   this.showForm();
  // }
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
    this.displayForm=true;
    this.resetForm();
  }
  resetForm() {
    this.form?.reset();
    this.operation = "Add"; 
  }
 
  
}


