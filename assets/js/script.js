$(function() {
     var pgurl = window.location.href.substr(window.location.href
.lastIndexOf("/")+1);
     $("#nav ul li a").each(function(){
          if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
          $(this).addClass("index");
     })
});

(function() {
     var pgurl = window.location.href.substr(window.location.href
.lastIndexOf("/")+1);
     $("#nav ul li a").each(function(){
          if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
          $(this).addClass("page");
     })
});

(function() {
     var pgurl = window.location.href.substr(window.location.href
.lastIndexOf("/")+1);
     $("#nav ul li a").each(function(){
          if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
          $(this).addClass("page2");
     })
});

 $(document) .ready(function() {

    $("#photos img:gt(0)") .hide();

    setInterval (function(){

        var current = $('#photos img:visible');

        var next = current.next().length ? current.next() : $('#photos img:eq(0)');

        current.fadeOut(1000);

        next.fadeIn(1000);

    }, 3000);
 });



    