
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

var pc12,pc13,pc14,pc15,pc16,pc17;
var pc18,pc19,pc20,pc21,pc22,pc23;
var storenemypieceId=[];
var storenemypiececell=[];
var player1points=0,player2points=0;
var startState=false;
var untoggle=[];
var friendlyLeft=false;
var friendlyRight=false;
var hintSpotsforPawn=[];
var hintspotsforKings=[];
var checkFriendlyasKing=[];


function Start()
{
    
  
    startState=true;
    iniateallPieces();
    updateScore();
    identifyTurn();

}
function Reset()
{
    location.href="game.html";

}
//game 1
function hintSpot(pieceId)
{
    
	if(player1==true&& noEnemy==true)
	{
        let index =0;
    let piecePosition= blackPiecePostions[pieceId];
        for(index; index<2; index++)
        {
            if(gameBoard[piecePosition+7]==null&&index==0)
            {
                let cell1=blackPiecePostions[pieceId]+7;
                let hint1=document.getElementById('cell'+cell1);
                hint1.classList.toggle('hint');   
                untoggle[index]=hint1;
                hintSpotsforPawn[index]=true;

            }
            else if(gameBoard[piecePosition+9]==null&&index==1)
            {
                let cell2=blackPiecePostions[pieceId]+9;
                let hint2=document.getElementById('cell'+cell2);
                hint2.classList.toggle('hint');  
                untoggle[index]=hint2;
                hintSpotsforPawn[index]=true;
            }

        }
 
    }//if there is an enemy than check behind it as well
    else if (player1==true && noEnemy==false)
    {
        let index=0;
        let piecePosition= blackPiecePostions[pieceId];
        for(index;index<4;index++)
        {
            if(gameBoard[piecePosition+7]!=null&&index==0)
            {
               
                 if(gameBoard[piecePosition+14]==null)
                {  
                let cell1=blackPiecePostions[pieceId]+14;
                let hint1=document.getElementById('cell'+cell1);
                hint1.classList.toggle('hint');   
                untoggle[index]=hint1;
                hintSpotsforPawn[index]=true;
                 }
            }
            else if(gameBoard[piecePosition+9]!=null &&index==1)
            {
                if(gameBoard[piecePosition+18]==null)
                {  
                let cell2=blackPiecePostions[pieceId]+18;
                let hint2=document.getElementById('cell'+cell2);
                hint2.classList.toggle('hint');   
                untoggle[index]=hint2;
                hintSpotsforPawn[index]=true;
                }

            }
            else if(gameBoard[piecePosition+7]==null && index==2)
            {
                let cell3=blackPiecePostions[pieceId]+7;
                let hint3=document.getElementById('cell'+cell3);
                hint3.classList.toggle('hint');   
                untoggle[index]=hint3;
                hintSpotsforPawn[index]=true;
            }
            else if(gameBoard[piecePosition+9]==null && index==3)
            {
                let cell4=blackPiecePostions[pieceId]+9;
                let hint4=document.getElementById('cell'+cell4);
                hint4.classList.toggle('hint');   
                untoggle[index]=hint4;
                hintSpotsforPawn[index]=true;
            }
        }

       
    }
    else if(player2==true&& noEnemy==true)
	{
        let index =0;
        let piecePosition= redPiecePositions[pieceId];
        for(index; index<2; index++)
        {
            if(gameBoard[piecePosition-7]==null&&index==0)
            {
                
                let cell1=redPiecePositions[pieceId]-7;
                let hint1=document.getElementById('cell'+cell1);
                hint1.classList.toggle('hint');   
                untoggle[index]=hint1;
                hintSpotsforPawn[index]=true;
            }
            else if(gameBoard[piecePosition-9]==null&&index==1)
            {
                let cell2=redPiecePositions[pieceId]-9;
                let hint2=document.getElementById('cell'+cell2);
                hint2.classList.toggle('hint');  
                untoggle[index]=hint2;
                hintSpotsforPawn[index]=true;
            }

        }
 
    }
    else if(player2==true&& noEnemy==false)
	{
        let index =0;
        
        let piecePosition= redPiecePositions[pieceId];
        for(index; index<4; index++)
        {
            if(gameBoard[piecePosition-7]!=null&&index==0)
            {
                
                 if(gameBoard[piecePosition-14]==null)
                {  
                let cell1=redPiecePositions[pieceId]-14;
                let hint1=document.getElementById('cell'+cell1);
                hint1.classList.toggle('hint');   
                untoggle[index]=hint1;
                hintSpotsforPawn[index]=true;
                 }
            }
            else if(gameBoard[piecePosition-9]!=null &&index==1)
            {
                if(gameBoard[piecePosition-18]==null)
                {  
                let cell2=redPiecePositions[pieceId]-18;
                let hint2=document.getElementById('cell'+cell2);
                hint2.classList.toggle('hint');   
                untoggle[index]=hint2;
                hintSpotsforPawn[index]=true;
                }

            }
            else if(gameBoard[piecePosition-7]==null && index==2)
            {
                let cell3=redPiecePositions[pieceId]-7;
                let hint3=document.getElementById('cell'+cell3);
                hint3.classList.toggle('hint');   
                untoggle[index]=hint3;
                hintSpotsforPawn[index]=true;
            }
            else if(gameBoard[piecePosition-9]==null && index==3)
            {
                let cell4=redPiecePositions[pieceId]-9;
                let hint4=document.getElementById('cell'+cell4);
                hint4.classList.toggle('hint');   
                untoggle[index]=hint4;
                hintSpotsforPawn[index]=true;
            }

        }
 
    }


}


