var input = document.querySelector('#affichage');
var stock = input.value;
var operateur;

//On définit les comportements lies aux boutons//
document.getElementById('boutonc').onclick=function(){
    input.value ="";};
document.getElementById('bouton1').onclick=function(){
    input.value =input.value +"1";};
document.getElementById('bouton2').onclick=function(){
    input.value =input.value+ "2";};
document.getElementById('bouton3').onclick=function(){
    input.value =input.value+"3";};
document.getElementById('bouton4').onclick=function(){
    input.value =input.value+"4";};
document.getElementById('bouton5').onclick=function(){
    input.value =input.value+"5";};
document.getElementById('bouton6').onclick=function(){
    input.value =input.value+"6";};
document.getElementById('bouton7').onclick=function(){
    input.value =input.value+"7";};
document.getElementById('bouton8').onclick=function(){
    input.value =input.value+"8";};
document.getElementById('bouton9').onclick=function(){
    input.value =input.value+"9";};
document.getElementById('bouton0').onclick=function(){
    input.value =input.value+"0";};
document.getElementById('bouton,').onclick=function(){
    input.value =input.value+".";};

//On definit les fonctions associees aux boutons operateurs//
document.getElementById('bouton+').onclick=function(){
    stock = input.value;
    operateur = "+";
    input.value="";
};

document.getElementById('bouton-').onclick=function() {
    stock = input.value;
    operateur = "-";
    input.value = "";
};

document.getElementById('bouton/').onclick=function() {
    stock = input.value;
    operateur = "/";
    input.value = "";
};
document.getElementById('bouton=').onclick=function(){
   if( operateur === "+"){
       input.value=parseFloat(stock)+parseFloat(input.value);
   }else if ( operateur === "-"){
       input.value=parseFloat(stock)-parseFloat(input.value);
   }else if ( operateur === "/"){
       input.value=parseFloat(stock)/parseFloat(input.value);
   }

    input.value =input.value+"";

};


