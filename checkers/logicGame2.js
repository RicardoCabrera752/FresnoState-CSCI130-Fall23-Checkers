
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
var player1points=14,player2points=14;
var startState=false;
var untoggle=[];
var enemyLeft=false;
var enemyRight=false;
var checkFriendlyasKing=[]; // we only need to check 4 locations
var hintSpotsforPawn=[]; //shold only be two
//time in seconds  
// 

function Start()
{
    
    startState=true;
    iniateallPieces();
    updateScore();
    identifyTurn();
    let change=document.getElementById('start');
    
    change.classList.add("started");
    
    change.innerHTML="Game in Progress";
    
}

function hintSpot(pieceId)
{
    
	if(player1==true&& noEnemy==true)
	{
        let index =0;
    let piecePosition= blackPiecePostions[pieceId];
        for(index; index<2; index++)
        {
            if(gameBoard[piecePosition+9]==null&&index==0)
            {
                let cell1=blackPiecePostions[pieceId]+9;
                let hint1=document.getElementById('cell'+cell1);
                hint1.classList.toggle('hint'); 
                hintSpotsforPawn[0]=true;  
                untoggle[index]=hint1;
            }
            else if(gameBoard[piecePosition+11]==null&&index==1)
            {
                let cell2=blackPiecePostions[pieceId]+11;
                let hint2=document.getElementById('cell'+cell2);
                hint2.classList.toggle('hint');  
                untoggle[index]=hint2;
                hintSpotsforPawn[1]=true;
            }

        }
 
    }//if there is an enemy than check behind it as well
    else if (player1==true && noEnemy==false)
    {
        let index=0;
        let piecePosition= blackPiecePostions[pieceId];
        for(index;index<4;index++)
        {
            if(gameBoard[piecePosition+9]!=null&&index==0)
            {
                 if(gameBoard[piecePosition+18]==null)
                {  
                let cell1=blackPiecePostions[pieceId]+18;
                let hint1=document.getElementById('cell'+cell1);
                hint1.classList.toggle('hint');   
                untoggle[index]=hint1;
                hintSpotsforPawn[0]=true; 
                
                }
            }
            else if(gameBoard[piecePosition+11]!=null &&index==1)
            {
                if(gameBoard[piecePosition+22]==null)
                {  
                let cell2=blackPiecePostions[pieceId]+22;
                let hint2=document.getElementById('cell'+cell2);
                hint2.classList.toggle('hint');   
                untoggle[index]=hint2;
                hintSpotsforPawn[1]=true; 
                }

            }
            else if(gameBoard[piecePosition+9]==null && index==2)
            {
                let cell3=blackPiecePostions[pieceId]+9;
                let hint3=document.getElementById('cell'+cell3);
                hint3.classList.toggle('hint');   
                untoggle[index]=hint3;
                hintSpotsforPawn[2]=true; 
            }
            else if(gameBoard[piecePosition+11]==null && index==3)
            {
                let cell4=blackPiecePostions[pieceId]+11;
                let hint4=document.getElementById('cell'+cell4);
                hint4.classList.toggle('hint');   
                untoggle[index]=hint4;
                hintSpotsforPawn[3]=true; 
            }
        }   
    }
    if(player2==true&& noEnemy==true)
	{
        let index =0;
    let piecePosition= redPiecePositions[pieceId];
        for(index; index<2; index++)
        {
            if(gameBoard[piecePosition-9]==null&&index==0)
            {
                let cell1=redPiecePositions[pieceId]-9;
                let hint1=document.getElementById('cell'+cell1);
                hint1.classList.toggle('hint'); 
                hintSpotsforPawn[0]=true;  
                untoggle[index]=hint1;
            }
            else if(gameBoard[piecePosition-11]==null&&index==1)
            {
                let cell2=redPiecePositions[pieceId]-11;
                let hint2=document.getElementById('cell'+cell2);
                hint2.classList.toggle('hint');  
                untoggle[index]=hint2;
                hintSpotsforPawn[1]=true;
            }

        }
 
    }//if there is an enemy than check behind it as well
    else if (player2==true && noEnemy==false)
    {
        let index=0;
        let piecePosition= redPiecePositions[pieceId];
        for(index;index<4;index++)
        {
            if(gameBoard[piecePosition-9]!=null&&index==0)
            {
                 if(gameBoard[piecePosition-18]==null)
                {  
                let cell1=redPiecePositions[pieceId]-18;
                let hint1=document.getElementById('cell'+cell1);
                hint1.classList.toggle('hint');   
                untoggle[index]=hint1;
                hintSpotsforPawn[0]=true; 
                
                }
            }
            else if(gameBoard[piecePosition-11]!=null &&index==1)
            {
                if(gameBoard[piecePosition-22]==null)
                {  
                let cell2=redPiecePositions[pieceId]-22;
                let hint2=document.getElementById('cell'+cell2);
                hint2.classList.toggle('hint');   
                untoggle[index]=hint2;
                hintSpotsforPawn[1]=true; 
                }

            }
            else if(gameBoard[piecePosition-9]==null && index==2)
            {
                let cell3=redPiecePositions[pieceId]-9;
                let hint3=document.getElementById('cell'+cell3);
                hint3.classList.toggle('hint');   
                untoggle[index]=hint3;
                hintSpotsforPawn[2]=true; 
            }
            else if(gameBoard[piecePosition-11]==null && index==3)
            {
                let cell4=redPiecePositions[pieceId]-11;
                let hint4=document.getElementById('cell'+cell4);
                hint4.classList.toggle('hint');   
                untoggle[index]=hint4;
                hintSpotsforPawn[3]=true; 
            }
        }   
    }
   

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
        noEnemy=true;
        if(isKing[pieceId])
        {
            turnoffKingHints();
        }
        else 
        {
            turnoffHint();
        }


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
       if(isKing[pieceId]==true)
       {
        hintspotforKings(pieceId);
       }
       else{
        hintSpot(pieceId);
       }
       
     
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
       if(isKing[pieceId]==true)
       {
        
        hintspotforKingsPlayer2(pieceId);
       }
       else{
        
        hintSpot(pieceId);
       }
    
    }
    else if (isKing[oldId]==true)
    {
        if(player1==true)
            kingMovements(oldId,oldcellnumber,pieceId,cellNumber);
        else 
            kingMovementsforplayer2(oldId,oldcellnumber,pieceId,cellNumber);

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
    

    


    for(let i=0;i<100;i++)
{gameBoardspots[i]=i;}


gameBoard=[
    null,	"pc0",	null,	"pc1",	null,	"pc2",	null,	"pc3",	null,	"pc4",
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


 redPiecePositions[pc20]=81;
 redPiecePositions[pc21]=83;
 redPiecePositions[pc22]=85;
 redPiecePositions[pc23]=87;
 redPiecePositions[pc24]=89;

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
    
if(player1==true)
{    
hopOverforPlayer1(oldId,oldcellnumber,pieceId,cellNumber);
}
else 
{
hopOverforPlayer2(oldId,oldcellnumber,pieceId,cellNumber);
}
noEnemy=true;

}

turnoffHint();
identifyTurn();
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
            enemyLeft=true;
        }
        if(gameBoard[cellvalue+11] =="pc"+i)
        {
            
            storenemypieceId[1]="pc"+i;
            storenemypiececell[1]=cellvalue+11;
            enemyRight=true;
           
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
                enemyLeft=true;
            }
             if(gameBoard[cellvalue-11] =="pc"+i)
            {
                storenemypieceId[5]="pc"+i;
                storenemypiececell[5]=cellvalue-9;
                noEnemy=false;
                enemyRight=true;
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
        

    }


    //reset left and right to false
    enemyLeft=false;
    enemyRight=false;

    identifyTurn();



    
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
    document.getElementById('P1Score').innerHTML="Player 1 Pieces"+player1points;
    document.getElementById('P2Score').innerHTML="Player 2 Pieces"+player2points;
    let status= document.getElementById('winningStatus');
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
    if(player1points>player2points)
    {
        status.innerHTML="Player 1 Winning";
    }
    else if (player1points<player2points)
    {
        status.innerHTML="Player 2 Winning";

    }
    else 
    status.innerHTML="";

}

