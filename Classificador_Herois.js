let Nome = "Nyckollas";
let XP = 11900;
let Nivel;
if(XP <= 1000){
   Elo = "Ferro";
}else if(XP > 1000 && XP <= 2000){
   Elo = "Bronze";
}else if(XP > 2001 && XP <= 5000){
    Elo = "Prata";
 }else if(XP > 5001 && XP <= 7000){
    Elo = "Ouro";
 }else if(XP > 7001 && XP <= 8000){
    Elo = "Platina";
 }else if(XP > 8001 && XP <= 9000){
    Elo = "Ascendente";
 }else if(XP > 9001 && XP <= 10000){
    Elo = "Imortal";
 }else{
    Elo = "Radiante";
 }
 console.log('O Herói de nome ' + Nome + ' está no nível de ' + Nivel);
