<? include "asset.php" ?>

<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./assets/plugin/css/common.css">
  <link rel="stylesheet" href="./assets/plugin/css/slick.css">
  <link rel="stylesheet" href="./css/main.css">
  <title><?= $title ?></title>
</head>

<body>
  <div class="Wrap">
    <header class="Header">
      <div class="top">
        <div class="container">
          <strong>
            <?= $c_slogan ?>
          </strong>
          <ul>
            <li><a href="#!">news / notice</a></li>
            <li><a href="#!">adm</a></li>
          </ul>
        </div>
      </div>
      <div class="bottom">
        <div class="container">
          <h1>
            <a href="#!">
              <img src="./assets/image/logo02.png" alt="<?= $title ?>">
            </a>
          </h1>
          <nav class="Gnb">
            <? include "nav.php" ?>
          </nav>
        </div>
      </div>
    </header>