    //$(window).load(function() {
//    $(".headerLogo a").click(function() {
//        $('html, body').animate({scrollTop : 0}, 800);
//        return false
//    });
//    $(".cl_work").bind('click',function(event){
//        var $anchor = $(this);

//        $('html, body').stop().animate({
//            scrollTop: $($anchor.attr('href')).offset().top
//        }, 800/*,'easeInOutExpo'*/);
//        event.preventDefault();
//    });
//    init_scrolls();    
//                                

//});
//function init_scrolls() {
//    w_height = $(window).height();
//    h_height = $("#header").height();
//    center_screen = (w_height+h_height)/2;
//    
//}
//$(document).ready(function() {
    // animation of navigation
//    $(function() {
//        $('#menu li a, .bot-ang .cl_work').bind('click',function(event){

//            var anchor = $(this);
//            
//            $('html, body').stop().animate({
//                scrollTop: $(anchor.attr('href')).offset().top - $('#header').height()+84
//            }, 1500/*,'easeInOutExpo'*/);

//            event.preventDefault();


            // Вот такой метод должен вызываться в событии клика по менюхе для смены класса в body
//            setTimeout(
//                function() {
//                    $('body').attr('class', '');
//                    $('body').addClass(anchor.attr('title'));
//                }, 1100)
//        });
//        
//        if (window.location.hash == '#chapter_1') {
//            $('body').addClass('chapter_1');
//        } else if (window.location.hash == '#chapter_2') {
//            $('body').addClass('chapter_2');
//        } else if (window.location.hash == '#chapter_3') {
//            $('body').addClass('chapter_3');
//        } else if (window.location.hash == '#chapter_4') {
//            $('body').addClass('chapter_4');
//        }
//    });

//});
$(window).load(function() {
    $(".cl_work").bind('click',function(event){
        var $anchor = $(this);

        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 800/*,'easeInOutExpo'*/);
        event.preventDefault();
    });
    init_scrolls();    
                                

});
function init_scrolls() {
    w_height = $(window).height();
    h_height = $("#header").height();
    center_screen = (w_height+h_height)/2;
    
}
$(document).ready(function() {
    // animation of navigation
    
      var ch1 = $("#chapter_1").offset().top - 5;
      var ch2 = $("#chapter_2").offset().top - 5;
      var ch3 = $("#chapter_3").offset().top - 5;
      var ch4 = $("#chapter_4").offset().top - 5;
    
    $(function() {
        $('#menu a, a.cl_work').bind('click',function(event){

            var anchor = $(this);
            
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - $('#header').height()+84
            }, 1500/*,'easeInOutExpo'*/);

            event.preventDefault();


            // Вот такой метод должен вызываться в событии клика по менюхе для смены класса в body
            setTimeout(
                function() {
                    //$('body').attr('class', '');
                    //$('body').addClass(anchor.attr('data-chapter'));
                }, 1100)
        });
        

    });
    


$(document).scroll(function(){
    if($(this).scrollTop() > ch4) {   
         $('body').removeClass().addClass('chapter_4');
    }
    else {
        if($(this).scrollTop() > ch3) {   
              $('body').removeClass().addClass('chapter_3');
         }
        else {
           if($(this).scrollTop() > ch2) {   
                $('body').removeClass().addClass('chapter_2');
            }
           else {
             if($(this).scrollTop() < ch2) {   
                  $('body').removeClass().addClass('chapter_1');
              }
           }    
       }
    }
  })   
    

});

function ease(t, b, c, d) { 
    if ((t/=d/2) < 1) return c/2*t*t + b;
    return -c/2 * ((--t)*(t-2) - 1) + b;
}
function easeOut(t, b, c, d) { 
    return -c *(t/=d)*(t-2) + b;
}

