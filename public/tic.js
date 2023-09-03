function myfunc(){
    var b1,b2,b3,b4,b5,b6,b7,b8,b9;
    b1=document.getElementById("b1").value;
    b2=document.getElementById("b2").value;
    b3=document.getElementById("b3").value;
    b4=document.getElementById("b4").value;
    b5=document.getElementById("b5").value;
    b6=document.getElementById("b6").value;
    b7=document.getElementById("b7").value;
    b8=document.getElementById("b8").value;
    b9=document.getElementById("b9").value;
    var b1btn,b2btn,b3btn,b4btn,b5btn,b6btn,b7btn,b8btn,b9btn;
    b1btn=document.getElementById("b1").value;
    b2btn=document.getElementById("b2").value;
    b3btn=document.getElementById("b3").value;
    b4btn=document.getElementById("b4").value;
    b5btn=document.getElementById("b5").value;
    b6btn=document.getElementById("b6").value;
    b7btn=document.getElementById("b7").value;
    b8btn=document.getElementById("b8").value;
    b9btn=document.getElementById("b9").value;
    if((b1=='x' || b1=='x')&&(b2=='x' || b2=='x')&&(b3=='x' || b3=='x')){
        document.getElementById('print').innerHTML="Player X won";
        b4btn.disable=true;
        b5btn.disable=true;
        b6btn.disable=true;
        b7btn.disable=true;
        b8btn.disable=true;
        b9btn.disable=true;
        b1btn.style.color="red";
        b2btn.style.color="red";
        b3btn.style.color="red";
    }
    else if((b1=='x' || b1=='x')&&(b4=='x' || b4=='x')&&(b7=='x' || b7=='x')) {
        document.getElementById('print').innerHTML="Player X won";
        b2btn.disable=true;
        b5btn.disable=true;
        b6btn.disable=true;
        b3btn.disable=true;
        b8btn.disable=true;
        b9btn.disable=true;
        b1btn.style.color="red";
        b4btn.style.color="red";
        b7btn.style.color="red";
    }
    else if((b7=='x' || b7=='x')&&(b8=='x' || b8=='x')&&(b9=='x' || b9=='x')){
        document.getElementById('print').innerHTML="Player X won";
        b2btn.disable=true;
        b5btn.disable=true;
        b6btn.disable=true;
        b3btn.disable=true;
        b1btn.disable=true;
        b4btn.disable=true;
        b8btn.style.color="red";
        b9btn.style.color="red";
        b7btn.style.color="red";
    }
    else if((b3=='x' || b3=='x')&&(b6=='x' || b6=='x')&&(b9=='x' || b9=='x')){
        document.getElementById('print').innerHTML="Player X won";
        b2btn.disable=true;
        b5btn.disable=true;
        b1btn.disable=true;
        b4btn.disable=true;
        b8btn.disable=true;
        b7btn.disable=true;
        b3btn.style.color="red";
        b6btn.style.color="red";
        b9btn.style.color="red";
    }
    else if((b1=='x' || b1=='x')&&(b5=='x' || b5=='x')&&(b9=='x' || b9=='x')){
        document.getElementById('print').innerHTML="Player X won";
        b2btn.disable=true;
        b3btn.disable=true;
        b6btn.disable=true;
        b4btn.disable=true;
        b8btn.disable=true;
        b7btn.disable=true;
        b1btn.style.color="red";
        b5btn.style.color="red";
        b9btn.style.color="red";
    }
    else if((b3=='x' || b3=='x')&&(b5=='x' || b5=='x')&&(b7=='x' || b7=='x')){
        document.getElementById('print').innerHTML="Player X won";
        b2btn.disable=true;
        b1btn.disable=true;
        b6btn.disable=true;
        b4btn.disable=true;
        b8btn.disable=true;
        b9btn.disable=true;
        b3btn.style.color="red";
        b5btn.style.color="red";
        b7btn.style.color="red";
    }
    else if((b2=='x' || b2=='x')&&(b5=='x' || b5=='x')&&(b8=='x' || b8=='x')){
        document.getElementById('print').innerHTML="Player X won";
        b3btn.disable=true;
        b1btn.disable=true;
        b6btn.disable=true;
        b4btn.disable=true;
        b7btn.disable=true;
        b9btn.disable=true;
        b2btn.style.color="red";
        b5btn.style.color="red";
        b8btn.style.color="red";
    }
    else if((b4=='x' || b4=='x')&&(b5=='x' || b5=='x')&&(b6=='x' || b6=='x')){
        document.getElementById('print').innerHTML="Player X won";
        b3btn.disable=true;
        b1btn.disable=true;
        b8btn.disable=true;
        b2btn.disable=true;
        b7btn.disable=true;
        b9btn.disable=true;
        b4btn.style.color="red";
        b5btn.style.color="red";
        b6btn.style.color="red";
    }
    else if((b1=='0' || b1=='0')&&(b2=='0' || b2=='0')&&(b3=='0' || b3=='0')){
        document.getElementById('print').innerHTML="Player 0 won";
        b4btn.disable=true;
        b5btn.disable=true;
        b6btn.disable=true;
        b7btn.disable=true;
        b8btn.disable=true;
        b9btn.disable=true;
        b1btn.style.color="red";
        b2btn.style.color="red";
        b3btn.style.color="red";
    }
    else if((b1=='0' || b1=='0')&&(b4=='0' || b4=='0')&&(b7=='0' || b7=='0')) {
        document.getElementById('print').innerHTML="Player 0 won";
        b2btn.disable=true;
        b5btn.disable=true;
        b6btn.disable=true;
        b3btn.disable=true;
        b8btn.disable=true;
        b9btn.disable=true;
        b1btn.style.color="red";
        b4btn.style.color="red";
        b7btn.style.color="red";
    }
    else if((b7=='0' || b7=='0')&&(b8=='0' || b8=='0')&&(b9=='0' || b9=='0')){
        document.getElementById('print').innerHTML="Player 0 won";
        b2btn.disable=true;
        b5btn.disable=true;
        b6btn.disable=true;
        b3btn.disable=true;
        b1btn.disable=true;
        b4btn.disable=true;
        b8btn.style.color="red";
        b9btn.style.color="red";
        b7btn.style.color="red";
    }
    else if((b3=='0' || b3=='0')&&(b6=='0' || b6=='0')&&(b9=='0' || b9=='0')){
        document.getElementById('print').innerHTML="Player 0 won";
        b2btn.disable=true;
        b5btn.disable=true;
        b1btn.disable=true;
        b4btn.disable=true;
        b8btn.disable=true;
        b7btn.disable=true;
        b3btn.style.color="red";
        b6btn.style.color="red";
        b9btn.style.color="red";
    }
    else if((b1=='0' || b1=='0')&&(b5=='0' || b5=='0')&&(b9=='0' || b9=='0')){
        document.getElementById('print').innerHTML="Player 0 won";
        b2btn.disable=true;
        b3btn.disable=true;
        b6btn.disable=true;
        b4btn.disable=true;
        b8btn.disable=true;
        b7btn.disable=true;
        b1btn.style.color="red";
        b5btn.style.color="red";
        b9btn.style.color="red";
    }
    else if((b3=='0' || b3=='0')&&(b5=='0' || b5=='0')&&(b7=='0' || b7=='0')){
        document.getElementById('print').innerHTML="Player 0 won";
        b2btn.disable=true;
        b1btn.disable=true;
        b6btn.disable=true;
        b4btn.disable=true;
        b8btn.disable=true;
        b9btn.disable=true;
        b3btn.style.color="red";
        b5btn.style.color="red";
        b7btn.style.color="red";
    }
    else if((b2=='0' || b2=='0')&&(b5=='0' || b5=='0')&&(b8=='0' || b8=='0')){
        document.getElementById('print').innerHTML="Player 0 won";
        b3btn.disable=true;
        b1btn.disable=true;
        b6btn.disable=true;
        b4btn.disable=true;
        b7btn.disable=true;
        b9btn.disable=true;
        b2btn.style.color="red";
        b5btn.style.color="red";
        b8btn.style.color="red";
    }
    else if((b4=='0' || b4=='0')&&(b5=='0' || b5=='0')&&(b6=='0' || b6=='0')){
        document.getElementById('print').innerHTML="Player X won";
        b3btn.disable=true;
        b1btn.disable=true;
        b8btn.disable=true;
        b2btn.disable=true;
        b7btn.disable=true;
        b9btn.disable=true;
        b4btn.style.color="red";
        b5btn.style.color="red";
        b6btn.style.color="red";
    }
    else if ((b1=='x' || b1=='0') &&(b2=='x' || b2=='0') &&(b3=='x' || b3=='0') &&(b4=='x' || b4=='0') &&(b5=='x' || b5=='0') &&(b6=='x' || b6=='0') &&(b7=='x' || b7=='0') &&(b8=='x' || b8=='0') &&(b9=='x' || b9=='0')){
        document.getElementById('print').innerHTML="Match Tie";
    }
    else{
        if(flag==1){
            document.getElementById('print').innerHTML="Player x turn";
        }
        else{
            document.getElementById('print').innerHTML="Player 0 turn";
        }
    }
}
function myfunc_2(){
    location.reload();
    b1=b2=b3=b4=b5=b6=b7=b8=b9='';
}
flag=1;
function myfunc_3(){
    if(flag==1){
        document.getElementById("b1").value="x";
        document.getElementById("b1").disable=true;
        flag=0;
    }
    else {
        document.getElementById("b1").value="0";
        document.getElementById("b1").disable=true;
        flag=1;
    }
}
function myfunc_4(){
    if(flag==1){
        document.getElementById("b2").value="x";
        document.getElementById("b2").disable=true;
        flag=0;
    }
    else {
        document.getElementById("b2").value="0";
        document.getElementById("b2").disable=true;
        flag=1;
    }
}
function myfunc_5(){
    if(flag==1){
        document.getElementById("b3").value="x";
        document.getElementById("b3").disable=true;
        flag=0;
    }
    else {
        document.getElementById("b3").value="0";
        document.getElementById("b3").disable=true;
        flag=1;
    }
}
function myfunc_6(){
    if(flag==1){
        document.getElementById("b4").value="x";
        document.getElementById("b4").disable=true;
        flag=0;
    }
    else {
        document.getElementById("b4").value="0";
        document.getElementById("b4").disable=true;
        flag=1;
    }
}
function myfunc_7(){
    if(flag==1){
        document.getElementById("b5").value="x";
        document.getElementById("b5").disable=true;
        flag=0;
    }
    else {
        document.getElementById("b5").value="0";
        document.getElementById("b5").disable=true;
        flag=1;
    }
}
function myfunc_8(){
    if(flag==1){
        document.getElementById("b6").value="x";
        document.getElementById("b6").disable=true;
        flag=0;
    }
    else {
        document.getElementById("b6").value="0";
        document.getElementById("b6").disable=true;
        flag=1;
    }
}
function myfunc_9(){
    if(flag==1){
        document.getElementById("b7").value="x";
        document.getElementById("b7").disable=true;
        flag=0;
    }
    else {
        document.getElementById("b7").value="0";
        document.getElementById("b7").disable=true;
        flag=1;
    }
}
function myfunc_10(){
    if(flag==1){
        document.getElementById("b8").value="x";
        document.getElementById("b8").disable=true;
        flag=0;
    }
    else {
        document.getElementById("b8").value="0";
        document.getElementById("b8").disable=true;
        flag=1;
    }
}
function myfunc_11(){
    if(flag==1){
        document.getElementById("b9").value="x";
        document.getElementById("b9").disable=true;
        flag=0;
    }
    else {
        document.getElementById("b9").value="0";
        document.getElementById("b9").disable=true;
        flag=1;
    }
}