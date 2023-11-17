import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { eventResponse } from "../models/events.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getEvents(): Observable<eventResponse> {
    return this.http.get<eventResponse>('assets/db.json');
  }
}