function identifyTurn()
{
    if(player1==true)
    {
        
        let highLight=document.getElementById('P1Score');
        highLight.style.color='blue';

        let highLight2=document.getElementById('P2Score'); 
        highLight2.style.color='grey';
    }
    else if (player2==true)
    {
        let highLight=document.getElementById('P1Score');
        highLight.style.color='grey';

        let highLight2=document.getElementById('P2Score');
        highLight2.style.color='blue'


    }

}

function turnoffHint()
{
    for(let i=0;i<hintSpotsforPawn.length; i++)
{

    if(hintSpotsforPawn[i]==true)
    {
    untoggle[i].classList.toggle('hint');
    hintSpotsforPawn[i]=false; 
    }
    
}

}
function turnoffKingHints()
{

    for(let i=0;i<hintSpotsforPawn.length; i++)
{
    if(hintSpotsforPawn[i]==true)
    {
    untoggle[i].classList.toggle('hint');
    hintSpotsforPawn[i]=false; 
    }
}

}



function kingMovementsforplayer2(oldId,oldcellnumber,pieceId,cellNumber)
{
   
    let cellvalue = parseInt(cellNumber.replace(/\D/g, ""), 10);
    // if enemy is false will will fall into hopover function to choose which piece to hop
  if(noEnemy==true)
  {
  
    //option to move left or right
  if(gameBoardspots[cellvalue]==redPiecePositions[oldId]+9&&player2==true)
    { 

    
    redPiecePositions[oldId]+=9;
    //clear the O from the first spot
    document.getElementById(oldId).innerHTML='';
    //input O into the second spot we put
    document.getElementById(cellNumber).innerHTML='X';
    
    //cell.style.color='';
   
    //switch the two Id's
    updategameBoard(oldId,oldcellnumber,+9);

    replace(oldId,oldcellnumber,pieceId,cellNumber);
    updategameBoard(oldId,oldcellnumber,+9);
    player2=false;
    player1=true;
    clickedPiece=false;

}
else if(gameBoardspots[cellvalue]==redPiecePositions[oldId]+11&&player2==true)
{
    

    redPiecePositions[oldId]+=11;
    //clear the O from the first spot
    document.getElementById(oldId).innerHTML='';
    //input O into the second spot we put
    document.getElementById(cellNumber).innerHTML='X';
    //cell.style.color='';
   document.getElementById(cellNumber).style.color = 'orange';
    //switch the two Id's
    updategameBoard(oldId,oldcellnumber,+11);
    replace(oldId,oldcellnumber,pieceId,cellNumber);
    player2=false;
   player1=true;
    clickedPiece=false;

}
//move backwards
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
else if(gameBoardspots[cellvalue]==redPiecePositions[oldId]-11&&player2==true)
{

    redPiecePositions[oldId]-=11;
    document.getElementById(oldId).innerHTML='';
    //input O into the second spot we put
    document.getElementById(cellNumber).innerHTML='X';
    //cell.style.color='';
   document.getElementById(cellNumber).style.color = 'orange';
  

    //switch the two Id's
    updategameBoard(oldId,oldcellnumber,-11);
    replace(oldId,oldcellnumber,pieceId,cellNumber);
    player2=false;
    player1=true;      
    clickedPiece=false;
}

}
else 
{
    hopOverforPlayer2(oldId,oldcellnumber,pieceId,cellNumber);
    noEnemy=true;
    
}
turnoffKingHints();

}


















