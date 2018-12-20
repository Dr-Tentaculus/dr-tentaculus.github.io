	function randd(min, max) {
		return Math.floor(Math.random() * (max - min )) + min;
	}
	function getUserId(){
		function guid() {
		  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
			s4() + '-' + s4() + s4() + s4();
		}

		function s4() {
		  return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
		}
	
		var sUserId = guid();
			
		return sUserId;
	}
	
	function getViewPortSize(mod) {
		var viewportwidth;
		var viewportheight;

		//Standards compliant browsers (mozilla/netscape/opera/IE7)
		if (typeof window.innerWidth != 'undefined')
		{
			viewportwidth = window.innerWidth,
			viewportheight = window.innerHeight
		}

		// IE6
		else if (typeof document.documentElement != 'undefined'
		&& typeof document.documentElement.clientWidth !=
		'undefined' && document.documentElement.clientWidth != 0)
		{
			viewportwidth = document.documentElement.clientWidth,
			viewportheight = document.documentElement.clientHeight
		}

		//Older IE
		else
		{
			viewportwidth = document.getElementsByTagName('body')[0].clientWidth,
			viewportheight = document.getElementsByTagName('body')[0].clientHeight
		}

		if(mod=="width")
			return viewportwidth;
		
		return viewportwidth + "~" + viewportheight;
	}
	
	function hideMenu(){
		if(getViewPortSize("width")<767){
			$("#main_menu").hide();
		} else {
			$("#main_menu").show();
		}
	}
	
	function user_message(sUser){
		function show(sText){
			if($("#user_mess").length==0) {
				$("#content").before("<div id='user_mess' style='font-size: 90%; color: #666; padding: 0.5em; background: #e7f2ff; border-radius: 3px; '>"+sText+"</div>");
			}
			$("#user_mess").eq(0).html(sText);
		}
		var o={
			"c1dbe942-d010-1069-22d8-63d30a18324b": {
				text: "Совет. Если хочется сохранить результаты работы генератора или набор в каталоге, нажмите [Ctrl]+[P] или выберете 'Печать' через меню браузера и там выберите печать в PDF. В полученном файле будет информация о таврне.<br>Удобнее всего это делать через Chrome - там наглядно показывается, каким получится файл."
			}
		}
		if(o[sUser]) {
			show(o[sUser].text);
		}
	}
	
	hideMenu();
	var sUser = getUserId();
	user_message(sUser);
	
$(document).ready(function(){
	
	/// links mutation
	var sLinkStart = $("head base").attr("href");
	var sCanonicalLink = "https://tentaculus.ru";
	if(sLinkStart != sCanonicalLink) {
		$("#main_block a").each(function(){
			var sLink = $(this).attr("href");
			if(sLink && sLinkStart != sCanonicalLink && sLink.indexOf("https://tentaculus.ru")>-1) {
				sLink = sLink.replace(sCanonicalLink, sLinkStart);
				$(this).attr("href", sLink);
			}
		});
		$("a[data-urlchange='true']").each(function(){
			var sLink = $(this).attr("href");
			if(sLink && sLinkStart != sCanonicalLink && sLink.indexOf("https://tentaculus.ru")>-1) {
				sLink = sLink.replace(sCanonicalLink, sLinkStart);
				$(this).attr("href", sLink);
			}
		});
	}
	///////
	
	//// telegram
	$("#content p").each(function(){
		var oLink = $(this).find("a[href^='https://t-do.ru/']");
		if(oLink) {
			var oHref = /https:\/\/t\-do\.ru\/(.+)/.exec(oLink.attr("href"));
			if(oHref && oHref[1]) {
				sAnchor = oHref[1];
				$(this).closest("p").prepend("<a name='"+sAnchor+"'></a>");
				$(this).closest("p").prepend("<a href='telegram.html#"+sAnchor+"' class='anchor'><i class='fa fa-link'></i></a>");
			}
		}
	});
	////

	function addMoneyForm() {
		var aTexts = [
			"На отопление Омута",
			"На домик для трех поросят",
			"Прост",
			"Гуманитарная помощь",
			"Из солидарности",
			"Отправить корован",
			"Сделать приятное",
			"Щоб було",
			"=^ᴥ^=",
			"На постройку капитолия"
		];
		var sTitle = "<h4>Поддержать материально</h4>";
		var sForm = '<iframe src="https://money.yandex.ru/quickpay/shop-widget?writer=seller&targets=' + encodeURIComponent(aTexts[randd(0, aTexts.length)]) +'&targets-hint=&default-sum=50&button-text=12&comment=on&payment-type-choice=on&hint=&successURL=https%3A%2F%2Ftentaculus.ru&quickpay=shop&account=410011808384605" width="100%" height="300" frameborder="0" allowtransparency="true" scrolling="no" style="max-width: 450px"></iframe>';
		
		$("#footer .greed").html(sTitle + sForm);
	}
	$("#menu_toggle").click(function(){
		$("#main_menu").slideToggle();
    return false;
	});
	
	// spoiler 
	$(".spoiler_body").css('height', '21rem');
	$(".spoiler_toggle").click(function(){
		var oSp = $(this).next(".spoiler_body");
		if(oSp.attr('style') == 'height: 21rem;') {
			oSp.css("height", "auto");
		} else {
			oSp.css("height", "21rem");
		}
		return false;
	});
	///
	
	// print url
	function add_printUrl(){
		var sUrl = window.location.href;
		var sTitle = document.title;
		var oTag = $("#page_url");
		if(oTag.length>0) {
			oTag.html(sTitle+"<br>"+sUrl);
		}
	}
	
	hideMenu();
	addMoneyForm();
	//add_printUrl();
});	
	
