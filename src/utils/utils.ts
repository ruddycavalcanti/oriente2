import { Injectable } from '@angular/core';
 
@Injectable()
export class Utils {

 public horaCadastro:any='';

public month:any='';




  get getDataAtual():string{
      var date = new Date();


          var dia:any;
          var diaNumber = date.getDate();
          if(diaNumber < 10){
            dia = diaNumber;
            dia  = '0' + dia;

          }else{
            dia = date.getDate();
          }


          var mes:any;
          var mesNumber = date.getMonth()+1;

          if (mesNumber < 10) {
            mes = mesNumber;
            mes = '0' + mes;
        }else{
            mes = date.getMonth()+1;
          }  


          var ano = date.getFullYear();
          

         return this.horaCadastro =  ano + "-" + mes + "-" + dia ;
  }




  get getTime():string{
      var date = new Date();

      var horaAtual = date.getHours();

      var minutoAtual:any;

      var minutoAtualNumber = date.getMinutes();
     if(minutoAtualNumber < 10){
            minutoAtual = minutoAtualNumber;
            minutoAtual  = '0' + minutoAtual;

          }else{
            minutoAtual = date.getMinutes();
          }  

      var segundoAtual:any;

      var segundoAtualNumber = date.getSeconds();
      if(segundoAtualNumber < 10){
            segundoAtual = segundoAtualNumber;
            segundoAtual  = '0' + segundoAtual;

          }else{
            segundoAtual = date.getSeconds();
          }    



          var dia:any;
          var diaNumber = date.getDate();
          if(diaNumber < 10){
            dia = diaNumber;
            dia  = '0' + dia;

          }else{
            dia = date.getDate();
          }


          var mes:any;
          var mesNumber = date.getMonth()+1;

          if (mesNumber < 10) {
            mes = mesNumber;
            mes = '0' + mes;
        }else{
            mes = date.getMonth()+1;
          }  


          var ano = date.getFullYear();
          

         return this.horaCadastro =  dia + "/" + mes + "/" + ano +  " " + horaAtual +  ":" + minutoAtual + ":" + segundoAtual;
  }

 
 
}