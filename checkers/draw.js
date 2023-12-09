function clickPiece(pieceId, cellId) 
{
    // Check if the pieceId is not 'None'
    if (pieceId !== 'None') {
      // Create a new circle element
      var circle = document.createElement('div');
      circle.className = 'circle';
      
      // Append the circle to the clicked td element
      document.getElementById(cellId).appendChild(circle);
    }
  }
  