var cache = {}, playerNext;
$(function () {
    $("form").each(function () {
        this.reset()
    });
    $.cleared();
    $(".cleared2").each(function () {
        $(this).cleared2()
    });
    $("#preloader").ajaxStart(function () {
        $(this).show()
    }).ajaxStop(function () {
        $(this).hide()
    });
    $("#top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 400);
        return false
    });
    $(window).load(function () {
        $("#twitter").twitter();
        // $("#player").player()
    });
    $.about = 0;
    $.music = 0
});
$.extend({
    log: function (a) {
        if (window.console && window.console.log) {
            console.log(a)
        }
    },
    cleared: function () {
        $(".cleared").live("focus", function () {
            var a = $(this);
            if (!a.attr("val")) {
                a.attr("val", a.val())
            }
            if (a.val() == a.attr("val")) {
                a.val("")
            }
            a.addClass("focused")
        }).live("blur", function () {
            var a = $(this);
            if (!a.val()) {
                a.val(a.attr("val"));
                a.removeClass("focused")
            }
        })
    }
});
$.fn.extend({
    cleared2: function () {
        var b = $(this),
            a = $("span:first", b),
            c = $("input:first", b);
        a.click(function () {
            a.fadeOut("fast");
            c.focus()
        });
        c.focus(function () {
            a.fadeOut("fast")
        }).blur(function () {
            if (!c.val()) {
                a.fadeIn("fast")
            }
        })
    },
    dragDrop: function (d) {
        var c = $(this),
            b = null,
            a = 0,
            e = 0;
        c.mousedown(function (f) {
            b = c;
            a = (parseInt(b.css("left")) || 0) - f.pageX;
            e = (parseInt(b.css("top")) || 0) - f.pageY;
            return false
        });
        $(document).mousemove(function (f) {
            if (b) {
                if (d.x) {
                    b.css("left", f.pageX + a)
                }
                if (d.y) {
                    b.css("top", f.pageY + e)
                }
                if (d.move) {
                    d.move(f.pageX + a, f.pageY + e)
                }
                return false
            }
        }).mouseup(function (f) {
            if (b) {
                a += f.pageX;
                e += f.pageY;
                if (d.up) {
                    d.up(a, e)
                }
                b = null;
                return false
            }
        })
    }
});

