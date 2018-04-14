import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ApiClientService {

  constructor(private http: HttpClient) { 

  }

}
