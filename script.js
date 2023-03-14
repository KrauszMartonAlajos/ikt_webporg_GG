var jatekTer = document.getElementById("jatekter");

var balPanel = document.createElement("div");
var kartyaBox = document.createElement("div");
var pontokBox = document.createElement("div");
var tabla = document.createElement("div");
var korokBox = document.createElement("div");

var kartyaAdatok =[
{id:1,value:1,sign:''},
{id:2,value:1,sign:''},
{id:3,value:-1,sign:''},
{id:4,value:2,sign:''},
{id:5,value:-2,sign:''},
{id:6,value:-2,sign:''},
{id:7,value:2,sign:''},
{id:8,value:3,sign:''},
{id:9,value:3,sign:''},
{id:10,value:-3,sign:''},
{id:11,value:4,sign:''},
{id:12,value:4,sign:''},
{id:13,value:-4,sign:''},
{id:14,value:5,sign:''},
{id:15,value:5,sign:''},
{id:16,value:-5,sign:''},
{id:17,value:6,sign:''},
{id:18,value:6,sign:''},
{id:19,value:-6,sign:''},
{id:20,value:0,sign:'varazslo'},
{id:21,value:0,sign:'hegy'},
{id:22,value:0,sign:'taliga'},
{id:23,value:0,sign:'sarkany'}];

var varAdatok =[
{id:1,color:1,value:1},
{id:2,color:1,value:2},
{id:3,color:1,value:3},
{id:4,color:1,value:4}, 
{id:5,color:2,value:1},
{id:6,color:2,value:2},
{id:7,color:2,value:3},
{id:8,color:2,value:4}, 
{id:9,color:3,value:1},
{id:10,color:3,value:2},
{id:11,color:3,value:3},
{id:12,color:3,value:4},
{id:13,color:4,value:1},
{id:14,color:4,value:2},
{id:15,color:4,value:3},
{id:16,color:4,value:4}];

var cellak = [
//     {
//         id: 1,
//         type: "", //vár, kártya
//         {/*kartyatartalma*/}
//     }
];

var varak = [];
var lepes = 0;
var valasztottkartya;
var felhuzva = false;
var kivalsztottlap;
var leszamoloslista = new Array(30);
var lerakottkartyakszama = 0;
var lerakottvarakszama = 0;
var kor = 1;

function JatekterBetoltes()
{
    balPanel.appendChild(kartyaBox);
    balPanel.appendChild(pontokBox);
    jatekTer.appendChild(balPanel);
    jatekTer.appendChild(tabla);
    jatekTer.appendChild(korokBox);
    korokBox.innerHTML += "<div id = 'kor1' class = 'korkiemeles'>Kör 1.</div>"
    korokBox.innerHTML += "<div id = 'kor2' class = 'kor'>Kör 2.</div>"
    korokBox.innerHTML += "<div id = 'kor3' class = 'kor'>Kör 3.</div>" 
}
function JatekterElrendezes()
{
    balPanel.id = "balpanel";
    kartyaBox.id = "kartyabox";
    pontokBox.id = "pontokbox";
    tabla.id = "tabla";
    korokBox.id = "korokbox";
}
function TablaGeneralas()
{
    var k = 1;
    for(var i = 0; i < 5; i++)
    {
        var sorDiv = document.createElement("div");
        sorDiv.classList += " sordiv";
        for(var j = 0; j<6;j++)
        {
            var oszlopDiv = document.createElement("div");
            oszlopDiv.classList += " oszlopdiv";
            oszlopDiv.id = k;
            oszlopDiv.setAttribute("onclick","Lerak(this)");
            //cellak.push({id:k});

            k++;
            sorDiv.appendChild(oszlopDiv);
        }
        tabla.appendChild(sorDiv);
    }
    //console.log(cellak);
}

function CellakFeltoltese()
{    
    for(let i = 1;i<24;i++)
    {   
        cellak.push({id:i});
        cellak[i-1].type = "kártya";
        cellak[i-1].kartya = kartyaAdatok[i-1];
    }
}
//cellák tömb megkeverése
function shuffleArray(cellak) {
    for (var i = cellak.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = cellak[i];
        cellak[i] = cellak[j];
        cellak[j] = temp;
    }
}



function SorOsszeg(leszamoloslista){
	pontokBox.innerHTML += "<br>";
	console.log(leszamoloslista);
	for(var i = 0;i<30;i+=6)
    {   
        var varakosszege = 0;
		var sor = 0; 
		for(var j = i;j<i+6;j++){
			var cella = leszamoloslista[j];
            if(cella.type == "kártya"){
                sor += cella.kartya.value;
            }
            else{
                varakosszege += cella.value;
            }
		}
		var span = document.createElement("span");
		span.innerHTML += (sor*varakosszege)+", ";		
		pontokBox.appendChild(span);
    }
}

function OszlopOsszeg(leszamoloslista){
	pontokBox.innerHTML += "<br>";
	for(var i = 0;i<6;i++)
    {   
		var oszlop = 0; 
        var varakosszege = 0;
		for(var j = i;j<30;j+=6){
			var cella = leszamoloslista[j];
			if(cella.type == "kártya"){
                oszlop += cella.kartya.value;
            }
            else{
                varakosszege += cella.value;
            }
		}
		var span = document.createElement("span");
		span.innerHTML = (oszlop*varakosszege)+", ";
		pontokBox.appendChild(span);
    }
}

function KartyakBetetele(){

    var kep = document.createElement("img");
    kep.setAttribute("onclick","Kivalasztas(this)");
    kep.className = "alsokep";  
    var kep = document.createElement("img");
    kep.className = "alsokep";
    }

