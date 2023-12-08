
let clickedPiece=false;
let player1=true;
let player2=false;
let noEnemy=true;
let gameBoard=[];
let gameBoardspots=[];
let blackPiecePostions=[];
let isKing=[];
let redPiecePositions=[];
let oldId;
let oldcellnumber;
let turn=0;
var pc0,pc1,pc2,pc3,pc4,pc5;
var pc6,pc7,pc8,pc9,pc10,pc11;
var pc12,pc13,pc14;

var pc15,pc16,pc17,pc18,pc19,pc20,pc21,pc22,pc23;
var pc24,pc25,pc26,pc27,pc28,pc29;
var storenemypieceId=[];
var storenemypiececell=[];
var player1points=12,player2points=12;
var newAttempt=false;
var startState=false;


function Start()
{
    
    alert('Game Started');
    startState=true;
    iniateallPieces();
    updateScore();
    //identifyTurn();


    let change=document.getElementById('start');
    change.classList.add("started");
    change.innerHTML="Game in Progress";
}

function clickPiece(pieceId,cellNumber)
{    

    
   if(startState==true)
   {
    
    if(oldId==pieceId)// clicking the same piece
    {
        let cell=document.getElementById(pieceId);
        cell.classList.toggle('clicked');
        //oldId=null;
        //pieceId=null;
        clickedPiece=false;
        newAttempt=true;


    }
    
     else if(clickedPiece==false &&player1==true && document.getElementById(pieceId).innerHTML!='' &&document.getElementById(pieceId).innerHTML!='X')
    {

        //newAttempt=false;        
        let cell=document.getElementById(pieceId);
        //the id string from the first piece we clicked during each of our turns
        oldId=pieceId;
        oldcellnumber=cellNumber;
        
        //to indicate that the piece has been clicked on and will be the one to move
        cell.classList.toggle('clicked');
        clickedPiece=true;
       //noEnemy=checkforEnemy(oldId,oldcellnumber); this does not work
       checkforEnemy(pieceId,oldcellnumber);
       
     
    }
    else if(clickedPiece==false&&player2==true && document.getElementById(pieceId).innerHTML!=''&& document.getElementById(pieceId).innerHTML!='O')
    {
        
        let cell=document.getElementById(pieceId);
        //the id string from the first piece we clicked during each of our turns
        oldId=pieceId;
        oldcellnumber=cellNumber;

        //to indicate that the piece has been clicked on and will be the one to move
        //cell.style.color='green';
        cell.classList.toggle('clicked');
        clickedPiece=true;
       checkforEnemy(pieceId,oldcellnumber);
    
    }
    else if (isKing[oldId]==true)
    {
        kingMovements(oldId,oldcellnumber,pieceId,cellNumber);
    }
    else/*string(id) of the first click, oldIdValue= number next to the Pc
        old
         pieceId will be string of the second click*/
        movePieceto(oldId,oldcellnumber,pieceId,cellNumber,noEnemy);

   }

}

function iniateallPieces()
{
    pc0="pc0";pc1="pc1";pc2="pc2";pc3="pc3";
    pc4="pc4";pc5="pc5";pc6="pc6";pc7="pc7";
    pc8="pc8";pc9="pc9";pc10="pc10";pc11="pc11";
    pc12="pc12";pc13="pc13";pc14="pc14";
    blackPiecePostions[pc0]=1;
    blackPiecePostions[pc1]=3;
    blackPiecePostions[pc2]=5;
    blackPiecePostions[pc3]=7;
    blackPiecePostions[pc4]=9;
    
    blackPiecePostions[pc5]=10;
    blackPiecePostions[pc6]=12;
    blackPiecePostions[pc7]=14;
    blackPiecePostions[pc8]=16;
    blackPiecePostions[pc9]=18;


    blackPiecePostions[pc10]=21;
    blackPiecePostions[pc11]=23;
    blackPiecePostions[pc12]=25;
    blackPiecePostions[pc13]=27;
    blackPiecePostions[pc14]=29;


    isKing[pc0]=false;
    isKing[pc1]=false;
    isKing[pc2]=false;
    isKing[pc3]=false;

    isKing[pc4]=false;
    isKing[pc5]=false;
    isKing[pc6]=false;
    isKing[pc7]=false;

    isKing[pc8]=false;
    isKing[pc9]=false;
    isKing[pc10]=false;
    isKing[pc11]=false;
    isKing[pc12]=false;
    isKing[pc13]=false;
    isKing[pc14]=false;

    


    for(let i=0;i<99;i++)
{gameBoardspots[i]=i;}


gameBoard=[
    null,,	"pc0",	null,	"pc1",	null,	"pc2",	null,	"pc3",	null,	"pc4",
"pc5",	null,	"pc6",	null,	"pc7",	null,	"pc8",	null,	"pc9",	null,
null,	"pc10",	null,	"pc11",	null,	"pc12",	null,	"pc13",	null,	"pc14",
null,	null,	null,	null,	null,	null,	null,	null,	null,	null,
null,	null,	null,	null,	null,	null,	null,	null,	null,	null,
null,	null,	null,	null,	null,	null,	null,	null,	null,	null,
null,	null,	null,	null,	null,	null,	null,	null,	null,	null,
"pc15",	null,	"pc16",	null,	"pc17",	null,	"pc18",	null,	"pc19",	null,
null,	"pc20",	null,	"pc21",	null,	"pc22",	null,	"pc23",	null,	"pc24",
"pc25",	null,	"pc26",	null,	"pc27",	null,	"pc28",	null,	"pc29",	null,
];

 pc15="pc15";
pc16="pc16";pc17="pc17";pc18="pc18";pc19="pc19";
pc20="pc20";pc21="pc21";pc22="pc22";pc23="pc23";
pc24="pc24";pc25="pc25";pc26="pc26";pc27="pc27";
pc28="pc28";pc29="pc29";



 redPiecePositions[pc15]=70;//70
 redPiecePositions[pc16]=72;
 redPiecePositions[pc17]=74;
 redPiecePositions[pc18]=76;
 redPiecePositions[pc19]=78;


 redPiecePositions[pc20]=80;
 redPiecePositions[pc21]=82;
 redPiecePositions[pc22]=84;
 redPiecePositions[pc23]=86;
 redPiecePositions[pc24]=88;

 redPiecePositions[pc25]=90;
 redPiecePositions[pc26]=92;
 redPiecePositions[pc27]=94;
 redPiecePositions[pc28]=96;
 redPiecePositions[pc29]=98;
 
 isKing[pc15]=false;
 isKing[pc16]=false;
 isKing[pc17]=false;
 isKing[pc18]=false;
 isKing[pc19]=false;

 isKing[pc20]=false;
 isKing[pc21]=false;
 isKing[pc22]=false;
 isKing[pc23]=false;
 isKing[pc24]=false;
 isKing[pc25]=false;
 isKing[pc26]=false;
 isKing[pc27]=false;

 isKing[pc28]=false;
 isKing[pc29]=false;



}



