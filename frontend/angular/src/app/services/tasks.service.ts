import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  static modelo: any;
  static query: any;
  static deleteOne: any;
  static send(arg0: string) {
    throw new Error('Method not implemented.');

  }

  constructor(private httpClient: HttpClient) { }
  getAllUsername() {
    return this.httpClient.get("http://localhost:8080/Username/")
  }

  postCreateUsername(Username: any) {
    return this.httpClient.post("http://localhost:8080/Username/", Username, { headers: { "Content-Type": "application/json" } })
  }

  getUsernameByBranch(branch: string) {

  }

  deleteUsername(branch: string, model: string) {

  }

}