function Palki_es_funkcioja(){
    if(felhuzva == false)
    {
        var div = document.getElementById("kartyabox");
        var kep = document.createElement("img");
        kep.id = "pakli";
        kep.setAttribute("onclick","RandomKartyaGeneralas(this)");
        kep.src = "kepek/lada.png";
        div.appendChild(kep);
        kartyaBox.innerHTML += "</br>";
        kartyaBox.innerHTML += "Kattints a kártya húzáshoz!";
    }
    
}

function RandomKartyaGeneralas() { 
    if(felhuzva == false)
    {
        felhuzva = true;
        console.log("kattintás regisztrálva:");
        //felhuzva++;
        var valkep = document.createElement("img");
        if (lepes > 22) { 
            console.log("ennyi kartya volt");
            var kep = document.getElementById("pakli");
            kep.onclick = "";
        }
        var div = document.getElementById("kez");
        valkep.className = "kicsi";
        kivalsztottlap = cellak[lepes];
        console.log(kivalsztottlap);
        valkep.src = "kepek/Lapok/" + cellak[lepes].kartya.id + ".png";
        div.appendChild(valkep);
        
        lepes++;
        //console.log(lepes);
    }
    else{
        console.log("előbb rakd le a lapodat")
    }
    
}

function Lerak(vmezo) {
    
    felhuzva = false;
    var valkep = document.createElement("img");
    if(kivalsztottlap.type == "kártya"){
        valkep.src = "kepek/Lapok/" + kivalsztottlap.kartya.id + ".png";
        leszamoloslista.splice(vmezo.id-1,1,kivalsztottlap);
        kivalsztottlap = undefined;
        lerakottkartyakszama++;
        kez.innerHTML = "";
    }
    else{
        //console.log(kivalsztottlap.id + "ezt kell figyelni");
        valkep.src = "kepek/tornyok/"+(kivalsztottlap.id)+".png";
        leszamoloslista.splice(vmezo.id-1,1,kivalsztottlap);
        kivalsztottlap = undefined;
        lerakottvarakszama++;
    }
    vmezo.appendChild(valkep);  
    valasztottkartya = undefined; 
    kivalsztottlap = undefined;
    vmezo.onclick = "";
    console.log(leszamoloslista);
    JatekVegeLeszamolas();
    
}

function VarFelhuzas(n,img)
{
    var div = document.getElementById("kez");
    kivalsztottlap = varAdatok[n];
    div.appendChild(img);
    img.className = "elrejt";

    console.log(kivalsztottlap);

}

function VarakLe_Fel()
{
    for(var i = 0;i<10;i++)
    {
        var div = document.getElementById("varak");
        var kep = document.createElement("img");
        kep.src = "kepek/tornyok/1.png";
        kep.className = "kicsi";
        kep.setAttribute("onclick","VarFelhuzas(0,this)"); // 0 kell indítani az indexelést 
        div.appendChild(kep);
    }
    for(var i = 0;i<3;i++)
    {
        var div = document.getElementById("varak");
        var kep = document.createElement("img");
        kep.setAttribute("onclick","VarFelhuzas(1,this)");
        kep.src = "kepek/tornyok/2.png";
        kep.className = "kicsi";
        div.appendChild(kep);
    }
    for(var i = 0;i<2;i++)
    {
        var div = document.getElementById("varak");
        var kep = document.createElement("img");
        kep.setAttribute("onclick","VarFelhuzas(2,this)");
        kep.src = "kepek/tornyok/3.png";
        kep.className = "kicsi";
        div.appendChild(kep);
    }
        var div = document.getElementById("varak");
        var kep = document.createElement("img");
        kep.setAttribute("onclick","VarFelhuzas(3,this)");
        kep.src = "kepek/tornyok/4.png";
        kep.className = "kicsi";
        div.appendChild(kep);
    console.log("ez egy hulladék fos?");
}

function JatekVegeLeszamolas(){
    console.log(lerakottkartyakszama);
    console.log(lerakottvarakszama);
    if(lerakottkartyakszama + lerakottvarakszama == 30){
        console.log("KÖR VÉGE");
        SorOsszeg(leszamoloslista);
	    OszlopOsszeg(leszamoloslista);
        Körök();
        var div = document.getElementById("varak");
        div.innerHTML = "";
        VarakLe_Fel();
    }
    
    
}

function Körök(){
    lerakottkartyakszama = 0;
    lerakottvarakszama = 0;
    felhuzva = false;
    lepes = 0;
    leszamoloslista = new Array(30);
    for(let i = 1;i<31;i++){
        var mezo = document.getElementById(i);
        mezo.innerHTML = "";
        mezo.setAttribute("onclick","Lerak(this)");
    }
    kor++;
    
    console.log("lefutott a Körök()");
    KörökLépesDesign();
}

function KörökLépesDesign(){
    var div1 = document.getElementById("kor1");
    var div2 = document.getElementById("kor2");
    var div3 = document.getElementById("kor3");
    console.log("a cigányok nem emberek");
    if(kor == 1){
        div1.className="korkiemeles";
    }
    if(kor == 2){
        div1.className="kor";
        div2.className="korkiemeles";
    }
    if(kor == 3){
        div2.className="kor";
        div3.className="korkiemeles";
    }
    if(kor== 4){
        div3.className="kor";
    }
}

function Main()
{
    JatekterBetoltes();
    JatekterElrendezes();
    TablaGeneralas();
    CellakFeltoltese();
    shuffleArray(cellak);	
    Palki_es_funkcioja();
    KartyakBetetele();
    VarakLe_Fel();
}

Main();