$.fn.extend({
    twitter: function () {
        var g = $(this),
            d = 0,
            p = 0,
            n = $("#wing"),
            s = $("#target"),
            e = 0,
            a = $("#follow"),
            i, r, m = [],
            c = [7, 1, 3, 1, 5, 1, 4, 1],
            l = false,
            q = 0;
        var b = function () {
            i = $(document).width() / 10;
            r = $(window).height(600) / 10;
            m = [
                [{
                    center: [i * 6, - 120],
                    radius: [i * 5, 160],
                    start: 90,
                    end: 0,
                    dir: -1
                },
                1500, 1, 1],
                [{
                    center: [-i, 80],
                    radius: [i * 7, r * 2],
                    start: 90,
                    end: 0,
                    dir: -1
                },
                1500, 1, 0],
                [{
                    center: [i, 0],
                    radius: [i * 2, 150],
                    start: 270,
                    end: 360,
                    dir: 0
                },
                1200, 0, 0],
                [{
                    center: [i, - 80],
                    radius: [i * 3, 250],
                    start: 0,
                    end: 90,
                    dir: 1
                },
                1200, 0, 0],
                [{
                    center: [i * 11, r * 6],
                    radius: [i * 2, r],
                    start: 0,
                    end: 270,
                    dir: -1
                },
                1200, 1, 0],
                [{
                    center: [i * 9, r * 4],
                    radius: [i * 10, r * 2],
                    start: 0,
                    end: 270,
                    dir: -1
                },
                1500, 1, 0],
                [{
                    center: [i * 0.5, r * 7],
                    radius: [i * 2, r],
                    start: 270,
                    end: 360,
                    dir: 1
                },
                1200, 0, 0],
                [{
                    center: [i * 0.5, r * 5],
                    radius: [i * 10, r * 3],
                    start: 0,
                    end: 90,
                    dir: 1
                },
                1500, 0, 0], ]
        }, x = function () {
            p++;
            if (p == c[d]) {
                d++;
                d = d < m.length ? d : 0;
                f();
                u(d)
            } else {
                var h = 20 + Math.round(Math.random() * 20),
                    j = h * 40;
                g.animate({
                    top: ["+=" + h + "px", "easeInOutSine"]
                }, j).animate({
                    top: ["-=" + h + "px", "easeInOutSine"]
                }, j, x)
            }
        }, u = function (h) {
            p = 0;
            g.attr("class", m[h][2] ? "rev" : "").animate({
                path: new $.path.arc(m[h][0])
            }, m[h][1], function () {
                x();
                if (m[h][3]) {
                    o()
                }
            })
        }, k = function () {
            e = !e;
            n.attr("class", e ? "up" : "down")
        }, o = function (h) {
            a.stop().fadeIn(300)
        }, f = function (h) {
            a.stop().fadeOut(300)
        };
        $(window).resize(b);
        b();
        var t = setInterval(k, 50);
        u(0);
        setTimeout(function () {
            s.fadeIn(300)
        }, 2000);
        s.mouseover(function (h) {
            l = true;
            s.css({
                left: h.pageX,
                top: h.pageY,
                marginLeft: -20,
                marginTop: -37
            })
        });
        $(document).mousemove(function (h) {
            if (l) {
                s.css({
                    left: h.pageX,
                    top: h.pageY
                }).attr("class", v(h, g) ? "hover" : "")
            }
        }).click(function (h) {
            if (l) {
                l = false;
                if (v(h, g)) {
                    g.stop(true, false);
                    f();
                    clearTimeout(t);
                    n.attr("class", "up");
                    g.animate({
                        rotate: 180,
                        top: "-=40px"
                    }, 400).animate({
                        top: [$("#wrapper").height() - g.height() + 10, "easeOutBounce"]
                    }, 1200, function () {
                        g.css("top", "auto").addClass("corpse")
                    });
                    s.fadeOut(200);
                    return false
                }
                s.fadeOut(500, function () {
                    s.css({
                        left: "68%",
                        top: 70,
                        marginLeft: 0,
                        marginTop: 0
                    }).fadeIn(200)
                });
                return false
            }
        });
        var v = function (E, C) {
            var A = parseInt(C.css("left")),
                B = parseInt(C.css("top")),
                z = C.width(),
                D = C.height(),
                j = E.pageX,
                F = E.pageY - 15;
            return j > A && j < A + z && F > B && F < B + D
        }
    },
    cling: function (d, c, a, b) {
        $(this).each(function (j, e) {
            var x = $(e),
                u = 0,
                m = 0,
                s = 0,
                q = 0,
                g = a || "left",
                o = b || "top",
                f = parseInt(x.css(g)),
                v = parseInt(x.css(o)),
                p = false,
                n, k, r = function (i, h) {
                    return i > 0 ? Math.pow(i, h) : -Math.pow(-i, h)
                };
            x.hover(function (h) {
                clearTimeout(n);
                clearTimeout(k);
                x.stop(0, 1);
                n = setTimeout(function () {
                    p = true
                }, 10);
                u = x.width() / 2;
                m = x.height() / 2;
                s = h.pageX - (h.offsetX || h.layerX) + u;
                q = h.pageY - (h.offsetY || h.layerY) + m;
                kw = d ? (d[0] - u) / d[1] : 0.2;
                kh = c ? (c[0] - m) / c[1] : 0.2
            }, function () {
                clearTimeout(n);
                clearTimeout(k);
                k = setTimeout(function () {
                    p = false;
                    var h = {};
                    h[g] = [f, "easeOutElastic"];
                    h[o] = [v, "easeOutElastic"];
                    x.animate(h, 500)
                }, 100)
            }).mousemove(function (i) {
                if (p) {
                    var h = {};
                    h[g] = f + r(i.pageX - s, kw);
                    h[o] = v + r(i.pageY - q, kh);
                    x.css(h)
                }
                return false
            })
        })
    },
    sway: function () {
        var a = $(this);
        $(this).animate({
            path: new $.path.arc2(a.data("arc"))
        }, 4000 + Math.random() * 2000, "linear", a.sway)
    },
    movedPopup: function () {
        var f = $(this),
            d = $("img", f),
            h = $(window),
            c = [f.width() - 20, f.height() - 20],
            b = [d.width(), d.height()],
            e = c[0] - b[0],
            a = c[1] - b[1];
        if (e > 0) {
            d.css("left", e / 2)
        }
        if (a > 0) {
            d.css("top", a / 2)
        }
        h.resize(function () {
            c = [f.width() - 20, f.height() - 20];
            e = c[0] - b[0];
            a = c[1] - b[1];
            if (e > 0) {
                d.css("left", e / 2)
            }
            if (a > 0) {
                d.css("top", a / 2)
            }
        }).mousemove(function (g) {
            if (e < 0) {
                d.css("left", (g.pageX - h.scrollLeft()) / c[0] * e + 10)
            }
            if (a < 0) {
                d.css("top", (g.pageY - h.scrollTop()) / c[1] * a + 10)
            }
        })
    },
    stereo: function () {
        var c = $(this),
            a = $("img:eq(1)", c),
            b = $(".hint", c);
        a.css({
            display: "block",
            opacity: "0"
        });
        c.dragDrop({
            x: 1,
            y: 0,
            move: function (d, g) {
                d = Math.abs(d);
                var f = d % 200,
                    e = Math.floor(d / 200) % 2,
                    d = e ? (200 - f) / 200 : f / 200;
                a.animate({
                    opacity: d
                }, 10);
                b.fadeOut(200)
            },
            up: function (d, e) {
                a.stop().animate({
                    opacity: 0
                }, 400);
                c.animate({
                    left: 0
                }, 400)
            }
        })
    }
});

