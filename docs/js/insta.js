$(document).ready(function () {
  var feed = new Instafeed({
    get: "user",
    userID: 512819861478832,
    accessToken:
      "IGQWRPOXA2Vk5vOXlOSU81ZATFfTV9mN1A0OXgzcjNrMFZAVQkVEMHNoNkZAmWnBmTVh5OXJSN3hMVHBfRldEVnVPSFRGR0pGUEVpdVFKX2cxa1luWVFkbUNqcGM4bVdTT19ibjJjbGFRQTlHZAmpxV0ZA2c1FqTjZAKVEUZD",
    resolution: "standart_resolution",
  });
  feed.run();
  setTimeout(function () {
    $(".instafeed").addClass("shadowed");
  }, 800);
});
