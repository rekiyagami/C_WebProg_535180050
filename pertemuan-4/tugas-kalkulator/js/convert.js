function convert(){
    var conv = Number(document.getElementById("convert").value);
    var res = 0;
    
    if(conv >= 0 && conv <= 40){
        res = 'E';
    }
    else if (conv >= 41 && conv <= 55){
        res = 'D';
    }
    else if (conv >= 56 && conv <= 70){
        res = 'C';
    }
    else if (conv >= 71 && conv <= 80){
        res = 'B';
    }
    else if (conv >= 81 && conv <= 100){
        res = 'A';
    }
    else{
        res = "unknow"
    }

    document.getElementById("resultArea").innerHTML = "Result : " + String(res);
}