function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function play(frame = 1, s = 500) {
  localStorage.frame_num = frame;

  document.getElementById("Main").innerHTML = "";

  SVG = new Vivus(
    "Main",
    {
      type: "oneByOne",
      start: "manual",
      duration: s,
      file: "./frame" + frame + ".svg",
      onReady: function (obj) {
        obj.play(2);
      },
    },
    function (obj) {
      obj.el.classList.add("finished");
    }
  );
}
function stop(s) {
  s.stop();
}
