import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService, private snack:MatSnackBar) { }

  public user= {
    username:'',
    password:'',
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
    profile:''
  }

  ngOnInit(): void {
  }

  formSubmit() {
    console.log(this.user);
    if(this.user.username=='' || this.user.username==null || this.user.password=='' || this.user.firstname=='' || this.user.lastname=='' || this.user.email=='' || this.user.phone=='') {
      //alert("All fields are required !!");
      this.snack.open("All fields are required !!",'ok',{
        duration:3000,
        verticalPosition:'bottom',
        horizontalPosition:'center'
      });
      return;
    }

    //add user: user service
    this.userService.addUser(this.user).subscribe(
    (data:any)=>{
      //success
      console.log(data);
      //alert("success");
      Swal.fire('Successfully registered !!','User id is '+data.id,'success');
    },
    (error)=>{
      console.log(error.error.text);
      //console.log(error.text);
      this.snack.open(error.error.text,'ok',{
        duration:5000
      })
    }
    );


  }


  

}
