
var t1 = document.getElementById("t1");
var t2 = document.getElementById("t2");
var t3 = document.getElementById("t3");
var t4 = document.getElementById("t4");
var t5 = document.getElementById("t5");
var t6 = document.getElementById("t6");
var t7 = document.getElementById("t7");
var t8 = document.getElementById("t8");
var t9 = document.getElementById("t9");
var uberschrift = document.getElementById("uberschrift");
var platzhalterT;
var noClick = 0;
var zahler = 9;
t1.onclick = function()
{functionT0()};
t2.onclick = function()
{functionT1()};
t3.onclick = function()
{functionT2()};
t4.onclick = function()
{functionT3()};
t5.onclick = function()
{functionT4()};
t6.onclick = function()
{functionT5()};
t7.onclick = function()
{functionT6()};
t8.onclick = function()
{functionT7()};
t9.onclick = function()
{functionT8()};

function functionT0() {
  if((t1.innerHTML == "&nbsp;") && (noClick!==1) && (zahler%2 !==0)){
    //Setzt Feld
    zahler = zahler + 1;
    t1.innerHTML = "X";
    //Gegner ist dran
    setTimeout(function() {Ki();},(Math.random()*700));
    setTimeout(function() {stopp();},705);
  }
  else{
    //Klick nicht zulassen
    if(t1.innerHTML=="X")
      t1.innerHTML = "X";
    else if(t1.innerHTML == "O")
      t1.innerHTML = "O";
    else
      t1.innerHTML = "&nbsp;";
  }
}

function functionT1() {
  if((t2.innerHTML == "&nbsp;") && (noClick!==1) && (zahler%2 !==0)){
    //Setzt Feld
    zahler = zahler + 1;
    t2.innerHTML = "X";
    //Gegner ist dran
    setTimeout(function() {Ki();},(Math.random()*700));
    setTimeout(function() {stopp();},705);
  }
  else{
    //Klick nicht zulassen
    if(t2.innerHTML=="X")
      t2.innerHTML = "X";
    else if(t2.innerHTML == "O")
      t2.innerHTML = "O";
    else
      t2.innerHTML = "&nbsp;";
  }
}

function functionT2() {
  if((t3.innerHTML == "&nbsp;") && (noClick!==1) && (zahler%2 !==0)){
    //Setzt Feld
    zahler = zahler + 1;
    t3.innerHTML = "X";
    //Gegner ist dran
    setTimeout(function() {Ki();},(Math.random()*700));
    setTimeout(function() {stopp();},705);
  }
  else{
    //Klick nicht zulassen
    if(t3.innerHTML=="X")
      t3.innerHTML = "X";
    else if(t3.innerHTML == "O")
      t3.innerHTML = "O";
    else
      t3.innerHTML = "&nbsp;";
  }
}

function functionT3() {
  if((t4.innerHTML == "&nbsp;") && (noClick!==1) && (zahler%2 !==0)){
    //Setzt Feld
    zahler = zahler + 1;
    t4.innerHTML = "X";
    //Gegner ist dran
    setTimeout(function() {Ki();},(Math.random()*700));
    setTimeout(function() {stopp();},705);
  }
  else{
    //Klick nicht zulassen
    if(t4.innerHTML=="X")
      t4.innerHTML = "X";
    else if(t4.innerHTML == "O")
      t4.innerHTML = "O";
    else
      t4.innerHTML = "&nbsp;";
  }
}

function functionT4() {
  if((t5.innerHTML == "&nbsp;") && (noClick!==1) && (zahler%2 !==0)){
    //Setzt Feld
    t5.innerHTML = "X";
    zahler = zahler + 1;
    //Gegner ist dran
    setTimeout(function() {Ki();},(Math.random()*700));
    setTimeout(function() {stopp();},705);
  }
  else{
    //Klick nicht zulassen
    if(t5.innerHTML=="X")
      t5.innerHTML = "X";
    else if(t5.innerHTML == "O")
      t5.innerHTML = "O";
    else
      t5.innerHTML = "&nbsp;";
  }
}

function functionT5() {
  if((t6.innerHTML == "&nbsp;") && (noClick!==1) && (zahler%2 !==0)){
    //Setzt Feld
    zahler = zahler + 1;
    t6.innerHTML = "X";
    //Gegner ist dran
    setTimeout(function() {Ki();},(Math.random()*700));
    setTimeout(function() {stopp();},705);
  }
  else{
    //Klick nicht zulassen
    if(t6.innerHTML=="X")
      t6.innerHTML = "X";
    else if(t6.innerHTML == "O")
      t6.innerHTML = "O";
    else
      t6.innerHTML = "&nbsp;";
  }
}