//---------------------new functions below---------------






//===============functions to check later
function hopOverforPlayer2(oldId,oldcellnumber,pieceId,cellNumber)
{
       
   
    let cellvalue = parseInt(cellNumber.replace(/\D/g, ""), 10);
  
   
    //for player 2 statements
    if(isKing[oldId]==false)
    {
    if(gameBoardspots[cellvalue]==redPiecePositions[oldId]-9&&player2==true)
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
    else if(gameBoardspots[cellvalue]==redPiecePositions[oldId]-18&&player2==true && friendlyRight==false)
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
    else if(gameBoardspots[cellvalue]==redPiecePositions[oldId]-22&&player2==true && friendlyLeft==false)
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
   
   
} else if(isKing[oldId]==true)
{
   
            //for player 2 statements
         if(gameBoardspots[cellvalue]==redPiecePositions[oldId]-9&&player2==true)
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
        else if(gameBoardspots[cellvalue]==redPiecePositions[oldId]-18&&player2==true&&checkFriendlyasKing[0]==false)
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
        else if(gameBoardspots[cellvalue]==redPiecePositions[oldId]-22&&player2==true&&checkFriendlyasKing[1]==false)
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
        }//checking positive sides which is going back for player2

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
        else if(gameBoardspots[cellvalue]==redPiecePositions[oldId]+18&&player2==true&&checkFriendlyasKing[2]==false)
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
        else if(gameBoardspots[cellvalue]==redPiecePositions[oldId]+22&&player2==true&&checkFriendlyasKing[3]==false)
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
    }
   
    }    



