import { Injectable } from '@angular/core';
// import {Http} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { Observable, Subscribable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
//  import { map } from 'rxjs';
// import 'rxjs/add/operator/map';
//  import { map } from 'rxjs/operators';
// import { map, catchError } from "rxjs/operators";
// import 'rxjs/add/operator/switchMap';
import 'rxjs-compat/add/operator/map';



@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  Products=[
    {Image:"assets/Sh8.jpg",Name:"Calvin Klein1", Price:179, Department:"Wommens Shoose"},
    {Image:"assets/Sh2.jpg",Name:"Calvin Klein4", Price:156, Department:"Wommens Shoese"},
    {Image:"assets/Sh3.jpg",Name:"Calvin Klein5", Price:179, Department:"Wommens Shoose"},
    {Image:"assets/Sh4.jpg",Name:"Calvin Klein6", Price:230, Department:"Wommens Shoese"},
    {Image:"assets/Sh5.jpg",Name:"Calvin Klein3", Price:156, Department:"Wommens Shoese"},
    {Image:"assets/Sh6.jpg",Name:"Calvin Klein7", Price:156, Department:"Wommens Shoese"},
    {Image:"assets/Sh7.jpg",Name:"Calvin Klein8", Price:156, Department:"Wommens Shoese"},
    {Image:"assets/Sh1.jpg",Name:"Calvin Klein2", Price:230, Department:"Wommens Shoese"},
    {Image:"assets/Sh9.jpg",Name:"Calvin Klein2", Price:230, Department:"Wommens Shoese"},
    {Image:"assets/Sh1.jpg",Name:"Calvin Klein1", Price:179, Department:"Wommens Shoose"},
    {Image:"assets/Sh2.jpg",Name:"Calvin Klein4", Price:156, Department:"Wommens Shoese"},
    {Image:"assets/Sh3.jpg",Name:"Calvin Klein5", Price:179, Department:"Wommens Shoose"}
    ]

  // Products=[];
  
   GetProducts() {
    return this.Products;
  }
  private baseUrl = 'http://localhost:5095/api/Products';

  constructor(private http : HttpClient) {}

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createProduct(Product: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, Product);
  }

  // updateProduct(id: string, value: any): Observable<Object> {
  //   return this.http.put(`${this.baseUrl}/${id}`, value);
  // }

  updateProduct(Product:object): Observable<Object> {
    return this.http.put(`${this.baseUrl}`, Object);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  // getProductsList(): Subscribable<any> {
  //   return this.http.get(`${this.baseUrl}/Products`);//.map(response => response.toString());
  // }
}

interface Product {
  Image: string ;
  Name: string;
  Price: number;
}

  // getProductsList(){
  //   return this.http.get(`${this.baseUrl}/Products`)
  //   .subscribe((res)=>console.log(res));
  // }

  // getProductsList(){
  //   return this.http.get(`${this.baseUrl}/Products`);//.subscribe((res)=>console.log(res));
  // }

  // fetch(){
  //   var root='http://localhost:5095/api';
  //   var url=root+'/Products';
  //   return this.http.get(url)
  //   //   .subscribe(
  //   //    (res)=>console.log(res)
  //   // );
  // }




  // fetch1(){
  //   var root='http://localhost:5095/api';
  //   var url=root+'/Products';
  //   this.http.get(url)
  //   // map((response: any) => response.json())

  //   // .map(
  //   //   (res)=>res.json())
  //     .subscribe(
  //      (res)=>console.log(res)
  //   );

  //   // .map(res => res.json())
  //   // .map(res=>res.toString)
  // }






















  //baseUrl=http://localhost:5095/;
  // getAll():Observable<Products[]>{
  //   return this.http.get(`${this.baseUrl}/list`)
    
  // }

  // fetch(){
  //   var root='http://localhost:5095/';
  //   var url=root+'Products';
  //   this.http.get(url).subscribe(
  //     (res)=>console.log(res));
  // }

