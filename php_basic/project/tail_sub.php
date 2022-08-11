<footer class="Footer">
  <div class="container">
    <div class="logo">
      <img src="./assets/image/logo02.png" alt="">
    </div>
    <address>
      <ul>
        <li>
          주소 : <?= $c_address ?>
        </li>
        <li>
          대표 : <?= $c_ceo ?>
        </li>
        <li>
          사업자등록번호 : <?= $c_num ?>
        </li>
        <li>
          <a href="tel:<?= $tel ?>">
            전화 : <?= $tel ?>
          </a>
        </li>
        <li>
          <a href="mailto:<?= $email ?>">
            이메일 : <?= $email ?>
          </a>
        </li>
      </ul>
      <div class="copyright">
        &copy; <?= $company ?> all rights reserved
      </div>
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