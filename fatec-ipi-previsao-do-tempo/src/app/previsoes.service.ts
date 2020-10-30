import { Injectable, Input } from '@angular/core';
import { Previsao } from './model/previsao';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class PrevisoesService {

@Input() cidade;


constructor(private httpClient: HttpClient) { }
/*
public obterPrevisoes(): Observable<Previsao[]> {
  return this.httpClient.get<Previsao[]>('https://api.openweathermap.org/data/2.5/forecast?q=itu&appid=e94601b62dd53a82bffcbadd23449392&units=metric&lang=pt_br&cnt=16');
  }*/

public obterPrevisoes(cidade): Observable<Previsao[]> {
    return this.httpClient.get<Previsao[]>('https://api.openweathermap.org/data/2.5/forecast?q='+cidade+'&appid=e94601b62dd53a82bffcbadd23449392&units=metric&lang=pt_br&cnt=16');
    }



}
