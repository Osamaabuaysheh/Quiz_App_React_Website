var paths = document.getElementsByClassName("styled");
var path = paths[paths.length - 1];
var counter = 0;
var total = 47;

var length = path.r.baseVal.value * 2 * Math.PI;

$(path).css({
  "stroke-dasharray": length,
  "stroke-dashoffset": 0,
  opacity: 1,
});

//simulate multiple requests completing at random times. setTimeout acts as success handler for ajax calls.
for (var i = 0; i < total; ++i) {
  setTimeout(function () {
    counter++;
    var percentage = Math.ceil((100 * counter) / total);
    $(".percentage").text(percentage);
    $(path).css({
      "stroke-dashoffset": -((counter / total) * length),
    });

    if (percentage >= 100) {
      setTimeout(function () {
        document.getElementById("progress").classList.add("complete");
        document.body.classList.add("complete");
      }, 500);
    }
  }, Math.random() * 5000);
}