function hopOverforPlayer1(oldId,oldcellnumber,pieceId,cellNumber)
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
        else if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]+18&&player1==true && friendlyLeft==false)
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
        else if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]+22&&player1==true && friendlyRight==false)
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
    
    
    
    }
    else if(isKing[oldId]==true)
    {
        
        
           //try to move ffront
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
            //try to move back
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
            // hop over backwards
            else if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]-18&&player1==true&&checkFriendlyasKing[2]==true)
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
            else if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]-22&&player1==true&& checkFriendlyasKing[3]==true)
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
            else if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]+18&&player1==true&& checkFriendlyasKing[0]==true)
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
            else if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]+22&&player1==true&& checkFriendlyasKing[1]==true)
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
        
    }
    
    }
    
    
    






//===================fixed functions======================= 
function hintspotforKings(pieceId)
{
    
    
    if(player1==true&& noEnemy==true)
	{
       
        let index =0;
        let piecePosition= blackPiecePostions[pieceId];
        
        
        for(index; index<4; index++)
        {
            if(gameBoard[piecePosition+9]==null&&index==0)
            {
                let cell1=blackPiecePostions[pieceId]+9;
                let hint1=document.getElementById('cell'+cell1);
                hint1.classList.toggle('hint');   
                untoggle[index]=hint1;
                hintSpotsforPawn[0]=true; 
            }
            else if(gameBoard[piecePosition+11]==null&&index==1)
            {
                let cell2=blackPiecePostions[pieceId]+11;
                let hint2=document.getElementById('cell'+cell2);
                hint2.classList.toggle('hint');  
                untoggle[index]=hint2;
                hintSpotsforPawn[1]=true; 
            }
            else if(gameBoard[piecePosition-9]==null&&index==2)
            {
                
                let cell3=blackPiecePostions[pieceId]-9;
                let hint3=document.getElementById('cell'+cell3);
                hint3.classList.toggle('hint');  
                untoggle[index]=hint3;
                hintSpotsforPawn[2]=true; 
            }
            else if(gameBoard[piecePosition-11]==null&&index==3)
            {
                let cell4=blackPiecePostions[pieceId]-11;
                let hint4=document.getElementById('cell'+cell4);
                hint4.classList.toggle('hint');  
                untoggle[index]=hint4;
                hintSpotsforPawn[3]=true; 
            }

        }
 
    }//if there is an enemy than check behind it as well
    else if (player1==true && noEnemy==false)
    {
        let index=0;
        let piecePosition= blackPiecePostions[pieceId];
        for(index;index<8;index++)
        {      //check 2 piece in front
            if(gameBoard[piecePosition+9]!=null&&index==0)
            {
              
                 if(gameBoard[piecePosition+18]==null)
                {  
                let cell1=blackPiecePostions[pieceId]+18;
                let hint1=document.getElementById('cell'+cell1);
                hint1.classList.toggle('hint');   
                untoggle[index]=hint1;
                hintSpotsforPawn[0]=true; 
                 }
            }
            else if(gameBoard[piecePosition+11]!=null &&index==1)
            {
                if(gameBoard[piecePosition+22]==null)
                {  
                let cell2=blackPiecePostions[pieceId]+22;
                let hint2=document.getElementById('cell'+cell2);
                hint2.classList.toggle('hint');   
                untoggle[index]=hint2;
                hintSpotsforPawn[1]=true; 
                }

            }//check pieces in front
            else if(gameBoard[piecePosition+9]==null && index==2)
            {
                let cell3=blackPiecePostions[pieceId]+9;
                let hint3=document.getElementById('cell'+cell3);
                hint3.classList.toggle('hint');   
                untoggle[index]=hint3;
                hintSpotsforPawn[2]=true; 
            }
            else if(gameBoard[piecePosition+11]==null && index==3)
            {
                let cell4=blackPiecePostions[pieceId]+11;
                let hint4=document.getElementById('cell'+cell4);
                hint4.classList.toggle('hint');   
                untoggle[index]=hint4;
                hintSpotsforPawn[3]=true; 
            }
            //check the 2 space pieces behind
            else if(gameBoard[piecePosition-9]!=null&&index==4)
            {
              
                 if(gameBoard[piecePosition-18]==null)
                {  
                let cell5=blackPiecePostions[pieceId]-18;
                let hint5=document.getElementById('cell'+cell5);
                hint5.classList.toggle('hint');   
                untoggle[index]=hint5;
                hintSpotsforPawn[4]=true; 
                 }
            }
            else if(gameBoard[piecePosition-11]!=null &&index==5)
            {
                if(gameBoard[piecePosition-22]==null)
                {  
                let cell6=blackPiecePostions[pieceId]-18;
                let hint6=document.getElementById('cell'+cell6);
                hint6.classList.toggle('hint');   
                untoggle[index]=hint6;
                hintSpotsforPawn[5]=true; 
                }

            }
            //check the space pieces behind
            else if(gameBoard[piecePosition-9]==null && index==6)
            {
                let cell7=blackPiecePostions[pieceId]-9;
                let hint7=document.getElementById('cell'+cell7);
                hint7.classList.toggle('hint');   
                untoggle[index]=hint7;
                hintSpotsforPawn[6]=true; 
            }
            else if(gameBoard[piecePosition-11]==null && index==7)
            {
                let cell8=blackPiecePostions[pieceId]-11;
                let hint8=document.getElementById('cell'+cell8);
                hint8.classList.toggle('hint');   
                untoggle[index]=hint8;
                hintSpotsforPawn[7]=true; 
            }
        }

       
    }


}

