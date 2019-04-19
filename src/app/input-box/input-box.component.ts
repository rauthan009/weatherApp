import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent implements OnInit {
  @Output() cityEmit = new EventEmitter<string>();
  @Input() cityName;
  constructor(private data:AppComponent) { }

  ngOnInit() {
  }

  sendData(){
    console.log(this.cityName);
    this.cityEmit.emit(this.cityName)
    this.data.getCity(this.cityName);
  }

}
