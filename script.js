var jatekTer = document.getElementById("jatekter");

var balPanel = document.createElement("div");
var kartyaBox = document.createElement("div");
var pontokBox = document.createElement("div");
var tabla = document.createElement("div");
var korokBox = document.createElement("div");
// - tölts be egy képet az első cellába
// - véletlenszerűen válassz ki egy képet és tedd az első cellába
// - véletlen helyre helyezd el a véletlen kiválasztott képet
// - paraméter segítségével megadott darabszámú képet helyezz el, véletlen helyre.
//id-val kell megszámozni a cellákatű
var lapoktomb =[
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
{id:19,value:6,sign:''},
{id:20,value:0,sign:'varazslo'},
{id:21,value:0,sign:'hegy'},
{id:22,value:0,sign:'taliga'},
{id:23,value:0,sign:'sarkany'}];

var varaktomb =[
{id:1,value:1},
{id:2,value:2},
{id:3,value:3},
{id:4,value:4},
{id:5,value:1},
{id:6,value:2},
{id:7,value:3},
{id:8,value:4},
{id:9,value:1},
{id:10,value:2},
{id:11,value:3},
{id:12,value:4},
{id:13,value:1},
{id:14,value:2},
{id:15,value:3},
{id:16,value:4}];

function JatekterBetoltes()
{
    balPanel.appendChild(kartyaBox);
    balPanel.appendChild(pontokBox);
    jatekTer.appendChild(balPanel);
    jatekTer.appendChild(tabla);
    jatekTer.appendChild(korokBox);

    kartyaBox.innerHTML = "kartyaBox";
    pontokBox.innerHTML = "pontokBox";
    //tabla.innerHTML = "tabla";
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
            //oszlopDiv.innerHTML = "X";
            oszlopDiv.id = k;
            sorDiv.appendChild(oszlopDiv);
            k++;
        }
        tabla.appendChild(sorDiv);
    }
}

function TablaFeltoltes(db)
{
    var tomb = new Array();
    var felhasznaltak = new Array();
    console.log("kapcsolat");
    for(var i = 0;i<db;i++)
    {
        var kep = document.createElement("img");
        var velkep = Math.floor(Math.random()*23+1);
       
        var velcella = Math.floor(Math.random()*30+1);
        var varak = Math.floor(Math.random()*3+1);
        while(tomb.includes(velcella))
        {
            velcella = Math.floor(Math.random()*30+1);
        }
        var cella = document.getElementById(velcella);
        tomb.push(velcella);
        while(felhasznaltak.includes(velkep))
        {
            velkep = Math.floor(Math.random()*23+1);
        }
        felhasznaltak.push(velkep);  
        kep.src = "kepek/Lapok/"+velkep+".png";      
        cella.appendChild(kep);
    }
    Varak(tomb);
    //SorKiszamolas(felhasznaltak);
}

function Varak(tomb)
{
    var vlista = new Array();
    var darab = 7;
    var szinek = ["kek","piros","zold","sarga"]
    var i = 0;
    while(i<darab)
    {
        var random = Math.floor(Math.random()*30+1);
        var random2 = Math.floor(Math.random()*4+1);
        var varak = Math.floor(Math.random()*3+1);
        if(!tomb.includes(random) && !vlista.includes(random))
        {
            vlista.push(random);
            var kep = document.createElement("img");
            kep.src = "kepek/tornyok/"+szinek[varak]+"/"+random2+".png";
            var cella = document.getElementById(random);
            cella.appendChild(kep);
            i++
        }
    }
    
}

// function SorKiszamolas(klista){
//     var SorSzamolas = document.createElement("div");
//     SorSzamolas.id = "SorSzamolas";
//     document.body.appendChild(SorSzamolas);
//     var ertekLista = [1,1,-1,2,-2,-2,2,3,3,-3,4,4,-4,5,5,-5,6,6,-6,0,0,0,0];
//     var db = 0;
//     for(let i = 0; i < Object.keys(klista).length;i++){
//         db += ertekLista[klista[i]-1];
//         if(i % 5 == 0 || i == klista.lenght-1){
//             console.log(db);
//             db = 0;
//         }
//     }
// }

function Main()
{
    JatekterBetoltes();
    JatekterElrendezes();
    TablaGeneralas();
    TablaFeltoltes(23);
    //hf maradék mezőt tornyokkal feltölteni
}
Main();