function functionT6() {
  if((t7.innerHTML == "&nbsp;") && (noClick!==1) && (zahler%2 !==0)){
    //Setzt Feld
    zahler = zahler + 1;
    t7.innerHTML ="X";
    //Gegner ist dran
    setTimeout(function() {Ki();},(Math.random()*700));
    setTimeout(function() {stopp();},705);
  }
  else{
    //Klick nicht zulassen
    if(t7.innerHTML=="X")
      t7.innerHTML = "X";
    else if(t7.innerHTML == "O")
      t7.innerHTML = "O";
    else
      t7.innerHTML = "&nbsp;";
  }
}

function functionT7() {
  if((t8.innerHTML == "&nbsp;") && (noClick!==1) && (zahler%2 !==0)){
    //Setzt Feld
    zahler = zahler + 1;
    t8.innerHTML ="X";
    //Gegner ist dran
    setTimeout(function() {Ki();},(Math.random()*700));
    setTimeout(function() {stopp();},705);
  }
  else{
    //Klick nicht zulassen
    if(t8.innerHTML=="X")
      t8.innerHTML = "X";
    else if(t8.innerHTML == "O")
      t8.innerHTML = "O";
    else
      t8.innerHTML = "&nbsp;";
  }
}

function functionT8() {
  if((t9.innerHTML == "&nbsp;") && (noClick!==1) && (zahler%2 !==0)){
    //Setzt Feld
    zahler = zahler + 1;
    t9.innerHTML = "X";
    //Gegner ist dran
    setTimeout(function() {Ki();},(Math.random()*700));
    setTimeout(function() {stopp();},705);
  }
  else{
    //Klick nicht zulassen
    if(t9.innerHTML=="X")
      t9.innerHTML = "X";
    else if(t9.innerHTML == "O")
      t9.innerHTML = "O";
    else
      t9.innerHTML = "&nbsp;";
  }
}

function stopp(){
  if((t1.innerHTML == "O") && (t2.innerHTML == "O") && (t3.innerHTML == "O")){
    noClick = 1;
    uberschrift.style.color="red";
    uberschrift.innerHTML ="Du hast verloren";
    t1.style.color = "red";
    t2.style.color = "red";
    t3.style.color = "red";
    setTimeout(function(){location.reload();}, 2000);
  }
  else if((t4.innerHTML == "O") && (t5.innerHTML == "O") && (t6.innerHTML == "O")){
    noClick = 1;
    uberschrift.style.color="red";
    uberschrift.innerHTML ="Du hast verloren";
    t4.style.color = "red";
    t5.style.color = "red";
    t6.style.color = "red";
    setTimeout(function() {location.reload();}, 2000);
  }
  else if((t7.innerHTML == "O") && (t8.innerHTML == "O") && (t9.innerHTML == "O")){
    noClick = 1;
    uberschrift.style.color="red";
    uberschrift.innerHTML ="Du hast verloren";
    t7.style.color = "red";
    t8.style.color = "red";
    t9.style.color = "red";
    setTimeout(function() {location.reload();}, 2000);
  }
  else if((t1.innerHTML == "O") && (t4.innerHTML == "O") && (t7.innerHTML == "O")){
    noClick = 1;
    uberschrift.style.color="red";
    uberschrift.innerHTML ="Du hast verloren";
    t1.style.color = "red";
    t4.style.color = "red";
    t7.style.color = "red";
    setTimeout(function() {location.reload();}, 2000);
  }
  else if((t2.innerHTML == "O") && (t5.innerHTML == "O") && (t8.innerHTML == "O")){
    noClick = 1;
    uberschrift.style.color="red";
    uberschrift.innerHTML ="Du hast verloren";
    t2.style.color = "red";
    t5.style.color = "red";
    t8.style.color = "red";
    setTimeout(function() {location.reload();}, 2000);
  }
  else if((t3.innerHTML == "O") && (t6.innerHTML == "O") && (t9.innerHTML == "O")){
    noClick = 1;
    uberschrift.style.color="red";
    uberschrift.innerHTML ="Du hast verloren";
    t3.style.color = "red";
    t6.style.color = "red";
    t9.style.color = "red";
    setTimeout(function() {location.reload();}, 2000);
  }
  else if((t1.innerHTML == "O") && (t5.innerHTML == "O") && (t9.innerHTML == "O")){
    noClick = 1;
    uberschrift.style.color="red";
    uberschrift.innerHTML ="Du hast verloren";
    t1.style.color = "red";
    t5.style.color = "red";
    t9.style.color = "red";
    setTimeout(function() {location.reload();}, 2000);
  }
  else if((t3.innerHTML == "O") && (t5.innerHTML == "O") && (t7.innerHTML == "O")){
    noClick = 1;
    uberschrift.style.color="red";
    uberschrift.innerHTML ="Du hast verloren";
    t3.style.color = "red";
    t5.style.color = "red";
    t7.style.color = "red";
    setTimeout(function() {location.reload();}, 2000);
  }
  else if( (t1.innerHTML!= "&nbsp;") && (t2.innerHTML!= "&nbsp;") && (t3.innerHTML!= "&nbsp;") &&
           (t4.innerHTML!= "&nbsp;") && (t5.innerHTML!= "&nbsp;") && (t6.innerHTML!= "&nbsp;") &&
           (t7.innerHTML!= "&nbsp;") && (t8.innerHTML!= "&nbsp;") && (t9.innerHTML!= "&nbsp;")){
             noClick = 1;
             t1.style.color="grey";
             t2.style.color="grey";
             t3.style.color="grey";
             t4.style.color="grey";
             t5.style.color="grey";
             t6.style.color="grey";
             t7.style.color="grey";
             t8.style.color="grey";
             t9.style.color="grey";
             uberschrift.style.color="grey";
             uberschrift.innerHTML ="Unenschieden";
             setTimeout(function() {location.reload();}, 2000);
           }
}

