import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
public a: Observable<any>
  constructor(private appservise: AppService) {

   appservise.getMyUsers().subscribe((datas)=>{alert(datas["response"])})

   }

  ngOnInit() {
  }

}
