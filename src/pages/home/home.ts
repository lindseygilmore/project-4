import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	answers: {};
	showQuestionOne: boolean = true;
	showQuestionTwo: boolean = false;
	showQuestionThree: boolean = false;


  constructor(public navCtrl: NavController, private http: Http) {
  		


	}

		goToQuestionTwo(){
			this.showQuestionTwo = true;
			console.log("clicked");
		}

		goToQuestionThree(){
			this.showQuestionOne = false;
			this.showQuestionTwo = false;
			this.showQuestionThree = true;
		}

		generateRestaurants(){

		}


	
    // 	onSearch(){
  		// console.log('clicked');
  		// let apiKey = '00205583460d0e51c5b2bdc03f62a7c7';
  		// this.http.get('http://food2fork.com/api/search?key=' + apiKey + '&q=').subscribe(response => {
  		// 	console.log(response)
  		// })


  }


