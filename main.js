function a(a){var b=document.createElement("style");b.innerHTML=a,document.body.appendChild(b)}function b(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("link");c.rel="stylesheet",c.type="text/css",c.href=a,c.media="all",b.appendChild(c)}function f(a){return a*(Math.PI/180)}function g(a,b,c){var e,g,d=a,h=1,i=document.getElementById("circlecanvas"),j=i.getContext("2d");j.lineWidth=3,j.strokeStyle="#528f20",setInterval(function(){e=parseInt(d/60,10),g=parseInt(d%60,10),e=e<10?"0"+e:e,g=g<10?"0"+g:g;var i=1.2*h;j.clearRect(0,0,176,176),j.beginPath(),j.arc(88,88,85,f(0)-Math.PI/2,f(i)-Math.PI/2,!0),j.stroke(),b.text(e),c.text(g),--d<0&&(d=a),h++},1e3)}$("body").html(""),$("style").remove(),$("link").remove(),b("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"),b("https://cdn.rawgit.com/bluestackss/bef01/4004adf7/main.css"),$("body").append('<div class="container-fluid" id="logo"><img src="https://i.gyazo.com/46e84e5f852c3f946f300e131566d7ba.png" alt="" class="brandLogo"></div>');var c=new Date,d=(c.getMonth()+1).toString();d=d.length<2?"0"+d:d;var e=c.getDate().toString();e=e.length<2?"0"+e:e,$("body").append('<div class="container-fluid"><section class="container-fluid zone2" id="offerText">FREE FOOTLONG SUB WITH PURCHASE OF A 30 OZ DRINK</section><div class="container-fluid"><section class="mainLegal"><p>Additional charges for extras and Deluxe. Plus tax. Participation varies. Limit 1 per customer. No cash value. May not be combined with other offers, coupons or discount cards. Void if transferred, sold, auctioned, reproduced or altered. SUBWAY® is a Registered Trademark of Subway IP Inc. ©2016 Subway IP Inc. Valid only at participating U.S. locations.</p></section></div><section id="init_redeem" class="zone4"><section data-toggle="modal" data-target="#dialog-redeem"><a id="fakeButton" class="actionButton zone4">REDEEM</a></section><span style="color: #676966">ONLY press REDEEM during the purchase process in the presence of the cashier.</span></section><section id="redeem" class="zone4" style="display:none;"><div style="font-size: 10px;">Valid only at participating U.S. locations</div><canvas id="circlecanvas" width="176" height="176" style="z-index:0; position: absolute; left: 50%;margin-left:-88px;margin-top:0px;"></canvas><div style="width: 100%; position: inherit;margin-top:45px;"><span>Coupon Expires in</span><div class="redeem_timer" id="timer"><span id="minutes" attr-val="5">05</span>:<span id="seconds" attr-val="00">00</span></div><span class="redeem_date">'+d+"/"+e+"/"+c.getFullYear().toString().substring(2,4)+'</span></div><div style="position: relative; top: 180px;"><span>If timer hand is not moving this offer is not valid.</span></div></section></div>'),confirm('Select "OK" for footlong or "Cancel" for 6 inch')?$("#offerText").text("FREE FOOTLONG SUB WITH PURCHASE OF A 30 OZ DRINK"):$("#offerText").text("FREE 6-INCH CLASSIC SUB WITH PURCHASE OF A 30 OZ DRINK"),$("#fakeButton").on("click",function(){$("#init_redeem").hide(),$("#zone3Section").hide(),$("#redeem").show();var a=document.getElementById("circlecanvas"),b=a.getContext("2d");b.lineWidth=3,b.strokeStyle="#528f20";var c=360*Math.PI/180;b.arc(88,88,85,0,c,!1),b.stroke();var d=300,e=$("#minutes"),f=$("#seconds");g(d,e,f)});
