import { Component } from '@angular/core';
import { RomainNumeralsService } from './romain-numerals.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  numero:number;
  constructor(private RomainNumeralService: RomainNumeralsService) { }
  OnSubmit(form: NgForm){
    this.RomainNumeralService.ArabictoRoman(form.value);
    console.log(form.value);
    console.log('s');

  }

}
