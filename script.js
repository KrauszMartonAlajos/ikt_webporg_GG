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
//id-val kell megszámozni a cellákat
function JatekterBetoltes()
{
    balPanel.appendChild(kartyaBox);
    balPanel.appendChild(pontokBox);
    jatekTer.appendChild(balPanel);
    jatekTer.appendChild(tabla);
    jatekTer.appendChild(korokBox);

    kartyaBox.innerHTML = "kartyaBox";
    pontokBox.innerHTML = "pontokBox";
    tabla.innerHTML = "tabla";
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
    console.log("kapcsolat");
    for(var i = 0;i<db;i++)
    {
        var kep = document.createElement("img");
        kep.src = "kepek/Lapok/"+Math.floor(Math.random()*23+1)+".jpg";
        var velcella = Math.floor(Math.random()*30+1);
        var varak = Math.floor(Math.random()*3+1);
        while(tomb.includes(velcella))
        {
            var velcella = Math.floor(Math.random()*30+1);
        }
        var cella = document.getElementById(velcella);
        tomb.push(velcella);
        cella.appendChild(kep);
    }
    Varak(tomb);
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

function Main()
{
    JatekterBetoltes();
    JatekterElrendezes();
    TablaGeneralas();
    TablaFeltoltes(23);
    //hf maradék mezőt tornyokkal feltölteni
}
Main();
