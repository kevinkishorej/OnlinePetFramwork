import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserProfile } from './UserProfile';
import { UserProduct } from './UserProduct';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})


export class MainServicesService {

  constructor(private http:HttpClient) { }

  helper = new JwtHelperService;
  toggel : boolean;
  modelDataSubject = new Subject<any>();

  private Detaile = new Subject<string>();
  ProdectDetaile$ = this.Detaile.asObservable();

   login(profile):Observable<UserProfile[]>{
    return this.http.post<UserProfile[]>("log_in",profile)
   }

   createProfile(USERFORM):Observable<UserProfile[]>{
    return this.http.post<UserProfile[]>("sig-up",USERFORM)
   }

   tokenStorage(token:any){
    localStorage.setItem('key',token)
    
  }

   getProfile():Observable<UserProfile[]>{
     const token = localStorage.getItem("key");
     const HttpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': token
    });
    return this.http.get<UserProfile[]>("profile",{headers:HttpHeader})
   }

   logout(){
     localStorage.clear();
   }

   profilelock(){
    const token = localStorage.getItem('key')
   return !this.helper.isTokenExpired(token)
  }

   postImage(data:any):Observable<UserProfile[]>{
    return this.http.put<UserProfile[]>("profilePic",data)
   }

   updatemethod(USERFORM):Observable<UserProfile[]>{
    return this.http.put<UserProfile[]>("profile-update",USERFORM)
   }

   productpost(product):Observable<UserProfile[]>{
    return this.http.post<UserProfile[]>("productinfo",product)
   }

   getallAdd():Observable<any>{
     return this.http.get("getallAD")
   }
//get Product Details......
//currenly it is not working.....
   getProductDetail(id):Observable<UserProduct[]>{
     const _id = id
     const HttpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'id': _id
    });
    return this.http.get<UserProduct[]>("productDetail",{headers:HttpHeader})
  };

//get Product Details......
  getProductDetailById(id):Observable<UserProduct[]>{
    
   return this.http.get<UserProduct[]>('productDetail/'+id);
 }

//DeletMethod...
  Deletemethod(_id:string):Observable<UserProduct[]>{
    return this.http.delete<UserProduct[]>("deleteme",{params: {_id}});
  }

  test(data:any){
    this.Detaile.next(data);
  }
}
