var noOfSquares = 6;
var colors = generateRandomColors(noOfSquares);
  var pickedColor = pickcolor();
  var colorDisplay = document.getElementById("colorDisplay");

  colorDisplay.textContent = pickedColor;
  var messageDisplay = document.querySelector("#message");
  var squares = document.querySelectorAll(".square");
  var h1 = document.querySelector("h1");
  var reset= document.querySelector("#reset");
  


   
  reset.addEventListener("click",function()
  {
      colors = generateRandomColors(6);
      pickedColor = pickcolor();
      colorDisplay.textContent = pickedColor;
      this.textContent="New colors"
      messageDisplay.textContent="";
      for(var i=0;i<squares.length;i++)
      {
        squares[i].style.backgroundColor = colors[i];   
      }
      h1.style.background = "steelblue";
  })

  for(var i=0;i<squares.length;i++)
  {
      squares[i].style.backgroundColor = colors[i];
       squares[i].addEventListener("click",function()
       {
          var clickedColor = this.style.backgroundColor;
       if(clickedColor === pickedColor)
       {
            messageDisplay.textContent = "correct";
            reset.textContent = "Play Again??";
            changeBackground(clickedColor);
            h1.style.background = clickedColor;
           } 
              else
              {
                 this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "try again";
              }

  })
}
 function changeBackground(color)
 {
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor = color;
    }
 }

 function pickcolor()
 {
   var random=  Math.floor(Math.random()*colors.length) 
    return colors[random];
}
 
function generateRandomColors(num)
{
  var arr=[]
  for(var i=0; i<num;i++)
  {
   arr.push(randomColor());
  }
  return arr;
}
function randomColor()
{
    var red= Math.floor(Math.random()*256);
    var blue= Math.floor(Math.random()*256);
    var green= Math.floor(Math.random()*256);

     return "rgb(" + red + ", " + green + ", " + blue + ")";
}

var easybtn = document.querySelector("#easyBtn");
  var hardbtn = document.querySelector("#hardBtn");

  easybtn.addEventListener("click",function()
  {
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    noOfSquares = 3;
    colors = generateRandomColors(noOfSquares);
    pickedColor = pickcolor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++)
    {
      if(colors[i])
      {
        squares[i].style.backgroundColor = colors[i];
      }
      else{
        squares[i].style.display = "none";
      }
    }
  })

  hardbtn.addEventListener("click",function(){
      hardbtn.classList.add("selected");
      easybtn.classList.remove("selected");
      noOfSquares= 6;
      colors = generateRandomColors(noOfSquares);
      pickedColor = pickcolor();
      colorDisplay.textContent = pickedColor;
      for(var i=0; i<squares.length; i++)
      {
          squares[i].style.backgroundColor = colors[i];
          squares[i].style.display= "block";
      }

  })