function movePieceto(oldId,oldcellnumber,pieceId,cellNumber,noEnemy)
{


    
    let cellvalue = parseInt(cellNumber.replace(/\D/g, ""), 10);

    if(noEnemy==true)
    {
        

  
    if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]+9&&player1==true)
    { 
        
            blackPiecePostions[oldId]+=9;
            //clear the O from the first spot
            document.getElementById(oldId).innerHTML='';
        //input O into the second spot we put
            document.getElementById(cellNumber).innerHTML='O';
        //document.getElementById(cellNumber).style.color = '';
        //switch the two Id's
            replace(oldId,oldcellnumber,pieceId,cellNumber);
            updategameBoard(oldId,oldcellnumber,+9);
            player1=false;
            player2=true;
            clickedPiece=false;
            if(isKing[oldId]==false)
            {
            makeKing(oldId);
            }
    
    }
    else if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]+11&&player1==true)
    {
        blackPiecePostions[oldId]+=11;


        //clear the O from the first spot
        document.getElementById(oldId).innerHTML='';
        //input O into the second spot we put
        document.getElementById(cellNumber).innerHTML='O';
        //cell.style.color='';
        //document.getElementById(oldId).style.color = '';
        //switch the two Id's
        replace(oldId,oldcellnumber,pieceId,cellNumber);
        updategameBoard(oldId,oldcellnumber,+11);      
        player1=false;
        player2=true;
        clickedPiece=false;
        
        if(isKing[oldId]==false)
        {
        makeKing(oldId);
        }
   
    }
    //for player 2
    else if(gameBoardspots[cellvalue]==redPiecePositions[oldId]-9&&player2==true)
    {
        redPiecePositions[oldId]-=9;
        document.getElementById(oldId).innerHTML='';
        //input O into the second spot we put
        document.getElementById(cellNumber).innerHTML='X';
    
        document.getElementById(oldId).style.color = '';
        //switch the two Id's
        replace(oldId,oldcellnumber,pieceId,cellNumber);
        updategameBoard(oldId,oldcellnumber,-9);
        player1=true;
        player2=false;
        clickedPiece=false;

    }
    else if(gameBoardspots[cellvalue]==redPiecePositions[oldId]-11&&player2==true)
    {
        redPiecePositions[oldId]-=11;
        document.getElementById(oldId).innerHTML='';
        //input O into the second spot we put
        document.getElementById(cellNumber).innerHTML='X';
        //cell.style.color='';
        document.getElementById(oldId).style.color = '';
        //switch the two Id's
        replace(oldId,oldcellnumber,pieceId,cellNumber);
        updategameBoard(oldId,oldcellnumber,-11);
        player1=true;
        player2=false;
        clickedPiece=false;
    }
}
else
{
    
    
hopOver(oldId,oldcellnumber,pieceId,cellNumber);
noEnemy=true;

}
}

