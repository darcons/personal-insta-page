$(document).ready(function () {
  var feed = new Instafeed({
    get: "user",
    userID: 512819861478832,
    accessToken:
      "IGQWRQZAEZAYTFplUXRiTjlNcEZAZAQWp4Y3I4bEtkNk5NWGtZAN1FxSnZAidFFJbFNXakJxVk5HMEpKdk1idFhVVHpNNFJXWVozSmJxYnlodHFHeWt0SDJsczJSeElzODBDMXhtUHc5WWRHNDdnZA2N1dHk3UnpLQjFJZAFkZD",
    resolution: "standart_resolution",
  });
  feed.run();
  setTimeout(function () {
    $(".instafeed").addClass("shadowed");
  }, 800);
});
