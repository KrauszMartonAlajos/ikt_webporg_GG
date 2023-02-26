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

function JatekterBetoltes()
{
    balPanel.appendChild(kartyaBox);
    balPanel.appendChild(pontokBox);
    jatekTer.appendChild(balPanel);
    jatekTer.appendChild(tabla);
    jatekTer.appendChild(korokBox);
    kartyaBox.innerHTML = "kartyaBox";
    pontokBox.innerHTML = "pontokBox";
    korokBox.innerHTML = "korokBox";
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
            cellak.push({id:k});

            k++;
            sorDiv.appendChild(oszlopDiv);
        }
        tabla.appendChild(sorDiv);
    }
    console.log(cellak);
}

function CellakFeltoltese()
{
    var cella_lista = new Array();
    var r = Math.floor(Math.random()*23);
    for(let i = 0;i<23;i++)
    {   
        cellak[i].type = "kártya";
        cellak[i].kartya = kartyaAdatok[i];
    }
    for(var i = 23;i<30;i++)
    {
		var ran = Math.floor(Math.random()*16)
        cellak[i].type = "vár";
        cellak[i].kartya = varAdatok[ran];
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

function CellakMegjelenitese(){
    for(var i = 0;i<30;i++)
    {    
        var cella = cellak[i];
        var div = document.getElementById(i+1);
        var kep = document.createElement("img");
        if(cella.type == "kártya"){

            kep.src = "kepek/Lapok/"+cella.kartya.id+".png";
        }
        else{
            kep.src = "kepek/tornyok/"+cella.kartya.id+".png";
        }
        div.appendChild(kep);
    }
    console.log(cellak);
}

function SorOsszeg(cellak){
	pontokBox.innerHTML += "<br>";
	for(var i = 0;i<30;i+=6)
    {   
		var sor = 0; 
		for(var j = i;j<i+6;j++){
			var cella = cellak[j];
			sor += cella.kartya.value;
		}
		var span = document.createElement("span");
		span.innerHTML = sor+", ";		
		pontokBox.appendChild(span);
    }
}

function OszlopOsszeg(cellak){
	pontokBox.innerHTML += "<br>";
	for(var i = 0;i<6;i++)
    {   
		var oszlop = 0; 
		for(var j = i;j<30;j+=6){
			var cella = cellak[j];
			oszlop += cella.kartya.value;
		}
		var span = document.createElement("span");
		span.innerHTML = oszlop+", ";
		pontokBox.appendChild(span);
    }
}

function Main()
{
    JatekterBetoltes();
    JatekterElrendezes();
    TablaGeneralas();
    CellakFeltoltese();
    shuffleArray(cellak);
    CellakMegjelenitese();
	SorOsszeg(cellak);
	OszlopOsszeg(cellak);
}

Main();
