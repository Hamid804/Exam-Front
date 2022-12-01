import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  qId:any;
  qTitle:any;
  question:any= {
    quiz:{},
    content: '',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:''
  };

  constructor(private route:ActivatedRoute, private questionService:QuestionService, private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.qId = this.route.snapshot.params['qId'];
    this.qTitle = this.route.snapshot.params['qTitle'];
    this.question.quiz['qId'] = this.qId;
    console.log(this.qId);
  }

  formSubmit() {
    if(this.question.content.trim() == '' || this.question.content == null) {
      this.snack.open("Content is required !!",'',{
        duration:3000
      });
      return;
    }

    if(this.question.option1.trim() == '' || this.question.option1 == null) {
      this.snack.open("First two option is required !!",'',{
        duration:3000
      });
      return;
    }

    if(this.question.option2.trim() == '' || this.question.option2 == null) {
      this.snack.open("First two option is required !!",'',{
        duration:3000
      });
      return;
    }

    if(this.question.answer.trim() == '' || this.question.answer == null) {
      this.snack.open("Answer is required !!",'',{
        duration:3000
      });
      return;
    }

    this.questionService.addQuestion(this.question).subscribe(
      (data:any)=>{
        Swal.fire('Success','Question added successfully','success');
        this.question.content = '';
        this.question.option1 = '';
        this.question.option2 = '';
        this.question.option3 = '';
        this.question.option4 = '';
        this.question.answer = '';
      },
      (error)=>{
        Swal.fire('Error !!',"Error in adding question",'error');
      }
    );


  }

}
