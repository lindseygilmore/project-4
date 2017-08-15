import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

class Answer {
	price: number;
	location: string;
	cuisine: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
	answers: Answer = new Answer();

	showIntro: boolean = true;
	showQuestionOne: boolean = false;
	showQuestionTwo: boolean = false;
	showQuestionThree: boolean = false;
	showSearchCriteria: boolean = false;
	showRestaurants: boolean = false;

	// locationNamesAndCoords = {
	// 	westLoop: [41.8825, -87.6447],
	// 	riverNorth: [41.8924, -87.6341],
	// 	wickerPark: [41.9088, -87.6796],
	// 	Loop: [41.8786, -87.6251]
	// }


  constructor(public navCtrl: NavController, private http: Http) {
  		

	}

		goToQuestionOne() {
			this.showIntro = false;
			this.showQuestionOne = true;
		}

		goToQuestionTwo() {
			console.log(this.answers)
			this.showQuestionOne = false;
		    this.showQuestionTwo = true;
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

		}

		getRestaurants(){
			var price = this.answers.price;
			var cuisine = this.answers.cuisine;
			var location = this.answers.location;


			console.log(this.answers)
			this.showQuestionOne = false;
			this.showQuestionTwo = false;
			this.showQuestionThree = false;
			this.showSearchCriteria = false;
			this.showRestaurants = true;

			this.http.get('http://localhost:3000/eat?price=' + price + "&cuisine=" + cuisine + "&location=" + location).subscribe(response => {
				var restaurant = response;
				console.log(response.json());

				// var name = restaurant[0].name;
				// console.log(restaurant[0].name);

				console.log();

			});

	

	}
}









