import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { INavData } from '@coreui/angular';
import { TestModel1, TestModel2 } from 'src/app/api/models/test1.model';   
@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit {
  
    form!: FormGroup ; 

    displayForm = false;
    operation = 'Add'; 
    // displaySectionForm=true;
    // hover="true"
    // responsive="true"
    // striped="true"
  
    datum: TestModel1[]=[]; 
    // apiModel:TestModel2= {
    //   id: 0,
    //   email: '',
    //   phone_number: '',
    //   name: '',
    //   status: '',
    //   avater: ''
    // };
    // id: number | undefined;

    constructor() { }
  ngOnInit() {
  this.form= new FormGroup({ 
    'state': new FormControl(null,[Validators.required,Validators.maxLength(20)])
  })
  }
    
     
  
  datas=[
    {id:1,user:'imran',avater:'picture',message:'hhjgjhgd nccsc  cfhhjvcf nbdfgcgf gfdcbhdgbdfc cdkjhgdhugd gdjdghgkdgd',
    status:'active',name:'imrana',phone_number:'3413222222525', email:'dsfafds@s.yue',state:'Abia',country:'fert',usage:"geterfer",period:'jeyster',payment:'saaa', activity:'weert',color:'white'},
    {id:2,user:'imran',avater:'picture',message:'hhjgjhgd nccsc  cfhhjvcf nbdfgcgf gfdcbhdgbdfc cdkjhgdhugd gdjdghgkdgd',
    status:'active',name:'imrana',phone_number:'3413222222525', email:'dsfafds@s.yue',state:'sokoto',country:'fert',usage:"geterfer",period:'jeyster',payment:'saaa', activity:'weert',color:'white'},
    {id:3,user:'imran',avater:'picture',message:'hhjgjhgd nccsc  cfhhjvcf nbdfgcgf gfdcbhdgbdfc cdkjhgdhugd gdjdghgkdgd',
    status:'active',name:'imrana',phone_number:'3413222222525', email:'dsfafds@s.yue',state:'Niger',country:'fert',usage:"geterfer",period:'jeyster',payment:'saaa', activity:'weert',color:'white'},
    {id:4,user:'imran',avater:'picture',message:'hhjgjhgd nccsc  cfhhjvcf nbdfgcgf gfdcbhdgbdfc cdkjhgdhugd gdjdghgkdgd',
    status:'active',name:'imrana',phone_number:'3413222222525', email:'dsfafds@s.yue',state:'Zamfara',country:'fert',usage:"geterfer",period:'jeyster',payment:'saaa', activity:'weert',color:'white'}              
  ]
    showForm() {
     
      this.displayForm = true;
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
    hideForm() {
      this.displayForm = false;
      this.form?.reset();
    }
    
  processForm() {
     this.save();
  }
    save() {
    
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
  }
  
  updateList(id: number, datass: TestModel1) {
    this.datum = this.datum.filter(e => e.id !== id);
    this.datum.push(datass);
    this.datum.sort(function (a, b) {
      return a.id - b.id;
    });
  }
    loadItem(id: any ) {
      this.form.setValue({
         form:this.datas,
      })
      this.showForm();
    }
    
    addItem() {
      this.showForm();
      this.resetForm();
    }
    resetForm() {
      this.form.reset();
      this.operation = "Add"; 
    }
   
  
  }