function hintspotforKings(pieceId)
{
    
  
    if(player1==true&& noEnemy==true)
	{
       
        let index =0;
        let piecePosition= blackPiecePostions[pieceId];
        
        
        for(index; index<4; index++)
        {
            if(gameBoard[piecePosition+7]==null&&index==0)
            {
                
                let cell1=blackPiecePostions[pieceId]+7;
                let hint1=document.getElementById('cell'+cell1);
                hint1.classList.toggle('hint');   
                untoggle[index]=hint1;
                hintspotsforKings[index]=true;
            }
            else if(gameBoard[piecePosition+9]==null&&index==1)
            {
                
                let cell2=blackPiecePostions[pieceId]+9;
                let hint2=document.getElementById('cell'+cell2);
                hint2.classList.toggle('hint');  
                untoggle[index]=hint2;
                hintspotsforKings[index]=true;
            }
            else if(gameBoard[piecePosition-7]==null&&index==2)
            {
                
                let cell3=blackPiecePostions[pieceId]-7;
                let hint3=document.getElementById('cell'+cell3);
                hint3.classList.toggle('hint');  
                untoggle[index]=hint3;
                hintspotsforKings[index]=true;
            }
            else if(gameBoard[piecePosition-9]==null&&index==3)
            {
                
                let cell4=blackPiecePostions[pieceId]-9;
                let hint4=document.getElementById('cell'+cell4);
                hint4.classList.toggle('hint');  
                untoggle[index]=hint4;
                hintspotsforKings[index]=true;
            }

        }
 
    }//if there is an enemy than check behind it as well
    else if (player1==true && noEnemy==false)
    {
        let index=0;
        let piecePosition= blackPiecePostions[pieceId];
        for(index;index<8;index++)
        {
            if(gameBoard[piecePosition+7]!=null&&index==0)
            {
                
                 if(gameBoard[piecePosition+14]==null)
                {  
                let cell1=blackPiecePostions[pieceId]+14;
                let hint1=document.getElementById('cell'+cell1);
                hint1.classList.toggle('hint');   
                untoggle[index]=hint1;
                hintspotsforKings[index]=true;
                 }
            }
            else if(gameBoard[piecePosition+9]!=null &&index==1)
            {
                if(gameBoard[piecePosition+18]==null)
                {  
                let cell2=blackPiecePostions[pieceId]+18;
                let hint2=document.getElementById('cell'+cell2);
                hint2.classList.toggle('hint');   
                untoggle[index]=hint2;
                hintspotsforKings[index]=true;
                }

            }
            else if(gameBoard[piecePosition+7]==null && index==2)
            {
                let cell3=blackPiecePostions[pieceId]+7;
                let hint3=document.getElementById('cell'+cell3);
                hint3.classList.toggle('hint');   
                untoggle[index]=hint3;
                hintspotsforKings[index]=true;
            }
            else if(gameBoard[piecePosition+9]==null && index==3)
            {
                let cell4=blackPiecePostions[pieceId]+9;
                let hint4=document.getElementById('cell'+cell4);
                hint4.classList.toggle('hint');   
                untoggle[index]=hint4;
                hintspotsforKings[index]=true;
            }
            else if(gameBoard[piecePosition-7]!=null&&index==4)
            {
              
                 if(gameBoard[piecePosition-14]==null)
                {  
                let cell5=blackPiecePostions[pieceId]-14;
                let hint5=document.getElementById('cell'+cell5);
                hint5.classList.toggle('hint');   
                untoggle[index]=hint5;
                hintspotsforKings[index]=true;
                 }
            }
            else if(gameBoard[piecePosition-9]!=null &&index==5)
            {
                if(gameBoard[piecePosition-18]==null)
                {  
                let cell6=blackPiecePostions[pieceId]-18;
                let hint6=document.getElementById('cell'+cell6);
                hint6.classList.toggle('hint');   
                untoggle[index]=hint6;
                hintspotsforKings[index]=true;
                }

            }
            else if(gameBoard[piecePosition-7]==null&&index==6)
            {
              
                
                let cell7=blackPiecePostions[pieceId]-7;
                let hint7=document.getElementById('cell'+cell7);
                hint7.classList.toggle('hint');   
                untoggle[index]=hint7;
                hintspotsforKings[index]=true;
                 
            }
            else if(gameBoard[piecePosition-9]==null &&index==7)
            {
               
                let cell8=blackPiecePostions[pieceId]-9;
                let hint8=document.getElementById('cell'+cell8);
                hint8.classList.toggle('hint');   
                untoggle[index]=hint8;
                hintspotsforKings[index]=true;
                

            }
        }

       
    }


}
function clickPiece(pieceId,cellNumber)
{    
    

   
    
    if(oldId==pieceId)// clicking the same piece
    {
        
        let cell=document.getElementById(pieceId);
        cell.classList.toggle('clicked');
        oldId=null;
        pieceId=null;
        clickedPiece=false;
        noEnemy=true; //without this the new piece we click will thinkit has enemy when it doesnt
        
        if(isKing[pieceId]==true)
        {
           
            turnoffKingHints();
        }
        else{
            

            turnoffHint();
        }

    }


    if(startState==true)
    {
    
     if(clickedPiece==false &&player1==true && document.getElementById(pieceId).innerHTML!='' &&document.getElementById(pieceId).innerHTML!='X')
    {
      
       
        let cell=document.getElementById(pieceId);
        //the id string from the first piece we clicked during each of our turns
        oldId=pieceId;
        oldcellnumber=cellNumber;
        
        //to indicate that the piece has been clicked on and will be the one to move
        //cell.classList.toggle('clicked');

        clickedPiece=true;
        
        
      
       checkforEnemy(pieceId,oldcellnumber);
       checkforfriendlyPiece(pieceId);
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
        
        let cell2=document.getElementById(pieceId);
        //the id string from the first piece we clicked during each of our turns
        oldId=pieceId;
        oldcellnumber=cellNumber;

        //to indicate that the piece has been clicked on and will be the one to move
        //cell.style.color='green';
        cell2.classList.toggle('clicked');
        clickedPiece=true;
       checkforEnemy(pieceId,oldcellnumber);
       checkforfriendlyPiece(pieceId);
       if(isKing[pieceId]==true)
       {
        hintspotforKings(pieceId);
       }
       hintSpot(pieceId);
    
    }//we use oldid instead of pieceId, pieceId will be something else when you click on a spot to move
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



function movePieceto(oldId,oldcellnumber,pieceId,cellNumber,noEnemy)
{

    let cellvalue = parseInt(cellNumber.replace(/\D/g, ""), 10);

    if(noEnemy==true)
    {
       

  
    if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]+7&&player1==true)
    { 
            blackPiecePostions[oldId]+=7;
            //clear the O from the first spot
            document.getElementById(oldId).innerHTML='';
        //input O into the second spot we put
            document.getElementById(cellNumber).innerHTML='O';
        //document.getElementById(cellNumber).style.color = '';
        //switch the two Id's
            replace(oldId,oldcellnumber,pieceId,cellNumber);
            updategameBoard(oldId,oldcellnumber,+7);
            if(isKing[oldId]==false)
            {
            makeKing(oldId);
            }
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
        //document.getElementById(oldId).style.color = '';
        //switch the two Id's
        replace(oldId,oldcellnumber,pieceId,cellNumber);
        updategameBoard(oldId,oldcellnumber,+9); 
        if(isKing[oldId]==false)
        {
        makeKing(oldId);
        }     
        player1=false;
        player2=true;
        clickedPiece=false;
        
      
   
    }
    //for player 2
    else if(gameBoardspots[cellvalue]==redPiecePositions[oldId]-7&&player2==true)
    {
        redPiecePositions[oldId]-=7;
        document.getElementById(oldId).innerHTML='';
        //input O into the second spot we put
        document.getElementById(cellNumber).innerHTML='X';
    
        document.getElementById(oldId).style.color = '';
        //switch the two Id's
        replace(oldId,oldcellnumber,pieceId,cellNumber);
        updategameBoard(oldId,oldcellnumber,-7);
        if(isKing[oldId]==false)
        {
        makeKing(oldId);
        }
        player1=true;
        player2=false;
        clickedPiece=false;
        

    }
    else if(gameBoardspots[cellvalue]==redPiecePositions[oldId]-9&&player2==true)
    {
        redPiecePositions[oldId]-=9;
        document.getElementById(oldId).innerHTML='';
        //input O into the second spot we put
        document.getElementById(cellNumber).innerHTML='X';
        //cell.style.color='';
        document.getElementById(oldId).style.color = '';
        //switch the two Id's
        replace(oldId,oldcellnumber,pieceId,cellNumber);
        updategameBoard(oldId,oldcellnumber,-9);
        if(isKing[oldId]==false)
        {
        makeKing(oldId);
        }
        player1=true;
        player2=false;
        clickedPiece=false;
    }
}
    else
{
    
    if(player1==true)
    {
    hopOverforPlayer1(oldId,oldcellnumber,pieceId,cellNumber)
    }   
    else if(player2==true)
    {       
        
    hopOverforPlayer2(oldId,oldcellnumber,pieceId,cellNumber);
    }

    noEnemy=true;

}
identifyTurn();
turnoffHint();

}

