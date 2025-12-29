$(function () {

  $("#accordionBlock").accordion({
    collapsible: true,
    heightStyle: "content",
    active: 0
  });

  $("#tripDate").datepicker({
    dateFormat: "dd.mm.yy",
    firstDay: 1,
    minDate: 0,
    numberOfMonths: 2
  });

  $("#calmSlider").slider({
    min: 0,
    max: 100,
    value: 50,
    slide: function (event, ui) {
      $("#calmValue").text(ui.value);
    }
  });

  $("#galleryTiles").unitegallery({
    gallery_theme: "tiles",
    tiles_type: "nested",

    tiles_space_between_cols: 8,

    tile_enable_border: true,
    tile_border_width: 2,
    tile_border_color: "#ffffff",
    tile_border_radius: 12,

    tile_enable_textpanel: true,
    tile_textpanel_always_on: true,
    tile_textpanel_appear_type: "slide",
    tile_textpanel_bg_opacity: 0.35,
    tile_textpanel_bg_color: "#000000",
    tile_textpanel_title_text_align: "center"
  });

  $("#natureCarousel").owlCarousel({
    loop: true,
    margin: 14,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2600,
    autoplayHoverPause: true,
    smartSpeed: 450,
    navText: ["‹", "›"],

    responsive: {
      0:    { items: 1 },
      600:  { items: 2 },
      1000: { items: 3 }
    }
  });

  $(".zoom-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: "mfp-with-zoom mfp-img-mobile",
    gallery: { enabled: true },
    zoom: {
      enabled: true,
      duration: 300,
      opener: function (element) { return element.find("img"); }
    },
    image: {
      verticalFit: true,
      titleSrc: function (item) {
        return item.el.attr("title") + ' &middot; <a class="image-source-link" href="' +
          item.el.attr("data-source") + '" target="_blank">image source</a>';
      }
    }
  });

});

$(document).ready(function () {

  $('.popup-youtube, .popup-gmaps').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,

    iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'embed/',
          src: 'https://www.youtube.com/embed/%id%?autoplay=1&rel=0'
        },
        googlemap: {
          index: 'google.com/maps',
          src: '%id%'
        }
      },
      srcAction: 'iframe_src'
    }
  });

});


