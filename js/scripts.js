jQuery("h1").click(function() {
  alert("This is a heading.");
});

jQuery("p").click(function() {
  alert("This is a paragraph.");
});

jQuery("img").click(function() {
  alert("This is an image.");
});

$(document).ready(function() {
  $("button#dark").click(function() {
    $("body").addClass("grey-background");
  });

  $("button#light").click(function() {
    $("body").addClass("white-background");
  });
});