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
  getAllGuitars() {
    return this.httpClient.get("http://localhost:3000/guitarras/")
  }

  postCreateGuitar(guitar: any) {
    return this.httpClient.post("http://localhost:3000/guitarras/", guitar, { headers: { "Content-Type": "application/json" } })
  }

  getGuitarsByBranch(branch: string) {

  }

  deleteGuitar(branch: string, model: string) {

  }

}