function makeKing(pieceId)
{
    
    if(blackPiecePostions[pieceId]==90)
    {
        let changePiece=document.getElementById(oldId);
        changePiece.classList.add('king');
        isKing[pieceId]=true;
    }
    else if(blackPiecePostions[pieceId]==92)
    {
        let changePiece=document.getElementById(oldId);
        changePiece.style.color='orange';
        isKing[pieceId]=true;
    }
    else if(blackPiecePostions[pieceId]==94)
    {
        let changePiece=document.getElementById(oldId);
        changePiece.style.color='orange';
        isKing[pieceId]=true;
    }
    else if(blackPiecePostions[pieceId]==96)
    {
        let changePiece=document.getElementById(oldId);
        changePiece.style.color='orange';
        isKing[pieceId]=true;
    }
    else if(blackPiecePostions[pieceId]==98)
    {
        let changePiece=document.getElementById(oldId);
        changePiece.classList.add('king');
        isKing[pieceId]=true;

    }
    else if(redPiecePositions[pieceId]==1)
    {
        let changePiece=document.getElementById(oldId);
        changePiece.classList.add('king');
        isKing[pieceId]=true;

    }
    else if(redPiecePositions[pieceId]==3)
    {
        let changePiece=document.getElementById(oldId);
        changePiece.classList.add('king');
        isKing[pieceId]=true;

    }
    else if(redPiecePositions[pieceId]==5)
    {
        let changePiece=document.getElementById(oldId);
        changePiece.classList.add('king');
        isKing[pieceId]=true;

    }
    else if(redPiecePositions[pieceId]==7)
    {
        let changePiece=document.getElementById(oldId);
        changePiece.classList.add('king');
        isKing[pieceId]=true;

    }
    else if(redPiecePositions[pieceId]==9)
    {
        let changePiece=document.getElementById(oldId);
        changePiece.classList.add('king');
        isKing[pieceId]=true;

    }

}

function kingMovements(oldId,oldcellnumber,pieceId,cellNumber)
{
    
     
    let cellvalue = parseInt(cellNumber.replace(/\D/g, ""), 10);
    //if (isKing[oldId]==false)
   // {
    
        
    if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]+7&&player1==true)
    { 
        
        blackPiecePostions[oldId]+=7;
        //clear the O from the first spot
        document.getElementById(oldId).innerHTML='';
        //input O into the second spot we put
        document.getElementById(cellNumber).innerHTML='O';
        
        //cell.style.color='';
       /// document.getElementById(cellNumber).style.color = 'orange'
       
        //switch the two Id's
        replace(oldId,oldcellnumber,pieceId,cellNumber);
        updategameBoard(oldId,oldcellnumber,+7);
        player1=false;
        player2=true;
        clickedPiece=false;

    }
    else if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]+9&&player1==true)
    {
        blackPiecePostions[oldId]+=9;
        //clear the O from the first spot
        document.getElementById(oldId).innerHTML='';
        //input O into the second spot we put
        document.getElementById(cellNumber).innerHTML='O';
        //cell.style.color='';
       document.getElementById(cellNumber).style.color = 'orange';
        //switch the two Id's
        updategameBoard(oldId,oldcellnumber,+9);
        replace(oldId,oldcellnumber,pieceId,cellNumber);
        player1=false;
       player2=true;
        clickedPiece=false;
   
    }
    else if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]-7&&player1==true)
    {
        
        blackPiecePostions[oldId]-=7;
        document.getElementById(oldId).innerHTML='';
        //input O into the second spot we put
        document.getElementById(cellNumber).innerHTML='O';
        //cell.style.color='';
       document.getElementById(cellNumber).style.color = 'orange';
        //switch the two Id's
        updategameBoard(oldId,oldcellnumber,-7);

        replace(oldId,oldcellnumber,pieceId,cellNumber);
        player1=false;
        player2=true;      
        clickedPiece=false;

    }
    else if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]-9&&player1==true)
    {
        blackPiecePostions[oldId]-=9;
        document.getElementById(oldId).innerHTML='';
        //input O into the second spot we put
        document.getElementById(cellNumber).innerHTML='O';
        //cell.style.color='';
       document.getElementById(cellNumber).style.color = 'orange';
      

        //switch the two Id's
        updategameBoard(oldId,oldcellnumber,-9);
        replace(oldId,oldcellnumber,pieceId,cellNumber);
        player1=false;
        player2=true;       
        clickedPiece=false;
    }
