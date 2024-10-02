//Usei como exemplo os valores de Nome e XP;
let Nome = "Nyckollas";
let XP = 11900;
let Nivel;
if(XP <= 1000){
   Nivel = "Ferro";
}else if(XP > 1000 && XP <= 2000){
   Nivel = "Bronze";
}else if(XP > 2001 && XP <= 5000){
    Nivel = "Prata";
 }else if(XP > 5001 && XP <= 7000){
    Nivel = "Ouro";
 }else if(XP > 7001 && XP <= 8000){
    Nivel = "Platina";
 }else if(XP > 8001 && XP <= 9000){
    Nivel = "Ascendente";
 }else if(XP > 9001 && XP <= 10000){
    Nivel = "Imortal";
 }else{
    Nivel = "Radiante";
 }
 console.log('O Herói de nome ' + Nome + ' está no nível de ' + Nivel);
