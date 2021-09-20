import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  entireVerses = 'Fragmnet: Mat 8';

  dayOfWeek: string = "";

  ngOnInit() {
    const today = new Date();
    this.dayOfWeek = today.toLocaleDateString(`pl-PL`,{weekday: 'long'});
  }
}