function kingMovements(oldId,oldcellnumber,pieceId,cellNumber)
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
        
        //cell.style.color='';
       /// document.getElementById(cellNumber).style.color = 'orange'
       
        //switch the two Id's
        replace(oldId,oldcellnumber,pieceId,cellNumber);
        updategameBoard(oldId,oldcellnumber,+9);
        player1=false;
        player2=true;
        clickedPiece=false;

    }
    else if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]+11&&player1==true)
    {
        blackPiecePostions[oldId]+=11;
        //clear the O from the first spot
        document.getElementById(oldId).innerHTML='';
        //input O into the second spot we put
        document.getElementById(cellNumber).innerHTML='O';
        //cell.style.color='';
       document.getElementById(cellNumber).style.color = 'orange';
        //switch the two Id's
        updategameBoard(oldId,oldcellnumber,+11);
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
    else if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]-11&&player1==true)
    {
        blackPiecePostions[oldId]-=11;
        document.getElementById(oldId).innerHTML='';
        //input O into the second spot we put
        document.getElementById(cellNumber).innerHTML='O';
        //cell.style.color='';
       document.getElementById(cellNumber).style.color = 'orange';
      

        //switch the two Id's
        updategameBoard(oldId,oldcellnumber,-11);
        replace(oldId,oldcellnumber,pieceId,cellNumber);
        player1=false;
        player2=true;       
        clickedPiece=false;
    }
}
else 
{
    
  
    hopOverforPlayer1(oldId,oldcellnumber,pieceId,cellNumber);
    noEnemy=true;
    
}


