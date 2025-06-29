import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  private http = inject(HttpClient);

  private apiUrl: string = environment.apiUrl;
  private authTokenValue = "";

  public setAuthTokenValue(value: string): void {
    this.authTokenValue = value;
  }

  public get<T>(url: string): Observable<T> {
    return this.http.get<T>(this.apiUrl + url, this.getAuthHeaders());
  }

  public post<T>(url: string, body: unknown | null): Observable<T> {
    return this.http.post<T>(this.apiUrl + url, body, this.getAuthHeaders());
  }

  public put<T>(url: string, body: unknown | null): Observable<T> {
    return this.http.put<T>(this.apiUrl + url, body, this.getAuthHeaders());
  }

  public delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(this.apiUrl + url, this.getAuthHeaders());
  }

  public defaultPost<T>(url: string, body: unknown): Observable<T> {
    return this.http.post<T>(this.apiUrl + url, body, this.getDefaultHeaders());
  }

  public downloadBlob<T>(url: string): Observable<T> {
    return this.http.get<T>(this.apiUrl + url, this.getAuthHeadersWithBlob());
  }

  private getAuthHeaders(): object {
    const token = this.authTokenValue;
    if (token) {
      return {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
    } else {
      return {
        headers: {
          "Content-Type": "application/json",
        },
      };
    }
  }

  private getDefaultHeaders(): object {
    const token = this.authTokenValue;
    if (token) {
      return {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    } else {
      return {};
    }
  }

  private getAuthHeadersWithBlob(): object {
    const token = this.authTokenValue;
    const headers = token
      ? {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }
      : {
          "Content-Type": "application/json",
        };

    return {
      headers: headers,
      responseType: "blob" as "json", // Adding the responseType
    };
  }
}
