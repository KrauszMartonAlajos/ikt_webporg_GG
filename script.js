var jatekTer = document.getElementById("jatekter");

var balPanel = document.createElement("div");
var kartyaBox = document.createElement("div");
var pontokBox = document.createElement("div");
var tabla = document.createElement("div");
var korokBox = document.createElement("div");

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
    for(var i = 0; i < 5; i++)
    {
        var sorDiv = document.createElement("div");
        sorDiv.classList += " sordiv";
        for(var j = 0; j<6;j++)
        {
            var oszlopDiv = document.createElement("div");
            oszlopDiv.classList += " oszlopdiv";
            //oszlopDiv.innerHTML = "X";
            sorDiv.appendChild(oszlopDiv);
        }
        tabla.appendChild(sorDiv);
    }
}

function RandomKepValasztas()
{
    var ImageArray = new Array();
    ImageArray[0] = '1.jpg';
    ImageArray[1] = '2.jpg';
    ImageArray[2] = '3.jpg';
    ImageArray[3] = '4.jpg';
    ImageArray[4] = '5.jpg';
    ImageArray[5] = '6.jpg';
    ImageArray[6] = '7.jpg';
    ImageArray[7] = '8.jpg';
    ImageArray[8] = '9.jpg';
    ImageArray[9] = '10.jpg';
    ImageArray[10] = '11.jpg';
    ImageArray[11] = '12.jpg';
    ImageArray[12] = '13.jpg';
    ImageArray[14] = '14.jpg';
    ImageArray[15] = '15.jpg';
    ImageArray[16] = '16.jpg';
    ImageArray[17] = '17.jpg';
    ImageArray[18] = '18.jpg';
    ImageArray[19] = '19.jpg';
    ImageArray[20] = '20.jpg';
    ImageArray[21] = '21.jpg';
    ImageArray[22] = '22.jpg';
    ImageArray[23] = '23.jpg';
    var rnd = Math.floor(Math.random()*ImageArray.length);

    oszlopDiv.innerHTML = ImageArray[rnd];



}

function Main()
{
    JatekterBetoltes();
    JatekterElrendezes();
    TablaGeneralas();
    RandomKepValasztas();
}
Main();