<!DOCTYPE html>
<?php
  $id = $_GET['id'];
?>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="css/style.min.css">
    <title></title>
  </head>
  <body>
    <script src="https://www.gstatic.com/firebasejs/4.2.0/firebase.js"></script>
    <script src="js/firebaseConfig.min.js"></script>
    <script src="js/waferSummary.js" charset="utf-8"></script>
    <script type="text/javascript">
      getData(<?php echo $id ?>);
    </script>
  </body>
</html>
