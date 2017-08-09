import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';


@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html'
})

export class QuizPage {
	


  constructor(public navCtrl: NavController, private http: Http) {
  		

	}
}