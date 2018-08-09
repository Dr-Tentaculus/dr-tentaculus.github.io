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
  var aHistoryData = [];

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

	/// handlers

	// close Mod Win
	$("body").on("click", ".bCloseInfoWin", function() {
		$("#dbg").fadeOut();
    
		hideInfoWin();
    hideAddWin();
    $("body").css("overflow-y", "auto");
	});

	// hide DBG
	$("body").on("click", "#dbg, .mod_win_wrapper", function() {
		$("#dbg").fadeOut();
		hideInfoWin();
    $("body").css("overflow-y", "auto");
	});
	$("body").on("click", ".mod_win", function() {
		return false;
	});
  function getImages(sIco) {
    var aIcos = [];
    for(var i=0; i<16; i++) {
      var sSelected = (sIco=="ico_"+i)? " selected" : "";
      var oItem = "<li><div class='ico_list_item "+sSelected+"' data-ico='ico_"+i+"'></div></li>";
      aIcos.push(oItem);
    }
    for(var i=0; i<16; i++) {
      var sSelected = (sIco=="ico_02_"+i)? " selected" : "";
      var oItem = "<li><div class='ico_list_item "+sSelected+"' data-ico='ico_02_"+i+"'></div></li>";
      aIcos.push(oItem);
    }
    for(var i=0; i<16; i++) {
      var sSelected = (sIco=="ico_04_"+i)? " selected" : "";
      var oItem = "<li><div class='ico_list_item "+sSelected+"' data-ico='ico_04_"+i+"'></div></li>";
      aIcos.push(oItem);
    }
    for(var i=0; i<16; i++) {
      var sSelected = (sIco=="ico_03_"+i)? " selected" : "";
      var oItem = "<li><div class='ico_list_item "+sSelected+"' data-ico='ico_03_"+i+"'></div></li>";
      aIcos.push(oItem);
    }
    for(var i=0; i<16; i++) {
      var sSelected = (sIco=="ico_05_"+i)? " selected" : "";
      var oItem = "<li><div class='ico_list_item "+sSelected+"' data-ico='ico_05_"+i+"'></div></li>";
      aIcos.push(oItem);
    }
    var sList = "<ul class='ico_list' id='sWinIco' >"+aIcos.join("")+"</ul>";
    return sList;
  }
  function getColors(sColor) {
    var aColors = [];
    for(var i=0; i<12; i++) {
      //var n = (i<10)? "0"+i: i;
      var sSelected = (sColor=="color_"+i)? " selected" : "";
      var oItem = "<li><div class='color_list_item "+sSelected+"' data-color='color_"+i+"'></div></li>";
      aColors.push(oItem);
    }
    var sList = "<ul class='color_list' id='sWinColor' >"+aColors.join("")+"</ul>";
    return sList;
  }
  function showAddWin(oData, nIndex){
    showDBG();
    nIndex = (nIndex != undefined)? " data-index='"+nIndex+"'" : "";
    var sName, sInitiative, sIco, sColor, sID;
      sName = oData? oData.name : "";
      sInitiative = oData? oData.initiative : "";
      sIco = oData? oData.ico : "";
      sColor = oData? oData.color : "";
      sID = oData? oData.id : "";
      // <input id='sWinName' placeholder='Текст (Имя или еще что)' value='"+sName+"'>
    var colorSelect = getColors(sColor);//+"<input type='color'>";
    var sForm = "<div class='tabContent' data-tabContent='edit'><div><textarea id='sWinName' data-id='"+sID+"' style='width: 100%;' placeholder='Текст (Имя или еще что)' rows='5'>"+sName+"</textarea></div>\
    <div><input id='sWinInitiative' style='width: 100%;' type='number' placeholder='Инициатива (по умолчаниию \"0\")' value='"+sInitiative+"'></div>\
    <div>"+colorSelect+"</div><div class='scrollable'>"+getImages(sIco)+"</div></div>"; // <label>Изображение: </label>"
    $(".mod_win_wrapper").remove();
		var bCross = "<span class='bCloseInfoWin'>×</span>";
    var sTabName = oData? "Редактировать" : "Добавить";
    var oTop = "<div class='tabs'><span class='tab selected' data-tab='edit'>"+sTabName+"</span> <span class='tab'  data-tab='history'>Недавние</span> <span class='separator'></span> "+bCross+"</div>"
    var sButton = oData?"<button class='bApplay'>Применить</button>":"<button class='bAdd'>Добавить</button>";
    oHistory = getHistoryList();
		$("body").append("<div class='mod_win_wrapper' "+nIndex+"><div class='mod_win'>"+oTop+"<div class='modWinCont'>"+sForm+oHistory+"</div><div>"+sButton+"</div></div></div>");
    $("body").css("overflow-y", "hidden");
    
    if($(".ico_list .selected").length < 1) {
      $(".ico_list .ico_list_item").eq(0).addClass("selected");
    }
    if($(".color_list .selected").length < 1) {
      $(".color_list .color_list_item").eq(0).addClass("selected");
    }
    
		$(".mod_win_wrapper").fadeIn();
  }
  function getHistoryList(){
    var aHistory = [], oHistory;
    aHistoryData.forEach(item => {
      var oHistoryData = {
        name: item.name,
        initiative: item.initiative,
        ico: item.ico,
        color: item.color,
        id: item.id
      };
      var oItem = "<li class='place'>"+
        getItemTemplate(oHistoryData)+
      "</li>";
      aHistory.push(oItem);
    });
    if (aHistory.length<1) {
      aHistory.push("<li class='empty'>Тут пока ничего нет.</li>");
    }
    oHistory = "<ul id='sWinHistory' data-tabContent='history' class='tabContent' style='display: none;'>"+aHistory.join("")+"</ul>";
    return oHistory;
  }
  function hideAddWin(){
    $(".mod_win_wrapper").fadeOut(400, function(){
      $(".mod_win_wrapper").remove();
    });
    hideDBG();
  }

  function getItemData(nIndex, oParam){
     if(nIndex == undefined) 
       nIndex = 0;
    var sParentSelector = ".wrap";
    if(oParam) {
      if(oParam.fromHistory) {
        sParentSelector = "#sWinHistory"
      }
    }
    var oItem = $(sParentSelector+" .place").eq(nIndex);
    var oData = {};
    oData.name = oItem.find(".name").text();
    oData.initiative = oItem.find(".initiative").text();
    oData.ico = oItem.find(".ico").attr('data-ico');
    oData.color = oItem.find(".ico_bord").attr('data-color');
    oData.id = oItem.find(".name").attr('data-id');
    
    return oData;
  }

  function getSelectedItemData(){
    var nIndex = 0;
    var oItem = $("#selectedOne .i_item").eq(nIndex);
    var oData = {};
    oData.name = oItem.find(".name").text();
    oData.initiative = oItem.find(".initiative").text();
    oData.ico = oItem.find(".ico").attr('data-ico');
    oData.color = oItem.find(".ico_bord").attr('data-color');
    
    return oData;
  }
  function getItemTemplate(oData){
    if(oData){
      var sIco = oData.ico;
      var sColor = oData.color;
      var nInitiative = oData.initiative;
      var sName = oData.name;
      var sID = oData.id;
      var oItem = "<div class='i_item'>\
          <div class='ico_bord' data-color='"+sColor+"'>\
            <div class='ico' data-ico='"+sIco+"'></div>\
            <div class='initiative'>"+nInitiative+"</div>\
          </div>\
          <div class='info'>\
            <div class='minus' title='Убрать'>-</div>\
            <div class='name' data-id='"+sID+"'>"+sName+"</div>\
          </div>\
        </div>";
      return oItem;
    }
  }
  function addItem(oData, nIndex){
    if(oData && oData.ico){
      if(nIndex == undefined) 
        nIndex = $("#allOnes .place").length;
      // var sIco = oData.ico;
      // var sColor = oData.color;
      // var nInitiative = oData.initiative;
      // var sName = oData.name;
      // var sID = oData.id;
      var oItem = "<li class='place' style='display: none'>"+
        getItemTemplate(oData)+
      "</li>";
      if($("#allOnes .place").length>0){
        //var nI = (nIndex-1 <0)? 0 :nIndex-1;
        if(nIndex-1 <0) {
          $("#allOnes .place").eq(0).before(oItem);
          $("#allOnes .place").eq(0).slideDown();
        } else {
          $("#allOnes .place").eq(nIndex-1).after(oItem);
          $("#allOnes .place").eq(nIndex).slideDown();
        }
      } else {
        $("#allOnes").append(oItem);
        $("#allOnes .place").last().slideDown();
      }
    }
  }
  function setItem(oData, nIndex){
    if(nIndex == undefined) 
      nIndex = $("#allOnes li").length;
    var sIco = oData.ico;
    var sColor = oData.color;
    var nInitiative = oData.initiative;
    var sName = oData.name;
    var sID = oData.id;
    
    $(".place").eq(nIndex).find(".ico_bord").attr('data-color', sColor);
    $(".place").eq(nIndex).find(".ico").attr('data-ico', sIco);
    $(".place").eq(nIndex).find(".initiative").text(nInitiative);
    $(".place").eq(nIndex).find(".name").text(sName).attr('data-id', sID);
  }
  function updateSelected(oData){
    var oDef = $.Deferred();
    var oDef1 = $.Deferred();
    var oDef2 = $.Deferred();
    if(oData){
    var oItem = "<div class='place' style='display: none'>"+getItemTemplate(oData)+"</div>";
    $("#selectedOne").append(oItem);
    if($("#selectedOne").find(".place").length > 1) {
      $("#selectedOne").find(".place").eq(0).slideUp(400, function(){
        $("#selectedOne").find(".place").eq(0).remove();
        oDef1.resolve();
      });
      $("#selectedOne").find(".place").eq(1).slideDown(400, function(){
        $("#selectedOne").find(".place").eq(1).css('height', 'auto');
        oDef2.resolve();
      });
    } else {
      $("#selectedOne").find(".place").eq(0).slideDown(400, function(){
        //oDef.resolve();
        oDef1.resolve();
        oDef2.resolve();
      });
    }
    } else {
    	oDef1.resolve();
			oDef2.resolve();  
    }
    
    $.when(oDef1, oDef2).done(function(){
      oDef.resolve();
    });
    return oDef;
  }
	function chooseNext(){
    if($("#allOnes .place").length > 0){
      var oItem = $("#allOnes  .place").eq(0);
      var oData = getSelectedItemData(0);
      var nIndex = ($("#selectedOne .place").length > 0)? 1: 0;
      var oNewData = getItemData(nIndex);
      
      var oDef1 = $.Deferred();
      var oDef2 = $.Deferred();
      // initiative rotation
			if(oItem){
				oItem.slideUp(400, function(){
					oItem.remove();
					oDef1.resolve();      
				});
			} else {
				oDef1.resolve(); 
			}
      addItem(oData);
      $("#allOnes  .place").eq(-1).slideDown(400, function(){
        $("#allOnes  .place").eq(-1).css('height', 'auto');
        oDef2.resolve();  
      });
      var oDef3 = updateSelected(oNewData);
      
      $.when(oDef1, oDef2, oDef3).done(
        function() {
          saveData();
          makeDraggable();
          setSeparators();
        }
      )
    } else {
			alert("Сначала добавьте кого-нибудь через 'плюсик'");
		}
  }
  
  function getDataFromView(){
    var oData = {};
    oData.list = [];
    //oData.list.push(getSelectedItemData(0));
    
    for(var i=0; i<$(".wrap .place").length; i++) {
      oData.list.push(getItemData(i));
    }
    
    oData.history = aHistoryData;
    
    return oData;
  }
  function saveData(){
    var oData = getDataFromView();
    setConfig("oInitiativeTrackerData", oData);
  } 
  function makeDraggable(){
    var list = document.getElementById("allOnes");
    Sortable.create(list, {
      handle: ".place",
      ghostClass: "ghost",
      dragClass: "drag",
      onEnd: onListReordered
    });
  }
  function onListReordered(){
    saveData();
    setSeparators();
  }
  
  function loadData(){
    var oLocalData = getConfig("oInitiativeTrackerData");
    if(oLocalData){
      if(oLocalData.list.length > 0){        
        oData = oLocalData.list.filter(function(item){return (item.id != "undefined")?true: false;});
        updateSelected(oData[0]);
        for(var i=0; i<oData.length-1; i++) {
          addItem(oData[1+i]);
        }
        $("#allOnes li").show();
        makeDraggable();
      }
      if(oLocalData.history.length > 0){
        aHistoryData = oLocalData.history;        
      }        
    }
    setSeparators();
  }
  
  function setSeparators() {
    $("#allOnes .separator").remove();
    var oSeparator = "<li class='separator'>\
      <div class='simbol' title='Добавить'>+</div>\
    </li>";
     $("#allOnes .place").each(function(){
       $(this).after(oSeparator);
     });
     $("#allOnes").prepend(oSeparator);
  }
  
  function addToHistory(oData) {
    aHistoryData.unshift(oData);
    if(aHistoryData.length > 20) {
      aHistoryData.pop();
    } 
  }
  function editInHistory(oData) {
    var aEl = aHistoryData.filter(item => item.name==oData.name);
    if(aEl.length) {
      aEl[0] = oData;
    }
  }
  
  function getNewId() {
    q = new Date()
    return q.getTime()
  }
  
  $("#manageButtons").on("click", "#nextOne", function(){
		
    chooseNext();
    return false;
  });
  $(".wrap").on("click", ".minus", function(){
    $(this).closest(".place").slideUp(400, function(){
      $(this).remove();
      setSeparators();
      saveData();
    });
  });
  
  $("#allOnes").on("click", ".separator", function(){
    var nIndex = $(this).index(".separator");
    showAddWin(null, nIndex);
  });
  
  $("body").on("click", ".ico_list_item", function(){
    $(".ico_list_item").removeClass('selected');
    $(this).addClass('selected');
  });
  $("body").on("click", ".color_list_item", function(){
    $(".color_list_item").removeClass('selected');
    $(this).addClass('selected');
  });
  $("body").on("dblclick", ".wrap .place", function(){
    var nIndex = $(this).index(".place");
    //alert(nIndex);
    var oData = getItemData(nIndex);
    showAddWin(oData, nIndex);    
  });
  
  $("body").on('click', ".bApplay", function(){
    var sName = $("#sWinName").val();
    var sInitiative = $("#sWinInitiative").val() || 0;
    var sIco = ($("#sWinIco .selected").length>0)?$("#sWinIco .selected").attr("data-ico"): "";
    var sColor = ($("#sWinColor .selected").length>0)?$("#sWinColor .selected").attr("data-color"): "";
    var nIndex = $(".mod_win_wrapper").attr("data-index");
    var sID = $("#sWinName").attr("data-id") || "";
    
    var oData = {
      name: sName,
      initiative: sInitiative,
      ico: sIco,
      color: sColor,
      id: sID
    };
    
    setItem(oData, nIndex);
    editInHistory(oData);    
    $(".bCloseInfoWin").click();
    makeDraggable();
    saveData();
  });
  
  $("body").on('click', ".bAdd", function(){
    var sName = $("#sWinName").val();
    var sInitiative = $("#sWinInitiative").val() || 0;
    var sIco = ($("#sWinIco .selected").length>0)?$("#sWinIco .selected").attr("data-ico"): "";
    var sColor = ($("#sWinColor .selected").length>0)?$("#sWinColor .selected").attr("data-color"): "";
    var nIndex = $(".mod_win_wrapper").attr("data-index");
    var sID = $("#sWinName").attr("data-id") || getNewId();
    
    var oData = {
      name: sName,
      initiative: sInitiative,
      ico: sIco,
      color: sColor,
      id: sID
    };
    
    addItem(oData, nIndex);  
    addToHistory(oData);
    $(".bCloseInfoWin").click();
    saveData();
    makeDraggable();
    setSeparators();
  });
  
  $("body").on('click', ".mod_win .tab", function(){
    $(".mod_win  .tab").removeClass("selected");
    $(this).addClass('selected');
    $(".mod_win  .tabContent").hide();
    var sName = $(this).attr('data-tab');
    $(".mod_win  *[data-tabContent='"+sName+"']").show();
  });
  
  $("body").on("click", "#sWinHistory .place", function(){
    var nIndex = $(this).index("#sWinHistory .place");
    //alert(nIndex);
    var oData = getItemData(nIndex, {fromHistory: true});
    
    nIndex = $(".mod_win_wrapper").attr("data-index");
    addItem(oData, nIndex);
    //showAddWin(oData, nIndex);  
    $(".bCloseInfoWin").click();
    makeDraggable();
    setSeparators();
    saveData();
  });
  
  $("body").on("click", "#sWinHistory .minus", function(){
    var nIndex = $(this).closest(".place").index("#sWinHistory .place");
    //alert(nIndex);
    var oData = getItemData(nIndex, {fromHistory: true});
    
    aHistoryData.splice(nIndex, 1);
    //showAddWin(oData, nIndex);  
    //$(".bCloseInfoWin").click();
    //makeDraggable();
    //setSeparators();
    //var oList = getHistoryList();
    $("#sWinHistory li").eq(nIndex).slideUp();
    
    saveData();
    return false;
  });
  
  loadData();
};