//-----------------------for player2--------------------------------
else if(gameBoardspots[cellvalue]==redPiecePositions[oldId]+7&&player2==true)
{ 

    
    redPiecePositions[oldId]+=7;
    //clear the O from the first spot
    document.getElementById(oldId).innerHTML='';
    //input O into the second spot we put
    document.getElementById(cellNumber).innerHTML='X';
    
    //cell.style.color='';
   
    //switch the two Id's
    updategameBoard(oldId,oldcellnumber,+7);

    replace(oldId,oldcellnumber,pieceId,cellNumber);
    updategameBoard(oldId,oldcellnumber,+7);
    player2=false;
    player1=true;
    clickedPiece=false;

}
else if(gameBoardspots[cellvalue]==redPiecePositions[oldId]+9&&player2==true)
{
    

    redPiecePositions[oldId]+=9;
    //clear the O from the first spot
    document.getElementById(oldId).innerHTML='';
    //input O into the second spot we put
    document.getElementById(cellNumber).innerHTML='X';
    //cell.style.color='';
   document.getElementById(cellNumber).style.color = 'orange';
    //switch the two Id's
    updategameBoard(oldId,oldcellnumber,+9);
    replace(oldId,oldcellnumber,pieceId,cellNumber);
    player2=false;
   player1=true;
    clickedPiece=false;

}
else if(gameBoardspots[cellvalue]==redPiecePositions[oldId]-7&&player2==true)
{

    
    redPiecePositions[oldId]-=7;
    document.getElementById(oldId).innerHTML='';
    //input O into the second spot we put
    document.getElementById(cellNumber).innerHTML='X';
    //cell.style.color='';
   document.getElementById(cellNumber).style.color = 'orange';
    //switch the two Id's
    updategameBoard(oldId,oldcellnumber,-7);
    replace(oldId,oldcellnumber,pieceId,cellNumber);
    player2=false;
    player1=true;      
    clickedPiece=false;

}
else if(gameBoardspots[cellvalue]==redPiecePositions[oldId]-9&&player2==true)
{

    redPiecePositions[oldId]-=9;
    document.getElementById(oldId).innerHTML='';
    //input O into the second spot we put
    document.getElementById(cellNumber).innerHTML='X';
    //cell.style.color='';
   document.getElementById(cellNumber).style.color = 'orange';
  

    //switch the two Id's
    updategameBoard(oldId,oldcellnumber,-9);
    replace(oldId,oldcellnumber,pieceId,cellNumber);
    player2=false;
    player1=true;      
    clickedPiece=false;
}

//}
else 
{
    hopOver(oldId,oldcellnumber,pieceId,cellNumber);
    noEnemy=true;
}
}

function replace(oldId,oldcellnumber,pieceId,cellNumber)
{

    let firstpcclicked=document.getElementById(oldId); 
    let newpcspotPosition=document.getElementById(cellNumber);
    let tempElement=firstpcclicked.id;

    firstpcclicked.id=oldcellnumber
    let updateOnClick="clickPiece('" + pieceId + "'," + "'" +oldcellnumber + "')";
    
    firstpcclicked.setAttribute('onclick',updateOnClick);
    newpcspotPosition.id=tempElement;
    updateOnClick="clickPiece('" + oldId + "'," + "'" +cellNumber + "')";
    newpcspotPosition.setAttribute('onclick',updateOnClick);

}


function checkforEnemy(pieceId,oldcellnumber)
{

    let cellvalue = parseInt(oldcellnumber.replace(/\D/g, ""), 10);
   
    
    if(player1==true && isKing[pieceId]==false)
    {
    
    for(let i=15;i<30; i++)
    {
        //two if statements to check both positions
        if(gameBoard[cellvalue+9] =="pc"+i)
        {
            noEnemy=false;
            storenemypieceId[0]="pc"+i;
            storenemypiececell[0]=cellvalue+9;
        }
        if(gameBoard[cellvalue+11] =="pc"+i)
        {
            
            storenemypieceId[1]="pc"+i;
            storenemypiececell[1]=cellvalue+11;
           
            noEnemy=false;
        
        } 
    }// this statement will check the four positions of the piece clicked when king
    }else if(player1==true&&isKing[pieceId]==true)
    {
        for(let i=15;i<30; i++)
        {
            //two if statements to check both positions
            if(gameBoard[cellvalue+9] =="pc"+i)
            {
                noEnemy=false;
                storenemypieceId[0]="pc"+i;
                storenemypiececell[0]=cellvalue+7;
            
            }
            if(gameBoard[cellvalue+11] =="pc"+i)
            {
               noEnemy=false;
                storenemypieceId[1]="pc"+i;
                storenemypiececell[1]=cellvalue+9;
            
            
            } 
            if(gameBoard[cellvalue-9] =="pc"+i)
            {
                noEnemy=false;
                storenemypieceId[2]="pc"+i;
                storenemypiececell[2]=cellvalue-7;

            }
            if(gameBoard[cellvalue-11] =="pc"+i)
            {
                noEnemy=false;
                storenemypieceId[3]="pc"+i;
                storenemypiececell[3]=cellvalue-9;
            }
        }
        
    }
    //Below applies only to player 2 
    else if (player2==true&& isKing[pieceId]==false)
    {

        for(let i=0;i<15; i++)
        {
            if(gameBoard[cellvalue-9] =="pc"+i )
            {
                noEnemy=false;
                storenemypieceId[4]="pc"+i;
                storenemypiececell[4]=cellvalue-7;
            }
             if(gameBoard[cellvalue-11] =="pc"+i)
            {
                storenemypieceId[5]="pc"+i;
                storenemypiececell[5]=cellvalue-9;
                noEnemy=false;
            } 
        }
    }
    else if(player2==true&&isKing[pieceId]==true)
    {
        
        for(let i=0;i<15; i++)
        {
            if(gameBoard[cellvalue-9] =="pc"+i )
            {
                noEnemy=false;
                storenemypieceId[4]="pc"+i;
                storenemypiececell[4]=cellvalue-7;
            }
             if(gameBoard[cellvalue-11] =="pc"+i)
            {
                storenemypieceId[5]="pc"+i;
                storenemypiececell[5]=cellvalue-9;
                noEnemy=false;
            } 
            if(gameBoard[cellvalue+9]=="pc"+i)
            {
                noEnemy=false;
                storenemypieceId[6]="pc"+i;
                storenemypiececell[6]=cellvalue+7;
            }
            if(gameBoard[cellvalue+11]=="pc"+i)
            {
                noEnemy=false;
                storenemypieceId[7]="pc"+i;
                storenemypiececell[7]=cellvalue+9;

            }
        }
    }
    else{
        noEnemy=true;
    }

}

