$(document).ready(function () {
  var feed = new Instafeed({
    get: "user",

    resolution: "standart_resolution",
  });
  feed.run();
  setTimeout(function () {
    $(".instafeed").addClass("shadowed");
  }, 800);
});
