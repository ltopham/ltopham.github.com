/*
 * QueryLoader v2 - A simple script to create a preloader for images
 *
 * For instructions read the original post:
 * http://www.gayadesign.com/diy/queryloader2-preload-your-images-with-ease/
 *
 * Copyright (c) 2011 - Gaya Kessler
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Version:  2.1
 * Last update: 11-1-2011
 *
 */ (function (a) {
    var g = [],
        h = 0,
        i = "",
        e = "",
        j = "",
        k = "",
        f = 0,
        c = {
            onComplete: function () {},
            backgroundColor: "#ccc",
            barColor: "#fff",
            barHeight: 1,
            percentage: !1,
            deepSearch: !0,
            loadingText: "Loading",
            completeAnimation: "fade",
            onLoadComplete: function () {
                "grow" == c.completeAnimation ? a(j).stop().css("width", "100%").animate({
                    top: "0%",
                    height: "100%"
                }, 500, function () {
                    a(e).fadeOut(500, function () {
                        a(this).remove();
                        c.onComplete()
                    })
                }) : a(e).fadeOut(500, function () {
                    a(e).remove();
                    c.onComplete()
                })
            }
        },
        n = function () {
            i = a("<div></div>").appendTo("body").css({
                display: "none",
                width: 0,
                height: 0,
                overflow: "hidden"
            });
            for (var d = 0; g.length > d; d++) f++, m(g[d])
        },
        m = function (d) {
            a("<img />").attr("src", d).bind("load", function () {
                h++;
                var b = 100 * (h / f);
                a(j).stop().animate({
                    width: b + "%"
                }, 200);
                !0 == c.percentage && a(k).html("<div class='t'>" + Math.ceil(b) + "%" + "</div>" + "<span>" + c.loadingText + "</span>" );
                h == f && (a(i).remove(), c.onLoadComplete())
            }).bind("error", function () {
                f--
            }).appendTo(i)
        },
        l = function (d) {
            var b = "";
            "none" != a(d).css("background-image") ? b = a(d).css("background-image") : "undefined" != typeof a(d).attr("src") && "img" == d.nodeName.toLowerCase() && (b = a(d).attr("src"));
            if (-1 == b.indexOf("gradient")) {
                b = b.replace(/url\(\"/g, "");
                b = b.replace(/url\(/g, "");
                b = b.replace(/\"\)/g, "");
                b = b.replace(/\)/g, "");
                d = b.split(", ");
                for (b = 0; b < d.length; b++) if (0 < d[b].length) {
                    var c = "";
                    a.browser.msie && 9 > a.browser.version && (c = "?" + Math.floor(3E3 * Math.random()));
                    g.push(d[b] + c)
                }
            }
        };
    a.fn.queryLoader2 = function (d) {
        d && a.extend(c, d);
        this.each(function () {
            l(this);
            !0 == c.deepSearch && a(this).find("*:not(script)").each(function () {
                l(this)
            })
        });
        n();
        e = a("<div id='qLoverlay'></div>").css({
            width: "100%",
            height: "100%",
            backgroundColor: c.backgroundColor,
            backgroundPosition: "fixed",
            position: "fixed",
            zIndex: 666999,
            top: 0,
            left: 0
        }).appendTo("body");
        j = a("<div id='qLbar'></div>").css({
            height: c.barHeight + "px",
            marginTop: "-" + c.barHeight / 2 + "px",
            backgroundColor: c.barColor,
            width: "0%",
            position: "absolute",
            top: "50%"
        }).appendTo(e);
        !0 == c.percentage && (k = a("<div id='qLpercentage'></div>").html("<div class='t'>0%</div>" + "<span>" + c.loadingText + "</span>" ).css({
            height: "128px",
            width: "176px",
            position: "relative",
            fontSize: "44px",
            top: "50%",
            right: "0",
            textAlign: "center",
            margin: "0 auto",
            marginTop: "-" + (80 + c.barHeight) + "px",
            background: "none",
            padding: "54px 0 0 8px",
            color: c.barColor
        }).appendTo(e));
        return this
    }
})(jQuery);