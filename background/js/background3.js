$(document).ready(function(){
	var f_type=1;
	// перемешивание
	function shuffle(o){
		for(var j, x, k = o.length; k; j = Math.floor(Math.random() * k), x = o[--k], o[k] = o[j], o[j] = x);
		return o;
	};
/*
list = list.split(";");		
		list = shuffle(list);
*/

function toCase(str, choice) {
    var strPub = { // правила для окончаний
        "а": ["ы", "е", "у", "ой", "е"],
        "(ш/ж/к/ч)а": ["%и", "%е", "%у", "%ой", "%е"],
        "б/в/м/г/д/л/ж/з/к/н/п/т/ф/ч/ц/щ/р/х": ["%а", "%у", "%а", "%ом", "%е"],
        "и": ["ей", "ям", "%", "ями", "ях"],
        "ый": ["ого", "ому", "%", "ым", "ом"],
        "й": ["я", "ю", "я", "ем", "е"],
        "о": ["а", "у", "%", "ом", "е"],
        "с/ш": ["%а", "%у", "%", "%ом", "%е"],
        "ы": ["ов", "ам", "%", "ами", "ах"],
        "ь": ["я", "ю", "я", "ем", "е"],
        "уль": ["ули", "уле", "улю", "улей", "уле"],
        "(ч/ш/д/т)ь": ["%и", "%и", "%ь", "%ью", "%и"],
        "я": ["и", "е", "ю", "ей", "е"]
    },
    cases = { // номера для падежей, не считая Именительный
        "р": 0,
        "д": 1,
        "в": 2,
        "т": 3,
        "п": 4
    },
    exs = { // исключения, сколько символов забирать с конца
        "ц": 2,
        "ок": 2
    },
    lastIndex,reformedStr,forLong,splitted,groupped,forPseudo;
    for(var i in strPub){
        if(i.length > 1 && str.slice(-i.length) == i){ // для окончаний, длиной >1
            lastIndex = i;
            reformedStr = str.slice(0, -lastIndex.length);
            break;
        }
        else if(/[\(\)]+/g.test(i)){ // фича: группировка окончаний
            i.replace(/\(([^\(\)]+)\)([^\(\)]+)?/g, function(a, b, c){
                splitted = b.split("/");
                for(var o = 0; o < splitted.length; o++){
                    groupped = splitted[o] + c;
                    strPub[groupped] = strPub[i];
                    if(str.slice(-groupped.length) == groupped){
                        for(var x = 0, eachSplited = strPub[groupped];x < eachSplited.length; x++){
                            eachSplited[x] = eachSplited[x].replace("%", splitted[o]);
                        }
                        reformedStr = str.slice(0, -groupped.length);
                        forPseudo = groupped;
                    }
                }
            })
        }
        else{ // дефолт
            lastIndex = str.slice(-1);
            reformedStr = str.slice(0, -(forPseudo || lastIndex).length);
        }
        if(/\//.test(i) && !(/[\(\)]+/g.test(i)) && new RegExp(lastIndex).test(i))forLong = i; // группированные окончания, разделающиеся слешем
        for(var o in exs){ // поиск исключений
            if(str.slice(-o.length) == o)reformedStr = str.slice(0, -exs[o]);
        }
    }
    return reformedStr + strPub[(forPseudo || forLong || lastIndex)][cases[choice]].replace("%", lastIndex)
}

function randd(min, max) {    
    //return 3;//
	var rnd = Math.floor(arguments.length > 1 ? (max - min + 1) * Math.random() + min : (min + 1) * Math.random());
	console.log("rand num: "+rnd);
	return rnd;
};

function is_array (a) {
    return (typeof a == "object") && (a instanceof Array);
}

Array.prototype.shuffle = function() {
    for (var i = this.length - 1; i > 0; i--) {
        var num = Math.floor(Math.random() * (i + 1));
        var d = this[num];
        this[num] = this[i];
        this[i] = d;
    }
    return this;
}

/////////////////
/////////////////
/////////////////
/////////////////

var step_next=0, f_siblings=0, f_cryme=0, f_spy=0, f_end=0;
var step_stack = []; // стек вызова шагов генерации
// Константы //



//var IMF_RF="<img src='img/i_rf.png' class='i_rf' style='width: 16px'>";
//var IMF_RF="<span style='width: 16px; height: 16px; background: url(img/i_rf.png) center center no-repeat; background-size: cover; display: inline-block;'></span>";
//var IMF_QW="<img src='img/i_qw.png' class='i_qw' style='width: 16px'>";

var IMF_RF="<i class='fa  fa-refresh'></i>";
var IMF_QW="<i class='fa fa-question-circle'></i>";
//////////////
	
	function make_generator(){
		
		generator="<button class='bt' id='go'>Сгенерировать случайную предысторию</button><button id='start_helper' class='bt'>Запустить генерацию по шагам</button><a class='bt' href='http://www.youknowwho.ru/message/?theme=dndbackground' target='_blank'>Написать отзыв или предложение</a><a class='bt' href='http://youknowwho.ru/dnd/file/Random_Background.pdf' target='_blank'>Скачать источник-PDF</a>";
		$("#panel").html(generator);	
		
	}
	function add_info_spoiler(){
		$(".description").after("<a href='#' class='info_toggle'>Скрыть описание</a>").before("<a href='#' class='info_toggle'>Скрыть описание</a>");
		//$(".info_toggle").eq(0).trigger('click');
	}
	
	function d(max){
		return randd(1, max);
	}
	function milestone(name,text,img,stat)
	{
		var ret;
		if(stat!="end")
			stat="more";
		if($("div[data-name='"+name+"']").length<1)
		{
			ret="<div class='milestone "+img+" "+stat+"' data-name='"+name+"'><b>"+name+"</b><br>"+text+"</div>"
			$("#result").append(ret);
		}
		else
		{
			$("div[data-name='"+name+"']").append("<br>"+text);
		}
	}
	function space(string)
	{
		return " "+space+" ";
	}

	////////////////////////////
	
	////////////////////////////
	
	// парсим таблицу
	function t_read(t_name){
		// парсим таблицу с определенным именем
		//alert(table);
		//var table = jQuery.parseJSON(ttt);
		var ttt = '{\
	"id": 1,\
	"chance": 1,\
		"text": "Бедная семья. Вычтите 25 зм из стартового капитала.",\
		"next": "t_siblings_2"\
	}';
		var table = JSON.parse(ttt);
		alert(table.id);
		

	}
	
	////////////////////////////
	
	////////////////////////////
	
	function start_wisard()
	{
		var dice="", next="", mod="0";
		var start_table="ttt";
		
		t_read(start_table);
		
		
	}
	///////
	
	function start_helper(){
		$("#helper").html("<div><b>Информация о происхождении</b><br>Вы хотите узнать об <a href='#' class='_0_parents_2' >обоих родителях</a> или о <a href='#'  class='_0_parents' >семье в общем</a>?</div>")
	}
	
	/////
	
	
	$("body").on("click", "#go", function(){
		
		$("#result").html("");
		start_wisard();
			
	});
	
	$("body").on("click", "#start_helper", function(){
		
		$("#result").html("");
		$("#helper").html("");
		start_helper();
			
	});
	make_generator();
	add_info_spoiler();
	$(".info_toggle").eq(0).click();
	
	$("body").on("click", "#info", function(){
		if($("#dbg").length<1)
		{
			$("body").append("<div id='dbg'></div>");
		}
		$("#dbg").show();
		if($(".mod_win").length<1)
		{
			$("body").append("<div class='mod_win'></div>");
		}
		$(".mod_win").show();
		
				
		$(".mod_win").html(info);
	});
	$("body").on("click", "#dbg", function(){
		$("#dbg").hide();
		$(".mod_win").hide();
	});
	$("body").on("click", "a.regen", function(){
		var type=$(this).parent().attr("data-rel");
		if(type=='parent')
			family(1);
		return false;
	});
	$("body").on("click", ".info_toggle", function(){
		console.log("info toggler");
		if($(this).text()=="Скрыть описание")
		{
			$(".info_toggle").text("Показать описание").hide();
			$(".description").slideUp();
			$(".info_toggle").eq(0).show();
		}
		else
		{
			$(".info_toggle").text("Скрыть описание");
			$(".description").slideDown();
			$(".info_toggle").show();
		}
		
		return false;
	});
	
}); 