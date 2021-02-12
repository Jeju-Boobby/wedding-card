// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed
$(document).ready(function () {
    $("#map-image").on("click")
    {

    }

    $('#go-to-top').click(function () {
        $('html,body').animate({scrollTop: 0}, 400);
        return false;
    });

    $(".gift-send").click(function () {
        $("#gift-name").text($(this).data("name"));
    })


    $("#reserveGiftButton").click(function () {
        let name = $("#sender-name").val();
        let message = $("#sender-message").val();
        $("#reserveGiftButton").text("전송중...");
        $("#reserveGiftButton").prop("disabled", true);

        emailjs.init("user_yjLL5xG0A3kkOCH5BGIDh");
        emailjs.send("wedding-mail", "gift_send", {
            name: name,
            gift: $("#gift-name").text(),
            message: message
        }).then(function (response) {
            $('#giftMailModal').modal('hide');
            alert(name + "님의 메시지가 정상적으로 전송되었습니다.");

            $("#reserveGiftButton").text("예약하기!");
            $("#sender-name").val('');
            $("#sender-message").val('');
            $("#reserveGiftButton").prop("disabled", false);
        }, function (err) {
            alert("메시지 전송이 실패했습니다. 다시 시도해주세요.");
        });
    })
})

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("card");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  slides[slideIndex-1].style.display = "table-cell";
  dots[slideIndex-1].className += " active-dot";
}
