+function($){ 'use strict';

  /*
   Simple Lightbox plugin
  */

  $.fn.simpleGal = function(options){

    var defaults = {
      background : '#FFFFFF',
      opacity : '1'
    };

    //plugin object
    //recieves selected item as param
    var plugin = {
        mainClass : "simple-gal-bg",
        container : null,
        $lightbox : null,
        image : null,

        init : function(item){

          var html = '<div class="'+ plugin.mainClass + '">';
          html += '<a href="#" class="simple-gal-close">&#10006;</a>';
          html += '</div>';

          plugin.container = item;

          $('body').append(html);

          plugin.$lightbox = $('.simple-gal-bg');
          plugin.bindEvents();
        },

        loadImage : function(){

          plugin.$lightbox.addClass('simple-gal-slide-in');

          var img = $('<img src="' + plugin.container.find('img').attr('src') + '">');

          $(img).load(function(){
            plugin.$lightbox.append(img);
            img.addClass('materialize');
          });
        },

        bindEvents : function(){

          $(plugin.container).on('click', function(){
              plugin.loadImage();
          });

          plugin.$lightbox.on('click', function(event){
            if(this === event.target){
              plugin.close();
            }
          });

          $(plugin.lightbox).on('click', 'simple-gal-close', function(){
            plugin.close();
            return false;
          });

        },

        close : function(){
          $(plugin.lightbox).addClass('dematerialize');
          $('body').removeClass('');
        }
    }

    var opts = $.extend(defaults, options);

    plugin.init(this);

  }

}(jQuery);

$(function(){
  $('.img-zoom-container').simpleGal();
});
