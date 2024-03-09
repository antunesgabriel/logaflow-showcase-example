import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nft } from 'src/app/modules/dashboard/models/nft';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private readonly mockApiUrl = 'https://6121afb5f5849d0017fb428d.mockapi.io/criptos';

  constructor(private readonly client: HttpClient) {}

  getCriptos(): Observable<Nft[]> {
    const headers = new HttpHeaders();

    headers.append('x-api-client', 'example-header');
    headers.append('Content-Type', 'application/json');

    return this.client.get<Nft[]>(this.mockApiUrl, {
      headers: new HttpHeaders(),
    });
  }

  getInvalidCripto(): Observable<Nft> {
    const headers = new HttpHeaders();

    headers.append('x-api-client', 'example-header');
    headers.append('Content-Type', 'application/json');

    return this.client.get<Nft>(this.mockApiUrl + '/force-error', {
      headers: new HttpHeaders(),
    });
  }
}
