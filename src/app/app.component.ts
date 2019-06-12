import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mean-repo';
  public data$: Observable<any>;
  public users$: Observable<any[]>;
  public devices$: Observable<any[]>;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.data$ = this.http.get('/api/');
    this.users$ = this.http.get<any[]>('/api/users');
    this.devices$ = this.http.get<any[]>('/api/db');
  }
}
