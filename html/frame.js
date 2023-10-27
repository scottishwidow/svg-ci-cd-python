var SVG;

var a = location.search.split(";");
var o = a.reduce(function (o, v) {
  var kv = v.split("=");
  kv[0] = kv[0].replace("?", "");
  o[kv[0]] = kv[1];
  return o;
}, {});

localStorage.pause = 0;
//console.log(o.frame, o.rate);

play(o.frame, o.rate);

document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
  return (
    evt.touches || // browser API
    evt.originalEvent.touches
  ); // jQuery
}

function handleTouchStart(evt) {
  xDown = getTouches(evt)[0].clientX;
  yDown = getTouches(evt)[0].clientY;
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    /*most significant*/
    if (xDiff > 0) {
      play(++localStorage.frame_num);
    } else {
      play(--localStorage.frame_num);
    }
  } else {
    if (yDiff > 0) {
    } else {
      play(1);
    }
  }
  /* reset values */
  xDown = null;
  yDown = null;
}

document.addEventListener("keydown", function (event) {
  //   console.log(event.which);

  switch (event.which) {
    case 39:
      play(++localStorage.frame_num);
      break;
    case 37:
      play(--localStorage.frame_num);
      break;
    case 32:
      if (localStorage.pause == 0) {
        SVG.stop();
        localStorage.pause = 1;
      } else {
        SVG.play(1);
        localStorage.pause = 0;
      }
      break;
  }
});