turnoffKingHints();
}


function hintspotforKingsPlayer2(pieceId)
{
      
     
    if(noEnemy==true)
	{
       
        let index =0;
        let piecePosition= redPiecePositions[pieceId];
        
        
        for(index; index<4; index++)
        {
            if(gameBoard[piecePosition+9]==null&&index==0)
            {
                let cell1=redPiecePositions[pieceId]+9;
                let hint1=document.getElementById('cell'+cell1);
                hint1.classList.toggle('hint');   
                untoggle[index]=hint1;
                hintSpotsforPawn[0]=true; 
            }
            else if(gameBoard[piecePosition+11]==null&&index==1)
            {
                let cell2=redPiecePositions[pieceId]+11;
                let hint2=document.getElementById('cell'+cell2);
                hint2.classList.toggle('hint');  
                untoggle[index]=hint2;
                hintSpotsforPawn[1]=true; 
            }
            else if(gameBoard[piecePosition-9]==null&&index==2)
            {
                
                let cell3=redPiecePositions[pieceId]-9;
                let hint3=document.getElementById('cell'+cell3);
                hint3.classList.toggle('hint');  
                untoggle[index]=hint3;
                hintSpotsforPawn[2]=true; 
            }
            else if(gameBoard[piecePosition-11]==null&&index==3)
            {
                let cell4=redPiecePositions[pieceId]-11;
                let hint4=document.getElementById('cell'+cell4);
                hint4.classList.toggle('hint');  
                untoggle[index]=hint4;
                hintSpotsforPawn[3]=true; 
            }

        }
 
    }//if there is an enemy than check behind it as well
    else if (noEnemy==false)
    {
        let index=0;
        let piecePosition= redPiecePositions[pieceId];
        for(index;index<8;index++)
        {      //check 2 piece in front
            if(gameBoard[piecePosition+9]!=null&&index==0)
            {
              
                 if(gameBoard[piecePosition+18]==null)
                {  
                let cell1=redPiecePositions[pieceId]+18;
                let hint1=document.getElementById('cell'+cell1);
                hint1.classList.toggle('hint');   
                untoggle[index]=hint1;
                hintSpotsforPawn[0]=true; 
                 }
            }
            else if(gameBoard[piecePosition+11]!=null &&index==1)
            {
                if(gameBoard[piecePosition+22]==null)
                {  
                let cell2=redPiecePositions[pieceId]+22;
                let hint2=document.getElementById('cell'+cell2);
                hint2.classList.toggle('hint');   
                untoggle[index]=hint2;
                hintSpotsforPawn[1]=true; 
                }

            }//check pieces in front
            else if(gameBoard[piecePosition+9]==null && index==2)
            {
                let cell3=redPiecePositions[pieceId]+9;
                let hint3=document.getElementById('cell'+cell3);
                hint3.classList.toggle('hint');   
                untoggle[index]=hint3;
                hintSpotsforPawn[2]=true; 
            }
            else if(gameBoard[piecePosition+11]==null && index==3)
            {
                let cell4=redPiecePositions[pieceId]+11;
                let hint4=document.getElementById('cell'+cell4);
                hint4.classList.toggle('hint');   
                untoggle[index]=hint4;
                hintSpotsforPawn[3]=true; 
            }
            //check the 2 space pieces behind
            else if(gameBoard[piecePosition-9]!=null&&index==4)
            {
              
                 if(gameBoard[piecePosition-18]==null)
                {  
                let cell5=redPiecePositions[pieceId]-18;
                let hint5=document.getElementById('cell'+cell5);
                hint5.classList.toggle('hint');   
                untoggle[index]=hint5;
                hintSpotsforPawn[4]=true; 
                 }
            }
            else if(gameBoard[piecePosition-11]!=null &&index==5)
            {
                if(gameBoard[piecePosition-22]==null)
                {  
                let cell6=redPiecePositions[pieceId]-18;
                let hint6=document.getElementById('cell'+cell6);
                hint6.classList.toggle('hint');   
                untoggle[index]=hint6;
                hintSpotsforPawn[5]=true; 
                }

            }
            //check the space pieces behind
            else if(gameBoard[piecePosition-9]==null && index==6)
            {
                let cell7=redPiecePositions[pieceId]-9;
                let hint7=document.getElementById('cell'+cell7);
                hint7.classList.toggle('hint');   
                untoggle[index]=hint7;
                hintSpotsforPawn[6]=true; 
            }
            else if(gameBoard[piecePosition-11]==null && index==7)
            {
                let cell8=redPiecePositions[pieceId]-11;
                let hint8=document.getElementById('cell'+cell8);
                hint8.classList.toggle('hint');   
                untoggle[index]=hint8;
                hintSpotsforPawn[7]=true; 
            }
        }

       
    }
   

}



