$(window).load(function(){

	var ARR_DOWN = '<i class="fa fa-arrow-down"></i>';
	var ARR_UP = '<i class="fa fa-arrow-up"></i>';
  
    var freqdict = {};
   //freqdict["start"]={};
   freqdict.start={};
   freqdict.mid={};
   freqdict.end={};
   freqdict.st_num=0;
   freqdict.mid_num=0;
   freqdict.end_num=0;
   var st=[];
   var mid=[];
   var end=[];

  var depth = 3;
  var sim = 2;

  var tmp;


function getViewPortSize(mod){
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


function exist(elem) {
  (elem.length>0) ? true : false;
}
function randd(min, max) {
  return Math.floor(arguments.length > 1 ? (max - min + 1) * Math.random() + min : (min + 1) * Math.random());
};
// перемешивание
function shuffle(o){
	if (o) {
		if ((o.length == undefined || typeof o != 'object'))
		  return [0];
		for(var j, x, k = o.length; k; j = Math.floor(Math.random() * k), x = o[--k], o[k] = o[j], o[j] = x);
	}
    return o;
};
function getFr(a, n){
	if(a) {
	  var tmp = a.length;
	  var ret='';
	  if (n == undefined) {
		n = tmp>10?10:tmp/2;
		n = n<1?1:n;
	  }
	  tmp=0;
	  for (var slog in a) {
		ret = a[slog].fr>tmp?a[slog].slog:ret;
	  }
	  return ret;
	}
}
function getSim(slog, a, sim) {
  var ret = '';
  var tmp_fr=0;
  var maxTry=10;
  if (sim == undefined) {
    sim = slog-1;
  }
  if (sim<1)
    sim=1;

  for (var i=0; i<a.length && a[i].slog && slog; i++) {
    /**/
    var sl1 = a[i].slog.substr(-sim);
    var sl2 = slog.substr(0, sim);

    if (sl1 == sl2  &&
        a[i].fr > tmp_fr &&
        maxTry>0) {
      ret=a[i].slog.substr(0, a[i].slog.length-sim);
      maxTry--;
      tmp_fr = a[i].fr;
    }
    /**/

  }
  return ret;
}
/**
 * похожие слоги
 *
 * slog - слог
 * а - массив
 * sim - число похожих букв
 */
function getSim2(slog, a, sim) {
  var ret = '';
  var tmp_fr=0;
  var maxTry=30;
  if (sim == undefined) {
    sim = slog-1;
  }
  if (sim<1)
    sim=1;

  for (var i=0; i<a.length; i++) {
    var sl1 = a[i].slog.substr(-sim);
    var sl2 = slog.substr(0, sim);
    if(sl1 == sl2 &&
      a[i].fr > tmp_fr &&
      maxTry>0) {
      maxTry--;
      ret = a[i].slog[0];//.substr(0, a[i].slog.length-sim);
      tmp_fr = a[i].fr;
    }
  }

  return ret;
}
function fixName(name, format) {
  var re = /^[ЫыЬьЪь]|Й[йцкнгшщзхъфвпрлджчсмтьб]+/;
  name = name.replace(re, '');
	re = /^-/g;
  name = name.replace(re, '');
	re = /^(?=(.))\1{2,}/g;
  name = name.replace(re, '$1');
	re = /^([уеыаоэяию])[уеыаоэяию]+/g;
  name = name.replace(re, '$1');
	re = /^[бвгджзклмнпрстфхцчшщ]{3,}/g; // дж бр ст
  if(re.test(name)) {
    let aName = name.split("");
    let sLetter = shuffle("ауиеи".split(""))[0];
    aName.splice(1,0,sLetter);
    name = aName.join("");
  }
	re = /^[бвгджзклмнпрстфхцчшщ]{2}/g; // дж бр ст
  if(re.test(name)) {
    name = name.replace(/^нт|нс|нз|нж|нц/, 'н');
    name = name.replace(/^рб/, 'б');
    name = name.replace(/^тч|дз|рш/, 'д');
    name = name.replace(/^рт|рг|лр|мч/, 'р');
  }

  if (format == 'lowercase') {
    name = name.toLowerCase().trim();
  } else {
    name = (name.charAt(0).toUpperCase() + name.substr(1)).trim();
  }
  return name;
}
function make_select(src, params) {
  var options = "";
  var selected_key = params.selected_key;
  var id = params.id;
  var atr_class = params.class;
  var lableText;
  var width = 0;
  src.forEach(function(item){
    var key = item.name;
    var text = item.title;
    var sVisible = (item.visible === false)? "style='display:none'" : "";
    if(text.length > width){
      width = text.length;
    }
     options += "<li "+sVisible+" class='option' data-key='"+key+"'>"+text+"</li>";
    if(key == selected_key){
      lableText = text
    }
  });
  width = width>20? 20: width;
  width = width<5? 5: width;
  width = ~~(width*0.9);

  var list = "<ul class='list'>" + options + "</ul>";

  var selectedKey = selected_key;
  var label="<div class='label "+atr_class+"' data-selected-key='" + selectedKey + "' style='min-width:"+width+"em'>" + lableText + "</div>";
  var select = "<div id='" + id + "' class='customSelect'>" + label + list + "</div>"

  return select;
}
function makeComboBox(src) {
	var ret = '';
	var minimax = "<span class='minimax min'></span>";
	var sectionStart = "<div class='selectSection'>";
	var sectionEnd = "</div>";
	var arrow="<div class='combo_box_arrow'>"+ARR_UP+"</div>";
	for (var i in src.l) {
		var type = src.l[i];
    if(src.l[i].sort == 'alhpabet') {
      src.l[i].list.sort(function(a,b){
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }
        return 0;
      });
    }
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

	var comboBox = makeComboBox(name_groups.names_dnd);
	var info_text = $("#info_text").html();
	var select = "";
	var arr = [
		{
			name:"names_dnd",
			title:"Dungeons&Dragons"
		},
		{
			name:"names_tes",
			title:"The Elder Scrolls"
		},
		{
			name:"names",
			title:"Специфичные имена"
		},
		{
			name:"real",
			title:"Реальные имена"
		},
		{
			name:"fantastic",
			title:"Фантастика",
      visible: false
		}
	];
	// for(var i in arr) {
    // var sVisible = (arr[i].visible ===false)? "style='display:none'": "";
      // select+="<option "+sVisible+" data-key='"+arr[i].name+"'>"+arr[i].title+"</option>";
	// }
	// select = "<select class='bt' id='listSelect'>"+select+"</select>";

	select = make_select(arr, {selected_key: "names_dnd", id: "nameListSelect", class: "bt"});
	var out = "<div class='row'><div id='names'>"+comboBox+"</div><div id='result'>"+info_text+"</div></div>";
	generator="<a href='/' class='bt'><i class='fa fa-home'></i></a>"+
    "<a class='bt' id='go' title='Выберите расу' disabled>Сгенерировать</a>"+
		select+
		"<a class='bt' id='addList' title='Задать список'>Задать список</a>"+
		'<a class="bt" href="/message/?theme=dndnames" target="_blank">Написать отзыв или предложение</a>'+
		"<a class='bt' id='info'><i class='fa fa-question-circle'></i></a>";

  $('body').html("<div id='panel'>"+generator+"</div>"+out);

	/*/
    if(getViewPortSize("width") > 450) {
	  var pre_bg = "<div id='pre_bg' style='display: none'><img src='img/bg_custom.png'><img src='img/bg_effects.png'><img src='img/bg_loot.png'><img src='img/bg_magic.png'><img src='img/bg_maps.png'><img src='img/bg_tressure.png'><img src='img/bg_encounters.png'></div>";

	  $('body').append(pre_bg);
	}
	/**/

  setSelectedItem();
}


  function setSelectedItem() {
    var sHash = window.location.hash;
    if(sHash) {
      var aResult, oItem;
      // list
      aResult = sHash.match(/#list=([A-Za-z\d_-]+)/); // #list=name

      if(aResult && aResult[1]){
        oItem = $("#nameListSelect .option[data-key="+aResult[1]+"]").eq(0);
        if(oItem){
          selectCustomSelect($("#nameListSelect"), aResult[1], oItem.text());
        }
      }

      setTimeout(function(){
        //item
        aResult = sHash.match(/[#&]item=([A-Za-z\d_-]+)/); // #item=name

        if(aResult && aResult[1]){
          oItem = $("label[for=ch_"+aResult[1]+"]").eq(0);
          if(oItem){
            onSelectItemPress(oItem);
            $("#go").click();
          }
        }
      }.bind(this), 100);

    }
  }


// get item
function onSelectItemPress(src) {
	var d_root='', d_parent='', trig=true;

	var attrFor = src.attr("for"); // $("input#"+attrFor)
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

	//var fChecked = $(this).find("input:checked").length>0? true: false;
	//var bg = $(this).attr("data-bg");
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

	// bg /

  // url hash
  var NameTypeSelectVal = $("#nameListSelect .label").attr("data-selected-key");
  var sHashVal = (leng==1)? $("#selector").find("input:checked + label[for] ").attr("for").replace("ch_", "") : "";
  var sHash = "list="+NameTypeSelectVal;

  if (leng==1) {
    sHash+="&item="+sHashVal;
    location.hash = sHash;
    //scrollTo();
  } else if ($("input:checked[data-root]").length == 1) {
    sHashVal = $("input:checked[data-root]").eq(0).attr("data-root");
    sHash += "&item="+sHashVal;
    location.hash = sHash;
    //scrollTo();
  } else {
    //history.pushState("", document.title, window.location.pathname);
    location.hash = sHash;
  }

	return false;
}
function scrollTo(){
  setTimeout(function(){
    if(location.hash.split("&").length>1){
      $("#selector .combo_box_content").slideUp();
     $('html, body').animate({
          scrollTop: $("#result").offset().top
      }, 100);
    }
  }, 60);
}

  function selectCustomSelect(oSelect, sKey, sText){
    oSelect.find(".label").attr("data-selected-key", sKey).text(sText);
    oSelect.find("ul").fadeOut();

    var listName = sKey;//$("#listSelect option:selected").attr("data-key");
    make_dict2(name_groups[listName], "name_groups", listName);
    var comboBox = makeComboBox(name_groups[listName]);
    $("#names").html(comboBox);

    // url hash
    var NameTypeSelectVal = $("#nameListSelect .label").attr("data-selected-key");
    //var sHash = "list="+NameTypeSelectVal;
    var sHash = location.hash.slice(1);
    var aHash = sHash.split("&").map(function(item){return item.split("=")});
    var fFound = false;
    for(var i=0; i<aHash.length; i++) {
      if(aHash[i][0] == "list"){
        aHash[i][1] = NameTypeSelectVal;
        fFound = true;
        break;
      }
    }
    if(!fFound) {
      aHash.push(["list",NameTypeSelectVal]);
    }
    var sNewHash = aHash.map(function (pair){return pair.join("=")}).join("&");
    location.hash = sNewHash;
  }

function make_dict2 (oNames, globalVar, innerVal) {
	var separator = /[,;\t\n\r]+/;

	for (var i = 0; oNames.l[i]; i++) {
		var race = oNames.l[i];
		for(var j = 0; race.list[j]; j++) {
			var sbr = race.list[j];
			for(var k = 0; sbr.src[k]; k++) {
				var o = sbr.src[k];
				//debugger;
				if(globalVar && innerVal) {
					o.path = globalVar+"/"+innerVal+"/l/" + i + "/list/" + j + "/src/" + k;
				}

				if (o.type != 'array' && o.l) {
				  var title = o.name;
				  var string = o.l;
				  //console.log(string);

				  o.parts={};
				  o.parts.start={};
				  o.parts.mid={};
				  o.parts.end={};
				  o.st=[];
				  o.mid=[];
				  o.end=[];
				  o.st_num=0;
				  o.mid_num=0;
				  o.end_num=0;

				  var arr = string.split(separator);
				  // console.dir(arr);
				  /**/
				  var tmp_s='';
				  for (var m=0; m < arr.length; m++) { // words
					arr[m] = arr[m].trim().replace(/\s+/, "");
					for (var n=0; n-1 < arr[m].length-depth; n++) { // simbols in word
					  tmp_s='';
					  var f_s=false;
					  var f_e=false;
					  for (var s=0; s < depth && arr[m][+n+ +s] && arr[m][+n+ +s] != ' '; s++) { // triads
						tmp_s+=arr[m][+n+ +s];
					  }

					  //if(/'/.test(tmp_s) || race.name == "customList")
						  //debugger;

						//[А-ЯЁа-яё]
						// [^,;\s]
						// [^,;\t\n\r]
					  if (/^([А-ЯЁ]+)|([А-ЯЁа-яё]+')/.test(tmp_s)) {
					  //if (/^([^,;\t\n\r]+)|([^,;\t\n\r]+')/.test(tmp_s)) {
						f_s=true;
					  }
					  if (n==arr[m].length-depth) {
						f_e=true;
					  }


					  if(f_s){
						tmp_n=o.parts.start[tmp_s];
						if(tmp_n>0){
						  o.parts.start[tmp_s]++;
						  o.parts.st_num++;
						}
						else {
						  o.parts.start[tmp_s]=1;
						}
					  }
					 //
					  if(f_e){
						tmp_n=o.parts.end[tmp_s];
						if(tmp_n>0){
						  o.parts.end[tmp_s]++;
						  o.parts.end_num++;
						}
						else{
						  o.parts.end[tmp_s]=1;
						}
					  }
					 //
					  if(!f_s && !f_e){
						tmp_n=o.parts.mid[tmp_s];
						if(tmp_n>0){
						  o.parts.mid[tmp_s]++;
						  o.parts.mid_num++;
						}
						else{
						  o.parts.mid[tmp_s]=1;
						}
					  }
					}
				  }

				  var tmp_i=0;
				  for (var slog in o.parts.start) {
					o.st[tmp_i]={};
					o.st[tmp_i].slog=slog;
					o.st[tmp_i].fr=o.parts.start[slog];
					tmp_i++;
				  }
				  tmp_i=0;
				  for (var slog in o.parts.mid) {
					o.mid[tmp_i]={};
					o.mid[tmp_i].slog=slog;
					o.mid[tmp_i].fr=o.parts.mid[slog];
					tmp_i++;
				  }
				  tmp_i=0;
				  for (var slog in o.parts.end) {
					o.end[tmp_i]={};
					o.end[tmp_i].slog=slog;
					o.end[tmp_i].fr=o.parts.end[slog];
					//console.log(end[tmp_i].slog+ " " + end[tmp_i].fr);
					tmp_i++;
				  }
				  /**/

				  //console.dir(o);
				 // debugger;
				} // not array

			}
		}
	}
}
function generate_word(source, oParameters) {
	var name;
  if (source.l && (source.type == 'array' || oParameters && oParameters.type == 'array' || randd(0,3)>0)) {
    var arr = shuffle(source.l.split(","));
    name = arr[0].trim();
  } else {
    var oSource = source;
    var sLink = source.link;

    // link to annother part of scheme (for castles...)
    if (sLink){
      var aPath = oSource.path.split("/");
      aPath.pop();
      var vStart = aPath.shift();
      oSource = name_groups; // take root source
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
      var name = "";
      aS = aS.replace(/\s+/ig,"");
      for (var s=0; s<aS.length; s++){
        name = name+=aS[s]
        if(aS[1+ +s] && /[уеыаоэяию]/.test(aS[1+ +s]) && s>1)
          break;
      }
    } else {
        //debugger;
      var maxLength = randd(0,4);
      name = getFr(shuffle(oSource.end));

      for (var q=0; q<maxLength; q++) {
        var tmp = "";
        for (var w=0; w<3 && tmp.length < 1; w++){
          sh = shuffle(oSource.mid);
          tmp = getSim(name, sh, 2);
        }
        name = tmp + name;
      }
      sh = shuffle(oSource.st);
      name = fixName(getSim(name, sh, 2) + name);
      for(var q=10; q>0 && name.length<2; q--){
        name = fixName(getSim(name, sh, 2) + name);
      }
    }
  }
  return name;
}

function getRandomelementFromString(sSource) {
	var aElements = sSource.split(",");
	var nMax = aElements.length-1;
	return aElements[randd(0, nMax)];
}

// function decorName(prefix, word, src, postfix){
  // return prefix+fixName(word, src)+postfix;
// }
function make_name2(src, race, subrace) {
	var name = '', sSex='<i title="Универсальное имя" class="fa fa-genderless fa-fw" aria-hidden="true"></i>';

	for (var t1 in src.l) {
		if(src.l[t1].name == race){
			for (var t2 in src.l[t1].list) {
				if (src.l[t1].list[t2].name == subrace) {
					var cur = src.l[t1].list[t2];

          // multiply schemes if need
          var schemes = [];
          cur.schemes.forEach(function(el) {
            var p = el.match(/{{(\d+)\b}}/);
            var max = p? p[1] : 1;
            var str = el.replace(/\s*{{\s*\d+\s*}}\s*/, "");
            for(var i=0; i<max; i++){
              schemes.push(str);
            }
          });

					var schema = shuffle(schemes)[0];

					var name_arr = schema.split(/\s+/);

          // choose variants from "var1|var2"
          name_arr.forEach(function(el, i, arr){
            arr[i] = shuffle(el.split("|"))[0];
          });

					var source = cur.src;
					for (var i in name_arr) {
						for( var j in source) {
							if(source[j].name==name_arr[i]) {
								if (source[j].random? randd(0,source[j].random)==0 : 1) {
									word = generate_word(source[j]);
									var re_match;
									for ( var m=5;
											m>0 &&
											word.length<3 ||
											word.length<4 &&
											/[БВГДЖЗКЛМНПРСТФХЦЧЩШЪЬ]\1/i.test(word) ||
											word.length>3 &&
											/[БВГДЖЗКЛМНПРСТФХЦЧЩШЪЬ]\1\1/i.test(word) ||
											(re_match = word.match(/[УЕЫАОЭЯИЮЯ]/gi) &&
											re_match &&
											word.match(/[УЕЫАОЭЯИЮЯ]/gi).length<2);
											m--
										){
										word = generate_word(source[j]);
									}
									var prefix = source[j].hasOwnProperty('prefix')? source[j].prefix : "";
									var postfix = source[j].hasOwnProperty('postfix')? getRandomelementFromString(source[j].postfix) : " ";
									name+= prefix+fixName(word, source[j].format)+postfix;
                  
									break;
								}
							}
						}
            
            switch(source[j].name){
              case "male": sSex = '<i title="Мужское имя" style="font-size: 80%" class="fa fa-mars fa-fw" aria-hidden="true"></i>'; break;
              case "female": sSex = '<i title="Женское имя" class="fa fa-venus fa-fw" aria-hidden="true"></i>'; break;
            }
					}

					break;
				}
			}
			break;
		}
	}

	//name = (name.length<5 && randd(0,1)>0)? name =

  return {name: name, sex: sSex};
}


//console.dir(names);


 // var name = 'Name';

//console.log(text);

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

$("body").on('click', ".combo_box label", function(){

	onSelectItemPress($(this));
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



$("body").on('click', "#go", function(){
  console.log("#go!");
  var src = $("#selector .combo_box_title").attr("data-val");
  if(!src)
    return false;
  var names_line = src.split(",");
  var number = 5;
  var table = "";
  var listName = $("#nameListSelect .label").attr("data-selected-key");//$("#listSelect option:selected").attr("data-key");

  for(var n in names_line) {
    var race = names_line[n].trim().split(" ");
    for(var r=0; r<number; r++) {
      let oName =  make_name2(name_groups[listName], race[0], race[1]);
      name = oName.name;
      sex = oName.sex;
      table+="<tr><td>"+sex+"</td><td>"+name+"</td></tr>";
      //$("#result").append(name+"<br>");
    }
  }
  table="<table align='center'>"+table+"</table>";
  $("#result").html(table);

});
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
		$("#mod_win").html("<div>Введите список имен через запятую: </div><div id='textarea' contenteditable='true' style='padding: .2em; min-height: 12em; border: 1px solid #999'></div><button class='bt' id='bGetList'>Применить</button>");
	}
});

$("body").on('click', "#dbg", function(){
  $("#dbg").fadeOut();
  if($("#mod_win").length>0) $("#mod_win").hide();
  if($("#mod_win_info").length>0) $("#mod_win_info").hide();
});

// select list of names
$("body").on('change', '#listSelect', function(e) {
	var listName = $("#nameListSelect .label").attr("data-selected-key");//$("#listSelect option:selected").attr("data-key");
	make_dict2(name_groups[listName], "name_groups", listName);
	var comboBox = makeComboBox(name_groups[listName]);
	$("#names").html(comboBox);
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
	var listName = $("#nameListSelect .label").attr("data-selected-key");//$("#listSelect option:selected").attr("data-key"); //name_groups[listName]

	if (name_groups[listName].l[name_groups[listName].l.length-1].name == 'customList') {
	// уже есть
	name_groups[listName].l[name_groups[listName].l.length-1] = customList;
	} else {
	// еще нет
	name_groups[listName].l.push(customList);
	}

	var comboBox = makeComboBox(name_groups[listName]);

	$("#names").empty().append(comboBox);
	make_dict2(name_groups[listName], "name_groups", listName) ;
  }

  $("#dbg").click();

});

$("body").on('click', "#info", function(){
	if($("#dbg").length>0) {
	} else {
		$("body").append("<div id='dbg'></div>");
	}

	var win_text = "<p>Выберите расу (или несколько, при желании) и нажмите кнопку 'Сгенерировать' в верхней панели. Для каждой выбранной расы сгенерируется 5 имен.</p>"+
	"<p>Также можно генерировать имена на основе собственного списка примеров. Для этого необходимо нажать кнопку 'Задать список' в верхней панели и ввести в открывшемся окне список имен через запятую. После добавления, в списке рас появится еще один пункт (внизу). Если выбрать его и нажать кнопку 'Сгенерировать', будут сгенерированы 5 имен по образцу введенных ранее. В качестве примера для генерации лучше вводить не менее 50 имен.</p>"+
	"<p>GitHub: <a href='https://github.com/Etignis/Names_Generator'>https://github.com/Etignis/Names_Generator</a></p>";
	$("#dbg").empty().fadeIn();
	if($("#mod_win_info").length>0) {
		$("#mod_win_info").show();
	} else {
		$("body").append("<div id='mod_win_info' class='mod_win'></div>");
		$("#mod_win_info").html(win_text);
	}
});

  //custom Select
  $("body").on("click", ".customSelect .label", function() {
    $(this).next(".list").fadeToggle();
  });
  $("body").on("click", ".customSelect .option", function() {
    var sKey = $(this).attr("data-key");
    var sText = $(this).text();
    var oSelect =  $(this).closest(".customSelect");
    selectCustomSelect(oSelect, sKey, sText);
  });


  // ENTER
  $("body").on('keyup', function(e){
    var code = e.keyCode || e.which;
			if(code == 13 && $("#go:disabled").length==0) {
        $("#go").click();
      }
  });
  
  make_page();
  // обрабатываем имена и получаем словарь
  var listName = $("#nameListSelect .label").attr("data-selected-key");//$("#listSelect option:selected").attr("data-key");
  make_dict2(name_groups[listName], "name_groups", listName);
  scrollTo();
});
