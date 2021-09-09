<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <meta charset="utf-8">
    <title>Animated Icons</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <style>
      .selected {
        color:red;
      }
    </style>
  </head>
  <body>
    <div id="ico1" class="fa"></div>
    <div id="ico2" class="fa"></div>
    <div id="ico3" class="fa"></div>

    <button type="button" name="button" onclick="selected();"></button>

    <?php echo "Hello Wrld!";  ?>

    <script>
function hourglass() {
  var a;
  a = document.getElementById("ico1");
  a.innerHTML = "&#xf251;";
  setTimeout(function () {
      a.innerHTML = "&#xf252;";
    }, 1000);
  setTimeout(function () {
      a.innerHTML = "&#xf253;";
    }, 2000);
}
hourglass();
setInterval(hourglass, 3000);
</script>
<script>
function chargebattery() {
  var a;
  a = document.getElementById("ico2");
  a.innerHTML = "&#xf244;";
  setTimeout(function () {
      a.innerHTML = "&#xf243;";
    }, 1000);
  setTimeout(function () {
      a.innerHTML = "&#xf242;";
    }, 2000);
  setTimeout(function () {
      a.innerHTML = "&#xf241;";
    }, 3000);
  setTimeout(function () {
      a.innerHTML = "&#xf240;";
    }, 4000);
}
chargebattery();
setInterval(chargebattery, 5000);
</script>
<script>
function smile() {
  var a;
  a = document.getElementById("ico3");
  a.innerHTML = "&#xf118;";
  setTimeout(function () {
      a.innerHTML = "&#xf11a;";
    }, 1000);
  setTimeout(function () {
      a.innerHTML = "&#xf119;";
    }, 2000);
  setTimeout(function () {
      a.innerHTML = "&#xf11a;";
    }, 3000);
}
smile();
setInterval(smile, 4000);
</script>

<script>
function selected() {
  $('#ico1').addClass('selected');
}
</script>

  </body>
</html>
