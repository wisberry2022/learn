<? include "head_sub.php" ?>
<div class="SubPage">
  <div class="SubMain">
    <div class="container">
      <div class="sub_slogan">
        <?= $e_slogan ?>
      </div>
      <div class="sub_title">
        <?= $sub_title ?>
      </div>
    </div>
  </div>
  <div class="PageInfo">
    <div class="container">
      <ol>
        <li><a href="/project"><i class="xi-home"> Home</i></a></li>
        <li><a href="./sub0<?= $subnum ?>.php"><?= $sub_title ?></a></li>
      </ol>
    </div>
  </div>
  <style>
    .SubMain {
      background: url(./assets/image/main_0<?= $subnum ?>.jpg) no-repeat center center/cover;
    }
  </style>
  <div class="SubContent">
    <aside>
      <div class="title">
        <?= $sub_title ?>
      </div>
      <div class="Lnb">
        <? include "nav.php" ?>
      </div>
      <? include "customer.php" ?>
    </aside>
    <article>
      <div class="title">
        <?= $sub_title ?>
      </div>