function updategameBoard(oldId,oldcellnumber,spaceMoved)
{
    let cellvalue = parseInt(oldcellnumber.replace(/\D/g, ""), 10);

    gameBoard[cellvalue+spaceMoved]=oldId;
    gameBoard[cellvalue]=null;
    




}
function hopOver(oldId,oldcellnumber,pieceId,cellNumber)
{
    let cellvalue = parseInt(cellNumber.replace(/\D/g, ""), 10);

   
    if(isKing[oldId]==false)
    {

    if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]+9&&player1==true)
    {
        blackPiecePostions[oldId]+=9;
        //clear the O from the first spot
        document.getElementById(oldId).innerHTML='';
    //input O into the second spot we put
        document.getElementById(cellNumber).innerHTML='O';
        replace(oldId,oldcellnumber,pieceId,cellNumber);
        updategameBoard(oldId,oldcellnumber,+9);
        player1=false;
        player2=true;
        clickedPiece=false;
        noEnemy=true;
        if(isKing[oldId]==false)
        {
        makeKing(oldId);
        }
    
    }
    else if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]+11&&player1==true)
    {
        blackPiecePostions[oldId]+=11;
        //clear the O from the first spot
        document.getElementById(oldId).innerHTML='';
    //input O into the second spot we put
        document.getElementById(cellNumber).innerHTML='O';
    //document.getElementById(cellNumber).style.color = '';
    //switch the two Id's
        replace(oldId,oldcellnumber,pieceId,cellNumber);
        updategameBoard(oldId,oldcellnumber,+11);
        player1=false;
        player2=true;
        clickedPiece=false;
        noEnemy=true;
        if(isKing[oldId]==false)
        {
        makeKing(oldId);
        }
        

    }
    else if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]+18&&player1==true)
    { 
            blackPiecePostions[oldId]+=18;
            //clear the O from the first spot
            document.getElementById(oldId).innerHTML='';
        //input O into the second spot we put
            document.getElementById(cellNumber).innerHTML='O';
        //document.getElementById(cellNumber).style.color = '';
        //switch the two Id's
        eleminatePc(storenemypieceId,0,storenemypiececell);
            replace(oldId,oldcellnumber,pieceId,cellNumber);
            updategameBoard(oldId,oldcellnumber,+18);
            player1=false;
            player2=true;
            clickedPiece=false;
            noEnemy=true;
            player2points--;
            updateScore();
            if(isKing[oldId]==false)
            {
            makeKing(oldId);
            }
            

        
    }
    else if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]+22&&player1==true)
    {
        blackPiecePostions[oldId]+=22;
        //clear the O from the first spot
        document.getElementById(oldId).innerHTML='';
        //input O into the second spot we put
        document.getElementById(cellNumber).innerHTML='O';
        //cell.style.color='';
        //document.getElementById(oldId).style.color = '';
        //switch the two Id's
        eleminatePc(storenemypieceId,1,storenemypiececell);
        replace(oldId,oldcellnumber,pieceId,cellNumber);
        updategameBoard(oldId,oldcellnumber,+22);
        player2points--;    
        updateScore();  
        noEnemy=true;
        player1=false;
       player2=true;
     clickedPiece=false;
     if(isKing[oldId]==false)
        {
         makeKing(oldId);
         }


    
    }
    //for player 2 statements
    else if(gameBoardspots[cellvalue]==redPiecePositions[oldId]-9&&player2==true)
    {
    
        redPiecePositions[oldId]-=9;
        //clear the O from the first spot
        document.getElementById(oldId).innerHTML='';
    //input O into the second spot we put
        document.getElementById(cellNumber).innerHTML='X';
    //document.getElementById(cellNumber).style.color = '';
    //switch the two Id's
        replace(oldId,oldcellnumber,pieceId,cellNumber);
        updategameBoard(oldId,oldcellnumber,-9);
        player1=true;
        player2=false;
        clickedPiece=false;
        noEnemy=true;
        if(isKing[oldId]==false)
        {
        makeKing(oldId);
        }

    } 
    else if(gameBoardspots[cellvalue]==redPiecePositions[oldId]-11&&player2==true)
    {
        redPiecePositions[oldId]-=11;
        //clear the O from the first spot
        document.getElementById(oldId).innerHTML='';
    //input O into the second spot we put
        document.getElementById(cellNumber).innerHTML='X';
    //document.getElementById(cellNumber).style.color = '';
    //switch the two Id's
        replace(oldId,oldcellnumber,pieceId,cellNumber);
        updategameBoard(oldId,oldcellnumber,-11);
        player1=true;
        player2=false;
        clickedPiece=false;
        noEnemy=true;
        if(isKing[oldId]==false)
        {
        makeKing(oldId);
        }

    }
    else if(gameBoardspots[cellvalue]==redPiecePositions[oldId]-18&&player2==true)
    {
        redPiecePositions[oldId]-=18;
        //clear the O from the first spot
        document.getElementById(oldId).innerHTML='';
    //input O into the second spot we put
        document.getElementById(cellNumber).innerHTML='X';
    //document.getElementById(cellNumber).style.color = '';
    //switch the two Id's

    eleminatePc(storenemypieceId,4,storenemypiececell);
    replace(oldId,oldcellnumber,pieceId,cellNumber);
    updategameBoard(oldId,oldcellnumber,-18);
    player1points--;
    updateScore();
    player1=true;
    player2=false;
    clickedPiece=false;
    noEnemy=true;
        if(isKing[oldId]==false)
        {
        makeKing(oldId);
        }

    }
    else if(gameBoardspots[cellvalue]==redPiecePositions[oldId]-22&&player2==true)
    {
        
        

        redPiecePositions[oldId]-=22;
        //clear the O from the first spot
        document.getElementById(oldId).innerHTML='';
    //input O into the second spot we put
        document.getElementById(cellNumber).innerHTML='X';
    //document.getElementById(cellNumber).style.color = '';
    //switch the two Id's


    eleminatePc(storenemypieceId,5,storenemypiececell);
    player1points--;
    updateScore();
        replace(oldId,oldcellnumber,pieceId,cellNumber);
        updategameBoard(oldId,oldcellnumber,-22);
        
        player1=true;
        player2=false;
        clickedPiece=false;
        noEnemy=true;
        
        if(isKing[oldId]==false)
        {
        makeKing(oldId);
        }

    }  
   
   
}
   

   
   
   
   
     if (isKing[oldId]==true)
    {
        if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]+9&&player1==true)
        {
            blackPiecePostions[oldId]+=9;
            //clear the O from the first spot
            document.getElementById(oldId).innerHTML='';
        //input O into the second spot we put
           eleminatePc(storenemypieceId,0,storenemypiececell);
            document.getElementById(cellNumber).innerHTML='O';
            replace(oldId,oldcellnumber,pieceId,cellNumber);
            updategameBoard(oldId,oldcellnumber,+9);
            player1=false;
            player2=true;
            clickedPiece=false;
            noEnemy=true;
            if(isKing[oldId]==false)
            {
            makeKing(oldId);
            }
        
        }
        else if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]+11&&player1==true)
        {
            blackPiecePostions[oldId]+=11;
            //clear the O from the first spot
            document.getElementById(oldId).innerHTML='';
        //input O into the second spot we put
            document.getElementById(cellNumber).innerHTML='O';
        //document.getElementById(cellNumber).style.color = '';
        //switch the two Id's
        eleminatePc(storenemypieceId,1,storenemypiececell);
            replace(oldId,oldcellnumber,pieceId,cellNumber);
            updategameBoard(oldId,oldcellnumber,+11);
            player1=false;
            player2=true;
            clickedPiece=false;
            noEnemy=true;
            if(isKing[oldId]==false)
            {
            makeKing(oldId);
            }
            
    
        }
        else if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]-9&&player1==true)
        {
            blackPiecePostions[oldId]-=9;
            //clear the O from the first spot
            document.getElementById(oldId).innerHTML='';
        //input O into the second spot we put
            document.getElementById(cellNumber).innerHTML='O';
            replace(oldId,oldcellnumber,pieceId,cellNumber);
            updategameBoard(oldId,oldcellnumber,-9);
            player1=false;
            player2=true;
            clickedPiece=false;
            noEnemy=true;
            if(isKing[oldId]==false)
            {
            makeKing(oldId);
            }
        
        }
        else if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]-11&&player1==true)
        {
            blackPiecePostions[oldId]-=11;
            //clear the O from the first spot
            document.getElementById(oldId).innerHTML='';
        //input O into the second spot we put
            document.getElementById(cellNumber).innerHTML='O';
            replace(oldId,oldcellnumber,pieceId,cellNumber);
            updategameBoard(oldId,oldcellnumber,-11);
            player1=false;
            player2=true;
            clickedPiece=false;
            noEnemy=true;
            if(isKing[oldId]==false)
            {
            makeKing(oldId);
            }
        
        }
        else if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]+18&&player1==true)
        { 
                blackPiecePostions[oldId]+=18;
                //clear the O from the first spot
                document.getElementById(oldId).innerHTML='';
            //input O into the second spot we put
                document.getElementById(cellNumber).innerHTML='O';
            //document.getElementById(cellNumber).style.color = '';
            //switch the two Id's
            eleminatePc(storenemypieceId,0,storenemypiececell);
                replace(oldId,oldcellnumber,pieceId,cellNumber);
                updategameBoard(oldId,oldcellnumber,+18);
                player1=false;
                player2=true;
                clickedPiece=false;
                noEnemy=true;
                player2points--;
                updateScore();
                if(isKing[oldId]==false)
                {
                makeKing(oldId);
                }
                
    
            
        }
        else if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]+22&&player1==true)
        {
            blackPiecePostions[oldId]+=22;
            //clear the O from the first spot
            document.getElementById(oldId).innerHTML='';
            //input O into the second spot we put
            document.getElementById(cellNumber).innerHTML='O';
            //cell.style.color='';
            //document.getElementById(oldId).style.color = '';
            //switch the two Id's
            eleminatePc(storenemypieceId,1,storenemypiececell);
            replace(oldId,oldcellnumber,pieceId,cellNumber);
            updategameBoard(oldId,oldcellnumber,+22);
            player2points--;    
            updateScore();  
            noEnemy=true;
            player1=false;
           player2=true;
         clickedPiece=false;
         if(isKing[oldId]==false)
            {
             makeKing(oldId);
             }
    
    
        
        }
        else if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]-18&&player1==true)
        { 
                blackPiecePostions[oldId]-=18;
                //clear the O from the first spot
                document.getElementById(oldId).innerHTML='';
            //input O into the second spot we put
                document.getElementById(cellNumber).innerHTML='O';
            //document.getElementById(cellNumber).style.color = '';
            //switch the two Id's
            eleminatePc(storenemypieceId,2,storenemypiececell);
                replace(oldId,oldcellnumber,pieceId,cellNumber);
                updategameBoard(oldId,oldcellnumber,-18);
                player1=false;
                player2=true;
                clickedPiece=false;
                noEnemy=true;
                player2points--;
                updateScore();
                if(isKing[oldId]==false)
                {
                makeKing(oldId);
                }
                
    
            
        }
        else if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]-22&&player1==true)
        {
            blackPiecePostions[oldId]-=22;
            //clear the O from the first spot
            document.getElementById(oldId).innerHTML='';
            //input O into the second spot we put
            document.getElementById(cellNumber).innerHTML='O';
            //cell.style.color='';
            //document.getElementById(oldId).style.color = '';
            //switch the two Id's
            eleminatePc(storenemypieceId,3,storenemypiececell);
            replace(oldId,oldcellnumber,pieceId,cellNumber);
            updategameBoard(oldId,oldcellnumber,-22);
            player2points--;    
            updateScore();  
            noEnemy=true;
            player1=false;
           player2=true;
         clickedPiece=false;
         if(isKing[oldId]==false)
            {
             makeKing(oldId);
             }
    
    
        
        }
        //for player 2 statements
        else if(gameBoardspots[cellvalue]==redPiecePositions[oldId]-9&&player2==true)
        {
            
            redPiecePositions[oldId]-=9;
            //clear the O from the first spot
            document.getElementById(oldId).innerHTML='';
        //input O into the second spot we put
            document.getElementById(cellNumber).innerHTML='X';
        //document.getElementById(cellNumber).style.color = '';
        //switch the two Id's
            replace(oldId,oldcellnumber,pieceId,cellNumber);
            updategameBoard(oldId,oldcellnumber,-9);
            player1=true;
            player2=false;
            clickedPiece=false;
            noEnemy=true;
            if(isKing[oldId]==false)
            {
            makeKing(oldId);
            }
    
        } 
        else if(gameBoardspots[cellvalue]==redPiecePositions[oldId]-11&&player2==true)
        {
            redPiecePositions[oldId]-=11;
            //clear the O from the first spot
            document.getElementById(oldId).innerHTML='';
        //input O into the second spot we put
            document.getElementById(cellNumber).innerHTML='X';
        //document.getElementById(cellNumber).style.color = '';
        //switch the two Id's
            replace(oldId,oldcellnumber,pieceId,cellNumber);
            updategameBoard(oldId,oldcellnumber,-11);
            player1=true;
            player2=false;
            clickedPiece=false;
            noEnemy=true;
            if(isKing[oldId]==false)
            {
            makeKing(oldId);
            }
    
        }
        else if(gameBoardspots[cellvalue]==redPiecePositions[oldId]-18&&player2==true)
        {
            redPiecePositions[oldId]-=18;
            //clear the O from the first spot
            document.getElementById(oldId).innerHTML='';
        //input O into the second spot we put
            document.getElementById(cellNumber).innerHTML='X';
        //document.getElementById(cellNumber).style.color = '';
        //switch the two Id's
    
        eleminatePc(storenemypieceId,4,storenemypiececell);
        replace(oldId,oldcellnumber,pieceId,cellNumber);
        updategameBoard(oldId,oldcellnumber,-18);
        player1points--;
        updateScore();
        player1=true;
        player2=false;
        clickedPiece=false;
        noEnemy=true;
            if(isKing[oldId]==false)
            {
            makeKing(oldId);
            }
    
        }
        else if(gameBoardspots[cellvalue]==redPiecePositions[oldId]-22&&player2==true)
        {
            
            
    
            redPiecePositions[oldId]-=22;
            //clear the O from the first spot
            document.getElementById(oldId).innerHTML='';
        //input O into the second spot we put
            document.getElementById(cellNumber).innerHTML='X';
        //document.getElementById(cellNumber).style.color = '';
        //switch the two Id's
    
    
        eleminatePc(storenemypieceId,5,storenemypiececell);
        player1points--;
        updateScore();
            replace(oldId,oldcellnumber,pieceId,cellNumber);
            updategameBoard(oldId,oldcellnumber,-22);
            
            player1=true;
            player2=false;
            clickedPiece=false;
            noEnemy=true;
            
            if(isKing[oldId]==false)
            {
            makeKing(oldId);
            }
        }//checking positive sides

        else if(gameBoardspots[cellvalue]==redPiecePositions[oldId]+9&&player2==true)
        {
            
            redPiecePositions[oldId]+=9;
            //clear the O from the first spot
            document.getElementById(oldId).innerHTML='';
        //input O into the second spot we put
            document.getElementById(cellNumber).innerHTML='X';
        //document.getElementById(cellNumber).style.color = '';
        //switch the two Id's
            replace(oldId,oldcellnumber,pieceId,cellNumber);
            updategameBoard(oldId,oldcellnumber,+9);
            player1=true;
            player2=false;
            clickedPiece=false;
            noEnemy=true;
            if(isKing[oldId]==false)
            {
            makeKing(oldId);
            }
    
        } 
        else if(gameBoardspots[cellvalue]==redPiecePositions[oldId]+11&&player2==true)
        {
            redPiecePositions[oldId]+=11;
            //clear the O from the first spot
            document.getElementById(oldId).innerHTML='';
        //input O into the second spot we put
            document.getElementById(cellNumber).innerHTML='X';
        //document.getElementById(cellNumber).style.color = '';
        //switch the two Id's
            replace(oldId,oldcellnumber,pieceId,cellNumber);
            updategameBoard(oldId,oldcellnumber,+11);
            player1=true;
            player2=false;
            clickedPiece=false;
            noEnemy=true;
            if(isKing[oldId]==false)
            {
            makeKing(oldId);
            }
    
        }
        else if(gameBoardspots[cellvalue]==redPiecePositions[oldId]+18&&player2==true)
        {
            redPiecePositions[oldId]+=18;
            //clear the O from the first spot
            document.getElementById(oldId).innerHTML='';
        //input O into the second spot we put
            document.getElementById(cellNumber).innerHTML='X';
        //document.getElementById(cellNumber).style.color = '';
        //switch the two Id's
    
        eleminatePc(storenemypieceId,6,storenemypiececell);
        replace(oldId,oldcellnumber,pieceId,cellNumber);
        updategameBoard(oldId,oldcellnumber,+18);
        player1points--;
        updateScore();
        player1=true;
        player2=false;
        clickedPiece=false;
        noEnemy=true;
            if(isKing[oldId]==false)
            {
            makeKing(oldId);
            }
    
        }
        else if(gameBoardspots[cellvalue]==redPiecePositions[oldId]+22&&player2==true)
        {
            
            
    
            redPiecePositions[oldId]+=22;
            //clear the O from the first spot
            document.getElementById(oldId).innerHTML='';
        //input O into the second spot we put
            document.getElementById(cellNumber).innerHTML='X';
        //document.getElementById(cellNumber).style.color = '';
        //switch the two Id's
    
    
        eleminatePc(storenemypieceId,7,storenemypiececell);
        player1points--;
        updateScore();
            replace(oldId,oldcellnumber,pieceId,cellNumber);
            updategameBoard(oldId,oldcellnumber,+22);
            
            player1=true;
            player2=false;
            clickedPiece=false;
            noEnemy=true;
            
            if(isKing[oldId]==false)
            {
            makeKing(oldId);
            }
        }
        

    }// checking the positive sides



    
}
    


function eleminatePc(storenemypieceId,index,storenemypiececell)
{

   
    let enemyPc=document.getElementById(storenemypieceId[index]);
   // let enemyPcCell=document.getElementById(storenemypiececell[index]);
    //let cell=storenemypiececell[index];
     enemyPc.innerHTML='';
    enemyPc.id='cell'+storenemypiececell[index]; //since it has been eliminated
    let updateOnClick="clickPiece('" + 'None' + "'," + "'" + "cell"+storenemypiececell[index] + "')";
    
    enemyPc.setAttribute('onclick',updateOnClick);  
  
    
}



function updateScore()
{
    document.getElementById('P1Score').innerHTML=player1points;
    document.getElementById('P2Score').innerHTML=player2points;

    //setting the two for false allows for no one to be able to play the board
    if(player1points==0)
    {
        alert("Player 2 Won");
        player1=false;
        player2=false;
       
    }
    else if (player2points==0)
    {
        alert('player 1 has won');
        player1=false;
        player2=false;
    }

}