function makeKing(pieceId)
{
    if(player1==true)
    {
    if(blackPiecePostions[pieceId]==56)
    {
        let changePiece=document.getElementById(oldId);
        changePiece.classList.add('king');
        isKing[pieceId]=true;
    }
     if(blackPiecePostions[pieceId]==58)
    {
        let changePiece=document.getElementById(oldId);
        changePiece.style.color='orange';
        isKing[pieceId]=true;
    }
     if(blackPiecePostions[pieceId]==60)
    {
        let changePiece=document.getElementById(oldId);
        changePiece.style.color='orange';
        isKing[pieceId]=true;
    }
     if(blackPiecePostions[pieceId]==62)
    {
        let changePiece=document.getElementById(oldId);
        changePiece.style.color='orange';
        isKing[pieceId]=true;
    }
}
else if(player2==true)
{
    
     if(redPiecePositions[pieceId]==1)
    {
        alert('x');
        let changePiece=document.getElementById(oldId);
        changePiece.classList.toggle('king');
        isKing[pieceId]=true;

    }
     if(redPiecePositions[pieceId]==3)
    {
        alert('xx');
        let changePiece=document.getElementById(oldId);
        changePiece.classList.toggle('king');
        isKing[pieceId]=true;

    }
    if(redPiecePositions[pieceId]==5)
    {
        alert('xxx');
        let changePiece=document.getElementById(oldId);
        changePiece.classList.toggle('king');
        isKing[pieceId]=true;

    }
    if(redPiecePositions[pieceId]==7)
    {
        alert('xxxx');
        let changePiece=document.getElementById(oldId);
        changePiece.classList.toggle('king');
        isKing[pieceId]=true;

    }
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
    
    for(let i=12;i<24; i++)
    {
        //two if statements to check both positions
        if(gameBoard[cellvalue+7] =="pc"+i)
        {
           
            noEnemy=false;
            storenemypieceId[0]="pc"+i;
            storenemypiececell[0]=cellvalue+7;
            
            
        
        }
        if(gameBoard[cellvalue+9] =="pc"+i)
        {
            
            storenemypieceId[1]="pc"+i;
            storenemypiececell[1]=cellvalue+9;
           
            noEnemy=false;
        
        } 
    }// this statement will check the four positions of the piece clicked when king
    }else if(player1==true&&isKing[pieceId]==true)
    {
        for(let i=12;i<24; i++)
        {
            //two if statements to check both positions
            if(gameBoard[cellvalue+7] =="pc"+i)
            {
                noEnemy=false;
                storenemypieceId[0]="pc"+i;
                storenemypiececell[0]=cellvalue+7;
            
            }
            if(gameBoard[cellvalue+9] =="pc"+i)
            {
               noEnemy=false;
                storenemypieceId[1]="pc"+i;
                storenemypiececell[1]=cellvalue+9;
            
            
            } 
            if(gameBoard[cellvalue-7] =="pc"+i)
            {
                noEnemy=false;
                storenemypieceId[2]="pc"+i;
                storenemypiececell[2]=cellvalue-7;

            }
            if(gameBoard[cellvalue-9] =="pc"+i)
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

        for(let i=0;i<12; i++)
        {
            if(gameBoard[cellvalue-7] =="pc"+i )
            {
                noEnemy=false;
                storenemypieceId[4]="pc"+i;
                storenemypiececell[4]=cellvalue-7;
            }
             if(gameBoard[cellvalue-9] =="pc"+i)
            {
                storenemypieceId[5]="pc"+i;
                storenemypiececell[5]=cellvalue-9;
                noEnemy=false;
            } 
        }
    }
    else if(player2==true&&isKing[pieceId]==true)
    {
        
        for(let i=0;i<12; i++)
        {
            if(gameBoard[cellvalue-7] =="pc"+i )
            {
                noEnemy=false;
                storenemypieceId[4]="pc"+i;
                storenemypiececell[4]=cellvalue-7;
            }
             if(gameBoard[cellvalue-9] =="pc"+i)
            {
                storenemypieceId[5]="pc"+i;
                storenemypiececell[5]=cellvalue-9;
                noEnemy=false;
            } 
            if(gameBoard[cellvalue+7]=="pc"+i)
            {
                noEnemy=false;
                storenemypieceId[6]="pc"+i;
                storenemypiececell[6]=cellvalue+7;
            }
            if(gameBoard[cellvalue+9]=="pc"+i)
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
    document.getElementById('P1Score').innerHTML="Player 1 Pieces Captured "+player1points;
    document.getElementById('P2Score').innerHTML="Player 2 Pieces Captured"+player2points;
    let status= document.getElementById('winningStatus');

    //setting the two for false allows for no one to be able to play the board
    if(player1points==12)
    {
        alert("Player 1 has Won");
        player1=false;
        player2=false;
       
    }
    else if (player2points==12)
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
        highLight2.style.color='green'


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

    for(let i=0;i<hintspotsforKings.length; i++)
{
    if(hintspotsforKings[i]==true)
    {
    untoggle[i].classList.toggle('hint');
    hintspotsforKings[i]=false; 
    }
}

}




function checkforfriendlyPiece(pieceId)
{
    //set them to false incase we switch to another piece
    friendlyLeft=false;
    friendlyRight=false;
    
   
    //if there is a friendly prevent from jumping over
    if(player1==true)
    { let piecePosition = blackPiecePostions[pieceId];
        for(let i=0;i<12;i++)
        {
            if(gameBoard[piecePosition+7] =="pc"+i)
         {
            friendlyLeft=true;
            
         }
        if(gameBoard[piecePosition+9] =="pc"+i)
        {
            
            friendlyRight=true;
        
         } 
        }
    }
    else if(player1==true && isKing[pieceId]==true)
    {
        let piecePosition = blackPiecePostions[pieceId];
        for(let i=0;i<12;i++)
        {
        if(gameBoard[piecePosition+7] =="pc"+i)
         {
            checkFriendlyasKing[0]=true;
            
         }
        if(gameBoard[piecePosition+9] =="pc"+i)
        {
            
            checkFriendlyasKing[1]=true;
        
         } 
         if(gameBoard[piecePosition-7] =="pc"+i)
         {
            checkFriendlyasKing[2]=true;
            
         }
        if(gameBoard[piecePosition-9] =="pc"+i)
        {
            
            checkFriendlyasKing[3]=true;
        
         } 
        
        
        }

    }
    else if(player2==true && isKing[pieceId]==false)
    {//for player2
        for(let i=12;i<24; i++)
        {
            let piecePosition = redPiecePositions[pieceId];
            if(gameBoard[piecePosition-7] =="pc"+i )
            {
                friendlyRight=true;
                
            }
             if(gameBoard[piecePosition-9] =="pc"+i)
            {
                
               friendlyLeft=true;
            } 
        }  
    }
    else if(player2==true && isKing[pieceId]==true)
    {
        let piecePosition = redPiecePositions[pieceId];
        for(let i=12;i<24;i++)
        {
        if(gameBoard[piecePosition-7] =="pc"+i)
         {
            checkFriendlyasKing[0]=true;
            
         }
        if(gameBoard[piecePosition-9] =="pc"+i)
        {
            
            checkFriendlyasKing[1]=true;
        
         } 
         if(gameBoard[piecePosition+7] =="pc"+i)
         {
            checkFriendlyasKing[2]=true;
            
         }
        if(gameBoard[piecePosition+9] =="pc"+i)
        {
            
            checkFriendlyasKing[3]=true;
        
         } 
        }

    }



}

function hopOverforPlayer1(oldId,oldcellnumber,pieceId,cellNumber)
{
    
    let cellvalue = parseInt(cellNumber.replace(/\D/g, ""), 10);
    if(isKing[oldId]==false)
    {
        
    

    if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]+7&&player1==true)
    {
        blackPiecePostions[oldId]+=7;
        //clear the O from the first spot
        document.getElementById(oldId).innerHTML='';
    //input O into the second spot we put
        document.getElementById(cellNumber).innerHTML='O';
        replace(oldId,oldcellnumber,pieceId,cellNumber);
        updategameBoard(oldId,oldcellnumber,+7);
        if(isKing[oldId]==false)
        {
        makeKing(oldId);
        }
        player1=false;
        player2=true;
        clickedPiece=false;
        noEnemy=true;
        
    
    }
    else if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]+9&&player1==true)
    {
       
        blackPiecePostions[oldId]+=9;
        //clear the O from the first spot
        document.getElementById(oldId).innerHTML='';
    //input O into the second spot we put
        document.getElementById(cellNumber).innerHTML='O';
    //document.getElementById(cellNumber).style.color = '';
    //switch the two Id's
        replace(oldId,oldcellnumber,pieceId,cellNumber);
        updategameBoard(oldId,oldcellnumber,+7);
        if(isKing[oldId]==false)
        {
        makeKing(oldId);
        }
        player1=false;
        player2=true;
        clickedPiece=false;
        noEnemy=true;
       
        

    }
    else if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]+14&&player1==true && friendlyLeft==false)
    { 
        
            blackPiecePostions[oldId]+=14;
            //clear the O from the first spot
            document.getElementById(oldId).innerHTML='';
        //input O into the second spot we put
            document.getElementById(cellNumber).innerHTML='O';
        //document.getElementById(cellNumber).style.color = '';
        //switch the two Id's
        eleminatePc(storenemypieceId,0,storenemypiececell);
            replace(oldId,oldcellnumber,pieceId,cellNumber);
            updategameBoard(oldId,oldcellnumber,+14);
            if(isKing[oldId]==false)
            {
            makeKing(oldId);
            }
            player1=false;
            player2=true;
            clickedPiece=false;
            noEnemy=true;
            player1points++;
            updateScore();
           
            

        
    }
    else if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]+18&&player1==true && friendlyRight==false)
    {
       
        blackPiecePostions[oldId]+=18;
        //clear the O from the first spot
        document.getElementById(oldId).innerHTML='';
        //input O into the second spot we put
        document.getElementById(cellNumber).innerHTML='O';
        //cell.style.color='';
        //document.getElementById(oldId).style.color = '';
        //switch the two Id's
        eleminatePc(storenemypieceId,1,storenemypiececell);
        replace(oldId,oldcellnumber,pieceId,cellNumber);
        updategameBoard(oldId,oldcellnumber,+18);
        player1points++;    
        updateScore(); 
        if(isKing[oldId]==false)
        {
         makeKing(oldId);
        }    
        noEnemy=true;
        player1=false;
       player2=true;
     clickedPiece=false;
     
    }



}
else if(isKing[oldId]==true)
{
    
       
        if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]+7&&player1==true)
        {
    
            
            blackPiecePostions[oldId]+=7;
            //clear the O from the first spot
            document.getElementById(oldId).innerHTML='';
        //input O into the second spot we put
            document.getElementById(cellNumber).innerHTML='O';
            replace(oldId,oldcellnumber,pieceId,cellNumber);
            updategameBoard(oldId,oldcellnumber,+7);
            player1=false;
            player2=true;
            clickedPiece=false;
            noEnemy=true;
          
        
        }
        else if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]+9&&player1==true)
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
            noEnemy=true;
           
            
    
        }
        else if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]-7&&player1==true)
        {
            blackPiecePostions[oldId]-=7;
            //clear the O from the first spot
            document.getElementById(oldId).innerHTML='';
        //input O into the second spot we put
            document.getElementById(cellNumber).innerHTML='O';
            replace(oldId,oldcellnumber,pieceId,cellNumber);
            updategameBoard(oldId,oldcellnumber,-7);
            player1=false;
            player2=true;
            clickedPiece=false;
            noEnemy=true;
            
        
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
          
        
        }
        else if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]+14&&player1==true &&checkFriendlyasKing[0]==false)
        { 
                blackPiecePostions[oldId]+=14;
                //clear the O from the first spot
                document.getElementById(oldId).innerHTML='';
            //input O into the second spot we put
                document.getElementById(cellNumber).innerHTML='O';
            //document.getElementById(cellNumber).style.color = '';
            //switch the two Id's
            eleminatePc(storenemypieceId,0,storenemypiececell);
                replace(oldId,oldcellnumber,pieceId,cellNumber);
                updategameBoard(oldId,oldcellnumber,+14);
                player1=false;
                player2=true;
                clickedPiece=false;
                noEnemy=true;
                player2points++;
                updateScore();
               
                
    
            
        }
        else if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]+18&&player1==true&&checkFriendlyasKing[1]==false)
        {
            blackPiecePostions[oldId]+=18;
            //clear the O from the first spot
            document.getElementById(oldId).innerHTML='';
            //input O into the second spot we put
            document.getElementById(cellNumber).innerHTML='O';
            //cell.style.color='';
            //document.getElementById(oldId).style.color = '';
            //switch the two Id's
            eleminatePc(storenemypieceId,1,storenemypiececell);
            replace(oldId,oldcellnumber,pieceId,cellNumber);
            updategameBoard(oldId,oldcellnumber,+18);
            player1points++;    
            updateScore();  
            noEnemy=true;
            player1=false;
           player2=true;
         clickedPiece=false;
        
    
    
        
        }
        else if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]-14&&player1==true&&checkFriendlyasKing[2]==false)
        { 
                blackPiecePostions[oldId]-=14;
                //clear the O from the first spot
                document.getElementById(oldId).innerHTML='';
            //input O into the second spot we put
                document.getElementById(cellNumber).innerHTML='O';
            //document.getElementById(cellNumber).style.color = '';
            //switch the two Id's
            eleminatePc(storenemypieceId,2,storenemypiececell);
                replace(oldId,oldcellnumber,pieceId,cellNumber);
                
                updategameBoard(oldId,oldcellnumber,-14);
                player1=false;
                player2=true;
                clickedPiece=false;
                noEnemy=true;
                player1points++;
                updateScore();
                
                
    
            
        }
        else if(gameBoardspots[cellvalue]==blackPiecePostions[oldId]-18&&player1==true&&checkFriendlyasKing[3]==false)
        {
            blackPiecePostions[oldId]-=18;
            //clear the O from the first spot
            document.getElementById(oldId).innerHTML='';
            //input O into the second spot we put
            document.getElementById(cellNumber).innerHTML='O';
            //cell.style.color='';
            //document.getElementById(oldId).style.color = '';
            //switch the two Id's
            eleminatePc(storenemypieceId,3,storenemypiececell);
            replace(oldId,oldcellnumber,pieceId,cellNumber);
            updategameBoard(oldId,oldcellnumber,-18);
            player1points++; 
            updateScore();  
            noEnemy=true;
            player1=false;
           player2=true;
         clickedPiece=false;
         
        }
    
}

