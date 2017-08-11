import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

class answers{
	cuisine: string;
	location: string;
	budget: string;
}

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

			let apiKey = '00205583460d0e51c5b2bdc03f62a7c7';
  			this.http.get('http://food2fork.com/api/search?key=' + apiKey + '&q=').subscribe(response => {
  			console.log(response.json());

		});
	

}}