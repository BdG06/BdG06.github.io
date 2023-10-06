function preload() {
  Doodle1 = loadImage('./images/Doodle1.png')
  Doodle2 = loadImage('./images/Doodle2.png')
  Doodle3 = loadImage('./images/Doodle3.png')
  DoodleBackground = loadImage("./images/backgrounds/Doodlebackground.jpg")
}
var hoogte = 800/6
//bepaald grotendeels het verschil in hoogte tussen de platformen^
var aantalPlatformen = 100
//bepaald het maximum aantal platformen^
var exhoogte = 0
//zorgt voor een extra beetje verschil in hoogte tussen de platformen naarmate de speler verder in het spel komt^
var Startspel = 0
//bepaald wanneer het spel start en eindigd^
var leven = 0
//bepaald of de speler af kan gaan tijdens het spel of niet^
var levensverliezen = false
//bepaald of de speler af kan gaan tijdens het spel of niet^
var score = 0
var highscore = 0
//geven het spel een puntensysteem^^
var achtergrond = 0
//zorgt voor verplaatsing van de achtergrond zodat het lijkt of de speler omhoog gaat^
var platformen = []
//maakt een array aan voor alle plaformen

function nieuwSpel(){
  player1 = new Player(300,775);
  //voegt een speler toe aan de game
  for (var k = 0; k <= aantalPlatformen; k++) {
    if(10>=k){
      platformen.push(new Platform(random(0,200),random(775-((k+1)*hoogte),800-((k+1)*hoogte)),100,12,k,1,15));
      platformen.push(new Platform(random(300,500),random(775-((k+1)*hoogte),800-((k+1)*hoogte)),100,12,k,2,15));
    }
    if(20>=k&&k>10){
      if(random(0,5)>=1.5){
      platformen.push(new Platform(random(0,210),random(775-((k+1)*hoogte),800-((k+1)*hoogte)),90,11,k,1,18));
      platformen.push(new Platform(random(300,510),random(775-((k+1)*hoogte),800-((k+1)*hoogte)),90,11,k,2,18));
      }
      else {
        platformen.push(new Platform(random(0,500),random(775-((k+1)*hoogte),800-((k+1)*hoogte)),100,12,k,0,18));
      }
    }
    if(30>=k&&k>20){
      if(random(0,5)>=3.5){
      platformen.push(new Platform(random(0,220),random(775-((k+1)*hoogte),800-((k+1)*hoogte)),80,9,k,1,25));
      platformen.push(new Platform(random(300,520),random(775-((k+1)*hoogte),800-((k+1)*hoogte)),80,9,k,2,25));
      }
      else {
        platformen.push(new Platform(random(0,510),random(775-((k+1)*hoogte),800-((k+1)*hoogte)),90,10,k,0,25));
      }
    }
    if(40>=k&&k>30){
      exhoogte = random(775,800)
        platformen.push(new Platform(random(0,510),random(exhoogte-((k+1)*hoogte),(exhoogte+25)-((k+1)*hoogte)),80,7,k,0,30));
    }
    if(50>=k&&k>40){
      exhoogte = random(775,800)
        platformen.push(new Platform(random(0,510),random(exhoogte-((k+1)*hoogte),(exhoogte+25)-((k+1)*hoogte)),50,6,k,0,40));
    }
    if(60>=k&&k>50){
      exhoogte = random(775,800)
        platformen.push(new Platform(random(0,510),random(exhoogte-((k+1)*hoogte),(exhoogte+25)-((k+1)*hoogte)),50,5,k,0,50));
    }
    if(70>=k&&k>60){
      exhoogte = random(775,800)
        platformen.push(new Platform(random(0,510),random(exhoogte-((k+1)*hoogte),(exhoogte+25)-((k+1)*hoogte)),50,4,k,0,60));
    }
    if(100>=k&&k>70){
      exhoogte = random(775,800)
        platformen.push(new Platform(random(0,510),random(exhoogte-((k+1)*hoogte),(exhoogte+25)-((k+1)*hoogte)),50,2,k,0,100));
    }
    //ingewikkelde code voor het tekenen van de platformen. Het is zo geschreven dat je nooit dezelfde platformen zult 
    //krijgen en dat platformen steeds lastiger zullen worden naarmate de speler hoger komt^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  } 
}

function nieuwSpeelveld(){
  for (var k1 = 0; k1 < platformen.length; k1++){
    
    if(platformen[k1].beweging<1){
      if(platformen[k1].volgorde == 1){
        platformen[k1].x+=platformen[k1].snelheid
        if(platformen[k1].x<0||platformen[k1].x>300-platformen[k1].lengte){
          platformen[k1].snelheid *=-1
        }
      }
      if(platformen[k1].volgorde == 2){
        platformen[k1].x+=platformen[k1].snelheid
        if(platformen[k1].x<300||platformen[k1].x>600-platformen[k1].lengte){
          platformen[k1].snelheid *=-1
        }
      }
      if(platformen[k1].volgorde == 0){
        platformen[k1].x+=platformen[k1].snelheid
        if(platformen[k1].x<0||platformen[k1].x>600-platformen[k1].lengte){
          platformen[k1].snelheid *=-1
        }
      }
    }
    if(
        platformen[k1].y + 10 >= player1.y+25 
        &&platformen[k1].y<=player1.y+25
        &&player1.snelheidy<=0
        &&player1.x>=platformen[k1].x
        &&player1.x<=platformen[k1].x+platformen[k1].lengte
      ){
      player1.y = platformen[k1].y-25
      player1.snelheidy = 0
      
      if(keyIsDown(87)||keyIsDown(32) ){
        if (player1.y == platformen[k1].y-25){
          player1.snelheidy = 8
        }
       }
      if( keyIsDown(69)&&platformen[k1].kans1<1){
        if (player1.y == platformen[k1].y-25){
          player1.snelheidy = 20
        }
      }
    }
    //voorkomt dat spelers door de platformen heen vallen en voegt toe dat spelers als ze op platformen staan 
    //kunnen springen. Bij een rood platform voegt het toe dat spelers op E kunnen drukken om de lucht in te schieten^^^^^^^^^^^^^^^^^^^^
  
    if (player1.y <= 500){
        player1.y += 1
        score +=1
        achtergrond+=1
        if(achtergrond>800){
          achtergrond = 0
        }
        for (var k2 = 0; k2 < platformen.length; k2++){
        platformen[k2].y += 1
        levensverliezen = true
      }
    }
  }
}
//zorgt ervoor dat platformen naar beneden bewegen in plaats van dat de speler naar boven beweegt. 
//Dit gebeurt alleen als de speler in het midden van het veld springt^^^^^^^^^^^^^^

class Platform{
constructor(x,y,lengte,beweging,snelheid,volgorde,kans1){
    this.x = x;
    this.y = y;
    //bepalen de plek van het platform^^
    this.lengte = lengte;
    //hoe hoger de speler komt, hoe korter de platformen worden
    this.beweging = random(0,beweging);
    //hoe kleiner beweging is, hoe groter de kans zal zijn dat een platform beweegt^ (lijn 81)
    this.kans1 = random(0,kans1)
    //hoe kleiner kans1 is, hoe kleiner de kans dat een platform rood zal zijn en een boost geeft^ (lijn 165)
    this.snelheid = 1 + snelheid/15
    //als een platform beweegt bepaald de snelheid hoe snel die beweegt. hoe hoger de speler komt, hoe sneller de platformen zullen bewegen^
    this.volgorde = volgorde
    //voorkomt dat platformen in elkaar genereren door het speelveld in tweeen op te delen met volgordes 1 en 2^ (lijnen 82, 88 en 94)
    this.kleur= 'black'
    
    if(floor(random(0,1.9999)) === 0){
      this.snelheid *= -1
    }
  //geeft het platform een 50% kans om de andere kant op te bewegen bij de start van het spel^^^
  }
teken(){
  if(this.kans1 < 1){
    this.kleur = 'red'
  }
  if(this.y<=790){
  fill(this.kleur)
  rect(this.x,this.y,this.lengte,10)
  //laat de platformen alleen verschijnen als deze zich in of boven het speelveld bevinden^^^
  }
}
}
class Player{
constructor(x,y){
    this.x = x;
    this.y = y;
    //bepalen de plek van de speler^^
    this.snelheidx = 0
    this.snelheidy = 0
    //bepalen de beweegrichtingen van de speler^^
    this.Doodle = Doodle2
    //bepaald het start plaatje van Doodle^
}

beweeg(){
   if(this.x==25||this.x==575){
    this.snelheidx = 0
  }
   if(keyIsDown(65)){
    this.snelheidx -= 0.3
  }
   else if(keyIsDown(68)){
    this.snelheidx += 0.3
  } else{
    this.snelheidx*=0.95
    //remt de speler af als deze niet op de toetsen drukt om opzij te gaan
  }
   if(keyIsDown(87)||keyIsDown(32) ){
    if (this.y == 775){
      this.snelheidy = 8
    }
  }
  //laat de speler door de toetsen W, A, S, D en spatie bewegen^^^^^^^^^^^^^^^^^
   if(keyIsDown(38)){
    if (this.y == 775 && leven == 0){
      this.snelheidy = 20
    }
  }
  //shortcut voor als je een spel zonder levensverlies speelt en je gemakkelijk naar boven wilt^^^^^

 if(this.snelheidx<0){
  this.Doodle = Doodle1
 }else{
  this.Doodle = Doodle2
 }
 //bepaalt de foto van Doodle tijdens de bewegingen^^^^^

  this.snelheidy -=0.175
  //voegt zwaartekracht to aan het spel^
  this.y -= this.snelheidy
  this.x += this.snelheidx
  //veranderen te plek van de speler^^
  this.snelheidx = constrain(this.snelheidx,-7,7);
  this.x = constrain(this.x,25,575);
  this.y = constrain(this.y,25,775);
  //geven een limiet aan de plek en snelheid van de speler^^^
  
  fill("blue");
    
    //ellipse(this.x,this.y,50);
    if(this.snelheidy>0){
      image (Doodle3,this.x-35,this.y-45,70,70)
    }
    else { 
      image (this.Doodle,this.x-30,this.y-35,60,60)
    }
    //tekent een vliegend Doodleplaatje als deze zich omhoog beweegd
  }
}

function setup() {
    canvas = createCanvas(windowWidth, 900);
    background('green');
    textSize(30);
    textFont('Georgia');
    textAlign(CENTER)
    //maakt een begin voor het tekenen van de game^^^^^
}

function draw() {
  translate(windowWidth/2-300,40);
  //zorgt ervoor dat het spel zich in het midden van het beeldscherm afspeelt^
  noStroke();
  fill('gray');
  rect(-10,-10,620,820);
  //voegt een rand toe aan het speelveld^^
  if(Startspel==1){
    image(DoodleBackground,0,-800+achtergrond,600,800);
    image(DoodleBackground,0,0+achtergrond,600,800);
  }else{
    image(DoodleBackground,0,0,600,800);
  }
  //zorgt voor een meebewegende ruitjesachtergrond, maar alleen als het spel bezig is^^^^^^

  if (Startspel == 1) {
    
    for (var i = 0; i < platformen.length; i++) {
      
      platformen[i].teken();
    }
    fill('green');
    rect(0,-40,600,30);
    rect(0,810,600,windowHeight);
    fill('gray');
    rect(0,-10,600,10);
    rect(0,800,600,10);
    //voorkomt dat de ruitjesachtergrond over de groene achtergrond en de grijze rand heen wordt getekent^^^^^^
    text('score: '+score,100,50);
    
    player1.beweeg();
    nieuwSpeelveld();
    //voert het spel uit^
    if (levensverliezen == true && player1.y >= 775 && leven == 1||keyIsDown(77)){
      Startspel = 2
    }
    //beeindigd het spel als de speler de onderkant van het speelveld raakt^^^
  }
  
  else if (Startspel == 2){
    if(score>highscore && levensverliezen==true){
      highscore = score
    }
    //voorkomt nieuwe highscore bij spelen zonder levens^^^
    fill('black');
    noStroke();
    text('Helaas, je bent af!',300,100);
    text('Je score was: '+ score,300,200);
    textSize(24);
    text('Druk op spatie om terug te gaan naar het startscherm',50,250,525,600);
    textSize(30);
    text('highscore: '+ highscore,50,400,525,600);
    scale(2)
    image(Doodle3,100,300,100,100)
    //tekent het eindscherm^^^^^^^^^^
    if(keyIsDown(32)){
      Startspel = 0
      levensverliezen = false
    }
    //reset spel voor nieuw potje^^^^

  }else if (Startspel == 0){
    fill('black');
    noStroke();
    text('Welkom bij Doodlejump!',300,100);
    text('Het spel werkt als volgt:',300,200);
    textSize(24);
    text('Gebruik de toetsen W, A, S, D en spatie om te bewegen. Als je een rood platform ziet, probeer dan op E te drukken als je er op staat en je zult de lucht in vliegen!',50,250,525,600);
    text('Druk op O als je wilt spelen met maar 1 leven    Druk op L als je wilt spelen zonder dood te gaan  Druk op M tijdens het spelen om je potje af te breken',50,400,525,600);
    textSize(30);
    scale(2)
    image(Doodle3,100,300,100,100)
    //tekent beginscherm^^^^^^^^^^

    if (keyIsDown(76)){
      Startspel = 1
      leven = 0
      score = 0
      platformen = []
      nieuwSpel()
    }
    //bereid spel voor op potje zonder levensverlies^^^^^^^
    if (keyIsDown(79)){
      Startspel = 1
      leven = 1
      score = 0
      platformen = []
      nieuwSpel()
    }
    //bereid spel voor op een potje met levensverlies^^^^^^^

  }
    
}