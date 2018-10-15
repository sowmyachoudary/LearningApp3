import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 city:string="Bangalore";
 
  firstname: string = "Sachin"; 
  mywidth:string="50%" ;
 fontSize: number = 30;  
    mystyles = {  
            'font-weight':'bold',  
            'font-style':'italic',  
            'font-size.px': this.fontSize  
        };    
}
