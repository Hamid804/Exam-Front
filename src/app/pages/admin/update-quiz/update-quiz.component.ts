import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  constructor(
    private router:ActivatedRoute, 
    private quizService:QuizService, 
    private categoryService:CategoryService, 
    private snack:MatSnackBar,
    private myRoute:Router) { }

  qId = 0;
  quiz:any;
  categories:any;

  ngOnInit(): void {
    this.qId = this.router.snapshot.params['qid'];
    //alert(this.qId);

    this.quizService.getQuiz(this.qId).subscribe(
      (data:any)=>{
        this.quiz = data;
        console.log(this.quiz);
      },
      (error)=>{
        console.log(error);
      }
    );

    this.categoryService.categories().subscribe(
      (data:any)=>{
        this.categories = data;
      },
      (error)=>{
        alert('Error in loading categories !!');
      }
    );

  }


  //update quiz
  public updateQuiz() {
    if(this.quiz.title.trim() == '' || this.quiz.title == null) {
      this.snack.open("Title required !!",'',{
        duration:3000
      });
      return;
    }

    this.quizService.updateQuiz(this.quiz).subscribe(
      (data:any)=>{
        Swal.fire('Success !!',"Quiz upadted successfully",'success').then((e)=>{
          this.myRoute.navigate(['/admin/quizzes']);
        });
      },
      (error)=>{
        Swal.fire('Error !!','Error in updating quiz','error');
        console.log(error);
      }
    );


  }

}
