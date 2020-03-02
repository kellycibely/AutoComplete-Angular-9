import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'autocomplet';
  clientObject: string;
  clientSimples: string;

  options: string[] = ['Angular', 'Angular Material', 'Java', 'Vue', 'Ruby'];

  objectOptions = [
    {name: 'Angular'},
    {name: 'Angular Material'},
    {name: 'Java'},
    {name: 'Vue'}
  ];

  client = new FormControl();
  filteredOptions: Observable<string[]>;

  ngOnInit(){
    this.filteredOptions = this.client.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  private _filter(value: string): string[]{
    const filterValue = value.toLowerCase()
    return this.options.filter(option => option.toLowerCase().includes(filterValue)) 
  }
  

  displayFn(subject){
    return subject ? subject.name : undefined;
  }

  saveFilter(){
    alert(this.client.value);
  }

  saveObject(){
    alert(this.clientObject);
  }

  save(){
    alert(this.clientSimples);
  }
}