function Ki(){
  //Sieg
  if((t1.innerHTML == "O") && (t4.innerHTML == "O") && (t7.innerHTML == "&nbsp;")){
    t7.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t4.innerHTML == "O") && (t7.innerHTML == "O") && (t1.innerHTML == "&nbsp;")){
    t1.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t1.innerHTML == "O") && (t7.innerHTML == "O") && (t4.innerHTML == "&nbsp;")){
    t4.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t2.innerHTML == "O") && (t5.innerHTML == "O") && (t8.innerHTML == "&nbsp;")){
    t8.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t5.innerHTML == "O") && (t8.innerHTML == "O") && (t2.innerHTML == "&nbsp;")){
    t2.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t2.innerHTML == "O") && (t8.innerHTML == "O") && (t5.innerHTML == "&nbsp;")){
    t5.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t3.innerHTML == "O") && (t6.innerHTML == "O") && (t9.innerHTML == "&nbsp;")){
    t9.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t6.innerHTML == "O") && (t9.innerHTML == "O") && (t3.innerHTML == "&nbsp;")){
    t3.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t3.innerHTML == "O") && (t9.innerHTML == "O") && (t6.innerHTML == "&nbsp;")){
    t6.innerHTML = "O";
    zahler = zahler+1;
  }
  //Horizontal
  else if((t1.innerHTML == "O") && (t2.innerHTML == "O") && (t3.innerHTML == "&nbsp;")){
    t3.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t2.innerHTML == "O") && (t3.innerHTML == "O") && (t1.innerHTML == "&nbsp;")){
    t1.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t1.innerHTML == "O") && (t3.innerHTML == "O") && (t2.innerHTML == "&nbsp;")){
    t2.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t4.innerHTML == "O") && (t5.innerHTML == "O") && (t6.innerHTML == "&nbsp;")){
    t6.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t5.innerHTML == "O") && (t6.innerHTML == "O") && (t4.innerHTML == "&nbsp;")){
    t4.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t4.innerHTML == "O") && (t6.innerHTML == "O") && (t5.innerHTML == "&nbsp;")){
    t5.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t7.innerHTML == "O") && (t8.innerHTML == "O") && (t9.innerHTML == "&nbsp;")){
    t9.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t8.innerHTML == "O") && (t9.innerHTML == "O") && (t7.innerHTML == "&nbsp;")){
    t7.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t7.innerHTML == "O") && (t9.innerHTML == "O") && (t8.innerHTML == "&nbsp;")){
    t8.innerHTML = "O";
    zahler = zahler+1;
  }
  //Seitwärz
  else if((t1.innerHTML == "O") && (t5.innerHTML == "O") && (t9.innerHTML == "&nbsp;")){
    t9.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t5.innerHTML == "O") && (t9.innerHTML == "O") && (t1.innerHTML == "&nbsp;")){
    t1.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t1.innerHTML == "O") && (t9.innerHTML == "O") && (t5.innerHTML == "&nbsp;")){
    t5.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t3.innerHTML == "O") && (t5.innerHTML == "O") && (t7.innerHTML == "&nbsp;")){
    t7.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t5.innerHTML == "O") && (t7.innerHTML == "O") && (t3.innerHTML == "&nbsp;")){
    t3.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t3.innerHTML == "O") && (t7.innerHTML == "O") && (t5.innerHTML == "&nbsp;")){
    t5.innerHTML = "O";
    zahler = zahler+1;
  }
  //Gegner ist dran
  //Vertikal
  else if((t1.innerHTML == "X") && (t4.innerHTML == "X") && (t7.innerHTML == "&nbsp;")){
    t7.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t4.innerHTML == "X") && (t7.innerHTML == "X") && (t1.innerHTML == "&nbsp;")){
    t1.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t1.innerHTML == "X") && (t7.innerHTML == "X") && (t4.innerHTML == "&nbsp;")){
    t4.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t2.innerHTML == "X") && (t5.innerHTML == "X") && (t8.innerHTML == "&nbsp;")){
    t8.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t5.innerHTML == "X") && (t8.innerHTML == "X") && (t2.innerHTML == "&nbsp;")){
    t2.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t2.innerHTML == "X") && (t8.innerHTML == "X") && (t5.innerHTML == "&nbsp;")){
    t5.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t3.innerHTML == "X") && (t6.innerHTML == "X") && (t9.innerHTML == "&nbsp;")){
    t9.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t6.innerHTML == "X") && (t9.innerHTML == "X") && (t3.innerHTML == "&nbsp;")){
    t3.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t3.innerHTML == "X") && (t9.innerHTML == "X") && (t6.innerHTML == "&nbsp;")){
    t6.innerHTML = "O";
    zahler = zahler+1;
  }
  //Horizontal
  else if((t1.innerHTML == "X") && (t2.innerHTML == "X") && (t3.innerHTML == "&nbsp;")){
    t3.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t2.innerHTML == "X") && (t3.innerHTML == "X") && (t1.innerHTML == "&nbsp;")){
    t1.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t1.innerHTML == "X") && (t3.innerHTML == "X") && (t2.innerHTML == "&nbsp;")){
    t2.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t4.innerHTML == "X") && (t5.innerHTML == "X") && (t6.innerHTML == "&nbsp;")){
    t6.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t5.innerHTML == "X") && (t6.innerHTML == "X") && (t4.innerHTML == "&nbsp;")){
    t4.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t4.innerHTML == "X") && (t6.innerHTML == "X") && (t5.innerHTML == "&nbsp;")){
    t5.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t7.innerHTML == "X") && (t8.innerHTML == "X") && (t9.innerHTML == "&nbsp;")){
    t9.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t8.innerHTML == "X") && (t9.innerHTML == "X") && (t7.innerHTML == "&nbsp;")){
    t7.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t7.innerHTML == "X") && (t9.innerHTML == "X") && (t8.innerHTML == "&nbsp;")){
    t8.innerHTML = "O";
    zahler = zahler+1;
  }
  //Seitwärz
  else if((t1.innerHTML == "X") && (t5.innerHTML == "X") && (t9.innerHTML == "&nbsp;")){
    t9.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t5.innerHTML == "X") && (t9.innerHTML == "X") && (t1.innerHTML == "&nbsp;")){
    t1.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t1.innerHTML == "X") && (t9.innerHTML == "X") && (t5.innerHTML == "&nbsp;")){
    t5.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t3.innerHTML == "X") && (t5.innerHTML == "X") && (t7.innerHTML == "&nbsp;")){
    t7.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t5.innerHTML == "X") && (t7.innerHTML == "X") && (t3.innerHTML == "&nbsp;")){
    t3.innerHTML = "O";
    zahler = zahler+1;
  }
  else if((t3.innerHTML == "X") && (t7.innerHTML == "X") && (t5.innerHTML == "&nbsp;")){
    t5.innerHTML = "O";
    zahler = zahler+1;
  }
  //Spiel Mitte, Seite
  else if(t5.innerHTML == "&nbsp;"){
    t5.innerHTML = "O";
    zahler = zahler+1;
  }
  else if(t1.innerHTML == "&nbsp;"){
    t1.innerHTML = "O";
    zahler = zahler+1;
  }
  else if(t3.innerHTML == "&nbsp;"){
    t3.innerHTML = "O";
    zahler = zahler+1;
  }
  else if(t7.innerHTML == "&nbsp;"){
    t7.innerHTML = "O";
    zahler = zahler+1;
  }
  else if(t9.innerHTML == "&nbsp;"){
    t9.innerHTML = "O";
    zahler = zahler+1;
  }
  else if(t2.innerHTML == "&nbsp;"){
    t2.innerHTML = "O";
    zahler = zahler+1;
  }
  else if(t4.innerHTML == "&nbsp;"){
    t4.innerHTML = "O";
    zahler = zahler+1;
  }
  else if(t6.innerHTML == "&nbsp;"){
    t6.innerHTML = "O";
    zahler = zahler+1;
  }
  else if(t8.innerHTML == "&nbsp;"){
    t8.innerHTML = "O";
    zahler = zahler+1;
  }
}





















//