$(function(){
    $('#slides.slides_singl').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
});

$(function(){
    $('.#slides.sl_1').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
    $('#slides.sl_2').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
    $('#slides.sl_3').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
    $('#slides.sl_4').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
    $('#slides.sl_5').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
    $('#slides.sl_6').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
    $('#slides.sl_7').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
    $('#slides.sl_8').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
    $('#slides.sl_9').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
    $('#slides.sl_10').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
    $('#slides.sl_11').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
    $('#slides.sl_12').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
    $('#slides.sl_13').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
    $('#slides.sl_14').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
    $('#slides.sl_15').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
    $('#slides.sl_16').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
    $('#slides.sl_17').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
    $('#slides.sl_18').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
    $('#slides.sl_19').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
    $('#slides.sl_20').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
    $('#slides.sl_21').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
    $('#slides.sl_22').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
    $('#slides.sl_23').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
    $('#slides.sl_24').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
    $('#slides.sl_25').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
    $('#slides.sl_26').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
    $('#slides.sl_27').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
    $('#slides.sl_28').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
    $('#slides.sl_29').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
    $('#slides.sl_30').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
    $('#slides.sl_31').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
    $('#slides.sl_32').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
    $('#slides.sl_33').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
    $('#slides.sl_34').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
    $('#slides.sl_35').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
    $('#slides.sl_36').slides({
        preload: true,
        preloadImage: 'img/chapter-4/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });
});
$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();    
        } else {
            $('#toTop').fadeOut();
        }
    });
 
    $('#toTop').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });    
});

$(function() {
    $(".work .infoWork")
        .fadeTo(1, 0)
        .hover(function() {
            $(this).fadeTo("slow", 1.0);
        },function() {
            $(this).fadeTo("slow", 0);
        });
});

