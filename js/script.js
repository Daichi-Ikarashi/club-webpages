const swiper = new Swiper('.swiper', {
    // スライダーの向き　横 horizontal, 縦 vertical
    direction: 'horizontal',
    speed: 1000,    // スライドの動きの速さ
    loop: true,     // 最後の画像になったときに最初の画像に戻る（無限ループ）

    autoplay: {
        delay: 2500 // スライドの停止時間 ms
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',  // スライダー下の点

      clickable: true            // paginationをクリックして操作できるようにする
    }
  
    // Navigation arrows
    /*navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }*/
  });