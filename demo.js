var aGrid, aSquares, iDelay, iDelayIncrement, iCounter;

aGrid = [
     {x: 002, y:002},{x: 102, y:002},{x: 202, y:002},{x: 302, y:002}
    
    ,{x: 002, y:102},{x: 102, y:102},{x: 202, y:102},{x: 302, y:102}
    
    ,{x: 002, y:202},{x: 102, y:202},{x: 202, y:202},{x: 302, y:202}
    
    ,{x: 002, y:302},{x: 102, y:302},{x: 202, y:302},{x: 302, y:302}

    ,{x: 152, y:064},{x: 152, y:252}
];

aSquares = [
     {x: 002, y:002,z:400}
    
    ,{x: 002, y:002,z:200},{x: 102, y:002,z:200},{x: 202, y:002,z:200}
    ,{x: 002, y:102,z:200},{x: 102, y:102,z:200},{x: 202, y:102,z:200}
    ,{x: 002, y:202,z:200},{x: 102, y:202,z:200},{x: 202, y:202,z:200}
    
    ,{x: 152, y:064, z:50},{x: 202, y:064, z:50},{x: 152, y:102, z:50},{x: 202, y:102, z:50}
    ,{x: 152, y:252, z:50},{x: 202, y:252, z:50},{x: 152, y:302, z:50},{x: 202, y:302, z:50}

     ,{x: 002, y:002,z:300},{x: 102, y:002,z:300},{x: 002, y:102,z:300},{x: 102, y:102,z:300}

];

function getContext() {
    var oCanvas, oContext;
    
    oCanvas = document.getElementById('victim');
    if (oCanvas.getContext) {
      oContext = oCanvas.getContext('2d');
    } else {
      alert('Sorry, your browser does not support the technology needed to display this page.');
    }
    
    return oContext
};

function drawSquare(p_oContext, p_oSquare, p_sColor) {
    p_oContext.strokeStyle = p_sColor || 'black';
    p_oContext.strokeRect(p_oSquare.x, p_oSquare.y, p_oSquare.z || 100, p_oSquare.z || 100);
}

function drawGrid(p_oContext, p_aGrid) {
    var iLength;

    iLength = p_aGrid.length-1;
    for(;iLength > -1; iLength--) {
        drawSquare(p_oContext, p_aGrid[iLength]);
    }
};
        
function drawCounter(p_oContext, p_iCounter, p_sColor) {
    p_oContext.font = "bold 16px Arial";

    // Rub out previous counter
    p_oContext.fillStyle = 'white';
    p_oContext.fillRect(404, 400-16, 24, 24);

    p_oContext.fillStyle = p_sColor || 'black';
    p_oContext.fillText(p_iCounter, 404, 400);        
}    

function drawSquares(p_oContext, p_aSquares) { 
    var iLength, i;

    iLength = p_aSquares.length-1;
    for(i=0;i <= iLength; i++) {
        iCounter++;
        iDelay = iDelay + iDelayIncrement || 0;
        window.setTimeout(drawSquare, iDelay, p_oContext, p_aSquares[i], 'red');        
        window.setTimeout(drawCounter, iDelay, p_oContext, iCounter, 'red');        
        window.setTimeout(drawGrid, iDelay + 300, p_oContext, aGrid);        
        // drawSquare(p_oContext, p_aSquares[iLength], 'red');
    }    
}

function run() {
    iCounter=0;    
    iDelay = 0;    
    drawSquares(oContext, aGrid);
    drawSquares(oContext, aSquares);
}    

var oContext = getContext();
oContext.lineWidth = 4;
drawGrid(oContext, aGrid); 
iDelayIncrement = 500;
    
document.getElementById('culprit').onclick = run;

//EOF
