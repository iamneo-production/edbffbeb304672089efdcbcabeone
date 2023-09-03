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
    else if((b1=='x' || b1=='x')&&(b4=='x' || b4=='x')&&(b7=='x' || b7='x')){
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
    else if((b1=='x' || b1=='x')&&(b4=='x' || b4=='x')&&(b7=='x' || b7='x')){
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


}