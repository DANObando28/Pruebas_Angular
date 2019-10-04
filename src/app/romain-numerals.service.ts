import { Injectable } from '@angular/core';
import { concat } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RomainNumeralsService {

  constructor() { }


  
  
  ArabictoRoman(numero: number){
    var tabla_valores:number[];
    tabla_valores = [1,4,5,9,10,40,50,90,100,400,500,900,1000]
  
    var tabla_romanos:string[];
    tabla_romanos = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M']
    let resultado = '';
    let i = 0;
    if(numero > 1000 || numero == 0){
      resultado = 'numero invalido';
      return(resultado)
    }
    else{
      while(i < tabla_valores.length){
        if(numero == tabla_valores[i]){
          resultado = resultado + tabla_romanos[i]
          return resultado
        }
        else{
          if(numero < tabla_valores[i]){
            resultado = resultado + tabla_romanos[i-1]
            numero = numero - tabla_valores[i-1]
            i=0
          }
          else{
            i = i +1
          }
        }
      }
    }
    return resultado
  
  }
  
}
