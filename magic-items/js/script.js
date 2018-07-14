var TENTACULUS_APP_VERSION = "1.0.0";

var oConfig = {}; // global app config data
function setConfig(prop, val) {
	if(prop && val != undefined && oConfig) {
		oConfig[prop] = val;
		localStorage.setItem("config", JSON.stringify(oConfig));
	}
}
function getConfig(prop) {
	oConfig = JSON.parse(localStorage.getItem("config")) || {};
	if(prop!=undefined) {
		return localStorage.getItem("config")? oConfig[prop] : null;
	}
	return ""; //oConfig;
}

function randd(min, max) {
  return Math.floor(arguments.length > 1 ? (max - min + 1) * Math.random() + min : (min + 1) * Math.random());
};

window.onload = function(){
	var fCtrlIsPressed = false;

	var oTimer; // for TimeOut (filtering)
	var nTimerSeconds = 100;

	var aHiddenItems = [];
	var aLockedItems = {};
	var filteredItems = [];

	var oSource = {};

	function arrDiff(arr1, arr2) {
		var arr3 = arr2.map(function(item){return item.en});
		return arr1.filter(
			function(item){
				return (arr3.indexOf(item.en.name)>=0)? false: true;
			}
		);
	}

	function removeFromArr(arr, el) {
		var index;

		for (var i=0; i<arr.length; i++) {
			if(arr[i] == el) {
				index = i;
				break;
			}
		}
		arr.splice(i, 1);
		return arr
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

	function createSelect(src, params) {
		var options = "";
		var selected_key = params.selected_key;
		var id = params.id? "id='"+params.id+"'" : "";
		var sClass = params.controlClass? params.controlClass : "";
		var atr_class = params.class? params.class : "";
		var width = params.width? "; width: "+ params.width: "";
		var lableText;
		var min_width = 0;
		var oParams = params.params;
		var aParams = [], sParams="";
		if(oParams) {
			oParams.forEach(function(item) {
				aParams.push(item.name+"='"+item.value+"'");
			});
			sParams = aParams.join(" ");
		}
		if(Array.isArray(src)) {
			src.forEach(function(item){
				var key = item.name;
				var text = item.title;
				if(text.length > min_width)
					min_width = text.length/2;
				options += "<li class='option' data-key='"+key+"'>"+text+"</li>";
				if(key == selected_key){
					lableText = text
				}
			});
		} else {
			for(item in src){
				var key = item;
				var text = src[item].ru.title;
				if(text.length > min_width)
					min_width = text.length/2;
				options += "<li class='option' data-key='"+key+"'>"+text+"</li>";
				if(key == selected_key){
					lableText = text
				}
			};
		}
		min_width = min_width>20? 20: min_width;
		min_width = min_width<5? 5: min_width;
		min_width = ~~(min_width*0.75);

		var list = "<ul class='list'>" + options + "</ul>";

		var selectedKey = selected_key;
		//var label="<div class='label"+atr_class+"' data-selected-key='" + selectedKey + "'>" + lableText + "</div>";
		var label="<div class='label' data-selected-key='" + selectedKey + "'>" + lableText + "</div>";
		//var select = "<button " + id + " " + sParams + " class='customSelect "+sClass+"' >" + label + list + "</button>";
		var select = "<button " + id + " class='customSelect' >" + label + list + "</button>";

		return select;
	}

	function createComboBox(src, param) {
		var ARR_DOWN = '<i class="fa fa-arrow-down"></i>';
		var ARR_UP = '<i class="fa fa-arrow-up"></i>';
		var ret = '';
		var id =  param.id? "id='"+param.id+"'": "";
		var title = param.title? param.title: "Выберите";
		var checked = param.checkAll? "checked": "";
		var isOpen = (param.isOpen!=undefined) ? param.isOpen : true;
		var arrow, display = "", content_open=true;
		var min_width = 0;
		if(isOpen && isOpen != "false"){
			arrow="<div class='combo_box_arrow'><span class='arr_down' style='display:none'>"+ARR_DOWN+"</span><span class='arr_up'>"+ARR_UP+"</span></div>";
		} else {
			arrow="<div class='combo_box_arrow'><span class='arr_down'>"+ARR_DOWN+"</span><span class='arr_up' style='display:none'>"+ARR_UP+"</span></div>";
			display = " style='display:none' ";
			content_open = false;
		}
		if(Array.isArray(src)) {
			for (var i =0; i < src.length; i++) {
				var type = src[i];
				var max = Math.max(type.en.length, type.ru.length)/2;
				if (max > min_width) {
					min_width = max;
				}

				var sOptionValue = type.key? type.key : type.en;

				ret+="<input "+checked+" type='checkbox' value='"+sOptionValue+"' id='ch_"+sOptionValue.replace(" ", "_")+"'><label for='ch_"+sOptionValue.replace(" ", "_")+"' data-hierarchy='root'>"+type.en+"<br>"+type.ru+"</label>";

			}
		} else {
			for(key in src) {
				var type = src[key];
				var max = Math.max(type.text.en.title.length, type.text.ru.title.length)/2;
				if (max > min_width) {
					min_width = max;
				}

				var sOptionValue = key;

				ret+="<input "+checked+" type='checkbox' value='"+sOptionValue+"' id='ch_"+sOptionValue.replace(" ", "_")+"'><label for='ch_"+sOptionValue.replace(" ", "_")+"' data-hierarchy='root'>"+type.text.en.title+"<br>"+type.text.ru.title+"</label>";
			}
		}

		min_width = min_width>20? 20: min_width;
		min_width = min_width<5? 5: min_width;
		min_width = ~~(min_width*0.9)+2;
		ret = "<div "+id+" class='combo_box' data-text='"+title+"' data-content-open='"+content_open+"'><div class='combo_box_title'>"+title+"</div><div class='combo_box_content' "+display+" >"+ret+"</div>"+arrow+"</div>";
		return ret;
	}

	function createInput(params){
		var id = params.id? "id='"+params.id+"'" : "";
		return "<div "+id+" class='customInput'><input type='text'><span class='cross'></span></div>";
	}

	function showInfoWin(sText) {
		$(".mod_win_wrapper").remove();
		var bCross = "<span class='bCloseInfoWin'>×</span>";
		$("body").append("<div class='mod_win_wrapper'><div class='mod_win'>"+bCross+sText+"</div></div>");
    $("body").css("overflow-y", "hidden");
		$(".mod_win_wrapper").fadeIn();
	}
	function hideInfoWin() {
		if($(".mod_win_wrapper").length){
			$.when($(".mod_win_wrapper").fadeOut()).done(function(){
        $("body").css("overflow-y", "auto");
      });
		}
	}
	function showDBG() {
		if(!$("#dbg").length){
			$("body").append("<div id='dbg'></div>");
		}
		$("#dbg").fadeIn();
		$("body").height();
	}
	function hideDBG() {
		if($("#dbg")){
			$("#dbg").fadeOut();
		}
	}

	function pretifyString(s) {
		return s.substr(0,1).toUpperCase() + s.substr(1);
	}

	function getItemAttr(oItem, sAttr, sLang) {
    try{
      if(oItem[sLang] && oItem[sLang][sAttr] != undefined && oItem[sLang][sAttr] != ""){
        return oItem[sLang][sAttr];
      }
      var aLang = [];
      for (lang in oItem){
        aLang.push(lang);
      }
      for(var i=0; i<aLang.length; i++){
        if(oItem[aLang[i]][sAttr] != undefined) {
          return oItem[aLang[i]][sAttr];
        }
      }
    } catch(err){
      console.log(err);
      console.log(oItem.en.name);
    }
		return "";
	}
	function getItemAttrFromDB(oDataSource, oParam) {
    var aParam = [], aReturn = [];
    if(Array.isArray(oParam.attr)){
      aParam = oParam.attr;
    } else {
      aParam = [oParam.attr];
    }
    for(var i=0; i<aParam.length; i++) {
      var sAttr = (aParam[i]!=undefined)? String(aParam[i]).toLowerCase().trim() : undefined;
      var sLang = (oParam.lang!=undefined)? String(oParam.lang).toLowerCase().trim() : undefined;
      var sSubAttr = oParam.subattr || "title";
      if(oDataSource[sAttr]){
        if(oDataSource[sAttr].text[sLang]){
          aReturn.push(oDataSource[sAttr].text[sLang][sSubAttr] || oDataSource[sAttr].text[sLang].title);
          continue;
        }

        var aLang = [];
        for (lang in oDataSource[sAttr]){
          aLang.push(lang);
        }
        for(var i=0; i<aLang.length; i++){
          if(oDataSource[sAttr].text[aLang[i]]) {
            aReturn.push(oDataSource[sAttr].text[aLang[i]][sSubAttr] || oDataSource[sAttr].text[aLang[i]].title);
            break;
          }
        }
      }
    }

    return aReturn.join(", ");
	}

	function createCard(oItem, lang, sLockedItem, sView) {
		if (oItem[lang] || (lang="en", oItem[lang])) {
			var o = oItem[lang];
			var s_name = getItemAttr(oItem, "name", lang);
			var s_img = getItemAttr(oItem, "img", lang);
			var s_type = getItemAttrFromDB(oTypes, {attr: getItemAttr(oItem, "type", lang), lang: lang});
			var s_gender = getItemAttrFromDB(oTypes, {attr: getItemAttr(oItem, "type", lang), subattr: "gender", lang: lang});
			var s_rariry = getItemAttrFromDB(oRarity, {attr: getItemAttr(oItem, "rarity", lang), subattr: s_gender, lang: lang});
			var s_attunement = getItemAttr(oItem, "attunement", lang);
      var s_typeAdditions = getItemAttr(oItem, "typeAdditions", lang);
			var s_notes = getItemAttr(oItem, "notes", lang);
			var s_text = getItemAttr(oItem, "text", lang).split("<br>").map(item => "<p>"+item+"</p>").join("");
			var s_source = getItemAttr(oItem, "source", "en");
			var s_sourcePage = getItemAttr(oItem, "sourcePage", lang);
      var fText = (sView == 'text');
      
      var s_rarity_class = getItemAttrFromDB(oRarity, {attr: getItemAttr(oItem, "rarity", "en"), subattr: s_gender, lang: "en"}).toLowerCase().replace(" ", "_").trim();

      var s_coast = getItemAttr(oItem, "coast", lang) ||
        oRarity[oItem.en.rarity] && oRarity[oItem.en.rarity].coast ||
        "";
      if(s_coast){
        s_coast = "<div class='coast'><div class='coin'>"+s_coast+"</div></div>";
      }
      try{
        
        var oImg = "<img class='img' src='img/items/min_200/"+s_img+"'>";
        if(!s_img) {
          oImg = "<img class='img' src='img/items/placeholder/"+oTypes[oItem.en.type.toLowerCase()].img+"'>";
          s_img = "img/items/placeholder/"+oTypes[oItem.en.type.toLowerCase()].img;
        } else{
          s_img = "img/items/min_200/"+s_img
        }
      } catch(err){
        console.log(s_name);
      }
      


			var bHideItem = '<span class="bHideItem" title="Скрыть предмет (будет внизу панели фильтров)"><i class="fa fa-eye-slash" aria-hidden="true"></i></span>';
			var bLockItem = sLockedItem? '<span class="bUnlockItem" title="Открепить обратно"><i class="fa fa-unlock-alt" aria-hidden="true"></i></span>' : '<span class="bLockItem" title="Закорепить предмет (не будут действовать фильтры)"><i class="fa fa-lock" aria-hidden="true"></i></span>';
			var textSizeButtons = "<div class='sizeButtonsContainer noprint'><a href='#' class='textMin' title='Уменьшить размер текста'>–</a><a href='#' class='textMax' title='Увеличить размер текста'>+</a></div>";

			sLockedItem = sLockedItem? " lockedItem " : "";

			var cardWidth = getConfig("cardWidth");
			var style = "";
			if(cardWidth && !fText) {
				var style = " style='width: " + cardWidth + "' ";
			}

			var sNeedHelp = (lang == "ru")?  getItemAttr(oItem, "name", "en") : getItemAttr(oItem, "name", "ru");
      var sImg = fText? "" :'style="background-image: url('+s_img+');"';
      //s_text = fText? s_text.split("<br>").map(item => "<p>"+item+"</p>").join(""): s_text;

			ret = '<div class="cardContainer '+(fText? "textView " : "") + sLockedItem + " " + s_rarity_class +'" '+ style +' data-name="' + oItem.en.name + '"  data-name-ru="' + oItem.ru.name + '"  data-lang="' + lang + '">'+
				'<div class="ItemCard">'+
					'<div class="content" '+sImg+'>'+
            bLockItem +
            bHideItem +
            "<div class='header_info'>"+
              '<h1 title="'+s_name+(sNeedHelp?" ("+sNeedHelp+")":"")+'">' +s_name+ '</h1>'+
              '<div class="subtitle">' + s_rariry + " " + s_type+  " " + s_typeAdditions+  " " + s_attunement + '</div>'+
            "</div>"+
            "<div class='info'>"+
              oImg+
              '<div class="text">' + s_text + '</div>	'+
              textSizeButtons +
            "</div>"+
            s_coast+ 
            '<span class="sf_text"> <i class="fa fa-info-circle" aria-hidden="true"></i></span>'+
						"<div class='source' title=\"Источник: "+ oSources[s_source].text[lang].title+"\">"+ s_source+"</div>"+
					'</div>'+
				'</div>'+
			'</div>';
			return ret;
		} else {
			console.log("not found: ");
			console.dir(oItem);
		}
	}


	// function createItemsIndex() {
	// 	var Items = "";
	// 	allItems.forEach(function(item) {
	// 		Items += createCard(item);
	// 	});
	// 	$(".ItemContainer").html(Items);
	// 	$("#before_Items").hide();
	// 	$("#info_text").hide();
	// }
	function showFiltered(oParams) {
		try{
			var sName = oParams.sName;
			var aSources = oParams.aSources;// && oParams.aSources.split(",").map(item => item.trim());
			var aRarity = oParams.aRarity && oParams.aRarity.split(",").map(item => item.trim());
			var aTypes = oParams.aTypes && oParams.aTypes.split(",").map(item => item.trim());
			var sLang = oParams.sLang;
			var sView = oParams.sView;
			var sSort = oParams.sSort;
      var fRandom = oParams.fRandom;
		} catch (err) {
			console.dir(oParams);
		}

		 var fHiddenItems = (aHiddenItems.length>0)? true: false;
		 var fLockedItems = (aLockedItems.length>0)? true: false;

		$(".ItemContainer").empty();
		var Items = "";


		filteredItems = allItems; //[]; //arrDiff(filteredItems, aHiddenItems);


		// name
		if (sName) {
			sName = sName.toLowerCase().trim();
			filteredItems = filteredItems.filter(function(Item){
				return (
					(Item.en.name.toLowerCase().trim().indexOf(sName)>=0) || 
					(Item.ru && Item.ru.name.toLowerCase().trim().indexOf(sName)>=0) ||
					(Item.ru && Item.ru.nic && Item.ru.nic.toLowerCase().trim().indexOf(sName)>=0)					
					);
			});
		}

		//types
		if(aTypes && aTypes.length>0) {
			filteredItems = filteredItems.filter(function(Item){
				for(var i = 0; i < aTypes.length; i++) {
					if(aTypes[i].toLowerCase().trim() == Item.en.type.toLowerCase().trim()) {
						return true;
					}
				}
				return false;
			});
		}

		//rarity
		if(aRarity && aRarity.length>0) {
			filteredItems = filteredItems.filter(function(Item){
				for(var i = 0; i < aRarity.length; i++) {
					if(aRarity[i].toLowerCase().trim() == String(Item.en.rarity).toLowerCase().trim() || aRarity[i].toLowerCase().trim() == 0) {
						return true;
					}
				}
				return false;
			});
		}

		//source
		if(aSources && aSources.length>0 && aSources.length<9) {
			filteredItems = filteredItems.filter(function(Item){
				for(var i = 0; i < aSources.length; i++) {
          try{
            if(aSources[i].toLowerCase().trim() == Item.en.source.toLowerCase().trim()) {
              return true;
            }
          } catch (err) {
            console.dir(err);
            console.dir(Item.en);
          }
				}
				return false;
			});
		}



		filteredItems = fHiddenItems? arrDiff(filteredItems, aHiddenItems) : filteredItems;
		//filteredItems = fLockedItems? filteredItems.concat(aLockedItems) : filteredItems;
		if (fLockedItems) {
			for (var i = 0; i<allItems.length; i++){
				for (var j=0; j<aLockedItems.length; j++){
					if(allItems[i].en.name == aLockedItems[j].en) {
						filteredItems.push(allItems[i]);
						break;
					}
				}
			}
		}

		// sort
		if(sSort == 'alpha') {
			filteredItems.sort(function(a, b) {
				if(a[sLang] && b[sLang]) {
					if (a[sLang].name.toLowerCase().trim() < b[sLang].name.toLowerCase().trim() )
						return -1;
					if (a[sLang].name.toLowerCase().trim() > b[sLang].name.toLowerCase().trim() )
						return 1;
				}
				return 0
			});
		} else {
			filteredItems.sort(function(a, b) {
				if(a[sLang] && b[sLang]) {
					if (a.en.rarity+a[sLang].name.toLowerCase().trim() < b.en.rarity+b[sLang].name.toLowerCase().trim() )
						return -1;
					if (a.en.rarity+a[sLang].name.toLowerCase().trim() > b.en.rarity+b[sLang].name.toLowerCase().trim() )
						return 1;
				}
				return 0
			});
		}

    if(fRandom){
      filteredItems = [filteredItems[randd(0, filteredItems.length)]];
      var sName = filteredItems[0].en.name.toLowerCase();
      $("#NameInput input").val(sName);
    }
    
		for (var i in filteredItems) {
			if(filteredItems[i]) {
				var fLocked = filteredItems[i].locked? true: false;
				var tmp = createCard(filteredItems[i], sLang, fLocked, sView)
				if (tmp)
					Items += tmp;
			}
		}
    
		$(".ItemContainer").html(Items);
    $(".ItemContainer").attr("data-itemCount", filteredItems.length);
		$("#before_Items").hide();
		$("#info_text").hide();
	}

	function filterItems(oParams){
		 var sName = $("#NameInput input").val();
		 var aTypes = $("#TypeCombobox .combo_box_title").attr("data-val");
		 var aRarity = $("#RarityCombobox .combo_box_title").attr("data-val");
		 var aSources = $("#SourceCombobox .combo_box_title").attr("data-val");
		 	if(aSources) aSources = aSources.split(",").map(function(item){return item.trim()});
		 var sLang = $("#LangSelect .label").attr("data-selected-key");
		 var sView = $("#CardViewSelect .label").attr("data-selected-key");
		 var sSort = $("#SortSelect .label").attr("data-selected-key");

		 var fRandom = (oParams && oParams.fRandom == true)? true: false;
     
		 var fHidden = (aHiddenItems.length>0)? true: false;

		setConfig("language", sLang);
		setConfig("view", sView);
		//setConfig("schoolOpen", $("#SchoolCombobox").attr("data-content-open"));
		clearTimeout(oTimer);
		oTimer = setTimeout(function(){
			showFiltered({
				sName: sName,
				aRarity: aRarity,
				aTypes: aTypes,
				aSources: aSources,
				sLang: sLang,
				sView: sView,
				sSort: sSort,
				fHidden: fHidden,
        fRandom: fRandom
				});
		}, nTimerSeconds/4);
	}

	function createButtons() {
		var bHome = "<a href='/' class='bt flexChild' title='На главную страницу'><i class='fa fa-home'></i></a>";
		var bInfo = "<a href='#' class='bt flexChild' id='bInfo' title='Справка'><i class='fa fa-question-circle'></i></a>";
		var bPrint = "<a href='#' class='bt flexChild' id='bPrint' title='Распечатать'><i class='fa fa-print' aria-hidden='true'></i></a>";
		$(".p_side").append("<div class='mediaWidth flexParent'>" + bHome + bInfo + bPrint + "</div>");
	}
	function createCardWidthButtons() {
		var label = createLabel("Ширина карточек");
		var bHome = "<a href='#' class='bt flexChild cardWidthMin' title='Сделать уже'><i class='fa fa-caret-right' aria-hidden='true'></i> <i class='fa fa-caret-left' aria-hidden='true'></i></a>";
		var bInfo = "<a href='#' class='bt flexChild cardWidthNorm' title='Сделать нормальными'><i class='fa fa-square-o' aria-hidden='true'></i></a>";
		var bPrint = "<a href='#' class='bt flexChild cardWidthMax' title='Сделать шире'><i class='fa fa-caret-left' aria-hidden='true'></i> <i class='fa fa-caret-right' aria-hidden='true'></i></a>";
		$(".p_side").append("<div class='mediaWidth flexParent'>" + label + bHome + bInfo + bPrint + "</div>");
	}

	function createLabel(text) {
		return "<div class='filterLabel'>"+text+"</div>";
	}

	function createTypeCombobox(isOpen) {
		if(isOpen == undefined)
			isOpen = false;
		var s1=createComboBox(oTypes, {id: "TypeCombobox", title: "Тип", checkAll: false, isOpen: isOpen});
		$(".p_side").append("<div class='mediaWidth'>" + s1 + "</div>");
	}
	function createRarityCombobox(isOpen) {
		if(isOpen == undefined)
			isOpen = false;
		var s1=createComboBox(oRarity, {id: "RarityCombobox", title: "Редкость", checkAll: false, isOpen: isOpen});
		$(".p_side").append("<div class='mediaWidth'>" + s1 + "</div>");
	}
	function createSourceCombobox(isOpen) {
		if(isOpen == undefined)
			isOpen = false;
		var s1=createComboBox(oSources, {id: "SourceCombobox", title: "Источники", checkAll: false, isOpen: isOpen});
		$(".p_side").append("<div class='mediaWidth'>" + s1 + "</div>");

		// oSources.forEach(function(el) {
		// 	oSource[el.key] = el.en;
		// });
	}
	function createNameFilter() {
    var label = createLabel("Название");
		var oInput = createInput({id: "NameInput"});
    var bRandom = "<a href='/#random' class='bt flexChild'  id='bRandom' title='Случайная вещь'>🎲</a>";    
    var oLine = "<div style='display: flex'>"+oInput + bRandom+"</div>";
		$(".p_side").append("<div class='mediaWidth'>" + label + oLine + "</div>");
	}
  function createAutoSizeTextButton() {
		var label = createLabel("Размер текста");
		var bTextSize = "<a href='#' class='bt flexChild cardTestAutoSize' title='Автоподстройка размера текста на карточке'><i class='fa fa-text-height' aria-hidden='true'></i> Рассчитать </a>";
		$(".p_side").append("<div class='mediaWidth flexParent'>" + label + bTextSize + "</div>");
	}
	function createLangSelect(lang) {
		var src = [
			{
				name: "en",
				title: "English"
			},
			{
				name: "ru",
				title: "Русский"
			}
		];
		if(!lang)
			lang = "ru";
		var Select = createSelect(src, {id: "LangSelect", selected_key: lang, width: "100%"});
		var label = createLabel("Язык");
		$(".p_side").append("<div class='mediaWidth'>" + label + Select + "</div>");
	}
	function createCardViewSelect(selected) {
		var src = [
			{
				name: "card",
				title: "Карточки"
			},
			{
				name: "text",
				title: "Текст"
			}
		];
		if(!selected)
			selected = "card";
		var Select = createSelect(src, {id: "CardViewSelect", selected_key: selected, width: "100%"});
		var label = createLabel("Вид");
		$(".p_side").append("<div class='mediaWidth'>" + label + Select + "</div>");
	}
	function createSortSelect(selected) {
		var src = [
			{
				name: "rarity_alpha",
				title: "Редкости и алфавиту"
			},
			{
				name: "alpha",
				title: "Алфавиту"
			}
		];
		if(!selected)
			selected = "rarity_alpha";
		var Select = createSelect(src, {id: "SortSelect", selected_key: selected, width: "100%"});
		var label = createLabel("Сортировать по");
		$(".p_side").append("<div class='mediaWidth'>" + label + Select + "</div>");
	}

	function createHiddenItemsList(){
		if(aHiddenItems.length < 1){
			$("#HiddenItems").parent().remove();
			return;
		}
		if(!$("#HiddenItems").length>0){
			var label = createLabel("Скрытые предметы");
			$(".p_side").append("<div class='mediaWidth'>" + label + "<div id='HiddenItems'></div></div>");
		}
		var listHiddenItems = aHiddenItems.map(function(item){
			return "<a href='#' title='Вернуть на место' class='bUnhideItem' data-name='"+item.en+"'>"+item.ru +" ("+ item.en+") </a>";
			}).join(" ");

		var bReturnAll = "<a href='#' class='bReturnUnvisible'>Вернуть все обратно</a>";
		$("#HiddenItems").html(bReturnAll + listHiddenItems);
	}

	function createLockedItemsArea(){
    var sView = $("CardViewSelect label").attr("data-selected-key");
		var aLocked = [];
		for (var i in aLockedItems){
			aLocked.push(i);
		}
		var aResult = [];
		var l = aLocked.length;
		if(l>0){
			for (var i=0; i<allItems.length; i++) {
				for (var j=0; j< l; j++) {
					if(allItems[i].en.name == aLocked[j]) {
						aResult.push(allItems[i]);
						aResult[aResult.length-1].lang = aLockedItems[aLocked[j]].lang;
						//aResult[aResult.length-1].class = aLockedItems[aLocked[j]].class;
					}
				}
			}

			if($("#lockedItemsArea").length<1){
				$(".p_cont").prepend("<div id='lockedItemsArea'><span class='bUnlockAll'>Открепить все</span><span class='topHeader'></span><div class='content row'></div><span class='bottomHeader'></span></div>");

			}
			$("#lockedItemsArea .content").html(aResult.sort(function(a, b) {
				if(a.lang && b.lang) {
					if (a[a.lang].level+a[a.lang].name.toLowerCase().trim() < b[b.lang].level+b[b.lang].name.toLowerCase().trim() )
						return -1;
					if (a[a.lang].level+a[a.lang].name.toLowerCase().trim() > b[b.lang].level+b[b.lang].name.toLowerCase().trim() )
						return 1;
				}
				return 0
			}).map(function(el){return createCard(el, el.lang, true, sView)}));

			//COUNTER
			$("#lockedItemsArea .topHeader").html("("+l+")");
			$(".ItemContainer").addClass("noprint");
		} else {
			$("#lockedItemsArea").remove();
			$(".ItemContainer").removeClass("noprint");
		}
	}

	function createSidebar() {
		var lang = getConfig("language");
		var view = getConfig("view");
		createButtons();
		createNameFilter();
		createTypeCombobox();
		 createRarityCombobox();
		 createSourceCombobox();
		 createCardWidthButtons();
		 createAutoSizeTextButton();
		 createLangSelect(lang);
		 createCardViewSelect(view);
		 createSortSelect();

		$(".p_side").fadeIn();
	}


	/// handlers

	// close Mod Win
	$("body").on("click", ".bCloseInfoWin", function() {
		$("#dbg").fadeOut();
		hideInfoWin();
	});

	// hide DBG
	$("body").on("click", "#dbg, .mod_win_wrapper", function() {
		$("#dbg").fadeOut();
		hideInfoWin();
	});
	$("body").on("click", ".mod_win", function() {
		return false;
	});

	//custom Select
	$("body").on("click", ".customSelect .label", function() {
	  if($(this).next(".list").css('display') == 'none') {
		$(this).parent().focus();
	  }
	  $(this).next(".list").fadeToggle();
	});
	$("body").on("focusout", ".customSelect", function() {
	  $(this).find(".list").fadeOut();
	});
	$("body").on("click", ".customSelect .option", function() {
	  var key = $(this).attr("data-key");
	  var text = $(this).html().replace("<br>", " | ");
	  $(this).closest(".customSelect").find(".label").attr("data-selected-key", key).text(text);
	  $(this).parent("ul").fadeOut();
	  $(this).closest(".customSelect").focusout();
	  $(this).closest(".customSelect").blur();
	  //$("#toFocus").focus();
	});

	// custom Combobox
	$("body").on('click', ".combo_box_title, .combo_box_arrow", function(){
		var el = $(this).closest(".combo_box").find(".combo_box_content");
		if(el.is(":visible"))
		{
			el.slideUp();
			el.next(".combo_box_arrow").find(".arr_down").show();
			el.next(".combo_box_arrow").find(".arr_up").hide();
			el.parent().attr("data-content-open", false);
		}
		else
		{
			el.slideDown();
			el.next(".combo_box_arrow").find(".arr_down").hide();
			el.next(".combo_box_arrow").find(".arr_up").show();
			el.parent().attr("data-content-open", true);
		}
	});// get item

	function onSelectItemPress(src) {
		var d_root='', d_parent='', trig=true;

		var attrFor = src.attr("for"); // $("input#"+attrFor)
		var oComboBox = src.closest(".combo_box");
		var sComboBoxId = oComboBox.attr("id");
		d_root = $("#"+sComboBoxId+" input#"+attrFor).attr("data-root");
		d_parent = $("#"+sComboBoxId+" input#"+attrFor).attr("data-parent");
		if($("#"+sComboBoxId+" input#"+attrFor).prop("checked"))
			{
			trig=false;
			}
		$("#"+sComboBoxId+" input#"+attrFor).prop("checked", trig);
		/**/
		if(d_root!='' && d_root!=undefined) {
			$("#"+sComboBoxId+" input[type=checkbox][data-parent="+d_root+"]").each(function(){
				$(this).prop( "checked", trig );
			});
		}
		/**/
		if(d_parent!='' && d_parent!=undefined && trig==false) {
			$("#"+sComboBoxId+" input[type=checkbox][data-root="+d_parent+"]").prop( "checked", trig);

		}


		function make_val(ex, ad, dp){
			var ret = '';
			if(dp!=undefined) {
				ad = dp + " " + ad;
			}
			if(ex!=undefined && ex!=""){
				ret = ex+", "+ad;
			} else {
				ret = ad;
			}
			return ret;
		}

		/**/
		var d_root='';
		var before_root='';
		var d_parent='';
		var txt='';
		var value='';
		var title=''
		$("#"+sComboBoxId+" .combo_box_title").html("");
		$("#"+sComboBoxId+" .combo_box_title").attr('data-val',"");
		$("#"+sComboBoxId+" input[type=checkbox]:checked").each(function(){
			d_root='';
			d_parent='';
			d_parent=$(this).attr("data-parent");
			d_root=$(this).attr("data-root");

			title=$("#"+sComboBoxId+" .combo_box_title").html();
			value=$("#"+sComboBoxId+" .combo_box_title").attr('data-val');

			if(title!="" && title.charAt(title.length-1)!="(") {
				$("#"+sComboBoxId+" .combo_box_title").append(", ");
			}
			// обычный пункт
			if(d_parent==undefined && d_root==undefined)
				{
				txt = $(this).next("label").html().replace("<br>", " | ");
				title_value = $("#"+sComboBoxId+" .combo_box_title").attr("data-val");
				value = $(this).attr('value');
				dp = $(this).attr('data-parent');
				value = make_val(title_value, value, dp);
				//$(".combo_box_title").append(txt).attr("data-val", value);
				$("#"+sComboBoxId+" .combo_box_title").attr("data-val", value);
				}
			// если root
			if(d_root!=undefined)
				{
					// если есть отмеченные потомки
				if($("#"+sComboBoxId+" input[type=checkbox][data-parent="+d_root+"]:checked").length>0)
					{
					txt=$(this).next("label").text()+" (";
					//$(".combo_box_title").append(txt);

					before_root=d_root;
					}
				}
			// если parent
			if(d_parent!=undefined)
				{

					txt=$(this).next("label").text();
					title_value = $("#"+sComboBoxId+" .combo_box_title").attr("data-val");
					value = $(this).attr('value');
					dp = $(this).attr('data-parent');
					value = make_val(title_value, value, dp);
					var ind = $("#"+sComboBoxId+" input[type=checkbox][data-parent="+d_parent+"").index(this);
					if(ind==$("#"+sComboBoxId+" input[type=checkbox][data-parent="+d_parent+"").length-1 && d_parent==before_root){
						txt+=")";
					}

					$("#"+sComboBoxId+" .combo_box_title").append(txt).attr("data-val", value);
				}
			});

			if($("#"+sComboBoxId+" .combo_box_title").html()=='')
				$("#"+sComboBoxId+" .combo_box_title").html(src.closest(".combo_box").attr('data-text'));

		/*/
		var bg = $("#selector").find("input:checked + label[data-bg] ").attr("data-bg");
		var leng = $("#selector").find("input:checked + label[data-bg] ").length;
		$("#selector").find("input:checked + label[data-bg] ").each(function(){
			if ($(this).attr("data-bg") != bg){
				leng = 0;
			}
		});
		if(bg && leng>0) {
			$("body").attr("class", bg);
		} else {
			$("body").attr("class", "");
		}
		/**/

		// bg /
		return false;
	}

	function deselectAllCards() {
		$(".ItemCard").removeClass("selected");
	}
	$("body").on('click', ".combo_box input", function(event){
		return false;
	});

	$("body").on('click', ".combo_box label", function(){
		onSelectItemPress($(this));
		return false;
	});

	// custom Input
	$("body").on('click', ".customInput .cross", function(){
		$(this).parent().find("input").val("");
		$(this).parent().focusout();
	});

	// filters

	// name select
	$("body").on('focusout', "#NameInput", function(){
		clearTimeout(oTimer);
		oTimer = setTimeout(function(){
			updateHash();
			filterItems();
		}, nTimerSeconds);
	});
	$("body").on('keyup', "#NameInput input", function(){
		clearTimeout(oTimer);
		oTimer = setTimeout(function(){
			updateHash();
			filterItems();
		}, nTimerSeconds*3);
	});

	// tipe combobox
	$("body").on('click', "#TypeCombobox label", function(){
		clearTimeout(oTimer);
		oTimer = setTimeout(function(){
			updateHash();
			filterItems();
		}, nTimerSeconds);
	});
	$("body").on('click', "#TypeCombobox .combo_box_title, #TypeCombobox .combo_box_arrow", function(){
		setConfig("typeOpen", $("#TypeCombobox").attr("data-content-open"));
	});

	// rarity combobox
	$("body").on('click', "#RarityCombobox label", function(){
		clearTimeout(oTimer);
		oTimer = setTimeout(function(){
			updateHash();
			filterItems();
		}, nTimerSeconds);
	});
	$("body").on('click', "#RarityCombobox .combo_box_title, #RarityCombobox .combo_box_arrow", function(){
		setConfig("rarityOpen", $("#RarityCombobox").attr("data-content-open"));
	});

	// source combobox
	$("body").on('click', "#SourceCombobox label", function(){
		clearTimeout(oTimer);
		oTimer = setTimeout(function(){
			updateHash();
			filterItems();
		}, nTimerSeconds);
	});
	$("body").on('click', "#SourceCombobox .combo_box_title, #SourceCombobox .combo_box_arrow", function(){
		setConfig("sourceOpen", $("#SourceCombobox").attr("data-content-open"));
	});

	// lang select
	$("body").on('focusout', "#LangSelect", function(){
		clearTimeout(oTimer);
		oTimer = setTimeout(function(){
			updateHash();
			filterItems();
		}, nTimerSeconds);
	});

	// sort select
	$("body").on('focusout', "#SortSelect", function(){
		clearTimeout(oTimer);
		oTimer = setTimeout(function(){
			updateHash();
			filterItems();
		}, nTimerSeconds);
	});
	// card view select
	$("body").on('focusout', "#CardViewSelect", function(){
		clearTimeout(oTimer);
		oTimer = setTimeout(function(){
			updateHash();
			filterItems();
		}, nTimerSeconds);
	});

	// show all Items
	$("body").on('click', "#showAllItems", function(){
		setConfig("infoIsShown", true);
    $("#bInfo").addClass("blink");
		filterItems();
		hideInfoWin();
		hideDBG();
		return false;
	});

	//info_textbInfo
	$("body").on('click', "#bInfo", function(){
		var sInfo = $("#info_text").html();
		showDBG();
		showInfoWin(sInfo);
		return false;
	});


	//hide Items
	$("body").on('click', ".bHideItem", function(){
		var sName, sNameRu;

		var nSelectedCards = $(".ItemCard.selected").length;
		if(nSelectedCards > 0) {
			var oButtonLock = $(this);
			$(".ItemCard.selected").each(function() {
				sName = $(this).closest(".cardContainer").attr("data-name");
				sNameRu = $(this).closest(".cardContainer").attr("data-name-ru");

				oButtonLock.hide();
				// update hidden Items array
				aHiddenItems.push({en: sName, ru: sNameRu});
			});
		} else {
			sName = $(this).closest(".cardContainer").attr("data-name");
			sNameRu = $(this).closest(".cardContainer").attr("data-name-ru");

			$(this).hide();
			// update hidden Items array
			aHiddenItems.push({en: sName, ru: sNameRu});
		}

		// show list of hidden Items
		createHiddenItemsList();

		// show Items without hidden
		filterItems({fHidden: true});
	})
	// unhide Items
	$("body").on('click', ".bUnhideItem", function(){
		var sName = $(this).attr("data-name")
		// update hidden Items array
		aHiddenItems.splice(aHiddenItems.map(function(el){return el.en}).indexOf(sName), 1);

		// show list of hidden Items
		createHiddenItemsList();

		// show Items without hidden
		filterItems({fHidden: true});

		return false;
	})
	$("body").on("click", ".bReturnUnvisible", function() {
		aHiddenItems = [];// show list of hidden Items
		createHiddenItemsList();

		// show Items without hidden
		filterItems({fHidden: true});

		return false;
	});

	// lock Items
	$("body").on('click', ".bLockItem", function(){
		var sName, sNameRu, sLang;

		var nSelectedCards = $(".ItemCard.selected").length;
		if(nSelectedCards > 0) {
			$(".ItemCard.selected").each(function() {
				sName = $(this).closest(".cardContainer").attr("data-name");
				sNameRu = $(this).closest(".cardContainer").attr("data-name-ru");
				sLang = $(this).closest(".cardContainer").attr("data-lang");
				fText = $(this).closest(".cardContainer").hasClass("textView");

				aLockedItems[sName] = {
					ru: sNameRu,
					lang: sLang,
          textView: fText
					};
			});
		} else {
			sName = $(this).closest(".cardContainer").attr("data-name");
			sNameRu = $(this).closest(".cardContainer").attr("data-name-ru");
			sLang = $(this).closest(".cardContainer").attr("data-lang");
			fText = $(this).closest(".cardContainer").hasClass("textView");

			aLockedItems[sName] = {
				ru: sNameRu,
				lang: sLang,
        textView: fText
				};
		}

		// show locked
		createLockedItemsArea();
		deselectAllCards();
	})

	// unlock Items
	$("body").on('click', ".bUnlockItem", function(){
		var sName;

		var nSelectedCards = $(".ItemCard.selected").length;
		if(nSelectedCards > 0) {
			$(".ItemCard.selected").each(function() {
				sName = $(this).closest(".cardContainer").attr("data-name");
				delete aLockedItems[sName];
			});
		} else {
			sName = $(this).closest(".cardContainer").attr("data-name");
			delete aLockedItems[sName];
		}

		// show locked
		createLockedItemsArea();
		deselectAllCards();
	})
	$("body").on('click', "#lockedItemsArea .topHeader", function(){
		$(this).next(".content").slideToggle();
		$(this).next(".content").next(".bottomHeader").fadeToggle();
	});
	$("body").on('click', ".bUnlockAll", function(){
		aLockedItems = [];
		// show locked
		createLockedItemsArea();
	});

	$("body").on('click', "#bPrint", function(){
		window.print();

		return false;
	});

	// text size
	$("body").on('click', ".textMin", function() {
		var f_s=$(this).parent().parent().find(".text").css("font-size");
		f_s=f_s.substring(0, f_s.length - 1);
		f_s=f_s.substring(0, f_s.length - 1);
		//console.log(f_s);

		if(f_s>6)
		 f_s--;
		//console.log(f_s);
		var sFontSize = f_s+"px";
		var sLineHeight = f_s-1+"px";
	    $(this).parent().parent().find(".text").css({"font-size": sFontSize, "line-height": sLineHeight});

		$(".ItemCard.selected").each(function() {
			$(this).find(".text").css({"font-size": sFontSize, "line-height": sLineHeight});
		});

		return false;
	});
	$("body").on('click', ".textMax", function() {
		var f_s=$(this).parent().parent().find(".text").css("font-size");
		f_s=f_s.substring(0, f_s.length - 1);
		f_s=f_s.substring(0, f_s.length - 1);
		if(f_s<20)
		 f_s++;
		//console.log(f_s);
		var sFontSize = f_s+"px";
		var sLineHeight = f_s-1+"px";
	    $(this).parent().parent().find(".text").css({"font-size": sFontSize, "line-height": sLineHeight});

		$(".ItemCard.selected").each(function() {
			$(this).find(".text").css({"font-size": sFontSize, "line-height": sLineHeight});
		});
		return false;
	});

	// card width
	$("body").on("click", ".cardWidthMin", function() {
		var width;
		var nSelectedCards = $(".ItemCard.selected").length;
		if(nSelectedCards > 0) {
			$(".ItemCard.selected").each(function() {
				width = $(this).parent().width();
				width = width-20+"px";
				$(this).parent().width(width);
			});
		} else{
			width = $(".cardContainer").eq(0).width();
			width = width-20+"px";
			$('.cardContainer').width(width);
			setConfig("cardWidth", width);
		}

	});
	$("body").on("click", ".cardWidthMax", function() {
		var width;
		var nSelectedCards = $(".ItemCard.selected").length;
		if(nSelectedCards > 0) {
			$(".ItemCard.selected").each(function() {
				width = $(this).parent().width();
				width = (width+20)+"px";
				$(this).parent().width(width);
			});
		} else {
			width = $(".cardContainer").eq(0).width();
			width = (width+20)+"px";
			$('.cardContainer').width(width);
			setConfig("cardWidth", width);
		}
	});
	$("body").on("click", ".cardWidthNorm", function() {
		var width = "2.5in";
		var nSelectedCards = $(".ItemCard.selected").length;
		if(nSelectedCards > 0) {
			$(".ItemCard.selected").each(function() {
				$(this).parent().width(width);
			});
		} else {
			$('.cardContainer').width(width);
			setConfig("cardWidth", width);
		}
	});

  // autoszie Text in the cards
	$("body").on("click", ".cardTestAutoSize", function() {
		var nSelectedCards = $(".ItemCard.selected").length;
		if(nSelectedCards > 0) {
			$(".ItemCard.selected").each(function() {
				var f_s=$(this).find(".info").css("font-size");
				f_s=f_s.substring(0, f_s.length - 2);
				while (f_s > 7 && $(this).find(".info")[0].scrollWidth < $(this).find(".info").innerWidth()) {
					f_s-=0.3;

					var sFontSize = f_s+"px";
					var sLineHeight = f_s-1+"px";
					$(this).find(".info").css({"font-size": sFontSize, "line-height": sLineHeight});
				}
			});
		} else {
			$(".ItemCard").each(function() {
				var f_s=$(this).find(".info").css("font-size");
				f_s=f_s.substring(0, f_s.length - 2);
				while (f_s > 7 && $(this).find(".info")[0].scrollWidth < $(this).find(".info").innerWidth()) {
					 f_s-=0.3;
					//console.log(f_s);
					var sFontSize = f_s+"px";
					var sLineHeight = f_s-1+"px";
					$(this).find(".info").css({"font-size": sFontSize, "line-height": sLineHeight});
				}
			});
		}
    return false;
	});

	$(document).keydown(function(event){
		// CTRL pressed
		if(event.which=="17") {
			fCtrlIsPressed = true;
		}

		// A pressed
		if(event.which=="65" && fCtrlIsPressed) {
			if($(".ItemCard.selected").length == $(".ItemCard").length) {
				// deselect all
				$(".ItemCard").removeClass("selected");
			} else {
				// select all
				$(".ItemCard").addClass("selected");
			}
			//return false;
		}
	});

	$(document).keyup(function(){
		fCtrlIsPressed = false;
	});

	// card select/deselect
	$("body").on("click", ".ItemCard", function() {
		if(fCtrlIsPressed)
			$(this).toggleClass("selected");
	});
  $("body").on("dblclick", ".ItemCard", function() {
		$(this).toggleClass("selected");
		clearSelection();
		return false;
	});
	$("body").on("taphold", ".ItemCard", function() {
		$(this).toggleClass("selected");
	});

  // show/hide card info
  $("body").on("click", ".sf_text", function(){
    // var oInfo =  $(this).parent().find(".info");
    
    // if(oInfo.hasClass("show")) {// hide      
      // oInfo.removeClass("show");
    // } else {// show      
      // oInfo.addClass("show");
    // }
    
    var sInfo = $(this).parent().find(".text").html();
    var sName = $(this).parent().find("h1").html();
		showDBG();
		showInfoWin("<h1>"+sName+"</h1>"+sInfo);
		return false;
    
    
    //return false;
  });

  // get random item
  $("body").on("click", "#bRandom", function(){
    //filterItems({fRandom: true}); // filteredItems
    // if(!/&random\b/.test(window.location.hash)) {
      // var sHash = window.location.hash + "&random";// aFilters.join("&");
      // window.location.hash = sHash;
    // }
    //$("#NameInput input").val("");
    //var sName = filteredItems[0, randd(0, filteredItems.length-1)].en.name.toLowerCase();
    //$("#NameInput input").val(sName).focusout();
    //updateHash();
    $("#NameInput input").val("");
    getHash({fRandom: true});
    return false;
  });

// url filters
	function updateHash() {
		// text
		var sName = $("#NameInput input").val();

		//combobox
		var aSources = $("#SourceCombobox .combo_box_title").attr("data-val");
			if(aSources) aSources = aSources.split(",").map(function(item){return item.trim()});
		var aTypes = $("#TypeCombobox .combo_box_title").attr("data-val");
			if(aTypes) aTypes = aTypes.split(",").map(function(item){return item.trim()});
		var aRarities = $("#RarityCombobox .combo_box_title").attr("data-val");
			if(aRarities) aRarities = aRarities.split(",").map(function(item){return item.trim()});
		// select
		var sLang = $("#LangSelect .label").attr("data-selected-key");
		var sCardView = $("#CardViewSelect .label").attr("data-selected-key");
		var sSort = $("#SortSelect .label").attr("data-selected-key");

		//#q=Item_name&ls=0&le=9
		var aFilters = [];
		if(sName && sName.length>0) {
			aFilters.push("q="+sName.replace(/\s+/g, "_"));
		}
		if(aTypes && aTypes.length>0 && $("#TypeCombobox .combo_box_content input").length > aTypes.length) {
			aFilters.push("type="+aTypes.join(",").replace(/\s+/g, "_"));
		}
		if(aSources && aSources.length>0 && $("#SourceCombobox .combo_box_content input").length > aSources.length) {
			aFilters.push("source="+aSources.join(",").replace(/\s+/g, "_"));
		}
		if(aRarities && aRarities.length>0 && $("#RarityCombobox .combo_box_content input").length > aRarities.length) {
			aFilters.push("rarity="+aRarities.join(",").replace(/\s+/g, "_"));
		}
		if(sLang && sLang.length > 0 && sLang != "ru") {
			aFilters.push("lang="+sLang.replace(/\s+/g, "_"));
		}
		if(sCardView && sCardView.length > 0 && sCardView != "card") {
			aFilters.push("view="+sCardView.replace(/\s+/g, "_"));
		}
		if(sSort && sSort.length > 0 && sSort != "rarity_alpha") {
			aFilters.push("sort="+sSort.replace(/\s+/g, "_"));
		}

		if(aFilters.length>0) {
			var sHash = aFilters.join("&");
			window.location.hash = sHash;
		} else {
			removeHash();
		}
	}
  function getHash(oParams){
    $('html, body').animate({scrollTop:0}, 'fast');

    var sHash = window.location.hash.slice(1); // /archive#q=Item_name
    sHash = decodeURIComponent(sHash);
    if(oParams || sHash && !/[^А-Яа-яЁё\w\d\/&\[\]?|,_=-]/.test(sHash)) {
      var sName = (oParams && oParams.fRandom==true)? "" :sHash.match(/\bq=([А-Яа-яЁё\/\w\d_]+)/);

      var sLang = sHash.match(/\blang=([\w]+)/);
      var sView = sHash.match(/\bview=([\w]+)/);
      var sSort = sHash.match(/\bsort=([\w_]+)/);

      var sRarities = sHash.match(/\brarity=([\w,]+)/);
      var sTypes = sHash.match(/\btype=([\w,]+)/);
      var sSources = sHash.match(/\bsource=([\w,_]+)/);
      
      var fRandom = (oParams && oParams.fRandom==true)? true : false;;

      if(sName && sName[1]) {
      	$("#NameInput input").val(sName[1].replace(/[_]+/g," "));
      }

      if(sLang && sLang[1]) {
      	$("#LangSelect .label").attr("data-selected-key", sLang[1]).html($("#LangSelect li[data-key='"+sLang[1]+"']").text().replace(/[_]+/g," "));
      }
      if(sView && sView[1]) {
      	$("#CardViewSelect .label").attr("data-selected-key", sView[1]).html($("#CardViewSelect li[data-key='"+sView[1]+"']").text().replace(/[_]+/g," "));
      }
      if(sSort && sSort[1]) {
      	$("#SortSelect .label").attr("data-selected-key", sSort[1]).html($("#SortSelect li[data-key='"+sSort[1]+"']").text().replace(/[_]+/g," "));
      }

      if(sSources && sSources[1]) {
      	var aSources = sSources[1].replace("_", " ").split(",");

      	$("#SourceCombobox .combo_box_content input[type='checkbox']").each(function(){
      		if(aSources.indexOf($(this).val())>-1) {
      			$(this).prop('checked', true);
      		} else {
      			$(this).prop('checked', false);
      		}
      	});
      	$("#SourceCombobox .combo_box_title").attr("data-val", sSources[1].replace("_", " "))
      }
      if(sRarities && sRarities[1]) {
      	var aRarities = sRarities[1].replace("_", " ").split(",");

      	$("#RarityCombobox .combo_box_content input[type='checkbox']").each(function(){
      		if(aRarities.indexOf($(this).val())>-1) {
      			$(this).prop('checked', true);
      		} else {
      			$(this).prop('checked', false);
      		}
      	});
      	$("#RarityCombobox .combo_box_title").attr("data-val", sRarities[1].replace("_", " "))
      }
      if(sTypes && sTypes[1]) {
      	var aTypes = sTypes[1].replace("_", " ").split(",");
        ////$("#TypeCombobox .combo_box_title").attr("data-val")
      	$("#TypeCombobox .combo_box_content input[type='checkbox']").each(function(){
      		if(aTypes.indexOf($(this).val())>-1) {
      			$(this).prop('checked', true);
      		} else {
      			$(this).prop('checked', false);
      		}
      	});
      	$("#TypeCombobox .combo_box_title").attr("data-val", sTypes[1].replace("_", " "))
      }

      // if(sLang && sLang[1]) {
      // 	$("#LangSelect .label").attr("data-selected-key", sLang[1]).html($("#LangSelect li[data-key='"+sLang[1]+"']").html().replace("<br>", " | "));
      // }
    } else {
      removeHash();
      //hideClerFilter();
    }
    //$("body").css("border-top", "1px solid red");
    filterItems({fRandom: fRandom});
  }

  function removeHash() {
    history.pushState("", document.title, window.location.pathname + window.location.search);
    return false;
  }
  //window.onhashchange = getHash;

// /url filters


	$.when(createSidebar()).done(
		function(){
      //$("body").css("border-top", "1px solid blue");
			if(window.location.hash.length>0 || getConfig("infoIsShown")==true){
				getHash();
			}
			$("#showAllItems").slideDown();
			// if(getViewPortSize("width") > 600){
				// if(getConfig("infoIsShown")==true)
					// getHash();
					// filterItems();
			// } else{
        // setTimeout(getHash, 1000);
        // getHash();
      // }
		}
	);
};
