import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers: any;
  newHeaders: any;

  constructor(private http: HttpClient) {
    let token = localStorage.getItem('USERINFO');
    this.headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
    this.newHeaders = {
      'Accept': 'application/json'
    }
   }
   login(Data): Observable<any>{
    return this.http.post('http://localhost:8000/api/login', Data, {headers: this.headers})
    .pipe(catchError((error, caught) => {
      return of (error);
    }) as any);
  }

   saveUser (data): Observable<any> {
    return this.http.post('http://localhost:8000/api/save-resume', data, { headers: this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  listResume (page,keyword): Observable<any> {
    return this.http.post('http://localhost:8000/api/list-resume', {
      page:page, 
      keyword: keyword
    }, { headers:this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  deleteInfo (userId): Observable<any>{
    return this.http.post('http://localhost:8000/api/delete-info', { userId:userId }, {headers: this.headers})
    .pipe(catchError((error, caught) => {
      return of (error);
    }) as any);
  }

  editInfo (data): Observable<any>{
    return this.http.post('http://localhost:8000/api/edit-info', data , {headers: this.headers})
    .pipe(catchError((error, caught) => {
      return of (error);
    }) as any);
  }

  Data (detailId): Observable<any>{
    return this.http.post('http://localhost:8000/api/get-edit-info', {detailId: detailId} , {headers: this.headers})
    .pipe(catchError((error, caught) => {
      return of (error);
    }) as any);
  }


  saveAbout (data):  Observable<any>{
    return this.http.post('http://localhost:8000/api/save-about',data, { headers: {
      'Content-Type': 'multipart/form-data; charset=utf-8'
    } })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  listAbout (page):  Observable<any> {
    return this.http.post('http://localhost:8000/api/list-about',{page:page}, { headers:this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  editAboutInfo (data):  Observable<any> {
    return this.http.post('http://localhost:8000/api/edit-about-info',data, { headers:this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  getAboutData (detailId):  Observable<any> {
    return this.http.post('http://localhost:8000/api/get-edit-info',{detailId: detailId} , { headers:this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  saveBusiness (data): Observable<any> {
    return this.http.post('http://localhost:8000/api/save-business', data, { headers: this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  listBusiness (page):  Observable<any> {
    return this.http.post('http://localhost:8000/api/list-business',{page:page}, { headers:this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  saveJob (data): Observable<any> {
    return this.http.post('http://localhost:8000/api/save-job', data, { headers: this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  listJob (page):  Observable<any> {
    return this.http.post('http://localhost:8000/api/list-job',{page:page}, { headers:this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  editJobInfo (data):  Observable<any> {
    return this.http.post('http://localhost:8000/api/edit-job-info',data, { headers:this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  jobGetData (detailId): Observable<any>{
    return this.http.post('http://localhost:8000/api/get-job-edit-info', {detailId: detailId} , {headers: this.headers})
    .pipe(catchError((error, caught) => {
      return of (error);
    }) as any);
  }

  deleteJob (detailId): Observable<any>{
    return this.http.post('http://localhost:8000/api/delete-job-info', { detailId:detailId }, {headers: this.headers})
    .pipe(catchError((error, caught) => {
      return of (error);
    }) as any);
  }

  saveVehicle (data): Observable<any> {
    return this.http.post('http://localhost:8000/api/save-vehicle', data, { headers: this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  getListVehicle (page):  Observable<any> {
    return this.http.post('http://localhost:8000/api/list-vehicle',{page:page}, { headers:this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  editVehicleInfo (data):  Observable<any> {
    return this.http.post('http://localhost:8000/api/edit-vehicle-info',data, { headers:this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  vehicleGetData (detailId): Observable<any>{
    return this.http.post('http://localhost:8000/api/get-vehicle-edit-info', {detailId: detailId} , {headers: this.headers})
    .pipe(catchError((error, caught) => {
      return of (error);
    }) as any);
  }

  deleteVehicle (vehicleId): Observable<any>{
    return this.http.post('http://localhost:8000/api/delete-vehicle-info', { vehicleId:vehicleId }, {headers: this.headers})
    .pipe(catchError((error, caught) => {
      return of (error);
    }) as any);
  }

  downloadPdf(userId): Observable<any>{
    return this.http.post('http://localhost:8000/api/download-pdf', {userId: userId}, {headers: this.headers})
    .pipe(catchError((error, caught) => {
      return of (error);
    }) as any);
  }

  downloadVehiclePdf(vehicleId): Observable<any>{
    return this.http.post('http://localhost:8000/api/download-vehicle-pdf', {vehicleId: vehicleId}, {headers: this.headers})
    .pipe(catchError((error, caught) => {
      return of (error);
    }) as any);
  }

  downloadJobPdf(jobId): Observable<any>{
    return this.http.post('http://localhost:8000/api/download-job-pdf', {jobId: jobId}, {headers: this.headers})
    .pipe(catchError((error, caught) => {
      return of (error);
    }) as any);
  }

  

  loginPage(Data): Observable<any>{
    return this.http.post('http://localhost:8000/api/login-page', Data, {headers: this.headers})
    .pipe(catchError((error, caught) => {
      return of (error);
    }) as any);
  }

  saveRegistration (data): Observable<any> {
    return this.http.post('http://192.168.2.9:8080/auth/social', data, { headers: this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  getCountries():  Observable<any> {
    return this.http.post('http://localhost:8000/api/get-countries',{}, { headers:this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }
  getStates(countryId):  Observable<any> {
    return this.http.post('http://localhost:8000/api/get-states',{countryId:countryId}, { headers:this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  getcities(stateId):  Observable<any> {
    return this.http.post('http://localhost:8000/api/get-cities',{stateId:stateId}, { headers:this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  saveInformation (data): Observable<any> {
    return this.http.post('http://localhost:8000/api/save-information', data, { headers: this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  listInformation (page):  Observable<any> {
    return this.http.post('http://localhost:8000/api/list-information',{page:page}, { headers:this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  editInformation (data): Observable<any>{
    return this.http.post('http://localhost:8000/api/edit-information', data , {headers: this.headers})
    .pipe(catchError((error, caught) => {
      return of (error);
    }) as any);
  }

  informationGetData (detailId): Observable<any>{
    return this.http.post('http://localhost:8000/api/get-information-data', {detailId: detailId} , {headers: this.headers})
    .pipe(catchError((error, caught) => {
      return of (error);
    }) as any);
  }

  deleteInformation (detailId): Observable<any>{
    return this.http.post('http://localhost:8000/api/delete-information', { detailId:detailId }, {headers: this.headers})
    .pipe(catchError((error, caught) => {
      return of (error);
    }) as any);
  }

  getCountriesInfo():  Observable<any> {
    return this.http.post('http://localhost:8000/api/get-countries',{}, { headers:this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  getStatesInfo(countryId):  Observable<any> {
    return this.http.post('http://localhost:8000/api/get-states',{countryId:countryId}, { headers:this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  getCitiesInfo(stateId):  Observable<any> {
    return this.http.post('http://localhost:8000/api/get-cities',{stateId:stateId}, { headers:this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  downloadInformationPdf(userId): Observable<any>{
    return this.http.post('http://localhost:8000/api/download-information-pdf', {userId: userId}, {headers: this.headers})
    .pipe(catchError((error, caught) => {
      return of (error);
    }) as any);
  }

  Registration (data): Observable<any> {
    return this.http.post('http://localhost:8000/api/registration', data, { headers: this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  loginRegistration(Data): Observable<any>{
    return this.http.post('http://localhost:8000/api/login-registration', Data, {headers: this.headers})
    .pipe(catchError((error, caught) => {
      return of (error);
    }) as any);
  }

  // HttpInterceptor(Data): Observable<any>{
  //   return this.http.post('http://localhost:8000/api/http-interceptor', Data, {headers: this.headers})
  //   .pipe(catchError((error, caught) => {
  //     return of (error);
  //   }) as any);
  // } 

  dashboard (data): Observable<any> {
    return this.http.post('http://localhost:8000/api/dashboard', data, { headers: this.headers })
    .pipe(catchError((error, caught) => {
      return of(error);
    }) as any);
  }

  /**
   * Is Auth check for user
   * @param: NULL
   */
  // isAuth() {
  //   try {
  //     if (localStorage.user_login) {
  //       if (
  //         JSON.parse(localStorage.user_login) &&
  //         JSON.parse(localStorage.user_login).token
  //       ) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     }
  //   } catch (err) {
  //     return false;
  //   }
  // }

}