$(document).ready(function() {
    $('.footer .article li:last-child').css('margin-bottom', '0');
    
    //$('.infoWork').fadeTo("slow", 0);
//    $('.infoWork').hover(
//        function(){
//            $(this).stop().fadeTo('slow', 1.0);
//        },
//        function(){
//            $(this).stop().fadeTo('slow', 0);
//    });  
    
    $('#quebra').click(function(){
        $('[id*="workPanel"]').slideUp();
        $('#workPanel').slideDown();
    })
    $('#workPanel .close').click(function(){
        $('#workPanel').slideToggle();
    })
    
    $('#quebra2').click(function(){
        $('[id*="workPanel"]').slideUp();
        $('#workPanel2').slideDown();
    })
    $('#workPanel2 .close').click(function(){
        $('#workPanel2').slideToggle();
    })
    
    $('#quebra3').click(function(){
        $('[id*="workPanel"]').slideUp();
        $('#workPanel3').slideDown();
    })
    $('#workPanel3 .close').click(function(){
        $('#workPanel3').slideToggle();
    })
    
    $('#quebra4').click(function(){
        $('[id*="workPanel"]').slideUp();
        $('#workPanel4').slideDown();
    })
    $('#workPanel4 .close').click(function(){
        $('#workPanel4').slideToggle();
    })
    
    $('#quebra5').click(function(){
        $('[id*="workPanel"]').slideUp();
        $('#workPanel5').slideDown();
    })
    $('#workPanel5 .close').click(function(){
        $('#workPanel5').slideToggle();
    })
    
    $('#quebra6').click(function(){
        $('[id*="workPanel"]').slideUp();
        $('#workPanel6').slideDown();
    })
    $('#workPanel6 .close').click(function(){
        $('#workPanel6').slideToggle();
    })
    
    $('#quebra7').click(function(){
        $('[id*="workPanel"]').slideUp();
        $('#workPanel7').slideDown();
    })
    $('#workPanel7 .close').click(function(){
        $('#workPanel7').slideToggle();
    })
    
    $('#quebra8').click(function(){
        $('[id*="workPanel"]').slideUp();
        $('#workPanel8').slideDown();
    })
    $('#workPanel8 .close').click(function(){
        $('#workPanel8').slideToggle();
    })
    
    $('#quebra9').click(function(){
        $('[id*="workPanel"]').slideUp();
        $('#workPanel9').slideDown();
    })
    $('#workPanel9 .close').click(function(){
        $('#workPanel9').slideToggle();
    })
    
    $('#quebra10').click(function(){
        $('[id*="workPanel"]').slideUp();
        $('#workPanel10').slideDown();
    })
    $('#workPanel10 .close').click(function(){
        $('#workPanel10').slideToggle();
    })
    
    $('#quebra11').click(function(){
        $('[id*="workPanel"]').slideUp();
        $('#workPanel11').slideDown();
    })
    $('#workPanel11 .close').click(function(){
        $('#workPanel11').slideToggle();
    })
    
    $('#quebra12').click(function(){
        $('[id*="workPanel"]').slideUp();
        $('#workPanel12').slideDown();
    })
    $('#workPanel12 .close').click(function(){
        $('#workPanel12').slideToggle();
    })
    
    
    $('#quebra13').click(function(){
        $('[id*="workPanel"]').slideUp();
        $('#workPanel13').slideDown();
    })
    $('#workPanel13 .close').click(function(){
        $('#workPanel13').slideToggle();
    })
    
    $('#quebra14').click(function(){
        $('[id*="workPanel"]').slideUp();
        $('#workPanel14').slideDown();
    })
    $('#workPanel14 .close').click(function(){
        $('#workPanel14').slideToggle();
    })
    
    $('#quebra15').click(function(){
        $('[id*="workPanel"]').slideUp();
        $('#workPanel15').slideDown();
    })
    $('#workPanel15 .close').click(function(){
        $('#workPanel15').slideToggle();
    })
    
    $('#quebra16').click(function(){
        $('[id*="workPanel"]').slideUp();
        $('#workPanel16').slideDown();
    })
    $('#workPanel16 .close').click(function(){
        $('#workPanel16').slideToggle();
    })
    
    $('#quebra17').click(function(){
        $('[id*="workPanel"]').slideUp();
        $('#workPanel17').slideDown();
    })
    $('#workPanel17 .close').click(function(){
        $('#workPanel17').slideToggle();
    })
    
    $('#quebra18').click(function(){
        $('[id*="workPanel"]').slideUp();
        $('#workPanel18').slideDown();
    })
    $('#workPanel18 .close').click(function(){
        $('#workPanel18').slideToggle();
    })
    
    $('#quebra19').click(function(){
        $('[id*="workPanel"]').slideUp();
        $('#workPanel19').slideDown();
    })
    $('#workPanel19 .close').click(function(){
        $('#workPanel19').slideToggle();
    })
    
    $('#quebra20').click(function(){
        $('[id*="workPanel"]').slideUp();
        $('#workPanel20').slideDown();
    })
    $('#workPanel20 .close').click(function(){
        $('#workPanel20').slideToggle();
    })
    
    $('#quebra21').click(function(){
        $('[id*="workPanel"]').slideUp();
        $('#workPanel21').slideDown();
    })
    $('#workPanel21 .close').click(function(){
        $('#workPanel21').slideToggle();
    })
    
    $('#quebra22').click(function(){
        $('[id*="workPanel"]').slideUp();
        $('#workPanel22').slideDown();
    })
    $('#workPanel22 .close').click(function(){
        $('#workPanel22').slideToggle();
    })
    
    $('#quebra23').click(function(){
        $('[id*="workPanel"]').slideUp();
        $('#workPanel23').slideDown();
    })
    $('#workPanel23 .close').click(function(){
        $('#workPanel23').slideToggle();
    })
    
    $('#quebra24').click(function(){
        $('[id*="workPanel"]').slideUp();
        $('#workPanel24').slideDown();
    })
    $('#workPanel24 .close').click(function(){
        $('#workPanel24').slideToggle();
    })
    
    
    $('#quebra25').click(function(){
        $('[id*="workPanel"]').slideUp();
        $('#workPanel25').slideDown();
    })
    $('#workPanel25 .close').click(function(){
        $('#workPanel25').slideToggle();
    })
    
    $('#quebra26').click(function(){
        $('[id*="workPanel"]').slideUp();
        $('#workPanel26').slideDown();
    })
    $('#workPanel26 .close').click(function(){
        $('#workPanel26').slideToggle();
    })
    
    $('#quebra27').click(function(){
        $('[id*="workPanel"]').slideUp();
        $('#workPanel27').slideDown();
    })
    $('#workPanel27 .close').click(function(){
        $('#workPanel27').slideToggle();
    })
    
    $('#quebra28').click(function(){
        $('[id*="workPanel"]').slideUp();
        $('#workPanel28').slideDown();
    })
    $('#workPanel28 .close').click(function(){
        $('#workPanel28').slideToggle();
    })
    
    $('#quebra29').click(function(){
        $('[id*="workPanel"]').slideUp();
        $('#workPanel29').slideDown();
    })
    $('#workPanel29 .close').click(function(){
        $('#workPanel29').slideToggle();
    })
    
    $('#quebra30').click(function(){
        $('[id*="workPanel"]').slideUp();
        $('#workPanel30').slideDown();
    })
    $('#workPanel30 .close').click(function(){
        $('#workPanel30').slideToggle();
    })
    
    $('#quebra31').click(function(){
        $('[id*="workPanel"]').slideUp();
        $('#workPanel31').slideDown();
    })
    $('#workPanel31 .close').click(function(){
        $('#workPanel31').slideToggle();
    })
    
    $('#quebra32').click(function(){
        $('[id*="workPanel"]').slideUp();
        $('#workPanel32').slideDown();
    })
    $('#workPanel32 .close').click(function(){
        $('#workPanel32').slideToggle();
    })
    
    $('#quebra33').click(function(){
        $('[id*="workPanel"]').slideUp();
        $('#workPanel33').slideDown();
    })
    $('#workPanel33 .close').click(function(){
        $('#workPanel33').slideToggle();
    })
    
    $('#quebra34').click(function(){
        $('[id*="workPanel"]').slideUp();
        $('#workPanel34').slideDown();
    })
    $('#workPanel34 .close').click(function(){
        $('#workPanel34').slideToggle();
    })
    
    $('#quebra35').click(function(){
        $('[id*="workPanel"]').slideUp();
        $('#workPanel35').slideDown();
    })
    $('#workPanel35 .close').click(function(){
        $('#workPanel35').slideToggle();
    })
    
    $('#quebra36').click(function(){
        $('[id*="workPanel"]').slideUp();
        $('#workPanel36').slideDown();
    })
    $('#workPanel36 .close').click(function(){
        $('#workPanel36').slideToggle();
    })
    
    
    $('#chapter_2 .botMore a').click(function(){
        $('.contentWork li .no_block').slideToggle();
    })
    $('#chapter_4 .botMore a').click(function(){
        $('.contentBlog li .no_block').show("slow");
        $(this).parent().css('display', 'none');
    });
        
});

