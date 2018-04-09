$(window).load(function(){
  var items = RandomItems;
  var ARR_DOWN = '<i class="fa fa-arrow-down"></i>';
  var ARR_UP = '<i class="fa fa-arrow-up"></i>';

function exist(elem) {
  (elem.length>0) ? true : false;
}
function randd(min, max) {
  return Math.floor(arguments.length > 1 ? (max - min + 1) * Math.random() + min : (min + 1) * Math.random());
};
// перемешивание
function shuffle(o){
    if (o.length == undefined || typeof o != 'object')
      return [0];
    for(var j, x, k = o.length; k; j = Math.floor(Math.random() * k), x = o[--k], o[k] = o[j], o[j] = x);
    return o;
};

function getViewPortSize(mod)
{
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

function makeComboBox(src) {
  var ret = '';
  var minimax = "<span class='minimax min'></span>";
  var sectionStart = "<div class='selectSection'>";
  var sectionEnd = "</div>";
  var arrow="<div class='combo_box_arrow'>"+ARR_UP+"</div>";
  for (var i in src.l) {
    var type = src.l[i];
    if (src.l[i].list.length < 2) {
      // root
      var subtype = type.list[0];
      var tooltip = subtype.tooltip? "title='"+subtype.tooltip+"'" : "";
      ret+= sectionStart+"<input type='checkbox' value='"+type.name+" "+subtype.name+"' id='ch_"+type.name+"_"+subtype.name+"'><label for='ch_"+type.name+"_"+subtype.name+"' "+tooltip+"' data-bg='"+type.bg+"' data-hierarchy='root'>"+subtype.title+"</label>"+sectionEnd;
    } else {
      // child
      ret+= sectionStart + minimax +"<input type='checkbox' value='"+type.name+"' id='ch_"+type.name+"' data-root='"+type.name+"'><label for='ch_"+type.name+"' data-bg='"+type.bg+"' data-hierarchy='root'>"+type.title+"</label>";
      for(var j in type.list) {
      var subtype = type.list[j];
      var tooltip = subtype.tooltip? "title='"+subtype.tooltip+"'" : "";
      ret+= "<input type='checkbox' value='"+subtype.name+"' id='ch_"+subtype.name+"' data-parent='"+type.name+"'><label for='ch_"+subtype.name+"' "+tooltip+"' data-bg='"+type.bg+"' data-hierarchy='child'>"+subtype.title+"</label>"
      }
      ret = ret+sectionEnd;
    }
  }
  ret = "<div id='selector' class='combo_box' data-text='Выберите список'><div class='combo_box_title'>Выберите список</div><div class='combo_box_content'>"+ret+"</div>"+arrow+"</div>";
  //$("body").html(ret);
  return ret;
}


function make_page() {

  var comboBox = makeComboBox(items);
  var infoText = $("#info_text").html();

  var out='';
  var out = "<div class='row'><div id='items'>"+comboBox+"</div><div id='result'><div class='info_text'>"+infoText+"</div></div></div>";
  generator="<a href='/' class='bt'><i class='fa fa-home'></i></a>"+
    "<a class='bt' id='go' title='Выберите список ниже' disabled>Сгенерировать</a>"+
    "<input id='quantity' type='number' class='inpt' value='5' min='1' max='40' title='Количество сгенерированных вещей'/>"+
    "<a class='bt' id='addList' title='Задать список'>Задать список</a>"+
    '<a class="bt" href="/message/?theme=dnditems" target="_blank">Написать отзыв или предложение</a>'+
    "<a class='bt' id='info'><i class='fa fa-question-circle'></i></a>";

  $('#wrapper').html("<div id='panel'>"+generator+"</div>"+out);

  if(getViewPortSize("width") > 450) {
    var pre_bg = "<div id='pre_bg' style='display: none'><img src='img/bg_custom.png'><img src='img/bg_effects.png'><img src='img/bg_loot.png'><img src='img/bg_magic.png'><img src='img/bg_maps.png'><img src='img/bg_tressure.png'><img src='img/bg_encounters.png'><img src='img/bg_personality.png'></div>";

    $('#wrapper').append(pre_bg).after("<div id='bgImg' class='background bg_custom'></div>");
  }

  setSelectedItem();
}

function make_item(src, type, subtype) {
  for (var t1 in src.l) {
    if(src.l[t1].name == type){
      for (var t2 in src.l[t1].list) {
        if (src.l[t1].list[t2].name == subtype) {
          var cur = src.l[t1].list[t2];
          var schemes = shuffle(cur.schemes);
          var schema = schemes[0];

          if(typeof schema == 'string') {
            var item_arr = schema.split(" ");
            var source = cur.src;
            var list;
            for (var i in item_arr) {
              for( var j in source) {
                if(source[j].name==item_arr[i]) {
                  list = source[j].l;
                  return list;
                }
              }
            }
          } else {
            if(scheme.type == 'oneofall') {
              var item_arr = schema.string.split(" ");
              var source = cur.src;
              var list;
              for (var i in item_arr) {
                for( var j in source) {
                  if(source[j].name==item_arr[i]) {
                    list = source[j].l;
                    return list;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

function setSelectedItem() {
  var sHash = window.location.hash;
  if(sHash) {
    var aResult = sHash.match(/#item=([A-Za-z\d_-]+)/); // #item=name

    if(aResult[1]){
      var oItem = $("label[for=ch_"+aResult[1]+"]").eq(0);
      if(oItem){
        onSelectItemPress(oItem);
        getRandomItem();
      }
	  /*/
	  oItem = $("input[data-root="+aResult[1]+"]").eq(0);
	  if(oItem) {
		onSelectItemPress(oItem);
        getRandomItem();
	  }
	  /**/
    }
  }
}
function formatLine(sLine) {
  if(sLine) {
    sLine = sLine.toLowerCase();
    sLine = sLine.charAt(0).toUpperCase() + sLine.substr(1);
    }
  return sLine;
}
function getRandomItem(){
  var src = $("#selector .combo_box_title").attr("data-val");
  var sItemsLine = src.split(",");
  var quantity = $("input#quantity").val();
  var number = /[0-9]+/.test(quantity)? quantity : 5;
  var table = "";

  var aMiddleList = [];


  for(var n in sItemsLine) {
  var type = sItemsLine[n].trim().split(" ");
  //getNumerousItems(items, type[0], type[1], number);

  /**/
  //for(var r=0; r<number; r++) {
    aMiddleList = aMiddleList.concat(generateRandomItem(items, type[0], type[1], number));
    //table+="<tr><td>"+formatLine(word)+"</td></tr>";
  //}
  /**/
  }
  aMiddleList = shuffle(aMiddleList);
  for(var i=0; i<number; i++) {
    //table+="<tr><td>"+formatLine(aMiddleList[i])+"</td></tr>";
    table+="<tr><td>"+aMiddleList[i]+"</td></tr>";
  };
  table="<table align='center'>"+table+"</table>";
  $("#result").html(table);

}

function getNumerousItems(oSrc, sType, sSubtype, nCount) {
  for (var t1 in src.l) {
    if(src.l[t1].name == type){
      for (var t2 in src.l[t1].list) {
        if (src.l[t1].list[t2].name == subtype) {
        }
      }
    }
  }
}

function generate_word(source, oParameters) {
  var sResultString;
  if (source.l && (source.type == 'list' || oParameters && oParameters.type == 'list' || randd(0,1)>0)) {

    var tmpArr=[];
    var arr = shuffle(source.l.split(";").map(function(item){
     var p = item.match(/{{\s*(\d+)\s*}}/);
     var num = 1;
     if(p) {
      num = p[1];
      item = item.replace(/\s*{{\s*\d+\s*}}\s*/, ""); // \s*_/
      for(; num>0; num--) {
        if(item.length > 0)
          tmpArr.push(item);
      }
     }
     return item;
    }).concat(tmpArr));

    sResultString = arr[0].trim();
		var oDuble = sResultString.match(/{{\s*x(\d+)\s*}}/);
		if(oDuble) {
			var dNum = oDuble[1];
			sResultString = "";
			aResult = [];
			for(var i=1; i<arr.length && aResult.length<dNum; i++) {
				if(!/{{\s*[\d\w]+\s*}}/.test(arr[i])) {
					aResult.push(arr[i]);
				}
			}
			sResultString = aResult.join(", ");
		}
  } else {
    var oSource = source;
    var sLink = source.link;
    if (sLink){
      var aPath = oSource.path.split("/");
      aPath.pop();
      var vStart = aPath.shift();
      oSource = window[vStart];
      for (var v=0; aPath[v]; v++) {
        oSource = oSource[aPath[v]];
      }
      for (var u in oSource) {
        if(oSource[u].name == sLink){
          oSource = oSource[u];
          break;
        }
      }

    }

  if (source.mod && source.mod.toLowerCase() == "start") {
    var aS = shuffle(oSource.l.split(/,\s*/))[0];
    var sResultString = "";
    aS = aS.replace(/\s+/ig,"");
    for (var s=0; s<aS.length; s++){
      sResultString = sResultString+=aS[s]
      if(aS[1+ +s] && /[уеыаоэяию]/.test(aS[1+ +s]) && s>1)
        break;
    }
  } else {
      //debugger;
    var maxLength = randd(0,4);
    sResultString = getFr(shuffle(oSource.end));

    for (var q=0; q<maxLength; q++) {
      var tmp = "";
      for (var w=0; w<3 && tmp.length < 1; w++){
        sh = shuffle(oSource.mid);
        tmp = getSim(sResultString, sh, 2);
      }
      sResultString = tmp + sResultString;
    }
    sh = shuffle(oSource.st);
    //sResultString = fixName(getSim(sResultString, sh, 2) + sResultString);
  }
  }
  return sResultString;
}

function generateRandomItem(src, type, subtype, nCount) {
  var aResult = [];
  var sResultString = '';

  for (var t1 in src.l) {
    if(src.l[t1].name == type){
      for (var t2 in src.l[t1].list) {
        if (src.l[t1].list[t2].name == subtype) {
          var cur = src.l[t1].list[t2];
          var schemes = shuffle(cur.schemes);

          if(schemes.length>1) {
            for (var q=0; q<nCount; q++) {
              var nQ = q; //(q>=aWords.length)? q-aWords.length: q;
							if(nQ>=schemes.length) (
								nQ = randd(0, schemes.length-1)
							)
              var schema = schemes[nQ];
              var aItems = schema.split(" ");
              var source = cur.src;
              sResultString= '';
              for (var i in aItems) {
                for( var j in source) {
                  if(source[j].name==aItems[i]) {
                    if (source[j].random? randd(0,source[j].random)==0 : 1) {
                      /**/
                      word = generate_word(source[j]);

											var textBefore = source[j].hasOwnProperty('showTitle')? "<b>"+source[j].title+"</b>: ": "";
                      var prefix = source[j].hasOwnProperty('prefix')? source[j].prefix : "";
                      var postfix = source[j].hasOwnProperty('postfix')? source[j].postfix : " ";
                      sResultString+= textBefore + prefix+ word +postfix

                      /**/

                      break;
                    }
                  }
                }
              }
              aResult.push(sResultString);
            }

          } else {
            var schema = schemes[0];
            var aItems;
            var source = cur.src;
            if(typeof schema == 'string') {
              aItems = schema.split(" ");
            } else {
              if(schema.type == 'oneofall') {
                var tmpItems = schema.string.split(" ");
                var aNewString = [];
                for (var i in tmpItems) {
                  for(var j in source) {

                    if(source[j].name==tmpItems[i]) {

                      aNewString.push(source[j].l);
                    }
                  }
                }
                var sNewString = aNewString.join(";");
                var sNewScheme = "_newTMPscheme";
                source.push({
                  "name": sNewScheme,
                  "type": "list",
                  "l": sNewString
                });

                aItems = [sNewScheme]; //[tmpItems[randd(0,tmpItems.length-1)]];

              }
            }
            for (var i in aItems) {
              for( var j in source) {
                if(source[j].name==aItems[i]) {
                  if (source[j].random? randd(0,source[j].random)==0 : 1) {

                    var aWords=[];
                    var aWords = shuffle(source[j].l.split(";").map(function(item){
                      var p = item.match(/{{s*(\d+)s*}}/);
                      var num = 1;
                      if(p) {
                        num = p[1];
                        item = item.replace(/\s*{{\s*\d+\s*}}\s*/, ""); // \s*_/
                        for(; num>0; num--) {
                          if(item.length > 0)
                            aWords.push(item);
                        }
                      }
                      return item;
                    }).concat(aWords));


                    for (var q=0; q<nCount; q++) {
                      word = generate_word(source[j]);
                      var nQ = (q>=aWords.length)? q-aWords.length: q;
                      var sWord = aWords[nQ].trim();
											var textBefore = textBefore = source[j].hasOwnProperty('showTitle')? "<b>"+source[j].title+"</b>: ": "";
                      var sPrefix = source[j].hasOwnProperty('prefix')? source[j].prefix : "";
                      var sPostfix = source[j].hasOwnProperty('postfix')? source[j].postfix : " ";
                      aResult.push(textBefore + sPrefix+ sWord +sPostfix);
                    }
                    break;
                  }
                }
              }
            }
          }




          break;
        }
      }
      break;
    }
  }

  //name = (name.length<5 && randd(0,1)>0)? name =

  return aResult;
}


// open/close combobox
$("body").on('click', ".combo_box_title, .combo_box_arrow", function(){
  var el = $(this).closest(".combo_box").find(".combo_box_content");
  if(el.is(":visible"))
  {
    el.slideUp();
    el.next(".combo_box_arrow").html(ARR_DOWN);
  }
  else
  {
    el.slideDown();
    el.next(".combo_box_arrow").html(ARR_UP);
  }
});
// get item
function onSelectItemPress(src) {
  var d_root='', d_parent='', trig=true;

  var attrFor = src.attr("for").trim(); // $("input#"+attrFor)
  d_root = $("input#"+attrFor).attr("data-root");
  d_parent = $("input#"+attrFor).attr("data-parent");
  if($("input#"+attrFor).prop("checked"))
    {
    trig=false;
    }
  $("input#"+attrFor).prop("checked", trig);
  /**/
  if(d_root!='' && d_root!=undefined)
  {
    $("input[type=checkbox][data-parent="+d_root+"]").each(function(){
      $(this).prop( "checked", trig );
    });
  }
  /**/
  if(d_parent!='' && d_parent!=undefined && trig==false)
  {
    $("input[type=checkbox][data-root="+d_parent+"]").prop( "checked", trig);

  }
  /**/
  /**/
  if($("input[type=checkbox]:checked").length<1)
    {
    $("#go").attr("disabled", "disabled");
    }
  else
    {
    $("#go").removeAttr("disabled");
    }
  /**/

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
  $(".combo_box_title").html("");
  $(".combo_box_title").attr('data-val',"");
  $("input[type=checkbox]:checked").each(function(){
    d_root='';
    d_parent='';
    d_parent=$(this).attr("data-parent");
    d_root=$(this).attr("data-root");

    title=$(".combo_box_title").html();
    value=$(".combo_box_title").attr('data-val');

    if(title!="" && title.charAt(title.length-1)!="(") {
      $(".combo_box_title").append(", ");
    }
    // обычный пункт
    if(d_parent==undefined && d_root==undefined)
      {
      txt = $(this).next("label").text();
      title_value = $(".combo_box_title").attr("data-val");
      value = $(this).attr('value');
      dp = $(this).attr('data-parent');
      value = make_val(title_value, value, dp);
      $(".combo_box_title").append(txt).attr("data-val", value);
      }
    // если root
    if(d_root!=undefined)
      {
        // если есть отмеченные потомки
      if($("input[type=checkbox][data-parent="+d_root+"]:checked").length>0)
        {
        txt=$(this).next("label").text()+" (";
        $(".combo_box_title").append(txt);

        before_root=d_root;
        }
      }
    // если parent
    if(d_parent!=undefined)
      {

        txt=$(this).next("label").text();
        title_value = $(".combo_box_title").attr("data-val");
        value = $(this).attr('value');
        dp = $(this).attr('data-parent');
        value = make_val(title_value, value, dp);
        var ind = $("input[type=checkbox][data-parent="+d_parent+"").index(this);
        if(ind==$("input[type=checkbox][data-parent="+d_parent+"").length-1 && d_parent==before_root){
          txt+=")";
        }

        $(".combo_box_title").append(txt).attr("data-val", value);
      }
    });

    if($(".combo_box_title").html()=='')
      $(".combo_box_title").html(src.closest(".combo_box").attr('data-text'));

  /**/


  // bg

  var bg = $("#selector").find("input:checked + label[data-bg] ").attr("data-bg");
  var leng = $("#selector").find("input:checked + label[data-bg] ").length;
  $("#selector").find("input:checked + label[data-bg] ").each(function(){
    if ($(this).attr("data-bg") != bg){
      leng = 0;
    }
  });
  if(bg && leng>0) {
    $("#bgImg").addClass(bg);
  } else {
    $("#bgImg").attr("class", "bg_custom");
  }

  // bg /


  // url hash
  var sHashVal = (leng==1)? $("#selector").find("input:checked + label[for] ").attr("for").replace("ch_", "") : "";
  var sHash = "item="+sHashVal;
  var sTitle = $('meta[property="og:title"]').attr('content');
  var sTitleItem = "";
  //location.hash = (leng==1)? sHash : "";
  if (leng==1) {
    location.hash = sHash;
    sTitleItem = " - " + $("#selector").find("input:checked + label[for] ").text();
    //scrollTo();
  } else if ($("input:checked[data-root]").length == 1) {
    sHashVal = $("input:checked[data-root]").eq(0).attr("data-root");
    sHash = "item="+sHashVal;
    location.hash = sHash;
    sTitleItem = " - " + $("#selector").find("input:checked + label[for] ").eq(0).text();
    //scrollTo();
  } else {
    history.pushState("", document.title, window.location.pathname);
  }
  //history.pushState("", document.title, window.location.pathname);
  // url hash /


  // title
  document.title = sTitle + sTitleItem;


  return false;
}
function scrollTo(){
  if(location.hash.length>2){
    $("#selector .combo_box_content").slideUp();
   $('html, body').animate({
        scrollTop: $("#result").offset().top
    }, 100);
  }
}

$("body").on('click', ".combo_box input", function(event){
  //var checked = $(this).prop("checked");
  //$(this).prop("checked", !checked);
  //onSelectItemPress($(this).parent("label"));
  //return false;
  //$(this).parent().click();
  /*/
  var checked = $(this).prop("checked");
  $(this).prop("checked", !checked);
  /**/
  return false;
});

$("body").on('click', ".minimax", function(){
  var oParent = $(this).parent();
  if($(this).hasClass("min")) {
    $(this).removeClass("min").addClass("max");
    oParent.find("label").hide();
    oParent.find("label").eq(0).show();
  } else {
    $(this).removeClass("max").addClass("min");
    oParent.find("label").show();
  }
});

$("body").on('click', ".combo_box label", function(){

  onSelectItemPress($(this));
  return false;
});

// random
$("body").on('click', "#go", function(){
  getRandomItem();

});

// add items
$("body").on('click', "#addList", function(){
  if($("#dbg").length>0) {

  } else {
    $("body").append("<div id='dbg'></div>");
  }

  $("#dbg").empty().fadeIn();
    if($("#mod_win").length>0) {
    $("#mod_win").show();
  } else {
    $("body").append("<div id='mod_win' class='mod_win'></div>");
    $("#mod_win").html("<div>Введите список вещей через точку с зарпятой: </div><div id='textarea' contenteditable='true' style='padding: .2em; min-height: 12em; border: 1px solid #999'></div><button class='bt' id='bGetList'>Применить</button>");
  }
});

$("body").on('click', "#dbg", function(){
  $("#dbg").fadeOut();
  if($("#mod_win").length>0) $("#mod_win").hide();
  if($("#mod_win_info").length>0) $("#mod_win_info").hide();
});

$("body").on('click', "#bGetList", function(){
  // генерация

  var list = $("#textarea").text();
  if (list.length>4) {
   var customList = {
      "name": "customList",
      "title": "Свой список",
      "list": [
        {
          "name": "custom",
          "title": "Свой список",
          "schemes": [
            "custom"
          ],
          "src": [
            {
              "name": "custom",
              "l": list
            }
          ]
        }
      ]
    };

    if (items.l[items.l.length-1].name == 'customList') {
    // уже есть
    items.l[items.l.length-1] = customList;
    } else {
    // еще нет
    items.l.push(customList);
    }

    var comboBox = makeComboBox(items);

    $("#items").empty().append(comboBox);
    //make_dict2(items) ;
  }

  $("#dbg").click();

});

$("body").on('click', "#info", function(){
  if($("#dbg").length>0) {
  } else {
    $("body").append("<div id='dbg'></div>");
  }

  var win_text = "<p>Выберите список (или несколько, при желании) и нажмите кнопку 'Сгенерировать' в верхней панели. Из списков будет выбрано количество вещей указанных в поле ввода рядом.</p>"+
  "<p>Так же можно задавать свой список вещей - необходимо нажать кнопку 'Задать список' в верхней панели и ввести в открывшемся окне список вещей через точку с запятой. После добавления, в появится еще один список (внизу). Если выбрать его и нажать кнопку 'Сгенерировать', будут выбраны вещи из введенного вами списка.</p>"+
  "<p>GitHub: <a href='https://github.com/Etignis/Items/'>https://github.com/Etignis/Items/</a></p>";
  $("#dbg").empty().fadeIn();
  if($("#mod_win_info").length>0) {
    $("#mod_win_info").show();
  } else {
    $("body").append("<div id='mod_win_info' class='mod_win'></div>");
    $("#mod_win_info").html(win_text);
  }
});

  // ENTER
  $("body").on('keyup', function(e){
    var code = e.keyCode || e.which;
			if(code == 13 && $("#go:disabled").length==0) {
        $("#go").click();
      }
  });
  
  // init page controlls
  make_page();
  scrollTo()
});