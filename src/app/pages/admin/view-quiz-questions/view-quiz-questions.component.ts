import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {
  qId:any;
  qTitle:any;
  questions:any=[];

  constructor(private route:ActivatedRoute, private questionService:QuestionService) { }

  ngOnInit(): void {
    this.qId = this.route.snapshot.params['id'];
    this.qTitle = this.route.snapshot.params['title'];

    console.log(this.qId+"   "+this.qTitle)

    this.questionService.getQuestionsOfQuiz(this.qId).subscribe(
      (data:any)=>{
        console.log(data);
        this.questions = data;
      },
      (error)=>{
        console.log(error);
      }
    );
  }


  deleteQuestion(questionId:any) {
    Swal.fire({
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      title: 'Are you sure, wnat to delete this question'
    }).then((result)=>{
      if(result.isConfirmed) {
        this.questionService.deleteQuestion(questionId).subscribe(
          (data:any)=>{
            this.questions = this.questions.filter((q:any)=> q.quesId != questionId);
            Swal.fire("Success",'Successfully deleted','success');
          },
          (error)=>{
            Swal.fire('Error !!','Error in deleting question','error');
          }
        );
      }
    });
  }

}
