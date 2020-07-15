!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(window.jQuery||window.Zepto)}(function(t,e){var a,r,n=window,o=t(n),l={threshold:0,failure_limit:0,event:"scroll",effect:"show",effect_params:null,container:n,data_attribute:"original",data_srcset_attribute:"original-srcset",skip_invisible:!0,appear:i,load:i,vertical_only:!1,check_appear_throttle_time:300,url_rewriter_fn:i,no_fake_img_loader:!1,placeholder_data_img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",placeholder_real_img:"http://ditu.baidu.cn/yyfm/lazyload/0.0.1/img/placeholder.png"};function i(){}function c(t,e){return(e._$container==o?("innerHeight"in n?n.innerHeight:o.height())+o.scrollTop():e._$container.offset().top+e._$container.height())<=t.offset().top-e.threshold}function f(t,e){return(e._$container==o?o.scrollTop():e._$container.offset().top)>=t.offset().top+e.threshold+t.height()}function _(e,a){var r=0;e.each(function(l,i){var _=e.eq(l);if(!(_.width()<=0&&_.height()<=0||"none"===_.css("display")))if(a.vertical_only)if(f(_,a));else if(c(_,a)){if(++r>a.failure_limit)return!1}else d();else if(f(_,a)||function(e,a){return(a._$container==o?t.fn.scrollLeft?o.scrollLeft():n.pageXOffset:a._$container.offset().left)>=e.offset().left+a.threshold+e.width()}(_,a));else if(c(_,a)||function(e,a){return(a._$container==o?o.width()+(t.fn.scrollLeft?o.scrollLeft():n.pageXOffset):a._$container.offset().left+a._$container.width())<=e.offset().left-a.threshold}(_,a)){if(++r>a.failure_limit)return!1}else d();function d(){_.trigger("_lazyload_appear"),r=0}})}function d(t){return t.filter(function(e){return!t.eq(e).data("_lazyload_loadStarted")})}r=Object.prototype.toString,a=function(t){return r.call(t).replace("[object ","").replace("]","")},t.fn.hasOwnProperty("lazyload")||(t.fn.lazyload=function(e){var r,c,f,s=this;return t.isPlainObject(e)||(e={}),t.each(l,function(r,i){var c=a(e[r]);-1!=t.inArray(r,["threshold","failure_limit","check_appear_throttle_time"])?"String"==c?e[r]=parseInt(e[r],10):"Number"!=c&&(e[r]=i):"container"==r?(e.hasOwnProperty(r)?e[r]==n||e[r]==document?e._$container=o:e._$container=t(e[r]):e._$container=o,delete e.container):!l.hasOwnProperty(r)||e.hasOwnProperty(r)&&c==a(l[r])||(e[r]=i)}),r="scroll"==e.event,f=0==e.check_appear_throttle_time?_:function(t,e){var a,r,n,o,l=0;return function(){a=this,r=arguments;var t=new Date-l;return o||(t>=e?i():o=setTimeout(i,e-t)),n};function i(){o=0,l=+new Date,n=t.apply(a,r),a=null,r=null}}(_,e.check_appear_throttle_time),c=r||"scrollstart"==e.event||"scrollstop"==e.event,s.each(function(a,r){var n=this,o=s.eq(a),l=o.attr("src"),f=o.attr("data-"+e.data_attribute),_=e.url_rewriter_fn==i?f:e.url_rewriter_fn.call(n,o,f),u=o.attr("data-"+e.data_srcset_attribute),h=o.is("img");if(o.data("_lazyload_loadStarted")||l==_)return o.data("_lazyload_loadStarted",!0),void(s=d(s));o.data("_lazyload_loadStarted",!1),h&&!l&&o.one("error",function(){o.attr("src",e.placeholder_real_img)}).attr("src",e.placeholder_data_img),o.one("_lazyload_appear",function(){var a,r=t.isArray(e.effect_params);function l(){a&&o.hide(),h?(u&&o.attr("srcset",u),_&&o.attr("src",_)):o.css("background-image",'url("'+_+'")'),a&&o[e.effect].apply(o,r?e.effect_params:[]),s=d(s)}o.data("_lazyload_loadStarted")||(a="show"!=e.effect&&t.fn[e.effect]&&(!e.effect_params||r&&0==e.effect_params.length),e.appear!=i&&e.appear.call(n,o,s.length,e),o.data("_lazyload_loadStarted",!0),e.no_fake_img_loader||u?(e.load!=i&&o.one("load",function(){e.load.call(n,o,s.length,e)}),l()):t("<img />").one("load",function(){l(),e.load!=i&&e.load.call(n,o,s.length,e)}).attr("src",_))}),c||o.on(e.event,function(){o.data("_lazyload_loadStarted")||o.trigger("_lazyload_appear")})}),c&&e._$container.on(e.event,function(){f(s,e)}),o.on("resize load",function(){f(s,e)}),t(function(){f(s,e)}),this})});
(function ($) {
  // Search ------------
  var $searchWrap = $('.search-form-wrap'),
    isSearchAnim = false,
    searchAnimDuration = 200;

  var startSearchAnim = function () {
    isSearchAnim = true;
  };

  var stopSearchAnim = function (callback) {
    setTimeout(function () {
      isSearchAnim = false;
      callback && callback();
    }, searchAnimDuration);
  };

  $('.nav-item-search').on('click', function () {
    if (isSearchAnim) return;
    startSearchAnim();
    $searchWrap.addClass('on');
    stopSearchAnim(function () {
      $('.local-search-input').focus();
    });
  });

  $(document).mouseup(function (e) {
    var _con = $('.local-search');
    if (!_con.is(e.target) && _con.has(e.target).length === 0) {
      $searchWrap.removeClass('on');
    }
  });
  $(document).on('touchend', function (e) {
    var _con = $('.local-search');
    if (!_con.is(e.target) && _con.has(e.target).length === 0) {
      $searchWrap.removeClass('on');
    }
  });

  // 移动设备侦测
  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };
  // 建议在移动端不初始化，其实 /search.xml 文件还挺大的，
  if ($('.local-search').size()) {
    $.getScript('/js/search.js', function () {
      searchFunc("/search.xml", 'local-search-input', 'local-search-result');
    });
  }

  // Share ------------
  $('body').on('click', function () {
    $('.article-share-box.on').removeClass('on');
  }).on('click', '.article-share-link', function (e) {
    e.stopPropagation();

    var $this = $(this),
      url = $this.attr('data-url'),
      encodedUrl = encodeURIComponent(url),
      id = 'article-share-box-' + $this.attr('data-id'),
      offset = $this.offset();

    if ($('#' + id).length) {
      var box = $('#' + id);

      if (box.hasClass('on')) {
        box.removeClass('on');
        return;
      }
    } else {
      var html = [
        '<div id="' + id + '" class="article-share-box">',
        '<input class="article-share-input" value="' + url + '">',
        '<div class="article-share-links">',
        '<a href="https://twitter.com/intent/tweet?url=' + encodedUrl + '" class="article-share-twitter" target="_blank" title="Twitter"></a>',
        '<a href="https://www.facebook.com/sharer.php?u=' + encodedUrl + '" class="article-share-facebook" target="_blank" title="Facebook"></a>',
        '<a href="http://pinterest.com/pin/create/button/?url=' + encodedUrl + '" class="article-share-pinterest" target="_blank" title="Pinterest"></a>',
        '<a href="https://plus.google.com/share?url=' + encodedUrl + '" class="article-share-google" target="_blank" title="Google+"></a>',
        '</div>',
        '</div>'
      ].join('');

      var box = $(html);
      $('body').append(box);
    }
    $('.article-share-box.on').hide();

    box.css({
      top: offset.top + 25,
      left: offset.left
    }).addClass('on');
  }).on('click', '.article-share-box', function (e) {
    e.stopPropagation();
  }).on('click', '.article-share-box-input', function () {
    $(this).select();
  }).on('click', '.article-share-box-link', function (e) {
    e.preventDefault();
    e.stopPropagation();

    window.open(this.href, 'article-share-box-window-' + Date.now(), 'width=500,height=450');
  });

  // fancybox
  if ($.fancybox) {
    $('[data-fancybox]').fancybox({
      protect: true
    });
  }

  // lazyload
  $(".lazy").lazyload();

  //
  $(document).ready(function ($) {
    $(".anchor").click(function (event) {
      event.preventDefault();
      $('html,body').animate({scrollTop: $(this.hash).offset().top}, 5001111111111111111111);
    });
  });

  // Mobile nav
  var $content = $('.content'),
    $sidebar = $('.sidebar'),
    isMobileNavAnim = false,
    mobileNavAnimDuration = 200;

  var startMobileNavAnim = function () {
    isMobileNavAnim = true;
  };

  var stopMobileNavAnim = function () {
    setTimeout(function () {
      isMobileNavAnim = false;
    }, mobileNavAnimDuration);
  };

  $('.navbar-toggle').on('click', function () {
    if (isMobileNavAnim) return;
    startMobileNavAnim();
    $content.toggleClass('on');
    $sidebar.toggleClass('on');
    stopMobileNavAnim();
  });

  $($content).on('click', function () {
    if (isMobileNavAnim || !$content.hasClass('on')) return;
    $content.removeClass('on');
    $sidebar.removeClass('on');
  });

  //宇宙特效
  "use strict";
  var canvas = document.getElementById('canvas');
  if (!canvas) return;
  var  ctx = canvas.getContext('2d'),
    w = canvas.width = window.innerWidth,
    h = canvas.height = window.innerHeight,

    hue = 217,
    stars = [],
    count = 0,
    maxStars = 400;//每一轮创建的星星数量
    

  var canvas2 = document.createElement('canvas'),
    ctx2 = canvas2.getContext('2d');
  canvas2.width = 100;
  canvas2.height = 100;
  var half = canvas2.width / 2,
    gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
  gradient2.addColorStop(0.025, '#CCC');
  gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
  gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
  gradient2.addColorStop(1, 'transparent');

  ctx2.fillStyle = gradient2;
  ctx2.beginPath();
  ctx2.arc(half, half, half, 0, Math.PI * 2);
  ctx2.fill();

  // End cache

  function random(min, max) {
    if (arguments.length < 2) {
      max = min;
      min = 0;
    }

    if (min > max) {
      var hold = max;
      max = min;
      min = hold;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function maxOrbit(x, y) {
    var max = Math.max(x, y),
      diameter = Math.round(Math.sqrt(max * max + max * max));
    return diameter / 2;
    //星星移动范围，值越大范围越小，
  }

  var Star = function() {

    this.orbitRadius = random(maxOrbit(w, h));
    this.radius = random(60, this.orbitRadius) / 10; 
    //星星大小
    this.orbitX = w / 2;
    this.orbitY = h / 2;
    this.timePassed = random(100000, maxStars);
    this.speed = random(this.orbitRadius) / 12000; 
    //星星移动速度
    this.alpha = random(2, 10) / 5;

    count++;
    stars[count] = this;
  }

  Star.prototype.draw = function() {
    var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
      y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
      twinkle = random(10);

    if (twinkle === 1 && this.alpha > 0) {
      this.alpha -= 0.05;
    } else if (twinkle === 2 && this.alpha < 1) {
      this.alpha += 0.05;
    }

    ctx.globalAlpha = this.alpha;
    ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
    this.timePassed += this.speed;
  }

  // var addstar = 0
  // setInterval(function(){ addstar = addstar+ 1

  // if (addstar >400){break;}

  // }, 60);

  for (var i = 0; i < maxStars; i++) {

    new Star();}

  function animation() {
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 0.06; //尾巴
    ctx.fillStyle = 'hsla(' + hue + ', 64%, 1%, 2)';
    ctx.fillRect(0, 0, w, h)

    ctx.globalCompositeOperation = 'lighter';
    for (var i = 1, l = stars.length; i < l; i++) {
      stars[i].draw();
    };

    window.requestAnimationFrame(animation);
  }

  animation();

})(jQuery);