if(player2==true)
{
    
    turnoffKingHints();

}
}


function hopOverforPlayer2(oldId,oldcellnumber,pieceId,cellNumber)
{
       
   
    let cellvalue = parseInt(cellNumber.replace(/\D/g, ""), 10);
  
   
    //for player 2 statements
    if(isKing[oldId]==false)
    {
    if(gameBoardspots[cellvalue]==redPiecePositions[oldId]-7&&player2==true)
    {
    
        redPiecePositions[oldId]-=7;
        //clear the O from the first spot
        document.getElementById(oldId).innerHTML='';
    //input O into the second spot we put
        document.getElementById(cellNumber).innerHTML='X';
    //document.getElementById(cellNumber).style.color = '';
    //switch the two Id's
        replace(oldId,oldcellnumber,pieceId,cellNumber);
        updategameBoard(oldId,oldcellnumber,-7);
        if(isKing[oldId]==false)
        {
        makeKing(oldId);
        }
        player1=true;
        player2=false;
        clickedPiece=false;
        noEnemy=true;
       

    } 
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
        if(isKing[oldId]==false)
        {
        makeKing(oldId);
        }
        player1=true;
        player2=false;
        clickedPiece=false;
        noEnemy=true;
       

    }
    else if(gameBoardspots[cellvalue]==redPiecePositions[oldId]-14&&player2==true && friendlyRight==false)
    {
        redPiecePositions[oldId]-=14;
        //clear the O from the first spot
        document.getElementById(oldId).innerHTML='';
    //input O into the second spot we put
        document.getElementById(cellNumber).innerHTML='X';
    //document.getElementById(cellNumber).style.color = '';
    //switch the two Id's

    eleminatePc(storenemypieceId,4,storenemypiececell);
    replace(oldId,oldcellnumber,pieceId,cellNumber);
    updategameBoard(oldId,oldcellnumber,-14);
    player2points++;
    updateScore();
    if(isKing[oldId]==false)
    {
    makeKing(oldId);
}
    player1=true;
    player2=false;
    clickedPiece=false;
    noEnemy=true;
   

    }
    else if(gameBoardspots[cellvalue]==redPiecePositions[oldId]-18&&player2==true && friendlyLeft==false)
    {
        redPiecePositions[oldId]-=18;
        //clear the O from the first spot
        document.getElementById(oldId).innerHTML='';
    //input O into the second spot we put
        document.getElementById(cellNumber).innerHTML='X';
    //document.getElementById(cellNumber).style.color = '';
    //switch the two Id's


    eleminatePc(storenemypieceId,5,storenemypiececell);
    player2points++;
    updateScore();
    replace(oldId,oldcellnumber,pieceId,cellNumber);
    updategameBoard(oldId,oldcellnumber,-18);
    if(isKing[oldId]==false)
    {
    makeKing(oldId);
}
        
        player1=true;
        player2=false;
        clickedPiece=false;
        noEnemy=true;
        
       

    }  
   
   
} else if(isKing[oldId]==true)
{
    
   
            //for player 2 statements
         if(gameBoardspots[cellvalue]==redPiecePositions[oldId]-7&&player2==true)
        {
            
            redPiecePositions[oldId]-=7;
            //clear the O from the first spot
            document.getElementById(oldId).innerHTML='';
        //input O into the second spot we put
            document.getElementById(cellNumber).innerHTML='X';
        //document.getElementById(cellNumber).style.color = '';
        //switch the two Id's
            replace(oldId,oldcellnumber,pieceId,cellNumber);
            updategameBoard(oldId,oldcellnumber,-7);
            if(isKing[oldId]==false)
            {
            makeKing(oldId);
            }
            player1=true;
            player2=false;
            clickedPiece=false;
            noEnemy=true;
          
    
        } 
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
            if(isKing[oldId]==false)
            {
            makeKing(oldId);
            }
            player1=true;
            player2=false;
            clickedPiece=false;
            noEnemy=true;
          
    
        }
        else if(gameBoardspots[cellvalue]==redPiecePositions[oldId]-14&&player2==true&&checkFriendlyasKing[0]==false)
        {
            redPiecePositions[oldId]-=14;
            //clear the O from the first spot
            document.getElementById(oldId).innerHTML='';
        //input O into the second spot we put
            document.getElementById(cellNumber).innerHTML='X';
        //document.getElementById(cellNumber).style.color = '';
        //switch the two Id's
    
        eleminatePc(storenemypieceId,4,storenemypiececell);
        replace(oldId,oldcellnumber,pieceId,cellNumber);
        updategameBoard(oldId,oldcellnumber,-14);
        if(isKing[oldId]==false)
        {
        makeKing(oldId);
        }
        player2points++;
        updateScore();
        player1=true;
        player2=false;
        clickedPiece=false;
        noEnemy=true;
           
    
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
    
    
        eleminatePc(storenemypieceId,5,storenemypiececell);
        player2points++;
        updateScore();
            replace(oldId,oldcellnumber,pieceId,cellNumber);
            updategameBoard(oldId,oldcellnumber,-18);
            
            if(isKing[oldId]==false)
            {
            makeKing(oldId);
            }
            
            player1=true;
            player2=false;
            clickedPiece=false;
            noEnemy=true;
            
        }//checking positive sides

        else if(gameBoardspots[cellvalue]==redPiecePositions[oldId]+7&&player2==true)
        {
            
            redPiecePositions[oldId]+=7;
            //clear the O from the first spot
            document.getElementById(oldId).innerHTML='';
        //input O into the second spot we put
            document.getElementById(cellNumber).innerHTML='X';
        //document.getElementById(cellNumber).style.color = '';
        //switch the two Id's
            replace(oldId,oldcellnumber,pieceId,cellNumber);
            updategameBoard(oldId,oldcellnumber,+7);
            if(isKing[oldId]==false)
            {
            makeKing(oldId);
            }
            player1=true;
            player2=false;
            clickedPiece=false;
            noEnemy=true;
           
    
        } 
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
            if(isKing[oldId]==false)
            {
            makeKing(oldId);
            }
            player1=true;
            player2=false;
            clickedPiece=false;
            noEnemy=true;
          
    
        }
        else if(gameBoardspots[cellvalue]==redPiecePositions[oldId]+14&&player2==true &&checkFriendlyasKing[2]==false)
        {
            redPiecePositions[oldId]+=14;
            //clear the O from the first spot
            document.getElementById(oldId).innerHTML='';
        //input O into the second spot we put
            document.getElementById(cellNumber).innerHTML='X';
        //document.getElementById(cellNumber).style.color = '';
        //switch the two Id's
    
        eleminatePc(storenemypieceId,6,storenemypiececell);
        replace(oldId,oldcellnumber,pieceId,cellNumber);
        updategameBoard(oldId,oldcellnumber,+14);
        if(isKing[oldId]==false)
        {
        makeKing(oldId);
        }
        player2points++;
        updateScore();
        player1=true;
        player2=false;
        clickedPiece=false;
        noEnemy=true;
          
    
        }
        else if(gameBoardspots[cellvalue]==redPiecePositions[oldId]+18&&player2==true&&checkFriendlyasKing[3]==false)
        {
            
            
    
            redPiecePositions[oldId]+=18;
            //clear the O from the first spot
            document.getElementById(oldId).innerHTML='';
        //input O into the second spot we put
            document.getElementById(cellNumber).innerHTML='X';
        //document.getElementById(cellNumber).style.color = '';
        //switch the two Id's
    
    
        eleminatePc(storenemypieceId,7,storenemypiececell);
        player2points++;
        updateScore();
            replace(oldId,oldcellnumber,pieceId,cellNumber);
            updategameBoard(oldId,oldcellnumber,+18);
            if(isKing[oldId]==false)
            {
            makeKing(oldId);
            }
            
            player1=true;
            player2=false;
            clickedPiece=false;
            noEnemy=true;
            
           
        }
    }
   }    

    
