$(document).ready(function() {
  // Initialize variables
  var currentIndex = 0,
      sliderImages = $('.slider-image'),
      sliderImagesCount = sliderImages.length;

  // Set the first image as active
  sliderImages.eq(currentIndex).addClass('active');

  // Define function to move to next slide
  function nextSlide() {
    currentIndex++;
    if (currentIndex >= sliderImagesCount) {
      currentIndex = 0;
    }
    sliderImages.eq(currentIndex).addClass('active').siblings().removeClass('active');
    sliderImages.eq(currentIndex).css('left', '100%').animate({'left': '0'});
    sliderImages.eq((currentIndex + sliderImagesCount - 1) % sliderImagesCount).animate({'left': '-100%'});
  }

  // Set up interval to move to next slide every 4 seconds
  setInterval(nextSlide, 4000);

  // Add click event handlers to the buttons
  $('.prev-slide').click(function() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = sliderImagesCount - 1;
    }
    sliderImages.eq(currentIndex).addClass('active').siblings().removeClass('active');
    sliderImages.eq(currentIndex).css('left', '-100%').animate({'left': '0'});
    sliderImages.eq((currentIndex + 1) % sliderImagesCount).animate({'left': '100%'});
  });

  $('.next-slide').click(nextSlide);
});

//đổi ảnh dí chuột..
 myImg_1 = document.getElementById("my_img_1").src;
 myImg_2 = document.getElementById("my_img_2").src;
 myImg_3 = document.getElementById("my_img_3").src;
 myImg_4 = document.getElementById("my_img_4").src;
 myImg_5 = document.getElementById("my_img_5").src;
 myImg_6 = document.getElementById("my_img_6").src;
 
function hienThi_1(){
  document.getElementById("my_img_1").src = "img/img_2/1.webp"
}
function notHienThi_1(){
  document.getElementById("my_img_1").src = myImg_1
}

function hienThi_2(){
  document.getElementById("my_img_2").src = "img/img_2/2.jpg"
}
function notHienThi_2(){
  document.getElementById("my_img_2").src = myImg_2
}

function hienThi_3(){
  document.getElementById("my_img_3").src = "img/img_2/3.webp"
}
function notHienThi_3(){
  document.getElementById("my_img_3").src = myImg_3
}

function hienThi_4(){
  document.getElementById("my_img_4").src = "img/img_2/4.webp"
}
function notHienThi_4(){
  document.getElementById("my_img_4").src = myImg_4
}

function hienThi_5(){
  document.getElementById("my_img_5").src = "img/img_2/5.jpg"
}
function notHienThi_5(){
  document.getElementById("my_img_5").src = myImg_5
}

function hienThi_6(){
  document.getElementById("my_img_6").src = "img/img_2/6.webp"
}
function notHienThi_6(){
  document.getElementById("my_img_6").src = myImg_6
}

// đổi ảnh card sản phẩm mới
card_1 = document.getElementById("card-1").src;
card_2 = document.getElementById("card-2").src;
card_3 = document.getElementById("card-3").src;
card_4 = document.getElementById("card-4").src;
card_5 = document.getElementById("card-5").src;
card_6 = document.getElementById("card-6").src;
card_7 = document.getElementById("card-7").src;
card_8 = document.getElementById("card-8").src;

function hienthi_card_1(){
  document.getElementById("card-1").src = "img/img san pham moi/new/1.webp"
}
function not_hienthi_card_1(){
  document.getElementById("card-1").src = card_1
}
function hienthi_card_2(){
  document.getElementById("card-2").src = "img/img san pham moi/new/2.webp"
}
function not_hienthi_card_2(){
  document.getElementById("card-2").src = card_2
}
function hienthi_card_3(){
  document.getElementById("card-3").src = "img/img san pham moi/new/3.webp"
}
function not_hienthi_card_3(){
  document.getElementById("card-3").src = card_3
}
function hienthi_card_4(){
  document.getElementById("card-4").src = "img/img san pham moi/new/4.webp"
}
function not_hienthi_card_4(){
  document.getElementById("card-4").src = card_4
}
function hienthi_card_5(){
  document.getElementById("card-5").src = "img/img san pham moi/new/5.webp"
}
function not_hienthi_card_5(){
  document.getElementById("card-5").src = card_5
}
function hienthi_card_6(){
  document.getElementById("card-6").src = "img/img san pham moi/new/6.webp"
}
function not_hienthi_card_6(){
  document.getElementById("card-6").src = card_6
}
function hienthi_card_7(){
  document.getElementById("card-7").src = "img/img san pham moi/new/7.webp"
}
function not_hienthi_card_7(){
  document.getElementById("card-7").src = card_7
}
function hienthi_card_8(){
  document.getElementById("card-8").src = "img/img san pham moi/new/8.jpg"
}
function not_hienthi_card_8(){
  document.getElementById("card-8").src = card_8
}

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
    $('.menu').addClass('menu_2');
  } else {
    $('.menu').removeClass('menu_2');
  }
});
