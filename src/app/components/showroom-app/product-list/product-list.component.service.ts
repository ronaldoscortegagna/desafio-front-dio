import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Showroom } from "./model/showroom";
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

export const showroom: Showroom[] = [
    { id: '1', name: 'Cozinha1' , price: 10, quantity: 1, category: "Acao", img:"img1"},
    { id: '2', name: 'Cozinha2' , price: 10, quantity: 1, category: "Acao", img:"img2"},
    { id: '3', name: 'Cozinha3' , price: 10, quantity: 1, category: "Acao", img:"img3"},
];

@Injectable()

export class ShowroomService {
    private url = 'http://localhost:4200/progettati-store';

    HttpOptions = {
        Headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    constructor(private http:HttpClient) {}

    getShowroom() {
        return this.http.get(this.url)
    }
}