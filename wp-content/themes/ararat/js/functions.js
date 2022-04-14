$(document).ready(function() {
  $('input[type="file"]').change(function(){
    var value = $("input[type='file']").val();
    $('.js-value').text(value);
  });

  $('.calculator_item_value1 .wpcf7-list-item-label').wrap('<span class="clc_img_box-img"></span>')

  $('.calculator_item_value1 .clc_img_box-img').wrap('<span class="clc_img_box"></span>')
  $('.calculator_item_value1 .clc_img_box').wrap('<span class="label"></span>')
  $('.calculator_item_value1 .wpcf7-list-item').wrap('<label class="clc_val-img"></label>')


  $('.calculator_item_value1 .civ-img1 .clc_img_box-img').prepend('<img class="cl7" src="../wp-content/uploads/2019/08/calc-img.jpg" />')
  $('.calculator_item_value1 .civ-img2 .clc_img_box-img').prepend('<img class="cl7" src="../wp-content/uploads/2019/08/calc-img2.jpg" />')
  $('.calculator_item_value1 .civ-img3 .clc_img_box-img').prepend('<img class="cl7" src="../wp-content/uploads/2019/08/calc-img3.jpg" />')
  $('.calculator_item_value1 .civ-img4 .clc_img_box-img').prepend('<img class="cl7" src="../wp-content/uploads/2019/08/calc-img4.jpg" />')

  $('.calculator_item_value3 .civ-img1 .clc_img_box-img').prepend('<img src="../wp-content/uploads/2019/08/12890fca66ffdcc5fcbf57cff0c9f168.jpg" />')
  $('.calculator_item_value3 .civ-img2 .clc_img_box-img').prepend('<img src="../wp-content/uploads/2019/08/b5641c91fa7fba15e2e6d1063a722ad1.jpg" />')
  $('.calculator_item_value3 .civ-img3 .clc_img_box-img').prepend('<img src="../wp-content/uploads/2019/08/92407ab5ab62fa5b70bdb4b9d0d9809c.jpg" />')
  $('.calculator_item_value3 .civ-img4 .clc_img_box-img').prepend('<img src="../wp-content/uploads/2019/08/3383b81eb62e074809c16aa49fcccf3b.jpg" />')
  $('.calculator_item_value3 .civ-img5 .clc_img_box-img').prepend('<img src="../wp-content/uploads/2019/08/150c89c373591b1f516d96298525d88f.jpg" />')



  $('.calculator_item_value1 .wpcf7-radio').addClass('clc__item_im')

  $('.calculator_item_value1 .clc__item_im input').addClass('checkbox')


  $('.calculator_item_value1 .wpcf7-list-item-label').addClass('clc_img-title')

  $('.calculator_item_value2 .radio-886').wrap('<label class="clc_val-rad"></label>')

  $('.calculator_item_value2 .wpcf7-list-item-label').before('<span class="checkbox-custom"></span>')

  $('.radio-886 input').addClass('checkbox');

  $('[data-gallery]').lightGallery({
      selector: 'a',
      download: false,
      thumbnail: false,
      fullScreen: false,
      share: false,
      hash: false
  });


  $('.call-pop').magnificPopup({
    type: 'inline'
  });
  $('#thanks-popup').magnificPopup({
    type: 'inline'
  });



  $('#form-call').submit(function() {
    $.ajax({
      type: "POST",
      url: "../form-call.php",
      data: $(this).serialize()
    }).done(function() {
      $.magnificPopup.open({
        items: {
          src: '#thanks-popup'
        }
      });
      $(this).find('input').val('');
      $('#form-call').trigger('reset');
    });
    return false;
  });

  /*
  $('#form-call-3d').submit(function() {
    if (window.FormData === undefined) {
    alert('В вашем браузере FormData не поддерживается')
    } else {
      var formData = new FormData();
      formData.append('file', $("#custom-file-upload")[0].files[0]);

      $.ajax({
        type: "POST",
        url: "../form-call-3d.php",
        data: $(this).serialize()
      }).done(function() {
        $.magnificPopup.open({
          items: {
            src: '#thanks-popup'
          }
        });
        $(this).find('input').val('');
        $('#form-call-3d').trigger('reset');
      });
      return false;
  }
  });
  */

  

  $('#form-call-desinger').submit(function() {
    $.ajax({
      type: "POST",
      url: "../form-call-desinger.php",
      data: $(this).serialize()
    }).done(function() {
      $.magnificPopup.open({
        items: {
          src: '#thanks-popup'
        }
      });
      $(this).find('input').val('');
      $('#form-call-desinger').trigger('reset');
    });
    return false;
  });

  $('#form-call-help').submit(function() {
    $.ajax({
      type: "POST",
      url: "../form-call-help.php",
      data: $(this).serialize()
    }).done(function() {
      $.magnificPopup.open({
        items: {
          src: '#thanks-popup'
        }
      });
      $(this).find('input').val('');
      $('#form-call-help').trigger('reset');
    });
    return false;
  });

  $('#form-call-index').submit(function() {
    $.ajax({
      type: "POST",
      url: "form-call-index.php",
      data: $(this).serialize()
    }).done(function() {
      $.magnificPopup.open({
        items: {
          src: '#thanks-popup'
        }
      });
      $(this).find('input').val('');
      $('#form-call').trigger('reset');
    });
    return false;
  });

  $('#form-call-variant').submit(function() {
    $.ajax({
      type: "POST",
      url: "../form-call-variant.php",
      data: $(this).serialize()
    }).done(function() {
      $.magnificPopup.open({
        items: {
          src: '#thanks-popup'
        }
      });
      $(this).find('input').val('');
      $('#form-call-variant').trigger('reset');
    });
    return false;
  });



  $(function(){
    $("#itemList .item-inner").each(function(idx){
      $(this).css({height:xRandomInt(100,300)+"px"});
    });
  });
  function xRandomInt(nMax,nMin){
    var nRandomInt = Math.floor(Math.random()*(nMax-nMin+1))+nMin;
    return nRandomInt;
  }
});

