//Definindo canvas e ctx:
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
 
//tamanho do rover

roverWidth = 100;
roverHeight = 90;

//Imagem de fundo e do rover:
backgroundImage =imagesArray[randomNumber]
roverImage = "rover.png";

 //Posição inicial do rover:
roverX = 10;
roverY = 10;
 
function add(){
 backgroundImgtag=new Image()// criando uma nova imagem
backgroundImgtag.onload=uploadBackground
backgroundImgtag.src=backgroundImage //carregar a imagem
roverImgtag=new Image()
roverImgtag.onload=uploadrover
roverImgtag.src=roverImage // carregar a imagem do robô
}
 
function uploadBackground(){
    ctx.drawImage(backgroundImgtag,0,0,canvas.width,canvas.height)
 }
 
function uploadrover(){
    ctx.drawImage(roverImgtag,roverX,roverY,roverWidth,roverHeight)
 } 
 
//Adicionar “escutador de eventos”
 window.addEventListener("keydown",myKeyDown)

function myKeyDown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == '38')
        {
            up();
            console.log("cima");
        }
        if(keyPressed == "40")
        {
            down();
            console.log("embaixo")

        }
        if(keyPressed == "37")
        {
            left();
            console.log("esquerda")

        }
        if(keyPressed == "39")
        {
            right();
            console.log("direita")

        }
}
function up(){
    if(roverY>=0)
    {
      roverY=roverY-10
      console.log("Quando direcional baixo for pressionada, x = " + roverX + " | y = " +roverY);

      uploadBackground()
        uploadrover()
      
    }
}
function down(){
    if(roverY<=500)
    {
      roverY=roverY+10
      console.log("Quando direcional baixo for pressionada, x = " + roverX + " | y = " +roverY);

      uploadBackground()
        uploadrover() 
       
    } 
} 
function left(){
    if(roverX>=0)
    {
      roverX=roverX-10
      console.log("Quando direcional baixo for pressionada, x = " + roverX + " | y = " +roverY);

      uploadBackground()
        uploadrover()
      
    }
}
function right(){
    if(roverX<=700)
    {
      roverX=roverX+10
      console.log("Quando direcional baixo for pressionada, x = " + roverX + " | y = " +roverY);

      uploadBackground()
        uploadrover()
      
    }
}

 imagesArray=["img1.jpg","img2.jpg","img3.jpg","img4.jpg"]
  randomNumber=Math.floor(Math.random()*4)// math floor arrendo o numero pra baixo Ex:3.3=3.0