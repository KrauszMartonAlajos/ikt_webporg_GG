var Jatekter=document.getElementById("jatekter");


var Balpanel=document.createElement("div");
var Kartyabox=document.createElement("div");
var Pontokbox=document.createElement("div");
var tabla=document.createElement("div");
var Korokbox=document.createElement("div");

function JatekterBetoltese()
{
    Balpanel.appendChild(Kartyabox);
    Balpanel.appendChild(Pontokbox);

    Jatekter.appendChild(Balpanel);
    Jatekter.appendChild(tabla);
    Jatekter.appendChild(Korokbox);

    Kartyabox.innerHTML="Kartyabox";
    Pontokbox.innerHTML="Pontokbox";
    tabla.innerHTML="tabla";
    Korokbox.innerHTML="Korokbox";

}

function JatekterElrendezes()
{
    Jatekter.id="jatekter";
    Balpanel.id="balpanel";
    Kartyabox.id="kartyabox";
    Pontokbox.id="pontokbox";
    tabla.id="tabla";
    Korokbox.id="korokbox";
}

function TablaGeneralas()
{

    

    var k=0;
    for (var i = 0; i < 5; i++) 
    {
        var sorDiv=document.createElement("div");
        sorDiv.classList+=" sordiv";
        for(var j=0; j<6; j++)
        {
            var oszlopDiv=document.createElement("div");
            oszlopDiv.classList+=" oszlopdiv";
            oszlopDiv.id=k;
            k++;
            sorDiv.appendChild(oszlopDiv);
        }
        tabla.appendChild(sorDiv);
        
    }
}





function TablaFeltotles(db)
{
    
    var tomb= new Array();
    var tomb2=new Array();
    // HF:
    // Tölts be egy képet az első cellába
    // véletlenszerűen válassz ki egy képet és tedd az első cellába
    // véletlen helyre helyezd el a véletlen kiválasztott képet
    // paraméter segítségével megadott darabszámú képet helyezz el, véletlen helyre.

    
    // Generáld ki a 23 képet a 30 helyre, a maradékra pedig véletlen tornyokat tegyél
     
    for (var i = 0; i < db; i++)
    {
        var random=Math.floor(Math.random()*23+1);
        var random2=Math.floor(Math.random()*29+1);
        tomb.push(random);
        tomb2.push(random2);
    }

    
    const Duplae = tomb => tomb.filter((item, index) => tomb.indexOf(item) == index);
    const Vegleges = Duplae(tomb);

    const VajonDupla = tomb2 => tomb2.filter((item, index) => tomb2.indexOf(item) == index);
    const Uccso = VajonDupla(tomb2);

    for (var j = 0; j < Vegleges.length; j++)
    {
        var kep=document.createElement("img");
        kep.src="kepek/"+Vegleges[j]+".jpg";
        console.log(Vegleges[j]);
        var cella=document.getElementById(Uccso[j]);
        cella.appendChild(kep);
        
    }

    

        

    
    
   
    
}




function Main()
{
    JatekterBetoltese();
    JatekterElrendezes();
    TablaGeneralas();

    TablaFeltotles(23);
    
}

Main();


