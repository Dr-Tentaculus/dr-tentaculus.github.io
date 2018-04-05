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
	
		var sUserId = localStorage.getItem("UserGUID");
		if(!sUserId) {
			sUserId = guid()
			localStorage.setItem("UserGUID", sUserId);
		}
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
	
	hideMenu();
	getUserId();
	
	///////////////////////// game
	/*/
	var fMobClickable = false;
	var sMobId = "#aprilMob", nScore=0, nMobLoose=0;
	if(localStorage.getItem('aprilGame2018')) {
		nScore = JSON.parse(localStorage.getItem('aprilGame2018')).score;
	}
	var nMobDir=0;
	var oTimerStopgame;
	var nMobHeight = 200, nMobWidth=100;
	function killMob(){
		if(fMobClickable){
			fMobClickable=false;
			$(sMobId).animate(
				{
					"opacity": 0			
				},{
					"duration": 100,
					"queue": true
				}
			);
			$(sMobId).animate(
				{
					"opacity": 1			
				},{
					"duration": 100,
					"queue": true
				}
			);
			$(sMobId).animate(
				{
					"opacity": 0			
				},{
					"duration": 100,
					"queue": true
				}
			);
			$(sMobId).animate(
				{
					"opacity": 1			
				},{
					"duration": 100,
					"queue": true
				}
			);
			$(sMobId).animate(
				{
					"opacity": 0			
				},{
					"duration": 100,
					"queue": true
				}
			);
			// $(sMobId).animate(
				// {
					// "bottom": -300			
				// },{
					// "duration": 100,
					// "easing": "swing",
					// "complete": function(){}
				// }
			// );
		}
	}
	function hideMob(){
		fMobClickable=false;
		switch(nMobDir) {
			case 0: //nLeft = randd(0, (nScreenWidth-100)); nBottom = '-300px'; 
				oCss={
					bottom: '-'+(nMobHeight+50)+'px'
				};
				break;
			case 1: //nLeft = '-300px'; nTop=randd(0, (nScreenHeight-100)); 
				oCss={
					left: '-'+(nMobHeight+50)+'px'
				};
				break;
			case 2: //nLeft = randd(0, (nScreenWidth-100)); nTop = '-300px';
				oCss={					
					top: '-'+(nMobHeight+50)+'px'
				};
				
				break;
			case 3:// nRight = '-300px'; nTop = randd(0, (nScreenWidth-100)); 
				oCss={
					right: '-'+(nMobHeight+50)+'px'
				};
				break;
		}	
		$(sMobId).animate(
			oCss,
			{
				"duration": 100,
				"easing": "swing",
				"complete": function(){}
			}
		);

	}
	function stopGame(){
		hideMob();
	}
	function addMob(){
		fMobClickable = false;
		$(sMobId).remove();
		var sMob = "<div id='aprilMob' style='display: none'></div>";
		$("body").append(sMob);
		var aWindow=getViewPortSize().split("~");
		var nScreenWidth = aWindow[0];
		var nScreenHeight = aWindow[1];
		nMobDir=0;
		var nLeft, nTop, nBottom;
		if(nScore>600) {
			nMobDir=randd(0,4);
		}
		var oCss={
			'left': 0,
			'bottom': -300
		},
		oResultCss = {
			"bottom": "0"
		};
		switch(nMobDir) {
			case 0: //nLeft = randd(0, (nScreenWidth-100)); nBottom = '-300px'; 
				oCss={
					left: randd(0, (nScreenWidth-100)),
					bottom: '-'+(nMobHeight+50)+'px',
					transform: "rotate(0)"
				};
				oResultCss = {
					"bottom": "0"
				};
				break;
			case 1: //nLeft = '-300px'; nTop=randd(0, (nScreenHeight-100)); 
				oCss={
					left: '-'+(nMobHeight+50)+'px',
					top: randd(0, (nScreenHeight-100)),
					transform: "rotate(90deg)"
				};
				oResultCss = {
					"left": "0"
				};
				break;
			case 2: //nLeft = randd(0, (nScreenWidth-100)); nTop = '-300px';
				oCss={
					left: randd(0, (nScreenWidth-100)),
					top: '-'+(nMobHeight+50)+'px',
					transform: "rotate(180deg)"
				};
				oResultCss = {
					"top": "0"
				};
				break;
			case 3:// nRight = '-300px'; nTop = randd(0, (nScreenWidth-100)); 
				oCss={
					right: '-'+(nMobHeight+50)+'px',
					top: randd(0, (nScreenHeight-100)),
					transform: "rotate(270deg)"
				};
				oResultCss = {
					"right": "0"
				};
				break;
		}
		//var nLeft = randd(0, (nScreenWidth-100));
		$(sMobId).css(oCss);
		$(sMobId).css({			
			'display': 'block',
			'width': nMobWidth+'px',
			'height': nMobHeight+'px',
			'background-image': 'url(_img/1april/g'+randd(1,8)+'.png)',
			'background-repeat': 'no-repeat',
			'position': 'fixed', 
			'cursor': 'pointer',
			'z-index': '9999999'
			});
		
		$(sMobId).animate(
			oResultCss,
			{
				"duration": 300,
				"easing": "swing",
				"complete": function(){
					fMobClickable=true; 
					oTimerStopgame = setTimeout(function(){
						hideMob();
						nMobLoose++; 
						if(nMobLoose<3){
							setTimeout(addMob(), 1000)
						} else {
							$("#mobScore").remove();
						}
					}, 3000);
				}
			}
		);
		
	}
	function showScore(){
		if(!$("#mobScore").length) {
			$('body').append("<div id='mobScore' style='cursor: pointer; padding: 10px; font-weight: bold; position: fixed; top: 10px; left: 10px; background: gold'></div>");
		}
		$("#mobScore").text(nScore);
		localStorage.setItem('aprilGame2018', JSON.stringify({score: nScore}));
	}
	// mob click
	$('body').live('click', sMobId, function() {
		nScore+=100;
		nMobLoose=0;
		showScore();
		clearTimeout(oTimerStopgame); 
		killMob(); 
		setTimeout(function(){addMob();},randd(15,30)*50);
		return false;
	});
	// score click
	// $('body').live('click', "#mobScore", function() {
		// stopGame();
		// $("#mobScore").remove();
		// return false;
	// });
	
	
	/////////////////////////////////////////////////////////////////////////////
	
	function check1april() {
		//return true;
		var now = new Date();
		var month = now.getMonth();
		var day = now.getDate();
		if (month==3 && day==1) {
			return true;
		}
	}
	
	if(check1april() || true){
		aImg=[];
		for(var i=1; i<=7; i++) {
			aImg.push("<img src='_img/1april/g"+i+".png' style='display: none'>");
		}
		$("body").append(aImg.join(""));
	}
	
	/**/
	
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
	
	hideMenu();
	addMoneyForm();
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
				ctx.fillStyle = "rgba(220,220,220, 0.0)";
				ctx.strokeStyle = "rgba(220,220,220, 0.6)";;//"rgba(40,40,40, 0.8)";
				ctx.lineWidth = 25;
				ctx.lineJoin = "round";
				ctx.lineCap="round"
				ctx.beginPath();
				ctx.moveTo(60,50);
				ctx.lineTo(25,75);
				ctx.lineTo(25,25);
				ctx.lineTo(60,50);	
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
				};
				c.onclick = function(oEvent){
					var с = this;
					c.parentNode.firstChild.style.display = 'inline-block';
					c.style.display = 'none';
				};
				// try {
					// i.src = c.toDataURL("image/gif"); // if possible, retain all css aspects
				// } catch(e) { // cross-domain -- mimic original with all its tag attributes
					
				// }
				
				for (var j = 0, a; a = i.attributes[j]; j++){
						c.setAttribute(a.name, a.value);
				}
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