function kingMovements(oldId,oldcellnumber,pieceId,cellNumber)
{
    
     
    let cellvalue = parseInt(cellNumber.replace(/\D/g, ""), 10);
   if(noEnemy==true)
   {

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
}
else 
{
    
  
    hopOverforPlayer1(oldId,oldcellnumber,pieceId,cellNumber);
    noEnemy=true;
    
}

if(player2==true)
{

    
turnoffKingHints();
}


}

function kingMovementsforplayer2(oldId,oldcellnumber,pieceId,cellNumber)
{
   
    let cellvalue = parseInt(cellNumber.replace(/\D/g, ""), 10);
  if(noEnemy==true)
  {
  
    
  if(gameBoardspots[cellvalue]==redPiecePositions[oldId]+7&&player2==true)
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

}
else 
{
    hopOverforPlayer2(oldId,oldcellnumber,pieceId,cellNumber);
    noEnemy=true;
    
}

}

function hintspotforKingsPlayer2()
{
      
    if(noEnemy==true)
	{
       
        let index =0;
        let piecePosition= redPiecePositions[pieceId];
        
        
        for(index; index<4; index++)
        {
            if(gameBoard[piecePosition+7]==null&&index==0)
            {
                let cell1=redPiecePositions[pieceId]+7;
                let hint1=document.getElementById('cell'+cell1);
                hint1.classList.toggle('hint');   
                untoggle[index]=hint1;
            }
            else if(gameBoard[piecePosition+9]==null&&index==1)
            {
                let cell2=redPiecePositions[pieceId]+9;
                let hint2=document.getElementById('cell'+cell2);
                hint2.classList.toggle('hint');  
                untoggle[index]=hint2;
            }
            else if(gameBoard[piecePosition-7]==null&&index==2)
            {
                
                let cell3=redPiecePositions[pieceId]-7;
                let hint3=document.getElementById('cell'+cell3);
                hint3.classList.toggle('hint');  
                untoggle[index]=hint3;
            }
            else if(gameBoard[piecePosition-9]==null&&index==3)
            {
                let cell4=redPiecePositions[pieceId]-9;
                let hint4=document.getElementById('cell'+cell4);
                hint4.classList.toggle('hint');  
                untoggle[index]=hint4;
            }

        }
 
    }
    else if (noEnemy==false)
    {
        let index=0;
        let piecePosition= redPiecePositions[pieceId];
        for(index;index<6;index++)
        {
            if(gameBoard[piecePosition+7]!=null&&index==0)
            {
              
                 if(gameBoard[piecePosition+14]==null)
                {  
                let cell1=redPiecePositions[pieceId]+14;
                let hint1=document.getElementById('cell'+cell1);
                hint1.classList.toggle('hint');   
                untoggle[index]=hint1;
                 }
            }
            else if(gameBoard[piecePosition+9]!=null &&index==1)
            {
                if(gameBoard[piecePosition+18]==null)
                {  
                let cell2=redPiecePositions[pieceId]+18;
                let hint2=document.getElementById('cell'+cell2);
                hint2.classList.toggle('hint');   
                untoggle[index]=hint2;
                }

            }
            else if(gameBoard[piecePosition-7]==null && index==2)
            {
                let cell3=redPiecePositions[pieceId]-7;
                let hint3=document.getElementById('cell'+cell3);
                hint3.classList.toggle('hint');   
                untoggle[index]=hint3;
            }
            else if(gameBoard[piecePosition-9]==null && index==3)
            {
                let cell4=redPiecePositions[pieceId]+9;
                let hint4=document.getElementById('cell'+cell4);
                hint4.classList.toggle('hint');   
                untoggle[index]=hint4;
            }
            else if(gameBoard[piecePosition-7]!=null&&index==4)
            {
              
                 if(gameBoard[piecePosition-14]==null)
                {  
                let cell5=redPiecePositions[pieceId]-14;
                let hint5=document.getElementById('cell'+cell5);
                hint5.classList.toggle('hint');   
                untoggle[index]=hint6;
                 }
            }
            else if(gameBoard[piecePosition-9]!=null &&index==5)
            {
                if(gameBoard[piecePosition-18]==null)
                {  
                let cell6=redPiecePositions[pieceId]-18;
                let hint6=document.getElementById('cell'+cell6);
                hint6.classList.toggle('hint');   
                untoggle[index]=hint6;
                }

            }
        }

       
    }
}

