var database = null;
database = openDatabase('WillemsWekkerWinkel', '1.0', 'WillemsWekkerWinkelDB', 1024 * 1024); 

function maakMedewerkerTabel(){
    var query = "CREATE TABLE IF NOT EXISTS MEDEWERKERS" +
                "(MedewerkerID integer PRIMARY KEY AUTOINCREMENT, MedewerkerNaam varchar(100), " +
                "MedewerkerGeslacht varchar(20), MedewerkerGeboortedatum DATETIME, " +
                "MedewerkerSalaris decimal(7,2), MedewerkerStartContract DateTime, " +
                "MedewerkerContactInfo varchar(100), MedewerkerNotities varchar(500))";
    
    updateStatus("Medewerker tabel aangemaakt<br>")
    uitvoerenQuery(query,[]);
    voegDummyDataToe();
    }

function verwijderMedewerkerTabel(){
    var query = "DROP TABLE MEDEWERKERS";
    uitvoerenQuery(query,[]);
    updateStatus("Medewerker tabel verwijdert<br>");
    }


function voegMedewerkerToe(){
    var query = "INSERT INTO MEDEWERKERS " +
                "(MedewerkerNaam, MedewerkerGeslacht, " +
                "MedewerkerGeboortedatum, MedewerkerSalaris, " +
                "MedewerkerStartContract, MedewerkerContactInfo, " +
                "MedewerkerNotities) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?)";
    
    var MedewerkerNaam =            document.getElementById("MedewerkerNaam").value;
    var MedewerkerGeslacht =        document.getElementById("MedewerkerGeslacht").value;
    var MedewerkerGeboortedatum =   document.getElementById("MedewerkerGeboortedatum").value;
    var MedewerkerSalaris =         document.getElementById("MedewerkerSalaris").value;
    var MedewerkerStartContract =   document.getElementById("MedewerkerStartContract").value;
    var MedewerkerContactInfo =     document.getElementById("MedewerkerContactInfo").value;
    var MedewerkerNotities =        document.getElementById("MedewerkerNotities").value;
    var variabelen = [MedewerkerNaam, MedewerkerGeslacht, MedewerkerGeboortedatum, MedewerkerSalaris ,MedewerkerStartContract,MedewerkerContactInfo,MedewerkerNotities];
    uitvoerenQuery(query, variabelen);
    updateStatus("Medewerker toegevoegd aan tabel<br>")
    }


function verwijderMedewerker(){
    var query = "DELETE FROM MEDEWERKERS " +
                "WHERE MedewerkerID=?";
    var Medewerker = document.getElementById("verwijderMedewerker").value;
    uitvoerenQuery(query, [Medewerker]);
    updateStatus("Medewerker verwijdert van tabel<br>");
    }      


function aanpassenMedewerker(){
    var query = "UPDATE MEDEWERKERS SET " +
                "MedewerkerNaam = ?, MedewerkerGeslacht = ?, " +
                "MedewerkerGeboortedatum = ?, MedewerkerSalaris = ?, " +
                "MedewerkerStartContract = ?, MedewerkerContactInfo = ?, " +
                "MedewerkerNotities = ? " +
                "WHERE MedewerkerID = ?";
    var MedewerkerID =              document.getElementById("aanpassenMedewerker").value;
    var MedewerkerNaam =            document.getElementById("MedewerkerNaam").value;
    var MedewerkerGeslacht =        document.getElementById("MedewerkerGeslacht").value;
    var MedewerkerGeboortedatum =   document.getElementById("MedewerkerGeboortedatum").value;
    var MedewerkerSalaris =         document.getElementById("MedewerkerSalaris").value;
    var MedewerkerStartContract =   document.getElementById("MedewerkerStartContract").value;
    var MedewerkerContactInfo =     document.getElementById("MedewerkerContactInfo").value;
    var MedewerkerNotities =        document.getElementById("MedewerkerNotities").value;
    var variabelen = [MedewerkerNaam, MedewerkerGeslacht, MedewerkerGeboortedatum, MedewerkerSalaris ,MedewerkerStartContract,MedewerkerContactInfo,MedewerkerNotities,MedewerkerID];
    uitvoerenQuery(query, variabelen);
    updateStatus("Medewerker aangepast<br>")

}



function voegDummyDataToe(){
    var query = "INSERT INTO MEDEWERKERS " +
                "(MedewerkerNaam, MedewerkerGeslacht, " +
                "MedewerkerGeboortedatum, MedewerkerSalaris, " +
                "MedewerkerStartContract, MedewerkerContactInfo, " +
                "MedewerkerNotities) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?)";
    var WillemWekker =  ["Willem Wekker"    ,"Man"      ,'12-03-1990'     ,120000.00     ,"Eigenaar"                 ,'12-04-1990'     ,"31621742197"];
    var KeesKlok =      ["Kees Klok"        ,"Man"      ,'01-09-1999'     ,80000.00      ,"Crimineel verleden"       ,'15-07-1995'     ,"31632134219"];
    var HansHorloge =   ["Hans Horloge"     ,"Man"      ,'29-11-1969'     ,20000.00      ,"Crimineel verleden"       ,'23-02-2003'     ,"31421975634"];
    var ZoeZakHorloge=  ["Zoe ZakHorloge"   ,"Vrouw"    ,'16-08-2002'     ,50000.00      ,"Crimineel verleden"       ,'06-08-2003'     ,"31611342456"];
    var TeunTijd =      ["Teun Tijd"        ,"Man"      ,'20-10-1977'     ,5.00          ,"NVT"                      ,'25-09-1999'     ,"31621442187"];
    var MedewerkerLijst = [WillemWekker,KeesKlok,HansHorloge,ZoeZakHorloge,TeunTijd];
    for(let i = 0; i < MedewerkerLijst.length; i++){
        uitvoerenQuery(query, MedewerkerLijst[i]);
    };
    updateStatus("Dummy data toegevoegd<br>")
};

function updateMedewerkersLijst(){
    var query = "SELECT MedewerkerNaam, MedewerkerID " +
                "FROM MEDEWERKERS;";
    database.transaction(function(transactie) {transactie.executeSql(query,[],viewMedewerkersHelper)});
}

function uitvoerenQuery(query, variabelen){
    database.transaction(function(transactie) {transactie.executeSql(query,variabelen,updateMedewerkersLijst), updateStatus(query+ "<br>")});
}


function viewMedewerkersHelper(transaction, resultaten){
    document.getElementById("Medewerkers").innerHTML = "";
    for (var i = 0; i < resultaten.rows.length; i++) {
        document.getElementById("Medewerkers").innerHTML += resultaten.rows.item(i)["MedewerkerID"] +" " + resultaten.rows.item(i)["MedewerkerNaam"] +  "<br>";
    }

}

function updateStatus(string){
    document.getElementById("status").innerHTML += string;
}
