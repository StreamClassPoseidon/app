import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserModel } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class ServiceProfile {
  private URL = 'http://localhost:3000/users/plan';
  constructor(private http: HttpClient, private authService: AuthService) {}

  changePlan(form: FormData): Observable<any> {
    const userId = this.authService.user?.id;
    return this.http.put<UserModel>(`${this.URL}/${userId}`, form).pipe(
      map((user) => {
        return new UserModel(user);
      })
    );
  }
}
