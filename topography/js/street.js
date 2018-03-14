$(document).ready(function(){

var f={};
var depth = 3;
var randomSeed = 0;

function getSettings() {
  f.generateBG = {};
  f.paralax = {};
  f.blur = {};
  f.showLabel = {};

  f.generateBG.val = true;
  f.paralax.val = true;
  f.blur.val = true;
  f.showLabel.val = true;

  f.generateBG.name = 'generateBG';
  f.paralax.name = 'paralax';
  f.blur.name = 'blur';
  f.showLabel.name = 'showLabel';

  f.generateBG.text = "Генерировать фон";
  f.paralax.text  = "Использовать паралакс";
  f.blur.text  = "Применять размытие";
  f.showLabel.text  = "Отображать табличку";

  if(localStorage.getItem("flag_generateBG")!= null)
    f.generateBG.val = localStorage.getItem("flag_generateBG")=='true'?true:false;
  if(localStorage.getItem("flag_paralax")!= null)
    f.paralax.val = localStorage.getItem("flag_paralax")=='true'?true:false;
  if(localStorage.getItem("flag_blur")!= null)
    f.blur.val = localStorage.getItem("flag_blur")=='true'?true:false;
  if(localStorage.getItem("flag_showLabel")!= null)
    f.showLabel.val = true;//localStorage.getItem("flag_showLabel")=='true'?true:false;
}
function setSettings() {
  localStorage.setItem("flag_generateBG", f.generateBG.val);
  localStorage.setItem("flag_paralax", f.paralax.val);
  localStorage.setItem("flag_blur", f.blur.val);
  localStorage.setItem("flag_showLabel", f.showLabel.val);
}
getSettings();

// перемешивание
function shuffle(o){
    for(var j, x, k = o.length; k; j = Math.floor(Math.random() * k), x = o[--k], o[k] = o[j], o[j] = x);
    return o;
};
function randd(min, max, seed) {
	if(seed || randomSeed) {
		if(randomSeed>0 && seed==undefined)
			seed = randomSeed;
		// the initial seed
		Math.seed = seed;

		// in order to work 'Math.seed' must NOT be undefined,
		// so in any case, you HAVE to provide a Math.seed
		Math.seededRandom = function(max, min) {
			max = max || 1;
			min = min || 0;

			Math.seed = (Math.seed * 9301 + 49297) % 233280;
			var rnd = Math.seed / 233280;

			return min + rnd * (max - min);
		}
		var rnd = ~~(Math.seededRandom(min,max));
	} else {
		var rnd = Math.floor(arguments.length > 1 ? (max - min + 1) * Math.random() + min : (min + 1) * Math.random());
	}

  return rnd;
};

function rand_sign(){
  if(randd(0,99)>50)
    return 1;
  else
    return -1;
}
function rand_line(num){
  if(num === undefined)
    num = 89;
  var arr=[];
  for(var t=0; t<num; t++)
  {
    arr[t]=+t + +10;
  }
  return shuffle(arr);
}
// Константы //


var IMF_RF="<i class='fa  fa-refresh'></i>";
var IMF_QW="<i class='fa fa-question-circle'></i>";

//////////////
//var bg_blur = 1, milepost_visible = 1;
if(localStorage.getItem("flag_blur")!= null)
  bg_blur = localStorage.getItem("flag_blur");

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
    updateHash();
	});

  function make_generator(){
    var Arr = oToponims.l.filter(x => x.name=="villages")[0].list;
    var Select = select = make_select(Arr, {selected_key: "slav", id: "settlementsListSelect", class: "bt"});;
		var generator="<a href='/' class='bt'><i class='fa fa-home'></i></a><!--button class='bt' id='go'>Сгенерировать улицу</button--><button class='bt' id='town_name'>Сгенерировать название</button>"+Select+"<!--button id='rnd' class='bt'>Перегенерировать</button--><a class='bt' href='/message/?theme=dndstreet' target='_blank'>Написать отзыв или предложение</a> <a href='#' class='bt' id='config'> <i class='fa fa-cog'></i> </a><a href='#' class='bt' id='show_info'> <i class='fa fa-question-circle'></i> </a>";
    $("#panel").html(generator);

	// INFO WIN
	$("#info .content").append("<span class='cross' id='close_info'></span>");
	if(localStorage.getItem("topographyInfoIsShown")){
		$("#info").hide();
	}

    makeSettingWin();
	}

    function makeSettingWin() {
       //console.dir(f);
      var inputs = '';
        for (var prop in f) {
          var checked = f[prop].val? 'checked': '';
          inputs += "<label><input type='checkbox' id='ch"+f[prop].name+"' "+checked+" data-flag='"+f[prop].name+"'> "+f[prop].text+"</label><br>";
          //console.log(f[prop].name + ": "+ f[prop].val);
        }

        var configWin="<div  id='confWin' class='center_wrapper dbg' style='display: none'><div class='content' ><div class='cont'>"+inputs+"</div><div class='center'><button id='bConfOk'>OK</button></div></div></div>";
        if($("#confWin").length<1)
            $("body").append(configWin);
        else
            $("#confWin .cont").html(inputs);
    }

  function add_info_spoiler(){
    $(".description").after("<a href='#' class='info_toggle'>Скрыть описание</a>");
  }

  function d(max){
    return randd(1, max);
  }

  function getFr(a, n){
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
	
	function getSim(slog, a, sim) {
	  var ret = '';
	  var tmp_fr=0;
	  var maxTry=10;
	  if (sim == undefined) {
		sim = slog-1;
	  }
	  if (sim<1)
		sim=1;

	  for (var i=0; i<a.length; i++) {
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
	
	function fixName(name, format) {
	  var re = /^[ЫыЬьЪь]|Й[йцкнгшщзхъфвпрлджчсмтьб]+/;
      name = name.replace(re, '');
		re = /^(?=(.))\1{2,}/g;
      name = name.replace(re, '$1');
		re = /^([уеыаоэяию])[уеыаоэяию]+/g;
      name = name.replace(re, '$1');
		re = /^[^А-ЯЁа-яё]+/g;
      name = name.replace(re, '');
		re = /^.-+/g;
      name = name.replace(re, '');
      
    name = name.replace(/^(нт|нс|нз|нж|нц)/, 'н');
    name = name.replace(/^(рб)/, 'б');
    name = name.replace(/^(тч|дз|рш)/, 'д');
    name = name.replace(/^(рт|рг|лр|мч|рм)/, 'р');  
    name = name.replace(/^(рп)/, 'п');    
    name = name.replace(/^(нг)/, 'г');    
    name = name.replace(/^(нч)/, 'ч');  
      
	  if (format == 'lowercase') {
      name = name.toLowerCase().trim();
	  } else {
      
      //name = (name.charAt(0).toUpperCase() + name.substr(1).toLowerCase).trim();
     // name = name.split(/\b/).map(s => (s.charAt(0).toUpperCase() + s.substr(1).toLowerCase()).replace(/\s+/g, " ")).join("")
      name = name.toLowerCase().split(/([\s'’-])/g).map(function(s) { if(/[а-я].test(s)/){ return s.charAt(0).toUpperCase() + s.substr(1).toLowerCase().replace(/\s+/g, " ")} return s}).join("");
      
	  }
	  return name;
	}
  
function make_dict (oToponims) {
	var separator = /[,;\t\n\r]+/;

	for (var i in oToponims.l) {
		var section = oToponims.l[i];
		for(var j in section.list) {
			var sbr = section.list[j];
			for(var k in sbr.src) {
				var o = sbr.src[k]

				if (o.type != 'array') {
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
				  for (var i=0; i < arr.length; i++) { // words
					arr[i] = arr[i].trim();
					for (var j=0; j-1 < arr[i].length-depth; j++) { // simbols in word
					  tmp_s='';
					  var f_s=false;
					  var f_e=false;
					  for (var s=0; s < depth && arr[i][+j+ +s]; s++) { // triads
						tmp_s+=arr[i][+j+ +s];
					  }
					  
					  if(/'/.test(tmp_s) || section.name == "customList")
						  //debugger;

						//[А-ЯЁа-яё]
					  if (/^([А-ЯЁ]+)|([А-ЯЁа-яё]+')/.test(tmp_s)) {
						f_s=true;
					  }
					  if (j==arr[i].length-depth) {
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

function generate_word(source) {
  var name;
  if (source.type == 'array') {
    var separator = source.separator || ","
    var arr = shuffle(source.l.split(separator));
    name = arr[0].trim();
  } else {
    var maxLength = randd(0,6);
    name = getFr(shuffle(source.end));

    for (var q=0; q<maxLength; q++) {
      var tmp = "";
      for (var w=0; w<3 && tmp.length < 1; w++){
        sh = shuffle(source.mid);
        tmp = getSim(name, sh, 2);
      }
      name = tmp + name;
    }
    sh = shuffle(source.st)
    name = fixName(getSim(name, sh, 2) + name);
  }
  return name;
}

function make_name(src, section, subsection) {
  var name = '';

	for (var t1 in src.l) {
		if(src.l[t1].name == section){
			for (var t2 in src.l[t1].list) {
				if (src.l[t1].list[t2].name == subsection) {
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
          
					var schemes = shuffle(cur.schemes);
					var schema = schemes[0];
					var name_arr = schema.split(" ");
					var source = cur.src;
					for (var i in name_arr) {
						for( var j in source) {
							if(source[j].name==name_arr[i]) {
								if (source[j].random? randd(0,source[j].random)==0 : 1) {
									word = generate_word(source[j]);
                  try{ 
                    for ( var m=5;
                      m>0 && (
                      word.length<3 ||
                      word.length<4 &&
                      /[БВГДЖЗКЛМНПРСТФХЦЧЩШЪЬ]{2,}/i.test(word) ||
                      word.length>3 &&
                      /[БВГДЖЗКЛМНПРСТФХЦЧЩШЪЬ]{3,}/i.test(word) ||
                      word.match(/[УЕЫАОЭЯИЮЯ]/gi).length<1);
                      m--
                      ){
                      word = generate_word(source[j]);
                    }
                  } catch(err) {
                    console.log("[ERROR] word: "+word);
                    word = generate_word(source[j]);
                  }
                   var prefix = source[j].hasOwnProperty('prefix')? source[j].prefix : "";
                   var postfix = source[j].hasOwnProperty('postfix')? source[j].postfix : " ";
                      //sResultString+= prefix+ word +postfix
                      
									//var prefix = source[j].prefix? source[j].prefix : "";
									name+= prefix+fixName(word, source[j].format)+postfix;
									break;
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
  return name;
}


  ///////////////////

  function make_street() {
    var shops = "Оружейная, Мясная лавка, Лавка зелий, Кафе, Цветочная лавка, Портной, Хиромант, Молочный магазин, Сгорел!, Сапожник, Маг Иллюзионист, Лавка диковинок, Тату и Пирсинг, Мебельщик, Карты и наборы путешественников, Луки и стрелы, Винзавод, Строительные материалы, Свечи и Ароматы, Часовщик, Туристическое снаряжение, Бакалейная лавка, Женская обувь и Платья, Кондитерская, Пивоварня, Лавка алхимика, Лавка Травника, Лавка Пекаря, Книжная лавка, Храм, Оружейная лавка, Лавка старьевщика, Цирюльник, Гончарная мастерская, Мастерская скорняка, Мастерская каменщика, Лавка тканей, Лавка шляпника, Рыбная лавка, Мастерская художника, Мастерская скульптора, Мастерская краснодеревщика, Лавка зеленщика, Ломбард, Лавка красильщика, Мастерская переписчика, Столярная мастерская, Плотницкая мастерская, Мастерская слесаря, Лавка жестянщика";
    var houses = "Частный дом";
    var taverns = "Таверна";
    var objects = "Фонтан, Статуя, Киоск, Башня, Арка, Нищий, Сквер, Лестница, Колодец, Патруль стражников, Часовня, Площадь, Тупик";
    var buildings = "Игорный дом, Банк, Склад, Клуб, Гильхолл, Учебное заведение, Почта, Базар, Арена, Бордель, Библиотека, Архив, Муниципалитет, Бродячие артисты, Баня, Больница, Тюрьма, Приют, Антикаварная Лавка, Адвокатская контора, Охранное агентство, Ипподром";

    shops = shops.split(",");
    shops = shuffle(shops);
    houses = houses.split(",");
    houses = shuffle(houses);
    taverns = taverns.split(",");
    taverns = shuffle(taverns);
    objects = objects.split(",");
    objects = shuffle(objects);
    buildings = buildings.split(",");
    buildings = shuffle(buildings);

    var d100;
    var ret = "";
    var tmp='';
    for(var i=1; i<20; i++)
      {
      d100=randd(1,100);
      console.log("d100: "+d100);

      if(d100<3)
        {
          // buildings
          if(buildings.length>i)
            tmp=buildings[i]+"<br>";
          else
            {
            buildings = shuffle(buildings);
            tmp=buildings[0]+"<br>";
            }
        }
      else if(d100<10)
        {
          // objects
          if(objects.length>i)
            tmp=objects[i]+"<br>";
          else
            {
            objects = shuffle(objects);
            tmp=objects[0]+"<br>";
            }
        }
      else if(d100<50)
        {
          // houses
          console.log(houses.length);
          if(houses.length>i)
            tmp=houses[i]+"<br>";
          else
            {
            houses = shuffle(houses);
            tmp=houses[0]+"<br>";
            }
        }
      else if(d100<54)
        {
          // taverns
          if(taverns.length>i)
            tmp=taverns[i]+"<br>";
          else
            {
            taverns = shuffle(taverns);
            tmp=taverns[0]+"<br>";
            }
        }
      else
        {
          // shops
          tmp="Магазин: ";
          if(shops.length>i)
            tmp=shops[i]+"<br>";
          else
            {
            shops = shuffle(shops);
            tmp=shops[0]+"<br>";
            }
        }
        ret+=tmp.trim();
      }
    return ret;
  }
  
  function make_town() {
    
	
	
    // var name_1_he = name_line_1_he.split(",");
    // name_1_he = shuffle(name_1_he);
    // var name_1_she = name_line_1_she.split(",");
    // name_1_she = shuffle(name_1_she);
    // var name_1_it = name_line_1_it.split(",");
    // name_1_it = shuffle(name_1_it);
    // var name_1_they = name_line_1_they.split(",");
    // name_1_they = shuffle(name_1_they);

    // var name_2_he = name_line_2_he.split(",");
    // name_2_he = shuffle(name_2_he);
    // var name_2_she = name_line_2_she.split(",");
    // name_2_she = shuffle(name_2_she);
    // var name_2_she_2 = name_line_2_she_2.split(",");
    // name_2_she_2 = shuffle(name_2_she_2);
    // var name_2_she_end = name_line_2_she_end.split(",");
    // name_2_she_end = shuffle(name_2_she_end);
    // var name_2_it = name_line_2_it.split(",");
    // name_2_it = shuffle(name_2_it);
    // var name_2_they = name_line_2_they.split(",");
    // name_2_they = shuffle(name_2_they);


    // var he_num = name_1_he.length * name_2_he.length;
    // var she_num = name_1_she.length * name_2_she.length *2;
    // var she_num2=name_line_2_she_2.length * name_line_2_she_end.length;
    // var it_num = name_1_it.length * name_2_it.length;
    // var they_num = name_1_they.length * name_2_they.length;
    // console.log("he_num: "+he_num);
    // console.log("she_num: "+she_num);
    // console.log("it_num: "+it_num);
    // console.log("they_num: "+they_num);

    // var dX=randd(4, he_num + she_num + it_num + they_num);
    // var r1 = randd(0,4);
    // var r2 = randd(0,4);
    // var r3 = randd(0,6);
    // console.log("dX: "+dX);
    // console.log("r1: "+r1);
    // console.log("r2: "+r2);
    // console.log("r3: "+r3);
    // var ret = "";
	
	// function normalize_name(str) {
		// var arr = str.trim().split(" ");
		// for (var i=0; i<arr.length; i++) {
			// arr[i] = arr[i].toLowerCase();
			// arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1);
		// }

		// return arr.join(" ");
	//}
  
    var variant = randd(0,5);
    if(variant > 3) {
      if(dX <= he_num)
        {
        if(r1 != 0)
        {
        if(r2 != 0)
          {
          if(r3 !=0)
          ret = name_1_he[0]+" "+name_2_he[0];
          else
          ret = name_2_he[0]+" "+name_1_he[0];
          }
        else
          {
          ret = name_1_he[0];
          }
        }
        else
        {
        ret = name_2_he[0];
        }
        }
      else if(he_num + she_num)
        {
        var tmp_she = name_2_she[0];
        if(r1+r2 > 2)
        tmp_she = name_2_she_2[0].trim()+name_2_she_end[0].trim();

        if(r1 != 0)
        {
        if(r2 != 0)
          {
          if(r3 !=0)
          ret = name_1_she[0]+" "+tmp_she;
          else
          ret = tmp_she+" "+name_1_she[0];
          }
        else
          {
          ret = name_1_she[0];
          }
        }
        else
        {
          ret = tmp_she;
        }
        }
      else if(he_num + she_num + it_num)
        {
        if(r1 != 0)
        {
        if(r2 != 0)
          {
          if(r3 !=0)
          ret = name_1_it[0]+" "+name_2_it[0];
          else
          ret = name_2_it[0]+" "+name_1_it[0];
          }
        else
          {
          ret = name_1_it[0];
          }
        }
        else
        {
        ret = name_2_it[0];
        }
        }
      else
        {
        if(r1 != 0)
        {
        if(r2 != 0)
          {
          if(r3 !=0)
          ret = name_1_they[0]+" "+name_2_they[0];
          else
          ret = name_2_they[0]+" "+name_1_they[0];
          }
        else
          {
          ret = name_1_they[0];
          }
        }
        else
        {
        ret = name_2_they[0];
        }
		  }
    } else if(variant > 2) {
      var arr = villages_rus.split(";");
      arr = shuffle(arr);
      ret = arr[0];
    } else if(variant > 1){
      var arr = villages_ua.split(";");
      arr = shuffle(arr);
      ret = normalize_name(arr[0]);
    } else {
      var arr = villages_br.split(";");
      arr = shuffle(arr);
      ret = normalize_name(arr[0]);
    }

    return ret;
  }
  
  function getSettlementName() {
    var sKey = $("#settlementsListSelect .label").attr("data-selected-key");
    return make_name(oToponims, "villages", sKey);
  }

  function make_texture(color) {
		if(color==undefined){
			color={};
			color.clr1 = 'rgba(140,70,4,1)';
			color.clr2 = 'rgba(250,200,130,1)';
		}
    var deg = randd(-9,9);
    var tx = randd(1,19);
    var ty = randd(1,19);
    var tz = randd(1,19);


    var cr = 200-10;
    var cg = 140-10;
    var cb = 70-10;

    //console.log("color1: "+color.clr1 + " color2: "+color.clr2);
    var m_color1 = "rgba("+(cr+tx-deg)+", "+(cg+ty-deg)+", "+(cb+tz-deg)+", .9)";
    var m_color2 = "rgba(234, 171, 104, 1)";
    var s_color1 = color.clr1;
    var s_color2 = color.clr2;

    m_color1 = rgba_average(m_color1, s_color1);
    m_color2 = rgba_average(m_color2, s_color2);

    //console.log("grad: "+grad);
    function set_grad(clr1, clr2)
      {
      function get_grad(color1, color2){
        var st_color1 = "rgba(183, 120, 53, 1)"; //"#b77835"; // dark
        var st_color2 = "rgba(234, 171, 104, 1)"; //"#eaab68"; // light
        var text_color = st_color1;
        //color1 = st_color1;
        //color2 = st_color2;
        var color_new = rgba_average(color1, st_color2, 3);

        text_color = color1 = rgba_average(color1, st_color1, 3);
        color2 = rgba_average(color1, st_color2, 7);
        var grad =
        "linear-gradient(to left, "+color_new+" 3px, transparent 15px),"+
        "linear-gradient(125deg, transparent 40%, "+color_new+" 85%),"+
        "linear-gradient(135deg, "+color1+", transparent 2em),"+
        "repeating-linear-gradient("+(tz-1)+"deg, transparent, transparent 5px, "+color2+" 23px) 0 "+tx*deg+"px,"+
        "repeating-linear-gradient("+(tz-3)+"deg, transparent, transparent 7px, "+color2+" 19px) 0 "+ty*deg+"px,"+
        "repeating-linear-gradient("+(tz-2)+"deg, transparent, transparent 11px, "+color2+" 17px) 0 "+tz*deg+"px,"+
        color1;
				text_color = rgba_change(text_color, -10);

      $("#milepost_label").attr('style', "transform: rotate3d("+tx+", "+ty+", "+tz+", "+deg+"deg); background: "+grad + "; border-color: "+color_new+"; color: "+text_color+";");
      }
      var grad = get_grad(clr1, clr2);
    }
    set_grad(color.clr1, color.clr2);

    $("#milepost_pole").attr('style', "background: linear-gradient(135deg, "+rgba_change(color.clr2, 0, 0.3)+", "+rgba_change(color.clr1, 0, 0.3)+" 80%), linear-gradient(to top, transparent 70%, #b77435), repeating-linear-gradient("+(tx+83)+"deg, transparent, transparent 5px, rgba("+(cr+tz-deg)+", "+(cg+tx-deg)+", "+(cb+ty-deg)+", .3) 17px) "+tz*deg+"px 0, repeating-linear-gradient("+(tx+80)+"deg, transparent, transparent 3px, rgba("+(cr+tx-deg)+", "+(cg+ty-deg)+", "+(cb+tz-deg)+", .6) 19px) "+ty*deg+"px 0, rgba(234, 171, 104, 1)");

    var b_sky = randd(1,4);
    var b_land = randd(1,4);
		paralax();
    }

  function point(x, y) {
    if(x != undefined)
      this.x=x;
    else
      this.x=0;
    if(y != undefined)
      this.y=y;
    else
      this.y=0;
  }
  point.prototype.set = function(x,y) {
    this.x=parseInt(x);
    this.y=parseInt(y);
  }

  function rgba_change(color, num, alpha, c_r, c_g, c_b) {
    if(alpha<0)
      alpha*=-1;
    if(alpha === undefined || alpha>1)
      alpha = 1;
    if(c_r === undefined)
      c_r=0;
    if(c_g === undefined)
      c_g=0;
    if(c_b === undefined)
      c_b=0;

    var cl1 = color.match(/([0-9\s,\.]+)/i);
    var cl1_1=cl1[1].split(",");
    if(num!=0 || c_r!=0 || c_g!=0 || c_b!=0)
      {

      for(var p=0; p<3; p++)
        {
        cl1_1[p]=+cl1_1[p] + +num;

        if(p==0 && c_r!=0)
          cl1_1[p]=+cl1_1[p] + +c_r;
        if(p==1 && c_g!=0)
          cl1_1[p]=+cl1_1[p] + +c_g;
        if(p==2 && c_b!=0)
          cl1_1[p]=+cl1_1[p] + +c_b;

        if(cl1_1[p]<0)
          cl1_1[p]=0;
        if(cl1_1[p]>255)
          cl1_1[p]=255;
        }
      }
    cl1_1[3]=alpha;
    color = "rgba("+cl1_1.join(",")+")";
    return color;
  }

  function rgba_average(color1, color2, prc) {
    if(prc === undefined|| prc<1 || prc>9)
      prc = 5;
    var cl1 = color1.match(/([0-9\s,\.]+)/i);
    var cl1_1=cl1[1].split(",");
    var cl2 = color2.match(/([0-9\s,\.]+)/i);
    var cl2_1=cl2[1].split(",");

    var c_r, c_g, c_b, c_a, color;

    /*
    c_r = ~~((+cl1_1[0]+ +cl2_1[0])/2);
    c_g = ~~((+cl1_1[1]+ +cl2_1[1])/2);
    c_b = ~~((+cl1_1[2]+ +cl2_1[2])/2);
    */

    c_r = ~~(cl1_1[0]/(10/prc) + cl2_1[0]/(10/(10-prc)));
    c_g = ~~(cl1_1[1]/(10/prc) + cl2_1[1]/(10/(10-prc)));
    c_b = ~~(cl1_1[2]/(10/prc) + cl2_1[2]/(10/(10-prc)));

    al1 = parseFloat(cl1_1[3]);
    al2 = parseFloat(cl2_1[3]);
    al_r = (+al1+ +al2 );
    c_a = parseFloat(al_r/2);

    color = "rgba("+c_r+", "+c_g+", "+c_b+", "+c_a+")";
    return color;
  }

    var canvas = [];
    var ctx = [];
	
function isGoodWidth(){
	var w = window.innerWidth;
	if (w < 700) {
		return false;
	} else {
		return true;
	}
}
  function make_back_2() {
		if(f.generateBG.val && isGoodWidth()) {
			//$("#background").css({'background': 'url("img/f1.jpg") center center', 'background-size': 'cover', "opacity": ".8"});
			/*
			sky, stars, sun
			clouds,
			mountains,
			city
			hills
			front
			*/
			var canvasAmount = 0;
			var c_width;
			var c_height;

			var b_width = $("#background").width();
			var b_height = $("#background").height();
				canvasAmount = $("#background .canvas").length;

	 $("#background").empty();
			// create canvas
			function createCanvas(i, text){
				/*
				if is emty

				*/
				canvasAmount = $("#background .canvas").length;

				if(text==undefined) {
						text = "";
					}
				if (i==undefined || i<0) {
					for (var k=0; k<canvasAmount; k++) {
						if (ctx[k].empty !== false) {
							i=k;
							break;
						}
					}
					if (i==undefined || i<0) {
						canvasAmount++;
						i = canvasAmount-1;
					}
				}

				// if no layers, create new
				if ($("#canva"+i).length<1) {
					$("#background").append("<canvas class='canvas' id='canva"+i+"' data-text="+text+"></canvas>");
					$("#canva"+i).attr('width', b_width).attr('height', b_height);
					canvas[i] = document.getElementById('canva'+i);
					ctx[i] = {
						"body": canvas[i].getContext('2d'),
						"empty": false
					};
					//ctx[i].empty = false;
				}
				c_width = $("#canva0").width();
				c_height = $("#canva0").height();

				return i;
			}

			if ($("#canva0").length<1) {
				for (var i = 0; i<canvasAmount; i++) {
					createCanvas(i);
				}
			}

			if (canvasAmount==0 || canvas[0].getContext){

				//var c_width = $("#canva0").width();
				//var c_height = $("#canva0").height();
				c_width = $("#canva0").width();
				c_height = $("#canva0").height();
				var hor_height = c_height/10*6;
				var sun_pos_h, sun_pos_hor, f_day=1, f_desert=0, f_cave=0;

				// очищаем холст
				//ctx[0].clearRect(0, 0, c_width, c_height);
				for (var i = 0; i<canvasAmount; i++) {
					ctx[i].body.clearRect(0, 0, c_width, c_height);
				}

				var r_line = rand_line();

				var colors_day = [
				'rgba(97, 202, 188, 1)',
				'rgba(242, 246, 221, 1)',
				'rgba(254, 224, 152, 1)',
				'rgba(253, 243, 194, 1)',
				'rgba(195, 177, 189, 1)',
				'rgba(253, 220, 211, 1)',
				'rgba(204, 129, 116, 1)',
				'rgba(236, 177, 111, 1)',
				'rgba(177, 50, 59, 1)',
				'rgba(255, 246, 102, 1)',
				'rgba(180, 207, 234, 1)',
				'rgba(214, 224, 225, 1)',
				'rgba(79, 54, 16, 1)',
				'rgba(133, 182, 182, 1)',
				'rgba(92, 28, 1, 1)',
				'rgba(131, 70, 93, 1)',
				'rgba(62, 39, 35, 1)',
				'rgba(255, 202, 40, 1)'
				];
				var colors_night = [
				'rgba(70, 57, 101, 1)',
				'rgba(142, 172, 236, 1)',
				'rgba(89, 87, 134, 1)',
				'rgba(157, 199, 215, 1)',
				'rgba(51, 0, 69, 1)',
				'rgba(250, 168, 118, 1)',
				'rgba(0, 26, 53, 1)',
				'rgba(205, 189, 251, 1)',
				'rgba(0, 29, 40, 1)',
				'rgba(158, 174, 135, 1)',
				'rgba(54, 88, 56, 1)',
				'rgba(146, 151, 151, 1)',
				'rgba(78, 59, 69, 1)',
				'rgba(254, 206, 146, 1)',
				'rgba(29, 18, 43, 1)',
				'rgba(27, 84, 96, 1)'
				];
				for(var q=0; q<colors_day.length; q+=2)
				{
					//console.log("%c     " + "%c     ", "background: "+colors_day[q]+";", "background: "+colors_day[q+1]+";");
				}
				for(var q=0; q<colors_night.length; q+=2)
				{
					//console.log("%c     " + "%c     ", "background: "+colors_night[q]+";", "background: "+colors_night[q+1]+";");
				}

				var i, main_color1, main_color2;
				if(randd(0,2)>0)
				{
					i = randd(0, ~~((colors_day.length-1)/2))*2;
					main_color1 = rgba_change(colors_day[i], randd(-15,15));
					main_color2 =  rgba_change(colors_day[+i + +1], randd(-15,15));
					f_day=1;
				}
				else
				{
					i = randd(0, ~~((colors_night.length-1)/2))*2;
					main_color1 = rgba_change(colors_night[i], randd(-15,15));
					main_color2 =  rgba_change(colors_night[+i + +1], randd(-15,15));
					f_day=0;
				}

				if(randd(-3,1)>0) f_desert=1;
				if(randd(-7,1)>0) f_cave=1;

				//console.log("Выбрано: ["+i+"]"+"%c     " + "%c     ", "background: "+main_color1+";", "background: "+main_color2+";");

				function mountain_point(p1,p2, randp) {
					//console.log(Math.pow((p2.x - p1.x),2));
					//console.log(Math.pow((p2.y - p1.y),2));
					//console.log(Math.sqrt(Math.pow((p2.x - p1.x),2)+Math.pow((p2.y - p1.y),2))/2);
					//console.log(Math.pow((p2.x−p1.x), 2));
					//console.log(Math.pow((p2.y−p1.y), 2));
					var rr=randp;
					if (!(randp >0 && randp<100)) {
						rr = parseInt(Math.sqrt(Math.pow((p2.x - p1.x),2)+Math.pow((p2.y - p1.y),2))/10);
					}

						//var rr=parseInt(Math.sqrt(Math.pow((p2.x - p1.x),2)+Math.pow((p2.y - p1.y),2))/5);
						x_r=randd(-rr,rr);
						y_r=randd(-rr,rr);

						pn = new point();
						pn.x = parseInt((p1.x+p2.x)/2-x_r);
						pn.y = parseInt((p1.y+p2.y)/2-y_r);
						//console.log("pn.x: "+pn.x);
						//  console.log("pn.y: "+pn.y);
						return pn;
				}

				function make_line(arry, max_i) {
					if(max_i === undefined)
						max_i = 7;
					var arry2=[];
					var distance_k=1, distance=0;;
					ar_l=0;
					for(p=0; p < max_i; p++)
						{
						ar_l=0;
						for(var key in arry){
							ar_l++;
						}

						arry2.push(arry[0]);
						for(k=0; k < ar_l-1; k++)
						{
							//distance = Math.sqrt(Math.pow(arry[k+1].x - arry[k].x) + Math.pow(arry[k+1].y - arry[k].y]));

							arry2.push(mountain_point(arry[k], arry[(k+1)], 5));
							arry2.push(arry[k+1]);
						}
						arry=[];
						arry=arry2;
						arry2=[];
						}
					return arry;
					}

				function make_sky(cl1, cl2, layerNum){

					if (layerNum == undefined) {
						layer = ctx[0].body;
					}
					if (layerNum == "auto") {
						layer = ctx[createCanvas(-1, "sky")].body;
					} else {
						layer = ctx[createCanvas(layerNum, "sky")].body;
					}
					function print_sky(color1, color2){
						if(color1 === undefined)
							color1 = 'rgba(97, 202, 188, 1)';
						if(color2 === undefined)
							color2 = 'rgba(242, 246, 221, 1)';

						var sky = layer.createLinearGradient(0,0,0, c_height);
						sky.addColorStop(0, color1);
						sky.addColorStop(.5, color2);
						sky.addColorStop(1, color2);
						layer.fillStyle = sky;
						layer.fillRect(0,0,c_width,c_height);
					}
					//var i = randd(0, colors.length/2)
					print_sky(cl1, cl2);
				}

				function make_sun(layerNum){

					if (layerNum == undefined) {
						layer = ctx[0].body;
					}
					if (layerNum == "auto") {
						layer = ctx[createCanvas(-1, "sun")].body;
					} else {
						layer = ctx[createCanvas(layerNum, "sun")].body;
					}
					function print_sun(pos, radius, color)
					{
						if(radius === undefined)
							radius = parseInt(c_height/9);
						if(pos === undefined)
						{
							pos = new point();
							pos.set(~~c_width/2, ~~c_height/4);
						}
						if(color === undefined)
							color = 'rgba(255,255,250, 1)';

						function get_moon(cx, cy, r, d){
							var vert_d=0;
							var px, py1, py2;
							vert_d= Math.sqrt(r*r-(d/2)*(d/2));
							px = cx;
							py1 =  cy - vert_d;
							py1 = +cy+ +vert_d;
						}

						color_start = rgba_change(color, 0, .8, 30, 30, 30);
						color_end = rgba_change(color, 0, .8, 0, -10, -10);

						var r_x1=pos.x-radius;
						var r_y1=pos.y-radius;
						var r_w=radius*2;
						var r_h=radius*2;

						var sun = layer.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, radius);
						if(f_day==1)
						{

							sun.addColorStop(0, color_start);
							sun.addColorStop(.51, color_start);
							sun.addColorStop(.6, color_start);
							sun.addColorStop(.61, rgba_change(color_end, 0, .8));
							sun.addColorStop(.7, rgba_change(color_end, 0, .8));
							sun.addColorStop(.71, rgba_change(color_end, 0, .6));
							sun.addColorStop(.8, rgba_change(color_end, 0, .6));
							sun.addColorStop(.81, rgba_change(color_end, 0, .3));
							sun.addColorStop(.9, rgba_change(color_end, 0, .3));
							sun.addColorStop(.91, rgba_change(color_end, 0, .0));
							sun.addColorStop(1, rgba_change(color_end, 0, 0));
							layer.fillStyle = sun;
							layer.fillRect(r_x1, r_y1, r_w, r_h);
						}
						else
						{
							// get moon
							// cx, cy, r, d
							if(randd(0,2)==0)
								{
								var sign = rand_sign();
								radius = radius*2/3;
								var d= radius; //randd(radius*2/3, radius*3/2);
								vert_d= Math.sqrt(radius*radius-(d/2)*(d/2)); // длина вертикальная
								px = +pos.x + +d/2*sign; // x перечечения
								py1 =  pos.y - vert_d; // у1 пересечения
								py2 = +pos.y+ +vert_d; // у2 пересечения

								layer.beginPath();
								layer.moveTo(px, py1);
								layer.bezierCurveTo(pos.x - radius*2*sign, pos.y-radius-d, pos.x - radius*2*sign, +pos.y + +radius + +d, px, py2);
								layer.bezierCurveTo(pos.x - radius*sign, +pos.y + +d, pos.x - radius*sign, pos.y -d, px, py1);

								layer.fillStyle =  rgba_change(color_start, 40, 1);
								layer.fill();
								}
							else
								{
								sun.addColorStop(0, rgba_change(color_start, 40, 1));
								sun.addColorStop(.89, rgba_change(color_start, 40, 1));
								sun.addColorStop(.9, rgba_change(color_start, 40, 0));
								sun.addColorStop(1, rgba_change(color_start, 40, 0));
								layer.fillStyle = sun;
								layer.fillRect(r_x1, r_y1, r_w, r_h);
								}
							// /getmoon
						}

					}
					var sun_pos = new point();
					var k_h = c_height/(3*6);
					var k_red = randd(1, 6);
					var s_px = ~~(c_width/2-randd(-c_width/4, c_width/4));
					//var s_px = ~~(c_width/2);
					var s_py = k_h*k_red;
					sun_pos_hor = s_px;
					sun_pos.set(s_px, s_py);
					//console.log(k_h+" "+k_red);
					var radius = parseInt((c_height/8) * (k_h*k_red * 0.01));
					//var color = rgba_change('rgba(255,255,250, 1)', 0, 0, 0, -(k_red*7), -(k_red*9));
					var color = rgba_change(main_color2, 0, 0, (k_red), -(k_red*3), -(k_red*8));
					print_sun(sun_pos, radius, color);
					return rgba_change(color, 0, 1);
				}

					/// do not insert in...
				function make_cloud(layerNum, pos, height, width, color) {

					if (layerNum == undefined) {
						layer = ctx[0].body;
					}
					if (layerNum == "auto") {
						layer = ctx[createCanvas(-1, "cloud")].body;
					} else {
						layer = ctx[createCanvas(layerNum, "cloud")].body;
					}
					var count = randd(3,7);
					var radius, cloud;
					if(height === undefined)
						height = 100;
					if(width === undefined)
						width = 300;
					if(pos === undefined)
						{
						pos = new point();
						pos.set(0, 90);
						}
					if(color === undefined)
						color = "#fff";
					for(var q=0; q<count; q++)
					{
						tmp = width/count;


						if(q<count/2){
							pos.x+=~~(width/count)*((q+1)*0.2);
							radius=randd(tmp*1.2,tmp*1.7, q)*((q+1)*0.2);
						}
						else{
							pos.x+=~~(width/count)*((q)*0.2);
							radius=randd(tmp*1.2,tmp*1.7, q)*((count-q)*0.2);
						}
						if(radius>height)
							radius=height;

						if(radius<0)
							radius*=-1;

						cloud = layer.createRadialGradient(+pos.x+ +radius, pos.y, 1, +pos.x+ +radius, pos.y, radius);
						cloud.addColorStop(0, color);
						cloud.addColorStop(.99, color);
						cloud.addColorStop(1, rgba_change(color, 0, 0));
						//cloud.addColorStop(1, 'rgba(0,0,0,.2)');
						layer.fillStyle = cloud;

						var r_x1=pos.x;
						var r_y1=pos.y - height;
						var r_w=width;
						var r_h=height;
						layer.fillRect(r_x1, r_y1, r_w, r_h);
					}
				}

				function draw_clouds(layerNum) {

					if (layerNum == undefined) {
						layer = ctx[0].body;
					}
					if (layerNum == "auto") {
						layerNum = createCanvas(-1, "clouds");
						layer = ctx[layerNum].body;
					} else {
						layerNum = createCanvas(layerNum, "clouds");
						layer = ctx[layerNum].body;
					}
					var cloud_pos = new point();
					var w, h, x, y, n_max=randd(2,6), m_max=randd(4,29);
					for(var n = 0; n<n_max; n++)
					{
						for(var m=0; m<m_max; m++)
						{
						if(randd(0,3)==0){
							w = ~~(c_width/(4*(n+1)));
							h = ~~(c_height/20*(n_max-n));
							x = ~~(c_width/m_max*(m+1)-randd(-c_width/m_max, c_width/m_max));
							y = ~~(c_height/20*(n+1)*3-randd(-c_height/m_max, c_height/m_max));
							cloud_pos.set(x, y);
							var cloudLayer = +layerNum + + (randd(0,1)>0? 0: 1);
							make_cloud(cloudLayer, cloud_pos, h, w, main_color2);
							}
						}
					}
				}

				function print_hills(color1, color2, layerNum, width, height) {

					if (layerNum == undefined) {
						layer = ctx[0].body;
					}
					if (layerNum == "auto") {
						layerNum = createCanvas(-1, "hills");
					} else {
						layerNum = createCanvas(layerNum, "clouds");

					}
					layer = ctx[layerNum].body;

					if(color1 === undefined)
						color1 = 'rgba(246, 178, 139, 1)';
					if(color2 === undefined)
						color2 = 'rgba(249, 184, 156, 1)';
					if(width === undefined)
						width = randd(c_width*.3, c_width*1.8);//r_line[0]*10;//randd(200, 600);
					if(width>c_width*2)
						width = width/2;
					if(width<600)
						width += 100;
					if(height === undefined)
						height = parseInt(Math.min(width/randd(10,15), randd(30, 80)));

					var start_p = new point(), end_p = new point();


					function make_hill_line(offset, range, color1, color2)
					{
						if(offset === undefined)
							offset = 0;
						if(range === undefined)
							range = 0;

						start_p.set(randd(-c_width/1.7,0), parseInt(c_height*5/7 + offset));

						function make_hill(start, height, width, range, color1, color2)
						{
							if(range === undefined)
								range = 0;
							width = width - (randd(-50, 50) - range*20);
							var mid = new point(), end = new point(), r_sid = 10;
							mid.set(parseInt(+start.x+ +width/2 + +randd(-r_sid,r_sid)), start.y-height + +randd(-r_sid,r_sid));
							end.set(parseInt(+start.x+ +width), start.y);
							layer.moveTo(start.x, start.y);
							layer.bezierCurveTo(+start.x + +parseInt(width/4), start.y, +start.x + +parseInt(width/4), mid.y, mid.x, mid.y);
							//ctx[0].body.stroke();

							// make cactus here
							var k_cactus = ((range+1)*0.2).toFixed(1);
							if(randd(0,1)>0 && f_desert==1)
								make_cactus(mid, ~~((15-randd(-2,2))*k_cactus), ~~((50-randd(-20,20))*k_cactus), layerNum);
							//ctx[0].body.stroke();

							layer.bezierCurveTo(+start.x + +parseInt(width/4*3), mid.y, +start.x + +parseInt(width/4*3), start.y, end.x, end.y);
							//ctx[0].body.stroke();

							if(end.x<c_width)
								make_hill(end, height, width, range, color1, color2);
							else{
								layer.lineTo(c_width, c_height);
								layer.lineTo(0, c_height);
								layer.lineTo(start_p.x, start_p.y);

								var lingrad = layer.createLinearGradient(0, +c_height/3 + +offset,0, +c_height + +offset);
								/*var color1=colors[i];
								var color2=colors[+i + +1];*/

								lingrad.addColorStop(0, color1);
								lingrad.addColorStop(1, color2);
								layer.fillStyle = lingrad;

								layer.fill();
							}
						}
						layer.beginPath();
						make_hill(start_p, height, width, range, color1, color2);
					}

						//var i = randd(0, colors.length/2);
						//var color1=colors[i];
						//var color2=colors[+i + +1];
						var max_line = randd(3,7);
						var color_offset = -(~~(randd(60, 90)/max_line));
					for(var r=0; r<max_line; r++)
					{
						color1 = rgba_change(color1, color_offset);
						color2 = rgba_change(color2, color_offset);
						make_hill_line(r*20, r, color1, color2);
					}
				}

				function make_cave(layerNum) {
					if (layerNum == undefined) {
						layer = ctx[0].body;
					}
					if (layerNum == "auto") {
						layerNum = createCanvas(-1, "cave")
					} else {
						layerNum = createCanvas(layerNumIn, "cave")
					}
					layer = ctx[layerNum].body;

					 function make_cave_line(k, layerNumIn) {
						if (layerNumIn == undefined) {
							layer = ctx[0].body;
						}
						if (layerNumIn == "auto") {
							layerNumIn = createCanvas(-1, "cave")
							//layer = ctx[layerNum].body;
						} else {
							layerNumIn = createCanvas(layerNumIn, "cave")
							//layer = ctx[layerNum].body;
						}
						layer = ctx[layerNumIn].body;
						// count columns amount
						cave_k=k*0.2;
						var height_k = 40*cave_k;
						var columt_center_distance = 90*cave_k;
						var columns_amount = ~~(c_width/columt_center_distance);
						columt_center_distance= ~~(c_width/columns_amount);
						var up_arr=[], down_arr=[];
						for(var i=0; i < (c_width-columt_center_distance*2)/columt_center_distance; i++) {
							up_arr[i] = new point((i+1)*columt_center_distance, c_height/2-randd(c_height/6*cave_k, c_height/2*cave_k));
							down_arr[i] = new point((i+1)*columt_center_distance, c_height/2-randd(c_height/6*cave_k, c_height/2*cave_k)*-1);
						}
						var main_arr = up_arr.reverse().concat(new point(columt_center_distance/2-randd(0,height_k), c_height/2-randd(-height_k,height_k)), down_arr, new point(c_width-columt_center_distance/2-randd(-height_k,0), c_height/2-randd(-height_k,height_k)), up_arr[0]);

						if(k>3)
							main_arr = make_line(main_arr, 2);

						layer.strokeStyle="green";
						layer.lineWidth=5;
						/**/
						layer.beginPath();
						layer.moveTo(0,0);
						layer.lineTo(c_width, 0);
						layer.lineTo(c_width, c_height);
						layer.lineTo(0, c_height);
						layer.lineTo(0, 0);
						layer.closePath();


						layer.moveTo(main_arr[0].x, main_arr[0].y);
						for (var i = 1; i < main_arr.length; i++) {
							layer.lineTo(main_arr[i].x, main_arr[i].y);
							//ctx[0].body.stroke();
							layerNum++;
						}
						//ctx[0].body.lineTo(main_arr[0].x, main_arr[0].y);
						//ctx[0].body.stroke();

						var lingrad = layer.createLinearGradient(0, 0, 0, c_height );

						lingrad.addColorStop(0, rgba_change(main_color1, -(~~(150*cave_k))));
						lingrad.addColorStop(1, rgba_change(main_color2, -(~~(150*cave_k))));
						layer.fillStyle = lingrad;

						layer.fill();
						/**/
					}
					var amount= randd(4,7);
					for(var t=amount; t<8; t++) {
						make_cave_line(t, layerNum);
					}
				}

				function make_buildings(layerNum) {

					if (layerNum == undefined) {
						layer = ctx[0].body;
					}
					if (layerNum == "auto") {
						layer = ctx[createCanvas(-1, "city")].body;
					} else {
						layer = ctx[createCanvas(layerNum, "city")].body;
					}
					if(randd(-1,2)>0) {
						var hor_delta = c_width/randd(3,5) * (randd(0,1)>0?-1:1);
						layer.strokeStyle = "green"; // Green path
						layer.fillStyle = rgba_change(main_color1, -60);



							function make_base(base_p, base_w, base_h, floor) {
								layer.fillStyle = rgba_change(main_color1, -60);
								layer.beginPath();
								layer.moveTo(base_p.x, base_p.y);
								layer.lineTo(base_p.x-base_w/2, base_p.y);
								layer.lineTo(base_p.x-base_w/2, base_p.y-base_h);
								layer.lineTo(+base_p.x+ +base_w/2, base_p.y - base_h);
								layer.lineTo(+base_p.x+ +base_w/2, base_p.y);
								layer.lineTo(base_p.x, base_p.y);

								//ctx[0].body.stroke();
								layer.fill();
								if(floor==undefined || floor>1)
									make_windows(base_p, base_w, base_h);
							}

							function make_roof(roof_p, roof_w, roof_h, f) {
								layer.fillStyle = rgba_change(main_color1, -60);
								layer.beginPath();
								layer.moveTo(roof_p.x, roof_p.y);
								var f_roof=0; // флаг типа крыши
								if (randd(-2, 1)>0 && roof_h<roof_w ||f ==1) {
									f_roof = 1;
								}

								if (f_roof == 1) { // расширяющийся верх
									layer.lineTo(roof_p.x - roof_w/2, roof_p.y);
									layer.lineTo(roof_p.x - roof_w/2 - roof_w/6, roof_p.y-roof_h);
									layer.lineTo(+roof_p.x+ +roof_w/2 + +roof_w/6, roof_p.y - roof_h);
									layer.lineTo(+roof_p.x+ +roof_w/2, roof_p.y);
								} else { // конический верх
									layer.lineTo(roof_p.x-roof_w/2, roof_p.y);
									layer.lineTo(roof_p.x, roof_p.y - roof_h);
									layer.lineTo(+roof_p.x+ +roof_w/2, roof_p.y);
								}
								layer.lineTo(roof_p.x, roof_p.y);

								//ctx[0].body.stroke();
								layer.fill();

								if (f_roof == 1) { // гребень на крыше
									roof_p.set(roof_p.x, roof_p.y - roof_h)
									make_walls(roof_p, roof_w + roof_w/3, Math.min(20, roof_h));
								}
							} /// make roof

							function make_windows (base_p, base_w, base_h) {
								var tmp_p = new point();
								tmp_p.set(base_p.x, base_p.y);
								layer.fillStyle = rgba_change(main_color2, -60);

								function make_window(win_p, win_w, win_h) {
									layer.beginPath();
									win_w=win_w/2;
									win_h=win_h/2;

									layer.moveTo(win_p.x-win_w/2, win_p.y);
									layer.lineTo(win_p.x-win_w/2, win_p.y - win_h);
									layer.lineTo(+win_p.x+ +win_w/2, win_p.y - win_h);
									layer.lineTo(+win_p.x+ +win_w/2, win_p.y);
									layer.lineTo(win_p.x-win_w/2, win_p.y);
									layer.fill();
								}
								var w_h = randd(10, 15);
								var w_w = ~~(w_h/1.5);
								var w_amount_x = ~~(base_w/w_w -2); // количество окон на этаже
								var w_amount_y = ~~(base_h/w_h -2); // количество этажей

								var w_coord_x = ~~(base_w/w_amount_x);
								var w_coord_y = ~~(base_h/w_amount_y);


								for (var i = 0; i < w_amount_y; i++) { // этаж
									for (var j = 0; j < w_amount_x; j++) { // по этажу
										tmp_p.set(
											base_p.x - base_w/2 + w_w/2 + base_w/w_amount_x*j,
											base_p.y - base_h + w_h/2+ base_h/w_amount_y*i
											);
										if(randd(-2, 2)>0)
											make_window(tmp_p, w_w, w_h);
									}
								}

							} /// windows

						function make_building (building_base, k_height, k_size, floor) {
							var base = new point();
							if (building_base == undefined) {
								base.set(c_width/2, c_height/3*2);
							} else {
								base.set(building_base.x, building_base.y);
							}

							//base.set(c_width/2, c_height/3*2);
							var b_width =  ~~(randd(3, 4)*10*k_size);
							var b_height = ~~(randd(10, 11) *10 *k_size /(k_height /3));
							var r_width = ~~(randd(b_width/10, b_width/9)*10);
							var r_height = ~~(randd(b_height/30, b_height/10)*10);
							b_height+=80;

							var floor_max = randd(1, 3);
							for (var i = 0; i < floor_max; i++) {
								make_base(base, b_width, b_height, floor);
								//make_windows(base, b_width, b_height);

								base.set(base.x, base.y - b_height);
								make_roof(base, r_width, r_height);

								base.set(base.x, base.y);
								b_width =  ~~(randd(3, 4)*10*k_size);
								b_height = ~~(randd(3, 6)*10*k_size/(k_height/3));
								r_width = ~~(randd(b_width/10, b_width/9)*10);
								r_height = ~~(randd(b_height/30, b_height/10)*10);
							}

							base = null;
						} /// make building

						function make_walls (p_base, width, height) {
							/**/
							var indent_size = width/20;
								indent_size = Math.max(indent_size, 3);
							var indent_amount = ~~(width/indent_size);
								indent_size = ~~(width/indent_amount);
							var p = new point(p_base.x, p_base.y);

							layer.beginPath();
							layer.moveTo(p.x - width/2, p.y);
							layer.lineTo(p.x - width/2, p.y - height);
							//ctx[0].body.lineTo(p.x - width/2, p.y - height);
							//p.set(p.x - width/2, +p.y+ +(~~(indent_size/2)))
							p.set(p_base.x - width/2+ +(~~(indent_size/2)), +p.y - height );
							layer.lineTo(p.x, p.y);

							while (p.x+indent_size < +p_base.x + +width/2) {
								p.set(p.x +indent_size/2, p.y);
								layer.lineTo(p.x, p.y);

								p.set(p.x, p.y + indent_size);
								layer.lineTo(p.x, p.y);

								p.set(p.x + indent_size, p.y);
								layer.lineTo(p.x, p.y);

								p.set(p.x, p.y - indent_size);
								layer.lineTo(p.x, p.y);

								p.set(p.x +indent_size/2, p.y);
								layer.lineTo(p.x, p.y);
							}

							p.set(+p.x + +indent_size/2, p.y);
							layer.lineTo(p.x, p.y);

							p.set(p.x, p.y + height);
							layer.lineTo(p.x, p.y);

							layer.lineTo(p_base.x - width/2, p_base.y);

							layer.fill();
							/**/

							p = null;
						} /// make walls

						function make_town_walls (p_base, width, height) {
							var towers = 5; // количество башен
							var wall = width/(towers-1); // длина пролета стены
							var p = new point();

							for (var q=0; q<towers; q++) {
								p.set(p_base.x - width/2 +q*width/towers, p_base.y);
								make_tower(p, 16, randd(13, 16)*10);
								if (q<towers-1) {
									p.set(p.x + wall/2 -8, p_base.y)
									make_wall(p, wall-16, 130);
								}
							}

							function make_tower(p, w, h) {
								var floors=3;
								for (var i=0; i<floors; i++) {
									make_base(p, w, ~~(h/floors), i);
									p.set(p.x, p.y- ~~(h/floors));
								}
								make_roof(p, w, ~~(h/(floors*4)), 1);
							}
							function make_wall(p, w, h) {
								make_base(p, w, h, 0);
							}

							p = null;

						}


						var building_base = new point();
						var building_base1 = new point();
						var building_base2 = new point();
						var b_max = 10;
	/**/
						if (randd(-1,0)>0) {
							// town
							for (var i = 0; i < b_max; i++) {
								var b_center_x = c_width/2 - randd(-c_width/50, c_width/50)*i/2 - hor_delta;
								var b_center_y = c_height/4*3;
								building_base.set(b_center_x, b_center_y);

								make_building(building_base, b_max-i+1, 0.7, i);
							}
						} else {
							// castle
							for (var i = 0; i < b_max/1.8; i++) {
								var scatter = c_width/randd(60,80)*i;
								var b_center_x1 = ~~(c_width/2 - hor_delta - scatter);
								var b_center_x2 = ~~(c_width/2 - hor_delta + scatter);
								var b_center_y = ~~(c_height/4*3);

								building_base1.set(b_center_x1, b_center_y);
								building_base2.set(b_center_x2, b_center_y);

								var hg = ~~(i*1.8);
								if (hg<3)
									hg=3;
								make_building(building_base1, hg, 0.7, i);
								make_building(building_base2, hg, 0.7, i);
							}
						}
	/**/
						//make_walls(new point(c_width/2, c_height/4*3), c_width/5, Math.max(110, c_height/15));
						make_town_walls(new point(c_width/2 - hor_delta, c_height/4*3 - randd(-10, -5)*5), c_width/5, Math.max(50, c_height/15))
						building_base = null;
						building_base1 = null;
						building_base2 = null;
					}
				}

				function make_frontForest(color1, color2, layerNum){
					make_land(color1, color2, layerNum);
					make_forest(color1, color2, layerNum);
				}

				function make_land(color1, color2, layerNum) {
					if (layerNum == undefined) {
						layer = ctx[0].body;
					}
					if (layerNum == "auto") {
						layer = ctx[createCanvas(-1, "land")].body;
					} else {
						layer = ctx[createCanvas(layerNum, "land")].body;
					}
					var grd=layer.createLinearGradient(0, c_height*4/5, 0, c_height);
					grd.addColorStop(0, rgba_change(color1, -60));
					grd.addColorStop(1, rgba_change(color2, -60));

					layer.fillStyle=grd;
					layer.fillRect(0,c_height*4/5,c_width,c_height/5);
				}

				function print_stars(ps_color, layerNum) {
					if (layerNum == undefined) {
						layer = ctx[0].body;
					}
					if (layerNum == "auto") {
						layer = ctx[createCanvas(-1, "stars")].body;
					} else {
						layer = ctx[createCanvas(layerNum, "stars")].body;
					}

					if(ps_color === undefined)
						var ps_color = "rgba(255,255,255,1)";

					function make_star(ms_pos, rad, color){
						var pos = new point();
						if(ms_pos === undefined)
						{
							pos.set(100, 100);
						}
						else
						{
							pos.set(ms_pos.x, ms_pos.y);
						}
						if(rad === undefined)
						{
							var rad = 6;
						}
						if(color === undefined)
						{
							var color = rgba_change(main_color2, 50);
						}

						layer.beginPath();
						layer.moveTo(pos.x, pos.y-rad);//top
						layer.lineTo(pos.x-(~~(rad/2)), pos.y);//left
						layer.lineTo(pos.x, +pos.y + +rad);//bottom
						layer.lineTo(+pos.x + +(~~(rad/2)), pos.y);//right
						layer.fillStyle = color;
						layer.fill();
					}

					if(f_day==0)
					{
					var hor_space = 50;
					var ver_space = 50;
					var max_hor_count = c_width/hor_space;
					var max_ver_count = c_height/ver_space;
					var s_pos = new point();
					var s_x, s_y, s_r;
					for(var i=0; i<max_ver_count; i++)
					{
						for(var j=0; j<max_hor_count; j++)
						{
						if(randd(0,2)==0)
							{
							s_x = j*hor_space - ~~randd(-hor_space/3, hor_space/3);
							s_y = i*ver_space - ~~randd(-ver_space/3, ver_space/3);
							s_r= ~~(6-i*0.3 - randd(-1, 1));
							s_pos.set(s_x, s_y);
							ps_color = rgba_change(ps_color, 0 , randd(50,100)/100);
							make_star(s_pos, s_r, ps_color);
							}
						}
					}
					}
				}

				function make_forest(cl1, cl2, layerNum) {
					if (layerNum == undefined) {
						layer = ctx[0].body;
					}
					if (layerNum == "auto") {
						layerNum = createCanvas(-1, "forest");
						layer = ctx[createCanvas(layerNum, "forest")].body;
					} else {
						layerNum = createCanvas(layerNum, "forest");
						layer = ctx[layerNum].body;
					}

					function make_tree_1(cl1, cl2, basis, width, f_leafs, layerNumTree){
						if (layerNumTree == undefined) {
							layerTree = ctx[0].body;
						}
						if (layerNumTree == "auto") {
							layerNumTree = createCanvas(-1, "forest");
							layerTree = ctx[createCanvas(layerNumTree, "forest")].body;
						} else {
							layerNumTree = createCanvas(layerNumTree, "forest");
							layerTree = ctx[layerNumTree].body;
						}

						if(basis === undefined)
						{
							basis = new point();
							basis.set(100, c_height-100);
						}
						if(width === undefined)
							width = 50;
						var root = ~~(width/2.2);
						var pnt = new point();

						function make_trunk_up(get_point){
							var to_point = new point();
							var br = 20-randd(-10,10, randomSeed/get_point.x);
							var tr_height = 130-randd(-50,50, randomSeed/get_point.y);
							var new_p = new point();

							new_p.x = get_point.x;
							new_p.y = get_point.y - tr_height;
							layerTree.lineTo(new_p.x, new_p.y);
							new_p.x = new_p.x-br;
							new_p.y = new_p.y-br;
							layerTree.lineTo(new_p.x, new_p.y);
							new_p.x = +new_p.x+ +br;
							new_p.y = + new_p.y + +br/2;
							layerTree.lineTo(new_p.x, new_p.y);

							if(new_p.y>0)
								make_trunk_up(new_p);
							else
								return new_p;
						}

						function make_trunk_down(get_point, end_point){
							var to_point = new point();
							var br = 20-randd(-10,10, randomSeed/get_point.y);
							var tr_height = 130-randd(-50,50, randomSeed/get_point.x);
							var new_p = new point();


							new_p.x = + get_point.x + +br;
							new_p.y = get_point.y - br/2;
							layerTree.lineTo(new_p.x, new_p.y);
							new_p.x = new_p.x - br;
							new_p.y = +new_p.y + +br;
							layerTree.lineTo(new_p.x, new_p.y);
							new_p.x = new_p.x;
							new_p.y = +new_p.y + +tr_height;
							layerTree.lineTo(new_p.x, new_p.y);

							if(new_p.y<basis.y - (+root+ +tr_height*1.5))
								make_trunk_down(new_p);
							else
							{
								//new_p.x = new_p.x;
								new_p.y = basis.y-root;//+new_p.y + +tr_height;
								layerTree.lineTo(new_p.x, new_p.y);
								new_p.x = +new_p.x + +root;
								new_p.y = +new_p.y + +root;
								layerTree.lineTo(new_p.x, new_p.y);
							}
						}
						function make_leafs (ls_p, ls_h) {
							var l_p=new point();
							var ls_w=500;
							for (var i=0; i<11; i++) {
								for (var j=0; j<6; j++) {
									if(randd(0, 3)>i) {
										//l_p.set(ls_p.x - (ls_h/2)/(i*0.4) + +ls_h/6*i/(i*0.4) - randd(-1,1)*i*15, ls_p.y + +ls_h/11*j)
										var j_c = ~~((ls_w/6)* (j+1));
										var k = ~~((i*0.6)+1);
										l_p.set(ls_p.x -10 - (ls_w/2)/k + +(j_c)/k, ls_p.y + +(ls_h/11)*i - randd(3,3)/k);

										make_leaf(l_p, 70);
									}
								}
							}
						}

						function make_leaf (l_p, l_w) {
							l_p.set(l_p.x-randd(-10,10), l_p.y-randd(-30,30));
							l_w = l_w - randd(-5,5)*3;
							layer.beginPath();
							layer.moveTo(l_p.x, l_p.y);
							layer.lineTo(l_p.x-l_w/2, l_p.y + +l_w/2);
							layer.lineTo(+l_p.x+ +l_w/2, l_p.y + +l_w/2);
							layer.lineTo(l_p.x, l_p.y);
							//ctx[0].body.stroke();
							layer.fillStyle = rgba_change(main_color1, randd(-15,15), randd(10,10)*0.1, -randd(1,5)*3, randd(1,5)*3, -randd(1,5)*3);
							layer.fill();
						}

						layer.beginPath();
						var root_x1 = ~~(basis.x-width/2-root);
						var root_y1 = basis.y;
						var root_x2 = ~~(basis.x-width/2);
						var root_y2 = basis.y-root;
						layer.moveTo(root_x1, root_y1);
						layer.lineTo(root_x2, root_y2);
						pnt.set(root_x2, root_y2);
						make_trunk_up(pnt);
						pnt.set(basis.x, 0);
						make_trunk_down(pnt, basis);

						var tree = layer.createLinearGradient(0,0,0,basis.y);
						tree.addColorStop(0, rgba_change(cl1, 10));
						tree.addColorStop(.99, rgba_change(cl2, 30));
						tree.addColorStop(1, rgba_change(cl2, 30, 0));
						layer.fillStyle = tree;
						layer.fill();
						if(f_leafs==1)
							make_leafs(pnt, 200);
					}

					var f_leafs = (randd(-1,1)>0)?1:0;
					var s_max = randd(2, 6), d_max = randd(7, 13);
					//var s_max = 3, d_max = 4;
					var tree_point = new point();
					for(var s=0; s<s_max; s++) {
						for(var d=0; d<d_max; d++) {

							x = ~~(c_width/d_max*(d+1) - c_width/(d_max*2) - randd(-c_width/(d_max*4), c_width/(d_max*3), randomSeed/(d-s)));
							y = ~~((c_height*4/5)+ 40 + c_height/(3*s_max*1.2)*s - randd(-10, 10, randomSeed/(s+d)));


							tree_point.set(x, y);
							var cl1 = rgba_change(cl1, randd(-15, 10, randomSeed/s));
							var cl2 = rgba_change(cl2, randd(-15, 10, randomSeed/d));
							var wid = randd(30, 70, randomSeed/d);
							var rnd = randd(0,5, randomSeed/(s/d));
							if(rnd<2) {
								var layerNumTree;
								layerNumTree = (s<s_max/2)? layerNum : +layerNum+ +1;
								make_tree_1(cl1, cl2, tree_point, wid, f_leafs, layerNumTree);
								tree_point.x-=randd(90, 150, randomSeed/(d*s));
								tree_point.y-=-15;
								make_cloud(layerNumTree, tree_point, randd(80, 120, randomSeed/s), randd(250, 350, randomSeed/d), rgba_change(cl1, -30, 1));
							}

						}
					}
				}

				function draw_rocks(layerNum)  {
					if (layerNum == undefined) {
						layer = ctx[0].body;
					}
					if (layerNum == "auto") {
						layer = ctx[createCanvas(-1, "rocks")].body;
					} else {
						layer = ctx[createCanvas(layerNum, "rocks")].body;
					}

					function make_rock(mr_point, mr_height, mr_width, mr_color1, mr_color2)
						{
						function print_rock(color1, color2, r_pos, r_height, r_width){
							if(r_pos === null)
							{
								var r_pos = new point();
								r_pos.set(~~(c_width/2), ~~(c_height/3));
							}
							if(r_height === undefined)
							{
								r_height = ~~(c_height/2);
							}
							if(r_width === undefined)
							{
								r_width = +r_height + +r_height/2;
							}
							var rock_start_point = new point();
							rock_start_point.set(r_pos.x, r_pos.y - r_height);
							//console.log("sun_x: "+sun_pos_hor+" < mount_x: "+rock_start_point.x+ " c_width: "+c_width);
							//console.log("c_width: "+c_width);
							if(sun_pos_hor < rock_start_point.x)
							{
								//console.log("color change __");
								/**/
								var tmp_color0 = color1;
								color1 = color2;
								color2 = tmp_color0;
								/**/
							}

							var arry_left = [], arry_mid = [], arry_right = [], arry = [];
							var tmp_p1 = new point(), tmp_p2 = new point(), tmp_p3 = new point();

							function rock_point(p1, p2, randp, mod, h){
								var rr=randp;
								if (!(randp >0 && randp<100)) {
									rr = parseInt(Math.sqrt(Math.pow((p2.x - p1.x),2)+Math.pow((p2.y - p1.y),2))/10);
								}
								if(mod === undefined)
									mod=1;

								x_r=~~(randd(-rr,-rr/2)*mod);
								y_r=~~(randd(rr,rr/2));

								if(h>0)
								{
									y_r -= rr;
								}

								pn = new point();
								pn.x = parseInt((p1.x+p2.x)/2-x_r);
								pn.y = parseInt((p1.y+p2.y)/2-y_r);
								return pn;
								}

							function line_left(arry, max_i)
								{
								if(max_i === undefined)
									max_i = 7;
								var arry2=[];
								ar_l=0;
								for(p=0; p < max_i; p+=1)
									{
									ar_l = arry.length;
									arry2.push(arry[0]);
									for(k=0; k < ar_l-1; k++)
									{
										if(k%2==0)
										{
											arry2.push(rock_point(arry[k], arry[(k+1)], 9, 1, 1));
											arry2.push(rock_point(arry[k], arry[(k+1)], 9, -1));
										}
										arry2.push(arry[k+1]);
									}
									arry=[];
									arry=arry2;
									arry2=[];
									//console.log(arry);
									}
								return arry;
								}

								arry_left[0] = rock_start_point;
								var tl_x = ~~(rock_start_point.x - r_width/2);
								var tl_y = ~~(+rock_start_point.y + +r_height);
								tmp_p1.set(tl_x, tl_y);
								arry_left[1] = tmp_p1;
								arry_left = line_left(arry_left, 2);

							function line_mid(arry, max_i)
								{
								if(max_i === undefined)
									max_i = 2;
								max_i*=3;
								var arry2=[], new_p_x, new_p_y, new_p_x2, new_p_y2, new_p = new point(), rr=10, tmp_step;
								ar_l=0;
								var step = -(~~((arry[1].y-arry[0].y)/max_i));
								arry2[0]=arry[0];
								for(p=1; p < max_i; p+=1)
									{
									new_p_x = ~~(arry[0].x - randd(-rr, rr)*p*0.3);
									new_p_y = ~~(arry2[p-1].y - step);
									new_p_x2 = ~~(arry[0].x - randd(-rr, rr)*2*p*0.3);
									new_p_y2 = ~~(arry2[p-1].y - step*2.5);

									arry2[p] = new point();
									arry2[p].set(new_p_x, new_p_y);

									p++;
									arry2[p] = new point();
									arry2[p].set(new_p_x2, new_p_y2);

									p++;
									new_p_y = ~~(arry2[p-1].y - step);
									arry2[p] = new point();
									arry2[p].set(new_p_x, new_p_y2);
									}
								arry2[p]=arry[1];
								arry2[p].x-=randd(-step, step);
									arry=[];
									arry=arry2;
									arry2=[];
								return arry;
								}
								/**/
								arry_mid[0] = rock_start_point;
								var tm_x = ~~(rock_start_point.x);
								var tm_y = ~~(+rock_start_point.y + +r_height);
								tmp_p3.set(tm_x, tm_y);
								arry_mid[1] = tmp_p3;
								arry_mid = line_mid(arry_mid, 4);
								/**/

							function line_right(arry, max_i)
								{
								if(max_i === undefined)
									max_i = 7;
								var arry2=[];
								ar_l=0;
								for(p=0; p < max_i; p++)
									{
									ar_l=arry.length;
									arry2.push(arry[0]);
									for(k=0; k < ar_l-1; k++)
									{
										if(k%2==0)
										{
											arry2.push(rock_point(arry[k], arry[(k+1)], 9, -1, 1));
											arry2.push(rock_point(arry[k], arry[(k+1)], 9, 1));
										}
										arry2.push(arry[k+1]);
									}
									arry=[];
									arry=arry2;
									arry2=[];
									//console.log(arry);
									}
								return arry;
								}

								/**/
								arry_right[0] = rock_start_point;
								var tr_x = ~~(+rock_start_point.x + +r_width/2);
								var tr_y = ~~(+rock_start_point.y + +r_height);
								tmp_p2.set(tr_x, tr_y);
								arry_right[1] = tmp_p2; /**/
								arry_right = line_right(arry_right, 2);


								layer.beginPath();

								var rock_rr = 0; //randd(-4,-1) * 5;
								arry = arry_left.reverse().concat(arry_right);

								for(e=0; e< arry.length; e++)
									{
									layer.lineTo(arry[e].x, arry[e].y);
									//console.log("P: "+arry[e].x+" "+arry[e].y);

									}
								layer.lineTo(arry[0].x, arry[0].y);

								layer.fillStyle = rgba_change(color1, rock_rr);
								layer.fill();


								arry = [];
								arry = arry_mid.reverse().concat(arry_right);

								layer.beginPath();
								for(e=0; e< arry.length; e++)
									{
									layer.lineTo(arry[e].x, arry[e].y);
									//console.log("P: "+arry[e].x+" "+arry[e].y);

									}
								layer.lineTo(arry[0].x, arry[0].y);

								layer.fillStyle = rgba_change(color2, rock_rr);
								layer.fill();
								layer.strokeStyle=rgba_change(color2, rock_rr);
								layer.stroke();

								/*/
								ctx[0].body.beginPath();
								ctx[0].body.rect(r_pos.x-5, r_pos.y-5, 10, 10);
								ctx[0].body.fillStyle = "green";
								ctx[0].body.fill();
								/**/
						}

						var r_bott = new point();
						if(mr_point === undefined)
							{
							r_bott.set(~~(c_width/2), ~~(c_height*2/3));
							}
						else
							r_bott.set(mr_point.x, mr_point.y);

						print_rock(mr_color1, mr_color2, r_bott, mr_height);
					}
					var dr_bottom = new point(), dr_h, dr_w, dr_h_rnd;
					//dr_bottom.set(~~(c_width/2), ~~(c_height/3));
					var cl_rr = randd(-4,-1) * 5;
					var clr11 = rgba_change(main_color1, cl_rr);
					var clr22 = rgba_change(main_color2, cl_rr);
					var t_max = randd(0,9);
					var dr_b_x, dr_b_y;

					for(t=0; t<t_max; t++)
						{
						dr_b_x = ~~(c_width/2 - randd(-c_width/40, c_width/40)*10);
						dr_b_y = ~~(c_height*4/5 );
						dr_bottom.set(dr_b_x, dr_b_y);
						dr_h_rnd = randd(-c_height/6, c_height/6);
						dr_h = ~~(c_height/2 - dr_h_rnd);
						//console.log("r height: "+dr_h);
						dr_w = ~~(dr_h*1.4 - randd(-c_width/6, c_width/46));
						make_rock(dr_bottom, dr_h, dr_w, clr11, clr22);
						}
				}

				/**
				 * @param {point} start point
				 * @param {number} main diametr
				 * @param {number} main height
				 *
				 */
				function make_cactus(mc_p1, mc_dt, mc_h, layerNum){
					if (layerNum == undefined) {
						layer = ctx[0].body;
					}
					if (layerNum == "auto") {
						layer = ctx[createCanvas(-1, "cactus")].body;
					} else {
						layer = ctx[createCanvas(layerNum, "cactus")].body;
					}

					var mc_1 = new point(), mc_2 = new point(), mc_w;
					var db, rb;
					var f_direction = 1;
					var gap = 20;
					var m_x, m_y, bc1_x, bc1_y, bc2_x, bc2_y;

					if(mc_dt === undefined) // diameter trunk
						mc_dt = 20;
					db = ~~(mc_dt/3*2);     // inner diameter branch
					rb = ~~(db/5*2);        // outer radius branch

					if(mc_p1 === undefined)
						mc_1.set(100, 200);
					else
						mc_1.set(mc_p1.x, mc_p1.y)

					mc_2.set(+mc_1.x + +mc_dt, mc_1.y)

					if(mc_h === undefined)
						mc_h = 50;
					if(mc_w === undefined)
						mc_w = mc_2.x - mc_1.x;

					var rl = ~~(mc_h/10);
					var lb_line = mc_h/3*2 - randd(-rl, rl);
					var t1_line = +mc_h + +randd(rl, ~~(mc_h/5));
					var t2_line = randd(-rl*2, rl*2);
					var rb_line = mc_h/3*2 - randd(-rl, rl);
					var f_line = ~~randd(rl, mc_h/4*5);

					//ctx[0].body.beginPath();
					//ctx[0].body.moveTo(mc_1.x, mc_1.y); //strt
						m_x = mc_1.x; m_y = mc_1.y - f_line;
					layer.lineTo(m_x, m_y); //fst line

						bc1_x = m_x - db -rb; bc1_y = m_y;
						bc2_x = bc1_x; bc2_y = bc1_y;
						m_x = m_x - db -rb; m_y = m_y  - db -rb;
					layer.bezierCurveTo(bc1_x, bc1_y, bc2_x, bc2_y, m_x, m_y); // left branch outer arc

						m_y = m_y-lb_line;
					layer.lineTo(m_x, m_y); //left branch left line

						bc1_x = m_x; bc1_y = m_y - db/3*2;
						bc2_x = +m_x + +db; bc2_y = bc1_y;
						m_x = +m_x + +db;
					layer.bezierCurveTo(bc1_x, bc1_y, bc2_x, bc2_y, m_x, m_y); // left branch top arc

						m_y = +m_y + +lb_line;
					layer.lineTo(m_x, m_y); //left branch right line

						bc1_x = m_x; bc1_y = +m_y + +rb;
						bc2_x = bc1_x; bc2_y = bc1_y
						m_x = +m_x + +rb; m_y = +m_y + +rb;
					layer.bezierCurveTo(bc1_x, bc1_y, bc2_x, bc2_y, m_x, m_y); // left branch inner arc

						m_y = m_y -t1_line;
					layer.lineTo(m_x, m_y); //trunk left line

						bc1_x = m_x; bc1_y = m_y - mc_dt/3*2;
						bc2_x = +m_x + +mc_dt; bc2_y = bc1_y;
						m_x = +m_x + +mc_dt;
					layer.bezierCurveTo(bc1_x, bc1_y, bc2_x, bc2_y, m_x, m_y); // trunk top arc

						m_y = +m_y + +t1_line-t2_line;
					layer.lineTo(m_x, m_y); //trunk right line

						bc1_x = +m_x + rb; bc1_y = m_y;
						bc2_x = bc1_x; bc2_y = bc1_y;
						m_x = +m_x + +rb; m_y = m_y - rb
					layer.bezierCurveTo(bc1_x, bc1_y, bc2_x, bc2_y, m_x, m_y); // right branch inner arc

						m_y = m_y -rb_line;
					layer.lineTo(m_x, m_y); //right branch left line

						bc1_x = m_x; bc1_y = m_y - db/3*2;
						bc2_x = +m_x + +db; bc2_y = bc1_y;
						m_x = +m_x + +db;
					layer.bezierCurveTo(bc1_x, bc1_y, bc2_x, bc2_y, m_x, m_y); // right branch top arc

						m_y = +m_y + +rb_line;
					layer.lineTo(m_x, m_y); //right branch right line

						bc1_x = m_x; bc1_y = +m_y + +rb + +db;
						bc2_x = bc1_x; bc2_y = bc1_y;
						m_x = m_x - rb - db; m_y = +m_y + +rb + +db
					layer.bezierCurveTo(bc1_x, bc1_y, bc2_x, bc2_y, m_x, m_y); // right branch outer arc

						m_y = mc_1.y;
					layer.lineTo(m_x, m_y); //right trunk line
					//ctx[0].body.stroke();
				}

				make_sky(main_color1, main_color2, 0);
	/**/
				print_stars(main_color2, 0);
				var sun_color = make_sun(0);

				draw_clouds("auto");
				draw_rocks("auto");
				/**/
				make_buildings("auto");
	/**/
				print_hills(main_color1, main_color2, "auto");

				if(randd(0,1)==1 && f_desert!=1 && f_cave!=1)
				{
					make_frontForest(main_color1, main_color2, "auto");
					//make_land(main_color1, main_color2, "auto");
					//make_forest(main_color1, main_color2, "auto");
				}
				if (f_cave==1) {
					make_cave("auto");
				}

				/**/

				return {
					clr1: main_color1,
					clr2: main_color2
					};
			} else {
				// canvas-unsupported code here
			}
		}
    }
  function show_milepost(name, id){
    // показать background
    $("body").css("background", "#fff");
    if($("#background").length<1)
      $("body").prepend("<div id='background'></div>");

    var label = "<div id='milepost_label'>"+name+"</div>";
    var pole = "<div id='milepost_pole'></div>";
    var milepost = "<div id='milepost'>"+label+pole+"</div>";
    $("#"+id).html(milepost);

    var color_overlay = make_back_2();
	make_texture(color_overlay);
    //console.log("c_o: "+color_overlay);
	if(isGoodWidth()){
		$("#background canvas").show();	
	} else {		
		$("#background canvas").hide();	
	}
	
    if(f.blur.val)
      $("#background").addClass('blur');
    else
		$("#background").removeClass('blur');
  }

  $(window).resize(function(){
    make_back_2();
  });

	function setBlur(val) {
		if(val==undefined)
			val = true;
		if(val=='toggle'){
			 if($("#background").hasClass('blur'))
				 val = false
			 else
				 val = true;
		}

		if(val){
			$("#background").addClass('blur');
			f.blur.val = true;
		} else {
			$("#background").removeClass('blur');
			f.blur.val = false;
		}
		 localStorage.setItem("flag_blur", f.blur.val);
	}
	function setLabel(val){
		if(val==undefined)
			val = true;
		if(val=='toggle'){
			 if($("#result").is(':visible'))
				 val = false
			 else
				 val = true;
		}

		if(val){
			$("#result").show();
      f.showLabel.val = true;
		} else {
			$("#result").hide();
      f.showLabel.val = false;
		}
		localStorage.setItem("flag_showLabel", f.showLabel.val);
	}
  $('body').keyup(function(eventObject){
   //alert('Клавиша клавиатуры приведена в нажатое состояние. Код вводимого символа - ' + eventObject.which);
   if(eventObject.which == 16) // Shift
   {
		 setBlur('toggle');
   }
   if(eventObject.which == 192) //~
   {
		 setLabel('toggle');
   }
   if(eventObject.which == 32 || eventObject.which == 13) //Space Enter
   {
    $("#town_name").click();
   }
  });

  $("body").on("click", "#go", function(){


    $("#result").html("");

    $("#result").append(make_street);

  });
  $("body").on("click", "#town_name", function(){
	  $("#result").html("");
	  randomSeed = new Date().getTime();
	  show_milepost(getSettlementName(), 'result');
  });
  
  $("body").on('click', "#close_info", function(){
	  $("#info").slideUp();
	  localStorage.setItem("topographyInfoIsShown", true);
  });
  $("body").on('click', "#show_info", function(){
	  $("#info").slideDown();
	  return false;
  });

  $("body").on("click", "#dbg", function(){
    $("#dbg").hide();
    $(".mod_win").hide();
  });
  $("body").on("click", ".info_toggle", function(){
    if($(this).text()=="Скрыть описание")
    {
      $(this).text("Показать описание");
      $(".description").slideUp();
    }
    else
    {
      $(this).text("Скрыть описание");
      $(".description").slideDown();
    }

    return false;
  });

    // показать настройки
	$("body").on("click", "#config", function(){
    //getSettings();
		makeSettingWin();
		$("#confWin").fadeToggle();
	});
	$("body").on("click", "#bConfOk", function(){
		$(this).parent().parent().parent().fadeOut();
	});

	$("body").on("click", "#confWin input", function(){
		var data_flag = $(this).attr("data-flag");
		if ($(this).prop('checked')) {
			f[data_flag].val=true;
		} else {
			f[data_flag].val=false;
		}

		if(data_flag=='blur')
			setBlur(f[data_flag].val)
		if(data_flag=='showLabel')
			setLabel(f[data_flag].val)

		//console.log(f[data_flag].val);

    setSettings();
	});

	function paralax(e) {
		if (e!=undefined && f.paralax.val) {
			var X = e.pageX; // положения по оси X
			var Y = e.pageY; // положения по оси Y
			var c_width = $("#canva0").width();
			var c_height = $("#canva0").height();
			// console.log("X: " + X + " Y: " + Y); // вывод результата в консоль

			var deltaX = c_width/2 - X;
			var deltaY = c_height*2/3 - Y;

      var transitionDuration = 0.5;
      transitionDuration = (Math.abs(Math.max(deltaX, deltaY)*transitionDuration)/(c_width/2) +0.07).toFixed(2);
      //var k_td = c_width/2 / Math.abs(Math.max(deltaX, deltaY));
      //transitionDuration = 0.5/k_td;
      //console.log("transitionDuration: "+transitionDuration);


      deltaX = ((deltaX*100/(c_width))/20);
			deltaY = ((deltaY*100/(c_height))/25);
			//console.log(deltaX + " " + deltaY);

			var limit = $("#background .canvas").length;
			var kLayer = 0.02;
			kLayer = ~~(Math.max(limit+1, 1)/limit);
			var direction = -1;


			if (direction == 1) {
				for (var i = 0; i<limit; i++) {
					$("#background .canvas").eq(i).css(
						{
              "transition-duration": transitionDuration+"s",
							"left": (deltaX*i*kLayer).toFixed(1)+"px"+"px",
							"top": (deltaY*i*kLayer).toFixed(1)+"px"
						});
				}
			} else {
				for (var i = 0; i<limit; i++) {
					$("#background .canvas").eq(i).css(
						{
              "transition-duration": transitionDuration+"s",
							"left": (deltaX*(limit-i)*kLayer).toFixed(1)+"px",
							"top": (deltaY*(limit-i)*kLayer).toFixed(1)+"px"
						});
				}
			}
		}

	}// paralax

	var f_mouseMove = null;
  $('body').mousemove( function (e) {
    //console.log("mouse move");
		if (f_mouseMove != null &&
      f_mouseMove != undefined) {
      f_mouseMove = null;
      //f_mouseMove = clearInterval(f_mouseMove);
    } else 	{
    //console.log("timer start");
		f_mouseMove = setTimeout(function() {
			paralax(e);
			f_mouseMove = null;
			//console.log("timer destroi");
			}, 200);
		//console.log("timer: " + f_mouseMove);
		}
	});

  // url filters
	function updateHash() {		
		// select
		var sLoc = $("#settlementsListSelect .label").attr("data-selected-key");
		var aFilters = [];
		if(sLoc && sLoc.length > 0) {
			aFilters.push("loc="+sLoc.replace(/\s+/g, "_"));
		}
		

		if(aFilters.length>0) {
			var sHash = aFilters.join("&");
			window.location.hash = sHash;
		} else {
			removeHash();
		}
	}
  function getHash(oParams){
    //$('html, body').animate({scrollTop:0}, 'fast');

    var sHash = window.location.hash.slice(1); // /topography#loc=rus
    if(oParams || sHash && !/[^А-Яа-яЁё\w\d\/&\[\]?|,_=-]/.test(sHash)) {
      var sLoc = sHash.match(/\bloc=([\w]+)/);
      

      if(sLoc && sLoc[1]) {
      	$("#settlementsListSelect .label").attr("data-selected-key", sLoc[1]).html($("#settlementsListSelect li[data-key='"+sLoc[1]+"']").text().replace(/[_]+/g," "));
      }
    
    } else {
      removeHash();
      //hideClerFilter();
    }
    //$("body").css("border-top", "1px solid red");
    $("#town_name").click();
  }

  function removeHash() {
    history.pushState("", document.title, window.location.pathname + window.location.search);
    return false;
  }
  
  // обрабатываем названия и получаем словарь
	make_dict(oToponims) ;
	
  make_generator();
  getHash();
 // $("#town_name").click();
  
});
