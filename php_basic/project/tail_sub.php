<footer class="Footer">
  <div class="container">
    <div class="logo"></div>
    <address>
      주소 :
    </address>
  </div>

</footer>
</div>
<script src="./assets/plugin/js/jquery-1.12.4.min.js"></script>
<script src="./assets/plugin/js/slick.min.js"></script>
<script src="./js/main.js"></script>
<script>
  var pageNum = <?= $subnum ?>
  $('.Lnb li').eq(pagenum - 1).addClass('on');
</script>
</body>

</html>