jQuery(function($) {
  $(window).scroll(function(){
    if($(this).scrollTop()>1){
      $('#top__line').addClass('scroll');
    }
    else if ($(this).scrollTop()<1){
      $('#top__line').removeClass('scroll');
    }
  });
});

$(document).ready(function(){
 (function() {

  "use strict";

  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();
});
$(document).ready(function(){
  $(".button_toogle").click(function(){
    $(this).toggleClass('active');
    $('.navigation__mobile').toggleClass('active');
    $('#top__line').addClass('active');
  });
  $("#menus a").click(function(){
    $("html").removeClass('over');
    $(".navigation__mobile").removeClass('active');
    $(".btn__menu").removeClass('active');
    $('#top__line').removeClass('active');
  });


  $('.tabgroup > div').hide();
  $('.tabgroup > div:first-of-type').show();
  $('.tabs a').click(function(e){
    e.preventDefault();
    var $this = $(this),
        tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
        others = $this.closest('li').siblings().children('a'),
        target = $this.attr('href');
    others.removeClass('active');
    $this.addClass('active');
    $(tabgroup).children('div').hide();
    $(target).show();
  })


  $('.brends-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots:false,
    centerMode: true,
    arrows:true,
    autoplay:true,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        fade: false,
        slidesToShow: 5
      }
    },{
      breakpoint: 980,
      settings: {
        fade: false,
        centerMode: true,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        fade: false,
        centerMode: true,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        fade: false,
        slidesToShow: 1
      }
    }]
  }).on('beforeChange', function(e, slick, curr, next) {
    const max = slick.slideCount - 1;
    if (
      (!curr && next === max) ||
      (!next && curr === max)
      ) {
      $(this)
    .find('.slick-active:first')
    [curr ? 'next' : 'prev']()
    .addClass('slick-xxx');
  }
  }).on('afterChange', function() {
    $(this).find('.slick-xxx').removeClass('slick-xxx');
  });


  //Calc
  $('#ddd').on('click', function(){
    var values = [];
    $('[name="radio-200"]:checked').each(function(){
      values.push($(this).val());
    });
    $('[name="radio-886"]:checked').each(function(){
      values.push($(this).val());
    });
    $('[name="radio-201"]:checked').each(function(){
      values.push($(this).val());
    });
    values.push($('#number980').val() + ' длина');
    values.push($('#number981').val() + ' ширина');
    
    $('#chek-variant-hide').val(values.join(', '));
  });


  $('#form-call-calc').submit(function() {
    $('#ddd').trigger('click');
    $.ajax({
      type: "POST",
      url: "../form-call-calc.php",
      data: $(this).serialize()
    }).done(function() {
      $.magnificPopup.open({
        items: {
          src: '#thanks-popup'
        }
      });
      $(this).find('input').val('');
      $('#form-call-calc').trigger('reset');
    });
    return false;
  });



  document.getElementById('feedback-form').addEventListener('submit', function(evt){
    var http = new XMLHttpRequest(), f = this;
    evt.preventDefault();
    http.open("POST", "../contacts.php", true);
    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200) {
        $.magnificPopup.open({
          items: {
            src: '#thanks-popup'
          }
        });
      }
    }
    http.onerror = function() {
      alert('Извините, данные не были переданы');
    }
    http.send(new FormData(f));
  }, false);

});