function iniateallPieces()
{
    pc0="pc0";pc1="pc1";pc2="pc2";pc3="pc3";
    pc4="pc4";pc5="pc5";pc6="pc6";pc7="pc7";
    pc8="pc8";pc9="pc9";pc10="pc10";pc11="pc11";
    blackPiecePostions[pc0]=1;
    blackPiecePostions[pc1]=3;
    blackPiecePostions[pc2]=5;
    blackPiecePostions[pc3]=7;


    blackPiecePostions[pc4]=8;
    blackPiecePostions[pc5]=10;
    blackPiecePostions[pc6]=12;
    blackPiecePostions[pc7]=14;

    blackPiecePostions[pc8]=17;
    blackPiecePostions[pc9]=19;
    blackPiecePostions[pc10]=21;
    blackPiecePostions[pc11]=23;

    isKing[pc0]=false;
    isKing[pc1]=false;
    isKing[pc2]=false;
    isKing[pc3]=false;

    isKing[pc4]=false;
    isKing[pc5]=false;
    isKing[pc6]=false;
    isKing[pc7]=false;

    isKing[pc8]=true;
    isKing[pc9]=false;
    isKing[pc10]=false;
    isKing[pc11]=false;
    //gameboardspots are only so we can concatenate later
    for(let i=0;i<64;i++)
{gameBoardspots[i]=i;}
gameBoard=[
    null, "pc0", null, "pc1", null, "pc2", null, "pc3",
    "pc4", null, "pc5", null, "pc6", null, "pc7", null,
    null, "pc8", null, "pc9", null, "pc10", null, "pc11",
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    "pc12", null, "pc13", null, "pc14", null, "pc15", null,
    null, "pc16", null, "pc17", null, "pc18", null, "pc19",
    "pc20", null, "pc21", null, "pc22", null, "pc23", null];

 pc12="pc12";pc13="pc13";pc14="pc14";pc15="pc15";
pc16="pc16";pc17="pc17";pc18="pc18";pc19="pc19";
pc20="pc20";pc21="pc21";pc22="pc22";pc23="pc23";
 redPiecePositions[pc12]=40;
 redPiecePositions[pc13]=42;
 redPiecePositions[pc14]=44;
 redPiecePositions[pc15]=46;

 redPiecePositions[pc16]=49;
 redPiecePositions[pc17]=51;
 redPiecePositions[pc18]=53;
 redPiecePositions[pc19]=55;

 redPiecePositions[pc20]=56;
 redPiecePositions[pc21]=58;
 redPiecePositions[pc22]=60;
 redPiecePositions[pc23]=62;
 isKing[pc12]=true;
 isKing[pc13]=false;
 isKing[pc14]=false;
 isKing[pc15]=false;

 isKing[pc16]=false;
 isKing[pc17]=false;
 isKing[pc18]=false;
 isKing[pc19]=false;

 isKing[pc20]=false;
 isKing[pc21]=false;
 isKing[pc22]=false;
 isKing[pc23]=false;


 for(let i=0;i<8;i++)
 {
    checkFriendlyasKing[i]=false;
 }
 
 for(let i=0; i<2;i++)
 {
    hintSpotsforPawn[i]=false;
 }

}
