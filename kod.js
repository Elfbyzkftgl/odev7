function Kayit(){
    var isim=document.getElementById("isim").value;
    localStorage.setItem("isim",isim);
    var soyisim=document.getElementById("soyisim").value;
    localStorage.setItem("soyisim",soyisim);

}
function Not(){
    var vize1=Number(document.getElementById("vize1").value);
    var vize2=Number(document.getElementById("vize2").value);
    var final=Number(document.getElementById("final").value);
    document.getElementById("sonuc").innerHTML=(vize1+vize2)*0.4+final*0.6;  
}
function hesap(){
    if(hesap>50){
        document.getElementById("durum").innerHTML="geçtin";
    }
    else if(hesap=50){
        document.getElementById("durum").innerHTML="sınır";
    }
    else{
        document.getElementById("durum").innerHTML="kaldın";
    }
}