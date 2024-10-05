$(document).ready(function () {
  var feed = new Instafeed({
    // get: "user",
    // userID: 512819861478832,
    accessToken:
      "IGQWRQRWJHd29hY1lBcENaS1E2UVJuRXdEY0NENGhNS09pSzZAoSEgxQUJyWTBvZAkFxV0pNdTROakd4QzZA0UFlFdTJpLVpxNUFaSGN2a3htV21oUER3SUgwdUx3bkNEOWkxQmJKQnRydlJLMDA2RzJmOFB2OXNZARFkZD",
    resolution: "standart_resolution",
  });
  feed.run();
  setTimeout(function () {
    $(".instafeed").addClass("shadowed");
  }, 800);
});
