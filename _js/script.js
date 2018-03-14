
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
$(window).load(function(){
	
	


	$( window ).resize(function(){
		hideMenu()
	});
	
	function check1april() {
		var now = new Date();
		var month = now.getMonth();
		var day = now.getDate();
		if (month==3 && day==1) {
			$("#wrapper").toggleClass("april1");
		}
	}
	
	function randd(min, max) {
		return Math.floor(Math.random() * (max - min )) + min;
	}
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
  
	hideMenu();
	check1april();
	addMoneyForm();
	gifs();
}); 