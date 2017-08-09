import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

class Restaurant{
	name: string;
	address: string;
	phone: string;
	price: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
	answers: {};

	// questions: {
	// 	question: "Which location do you want to eat?",
	// 	options: ["Loop", "River North", "Old Town", "Wicker Park"],
	// 	answer: ""
	// },
	// {
	// 	question: "What type of cuisine do you want to eat?",
	// 	options: ["Sushi", "Burgers", "Tacos", "Pizza"],
	// 	answer: ""
	// },
	// {
	// 	question: "What type of cuisine do you want to eat?",
	// 	options: ["Sushi", "Burgers", "Tacos", "Pizza"],
	// 	answer: ""
	// },
	showQuestionOne: boolean = true;
	showQuestionTwo: boolean = false;
	showQuestionThree: boolean = false;


  constructor(public navCtrl: NavController, private http: Http) {
  		


	}


		goToQuestionTwo() {
		    let x = document.getElementById('questionOne')

		    if (x.style.display === 'none') {
		        x.style.display = 'block'
		    } else {
		        x.style.display = 'none'
		    }
		}

		goToQuestionThree() {
		    let x = document.getElementById('questionTwo')

		    if (x.style.display === 'none') {
		        x.style.display = 'block'
		    } else {
		        x.style.display = 'none'
		    }
		}

		// getRestaurants(){
		// 	this.get
		// }


		// goToQuestionTwo(){
		// 	this.showQuestionTwo = true;
		// 	console.log("clicked");
		// }

		// goToQuestionThree(){
		// 	this.showQuestionOne = false;
		// 	this.showQuestionTwo = false;
		// 	this.showQuestionThree = true;
		// }

		// getRestaurants(){

		// }


	
    // 	onSearch(){
  		// console.log('clicked');
  		// let apiKey = '00205583460d0e51c5b2bdc03f62a7c7';
  		// this.http.get('http://food2fork.com/api/search?key=' + apiKey + '&q=').subscribe(response => {
  		// 	console.log(response)
  		// })


  }


