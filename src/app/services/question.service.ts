import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  public getQuestionsOfQuiz(qId:any) {
    return this.http.get(baseUrl+"/question/quiz/all/"+qId);
  }

  //add question
  public addQuestion(question:any) {
    return this.http.post(baseUrl+"/question/",question);
  }

  //delete question
  public deleteQuestion(quesId:any) {
    return this.http.delete(baseUrl+"/question/"+quesId);
  }


}
