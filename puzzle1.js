var p1 = document.getElementById('piece1');
var p2 = document.getElementById('piece2');
var p3 = document.getElementById('piece3');
var p4 = document.getElementById('piece4');
var p5 = document.getElementById('piece5');
var pieces = [];

function showValue(idNumber, newValue)
{
  document.getElementById("range"+idNumber).innerHTML=newValue;
}

function playPiece(pieceNumber)
{
  document.getElementById(pieceNumber).play();
  //document.getElementById('piece2').play();
}

// delay playing the audio by however many seconds specified by the slider
function playDelay()
{
  //playPiece('original');
  pieces.push(setTimeout("p1.play()", (document.getElementById("range1").innerHTML)*1000));
  pieces.push(setTimeout("p2.play()", (document.getElementById("range2").innerHTML)*1000));
  pieces.push(setTimeout("p3.play()", (document.getElementById("range3").innerHTML)*1000));
  pieces.push(setTimeout("p4.play()", (document.getElementById("range4").innerHTML)*1000));
  pieces.push(setTimeout("p5.play()", (document.getElementById("range5").innerHTML)*1000));

}

function mute(id) {
  if (document.getElementById(id).value == "Mute") {
    switch (id) {
      case "button1":
        p1.muted = true;
        document.getElementById(id).value = "Unmute";
        break;
      case "button2":
          p2.muted = true;
          document.getElementById(id).value = "Unmute";
          break;
      case "button3":
            p3.muted = true;
            document.getElementById(id).value = "Unmute";
            break;
      case "button4":
              p4.muted = true;
              document.getElementById(id).value = "Unmute";
              break;
      case "button5":
                p5.muted = true;
                document.getElementById(id).value = "Unmute";
                break;
          }
      }
      else {
        switch (id) {
          case "button1":
            p1.muted = false;
            document.getElementById(id).value = "Mute";
            break;
          case "button2":
              p2.muted = false;
              document.getElementById(id).value = "Mute";
              break;
          case "button3":
                p3.muted = false;
                document.getElementById(id).value = "Mute";
                break;
          case "button4":
                  p4.muted = false;
                  document.getElementById(id).value = "Mute";
                  break;
          case "button5":
                    p5.muted = false;
                    document.getElementById(id).value = "Mute";
                    break;
              }
      }
}

function allStop() {
  for (i = 0; i < pieces.length; i++) {
    //console.log("p"+i);
    clearTimeout(pieces[i]); }
/*  for (i = 1; i < 6; i++) {
    console.log('piece'+i);
    document.getElementById('piece'+i).pause();
    document.getElementById('piece'+i).currentTime = 0;
  }
  document.getElementById('original').pause();
  document.getElementById('original').currentTime=0;
  document.getElementById('piece1').pause();
  document.getElementById('piece1').currentTime=0;
  document.getElementById('piece2').pause();
  document.getElementById('piece2').currentTime=0;
  document.getElementById('piece3').pause();
  document.getElementById('piece3').currentTime=0;
  document.getElementById('piece4').pause();
  document.getElementById('piece4').currentTime=0;
  document.getElementById('piece5').pause();
  document.getElementById('piece5').currentTime=0; */
}