$(document).ready(function() {
    $('#toTop').hover(function() {
        $(this).children('span').stop().fadeTo(500, 1);
    }, function () {
        $(this).children('span').stop().fadeTo(500, 0);
    }).children('span').empty().css('opacity', 0);
   
   $('.botMore2 a').hover(function() {
        $(this).children('span').stop().fadeTo(500, 1);
    }, function () {
        $(this).children('span').stop().fadeTo(500, 0);
    }).children('span').empty().css('opacity', 0);
   
   $('.bot-cont a').hover(function() {
        $(this).children('span').stop().fadeTo(500, 1);
    }, function () {
        $(this).children('span').stop().fadeTo(500, 0);
    }).children('span').empty().css('opacity', 0);
   
   $('.bot-ang a').hover(function() {
        $(this).children('span').stop().fadeTo(500, 1);
    }, function () {
        $(this).children('span').stop().fadeTo(500, 0);
    }).children('span').empty().css('opacity', 0);
   
   $('#chapter_4 .botMore a').hover(function() {
        $(this).children('span').stop().fadeTo(500, 1);
    }, function () {
        $(this).children('span').stop().fadeTo(500, 0);
    }).children('span').empty().css('opacity', 0);
   
   $('#slides .prev a').hover(function() {
        $(this).children('b').stop().fadeTo(500, 1);
    }, function () {
        $(this).children('b').stop().fadeTo(500, 0);
    }).children('b').empty().css('opacity', 0);
   
   $('#slides .next a').hover(function() {
        $(this).children('b').stop().fadeTo(500, 1);
    }, function () {
        $(this).children('b').stop().fadeTo(500, 0);
    }).children('b').empty().css('opacity', 0);

   $('#slides .prev2 a').hover(function() {
        $(this).children('b').stop().fadeTo(500, 1);
    }, function () {
        $(this).children('b').stop().fadeTo(500, 0);
    }).children('b').empty().css('opacity', 0);
   
   $('#slides .next2 a').hover(function() {
        $(this).children('b').stop().fadeTo(500, 1);
    }, function () {
        $(this).children('b').stop().fadeTo(500, 0);
    }).children('b').empty().css('opacity', 0);

   $('.block_cont.right .bot-cont div').hover(function() {
        $(this).children('input').stop().fadeTo(500, 1);
    }, function () {
        $(this).children('input').stop().fadeTo(500, 0);
    }).children('input').empty().css('opacity', 0);

   $('.formBlog .bot-cont div').hover(function() {
        $(this).children('input').stop().fadeTo(500, 1);
    }, function () {
        $(this).children('input').stop().fadeTo(500, 0);
    }).children('input').empty().css('opacity', 0);
   
   $('#chapter_2 #slides .prev, #chapter_2 #slides .next').hover(function() {
        $(this).children('span').stop().fadeTo(500, 1);
    }, function () {
        $(this).children('span').stop().fadeTo(500, 0);
    }).children('span').empty().css('opacity', 0);
   
   $('.block_cont.left .cont_txt .soc div a').hover(function() {
        $(this).children('span').stop().fadeTo(500, 1);
    }, function () {
        $(this).children('span').stop().fadeTo(500, 0.35);
    }).children('span').empty().css('opacity', 0.35);
    
   //$('.btn_ie_up a').hover(function() {
//        $(this).children('span').stop().fadeTo(500, 1);
//    }, function () {
//        $(this).children('span').stop().fadeTo(500, 0.35);
//    }).children('span').empty().css('opacity', 0.35);
    
   $('.block_cont.left .cont_txt .soc div').hover(function() {
        $(this).children('p').fadeTo(500, 1);
    }, function () {
        $(this).children('p').fadeTo(500, 0);
    }).children('p').css('opacity', 0);
    
    $('.err-404-goback a').hover(function() {
        $(this).children('span').stop().fadeTo(500, 1);
    }, function () {
        $(this).children('span').stop().fadeTo(500, 0);
    }).children('span').empty().css('opacity', 0);
   
   $('.err-404-contact a').hover(function() {
        $(this).children('span').stop().fadeTo(500, 1);
    }, function () {
        $(this).children('span').stop().fadeTo(500, 0);
    }).children('span').empty().css('opacity', 0);


   
   //$('.contentWork li:last-child').addClass('last');
//   $('.contentWork li.last').prev('li').addClass('p-last');
   
   $('.content11 li:eq(2)').addClass('p-last');
   $('.content11 li:eq(3)').addClass('last');
   
   $('.content11 li:eq(6)').addClass('p-last');
   $('.content11 li:eq(7)').addClass('last');
   
   $('.content11 li:eq(10)').addClass('p-last');
   $('.content11 li:eq(11)').addClass('last');
   
   $('.content11 li:eq(14)').addClass('p-last');
   $('.content11 li:eq(15)').addClass('last');
   
   $('.content11 li:eq(18)').addClass('p-last');
   $('.content11 li:eq(19)').addClass('last');
   
   $('.content11 li:eq(22)').addClass('p-last');
   $('.content11 li:eq(23)').addClass('last');
   
   
   //$("select#navselect").selectBox();
});