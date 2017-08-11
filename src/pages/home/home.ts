import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
	answers = [];

	showQuestionOne: boolean = true;
	showQuestionTwo: boolean = false;
	showQuestionThree: boolean = false;
	showSearchCriteria: boolean = false;
	showRestaurants: boolean = false;


  constructor(public navCtrl: NavController, private http: Http) {
  		

	}

		

		goToQuestionTwo() {
			console.log(this.answers)
			this.showQuestionOne = false;
		    this.showQuestionTwo = true;
		    this.answers.push();
		}

		goToQuestionThree() {
			console.log(this.answers)
		    this.showQuestionTwo = false;
		    this.showQuestionThree = true;
		}

		goToFinal(){
			console.log(this.answers)
			this.showQuestionOne = false;
			this.showQuestionTwo = false;
			this.showQuestionThree = false;
			this.showSearchCriteria = true;
			this.answers.push();

		}

		getRestaurants(){
			console.log(this.answers)
			this.showQuestionOne = false;
			this.showQuestionTwo = false;
			this.showQuestionThree = false;
			this.showSearchCriteria = false;
			this.showRestaurants = true;

			this.http.get('http://localhost:3000/eat').subscribe(response => {
				console.log(response.json())
			})

	

	}
}