$(window).load(function(){

	$( window ).resize(function(){
		hideMenu()
	});
	
	function gifs() {
		var aAllGifs = [].slice.apply(document.images).filter(is_gif_image);
		//aAllGifs.map(freeze_gif);
		
		function setFreezer(){
			
			document.getElementsByTagName("body")[0].onscroll = function(){
				//console.log(documenhttps://fiddle.jshell.net/3urv0tp0/#tidyt.getElementById("child-div").style.top)
				aAllGifs.forEach(function(el){
					if((document.documentElement.scrollTop+window.innerHeight - el.offsetHeight*1.2) >= el.offsetTop)//Adjust Tolerance as you want{
					   //child.style.display="block";
					   
					   setTimeout(function(){
						   freeze_gif(el);
					   }, 1000);
					
				});
				

			};
		}

		function is_gif_image(i) {
			return /^(?!data:).*\.gif/i.test(i.src);
		}

		function freeze_gif(i) {
			if(i.parentNode.childNodes.length<2) {
				var c = document.createElement('canvas');
				var w = c.width = i.width;
				var h = c.height = i.height;
				c.getContext('2d').drawImage(i, 0, 0, w, h);
				var ctx = c.getContext('2d');
				var c_cent_x = ~~(w/2);
				var c_cent_y = ~~(h/2);
				ctx.fillStyle = "rgba(220,220,220, 0.0)";
				ctx.strokeStyle = "rgba(220,220,220, 0.6)";;//"rgba(40,40,40, 0.8)";
				ctx.lineWidth = 25;
				ctx.lineJoin = "round";
				ctx.lineCap="round"
				ctx.beginPath();
				ctx.moveTo(c_cent_x+20,c_cent_y+10);//ctx.moveTo(60,50);
				ctx.lineTo(c_cent_x-15,c_cent_y+35);//ctx.lineTo(25,75);
				ctx.lineTo(c_cent_x-15,c_cent_y-15);//ctx.lineTo(25,25);
				ctx.lineTo(c_cent_x+20,c_cent_y+10);//ctx.lineTo(60,50);	
				ctx.stroke();
				ctx.fill();		
				ctx.shadowBlur=10;
				ctx.shadowColor="black";				

				i.onclick = function(oEvent){
					try{
						var i = this;
						i.parentNode.lastChild.style.display = 'inline-block';
						i.style.display = 'none';
					} catch(err){
						console.log("Error: gif image click")
					}
					return false;
				};
				c.onclick = function(oEvent){
					var с = this;
					c.parentNode.firstChild.style.display = 'inline-block';
					c.style.display = 'none';
					return false;
				};
				// try {
					// i.src = c.toDataURL("image/gif"); // if possible, retain all css aspects
				// } catch(e) { // cross-domain -- mimic original with all its tag attributes
					
				// }
				
				for (var j = 0, a; a = i.attributes[j]; j++){
					if(a.name!=='width' && a.name!='height' && a.name!='title'){
						c.setAttribute(a.name, a.value);
					}
				}
				c.setAttribute("title", "Запустить gif");
			   // i.parentNode.replaceChild(c, i);
				i.style.display = 'none';
				i.style.cursor = 'pointer';
				c.style.cursor = 'pointer';
				c.setAttribute('data-paused-gif', true);
				i.parentNode.appendChild(c);
			}
		}
		setFreezer();
	}
  
	gifs();
	if(check1april()){
		addMob();
		oTimerStopgame = setTimeout(function(){stopGame();}, 3000);
	};
}); 