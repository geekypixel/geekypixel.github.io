+ function($) {
  'use strict';

  /*
   Simple Lightbox plugin
  */

  $.fn.simpleGal = function(options) {

    var defaults = {
      background: '#FFFFFF'
    };

    //plugin object
    //recieves selected item as param
    var plugin = {
      mainClass: "simple-gal-bg",
      helperClass: "simple-gal-slide-in",
      container: null,
      $close: null,
      $lightbox: null,
      $image: null,

      init: function(item) {

        var html = '<div class="' + plugin.mainClass + '" style="background-color: ' + defaults.background + '">';
        html += '<a href="#" class="simple-gal-close">&#10006;</a>';
        html += '</div>';

        plugin.container = item;

        $('body').append(html);

        plugin.$lightbox = $('.simple-gal-bg');
        plugin.$close = $('.simple-gal-close');
        plugin.bindEvents();
      },

      loadImage: function() {

        plugin.$lightbox.addClass('simple-gal-slide-in');

        //check if there is an image to prevent displaying more than one image
        if(plugin.$lightbox.find('img')){
          plugin.$lightbox.find('img').remove();
        }

        var img = $('<img src="' + plugin.container.find('img').attr('src') + '">');

        plugin.$image = $(img);

        plugin.$image.load(function() {
          plugin.$lightbox.append(img);
          img.addClass('materialize');
        });
      },

      bindEvents: function() {

        $(plugin.container).on('click', function(e) {
          e.preventDefault();
          plugin.loadImage();
        });

        plugin.$lightbox.on('click', function(event) {
          if (this === event.target) {
            plugin.close();
          }
        });

        plugin.$close.on('click', function() {
          plugin.close();
          return false;
        });

      },

      close: function() {
        $(plugin.$lightbox).removeClass(plugin.helperClass);

      }
    };

    var opts = $.extend(defaults, options);

    plugin.init(this);

  };

}(jQuery);

$(function() {
    if($( document ).width() > 560) $('.simple-gal-container').simpleGal();
});
