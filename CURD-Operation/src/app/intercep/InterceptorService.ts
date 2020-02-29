import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler} from "@angular/common/http";
import { Injectable} from "@angular/core";
import { Observable} from "rxjs"
import { finalize, tap, delay} from "rxjs/operators";
import { dataService } from '../_service/dataService';

@Injectable({
    providedIn: 'root'
  })
// export class interceptorService implements HttpInterceptor {

//     constructor(private loader:dataService){
//     }

//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
//     {
//         let newHeaders = req.headers;
//         const authReq = req.clone();
//         debugger
//         this.loader.show();
//         console.log('INTERCEPTOR');
//         return next.handle(authReq).pipe(
//             delay(5000),
//             tap(()=> console.log("after post"))
//             //,
//            // finalize(() => this.loader.hide())
//         );
//     }
// }


export class TokenInterceptorService implements HttpInterceptor {
   
    // We inject a LoginService
    constructor(private loginService: dataService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       console.log('INTERCEPTOR');
       // We retrieve the token, if any
       const token = "tst";
       let newHeaders = req.headers;
       if (token) {
          // If we have a token, we append it to our new headers
          newHeaders = newHeaders.append('authtoken', token);
       }
       // Finally we have to clone our request with our new headers
       // This is required because HttpRequests are immutable
       const authReq = req.clone({headers: newHeaders});
       // Then we return an Observable that will run the request
       // or pass it to the next interceptor if any
       return next.handle(authReq);
    }
 }