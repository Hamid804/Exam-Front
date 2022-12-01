import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

  public quizzes() {
    return this.http.get(baseUrl+"/quiz/");
  }

  //add quiz
  public addQuiz(data:any) {
    return this.http.post(baseUrl+"/quiz/",data);
  }

  //delete quiz
  public deleteQuiz(qId:any) {
    return this.http.delete(baseUrl+"/quiz/"+qId);
  }

  //get the single quiz
  public getQuiz(qId:any) {
    return this.http.get(baseUrl+"/quiz/"+qId);
  }

  //update the quiz
  public updateQuiz(quiz:any) {
    return this.http.put(baseUrl+"/quiz/",quiz);
  }

  //get quizzes of a category
  public getQuizzesOfCategory(cid:any) {
    return this.http.get(baseUrl+"/quiz/category/"+cid);
  }

  //get active quizzes
  public getActiveQuizzes() {
    return this.http.get(baseUrl+"/quiz/active");
  }

  //get active quizzes of a category
  public getActiveQuizzesOfCategory(cid:any) {
    return this.http.get(baseUrl+"/quiz/category/active/"+cid);
  }
}
