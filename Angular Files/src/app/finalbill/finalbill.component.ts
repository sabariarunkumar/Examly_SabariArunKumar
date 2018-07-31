
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-finalbill',
  templateUrl: './finalbill.component.html',
  styleUrls: ['./finalbill.component.css']
})
export class FinalbillComponent implements OnInit {
  public da:any[][];
  constructor(private http: Http) { 
     
  }

// httpdata=[{
// b_id:"sabari"
//   },{
//     b_id:"parame"
//   }]
  f_ans;
  index;
  refr;
  ngOnInit() {
    
    this.http.get('http://localhost:1337/')
    .pipe(map(res => res.json()))
    .subscribe(f_ans => this.f_ans = f_ans);
    
    this.refr=this.f_ans.b_id[0];

    
  }

  


}