function checkforfriendlyPiece(pieceId)
{
    //set them to false incase we switch to another piece
    friendlyLeft=false;
    friendlyRight=false;
   
    //if there is a friendly prevent from jumping over
    if(player1==true && isKing[pieceId]==false)
    { let piecePosition = blackPiecePostions[pieceId];
        for(let i=0;i<15;i++)
        {
            if(gameBoard[piecePosition+9] =="pc"+i)
         {
            friendlyLeft=true;
            
         }
        if(gameBoard[piecePosition+11] =="pc"+i)
        {
            
            friendlyRight=true;
        
         } 
        }
    }
    else if (player1==true && isKing[pieceId]==true)
    {
        let piecePosition = blackPiecePostions[pieceId];
        for(let i=0;i<15;i++)
        {
        if(gameBoard[piecePosition+9] =="pc"+i)
         {
            checkFriendlyasKing[0]=true;
            
         }
        if(gameBoard[piecePosition+11] =="pc"+i)
        {
            
            checkFriendlyasKing[1]=true;
        
         } 
         if(gameBoard[piecePosition-9] =="pc"+i)
         {
            checkFriendlyasKing[2]=true;
            
         }
        if(gameBoard[piecePosition-11] =="pc"+i)
        {
            
            checkFriendlyasKing[3]=true;
        
         } 
        
        
        
        }


    } else if(player2==true && isKing[pieceId]==false) 
    {
        for(let i=15;i<30; i++)
        {
            let piecePosition = redPiecePositions[pieceId];
            if(gameBoard[piecePosition-9] =="pc"+i )
            {
                friendlyRight=true;
                
            }
             if(gameBoard[piecePosition-11] =="pc"+i)
            {
                
               friendlyLeft=true;
            } 
        }  
    }
    else if (player2==true && isKing[pieceId]==true)
    {
        let piecePosition = redPiecePositions[pieceId];
        for(let i=0;i<15;i++)
        {
        if(gameBoard[piecePosition-9] =="pc"+i)
         {
            checkFriendlyasKing[0]=true;
            
         }
        if(gameBoard[piecePosition-11] =="pc"+i)
        {
            
            checkFriendlyasKing[1]=true;
        
         } 
         if(gameBoard[piecePosition+9] =="pc"+i)
         {
            checkFriendlyasKing[2]=true;
            
         }
        if(gameBoard[piecePosition+11] =="pc"+i)
        {
            
            checkFriendlyasKing[3]=true;
        
         } 
        }
        


    }



}

