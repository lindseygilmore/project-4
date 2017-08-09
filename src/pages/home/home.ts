import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

	
}
   //  	onSearch(){
  	// 	console.log('clicked');
  	// 	let apiKey = '00205583460d0e51c5b2bdc03f62a7c7';
  	// 	this.http.get('http://food2fork.com/api/search?key=' + apiKey + '&q=').subscribe(response => {
  	// 		console.log(response)
  	// 	})
  	// }

}
