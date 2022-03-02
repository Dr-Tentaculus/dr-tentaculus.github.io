Date.prototype.getWeekNumber = function(){
  var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
  var dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
};

function randd(min, max) {
  return Math.floor(arguments.length > 1 ? (max - min + 1) * Math.random() + min : (min + 1) * Math.random());
};

function shuffle(o){
    for(var j, x, k = o.length; k; j = Math.floor(Math.random() * k), x = o[--k], o[k] = o[j], o[j] = x);
    return o;
};
function getGUID(){
		function guid() {
		  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
			s4() + '-' + s4() + s4() + s4();
		}

		function s4() {
		  return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
		}
	
		var sGUID = guid();
			
		return sGUID;
}

function toDataURL(src, callback, outputFormat) {
	//debugger;
  var img = new Image();
  img.crossOrigin = 'Anonymous';
  img.onload = function() {
    var canvas = document.createElement('CANVAS');
    var ctx = canvas.getContext('2d');
    var dataURL;
    canvas.height = this.naturalHeight;
    canvas.width = this.naturalWidth;
    ctx.drawImage(this, 0, 0);
    dataURL = canvas.toDataURL(outputFormat);
    callback(dataURL);
  };
  img.src = src;
  if (img.complete || img.complete === undefined) {
    img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    img.src = src;
  }
}

const ImagetoDataURL = url => fetch(url)
	.then(response => response.blob())
	.then(blob => new Promise((resolve, reject) => {
			const reader = new FileReader()
			reader.onloadend = () => resolve(reader.result)
			reader.onerror = reject
			reader.readAsDataURL(blob)
	}))


Vue.component('modalWin', {
	props: {
		title: {
			type: String,
			default: ""
		},
		content: {
			type: String,
			default: ""
		}
	},
	data: function(){
		return {
			
		};
	},
	methods: {
		close: function(){
			this.$emit('close');
		}
	},
	computed: {
		
	},

	template: `<div class="mod_win_wrapper" style='background: rgba(0, 0, 0, 0.7);' @click="close" @scroll.stop>
	<div class="mod_win">
		<span class="bCloseInfoWin" @click="close">×</span>
		<div class="mod_win_content" v-html="content">
		</div>	
		<slot>
		</slot>		
	</div>
</div>`
});

Vue.component('news_item', {
	props: {
		id: {
			type: String,
			default: ""
		},
		header: {
			type: String,
			default: ""
		},
		text: {
			type: String,
			default: ""
		},
		img: {
			type: String,
			default: ""
		},
		author: {
			type: String,
			default: ""
		},
		
		
		header_font: {
			type: String,
			default: ""
		},
		header_size: {
			type: Number,
			//default: 14,
			validator: value => {
				// Only accepts values that contain the string 'cookie-dough'.
				return true
			}
		},
		text_font: {
			type: String,
			default: ""
		},
		 text_size: {
			 type: Number,
			// default: "10",
			validator: value => {
				// Only accepts values that contain the string 'cookie-dough'.
				return true
			}
		 },
		
	},
	data: function(){
		return {
			_text_height: 0
		};
	},
	methods: {
		close: function(){
			this.$emit('close');
		},
		onInit: function(){
			this.$emit('init');
		},
		onEdit: function(oEvent){			
			this.$emit('edit');
		},
		onRandom: function(oEvent){
			this.$emit('random');
		},
		onRemove: function(oEvent){
			this.$emit('remove');
		},
		
		onHeaderInput: function(oEvent){
			let sNewValue = oEvent.target.innerText;
			this.$emit('edited', {
				id: this.id,
				key: 'header',
				value: sNewValue
			});
		},	
		onAuthorInput: function(oEvent){
			let sNewValue = oEvent.target.innerText;
			this.$emit('edited', {
				id: this.id,
				key: 'author',
				value: sNewValue
			});
		},		
		onInput: function(oEvent){	
			let sNewValue = oEvent.target.innerText;
			this.$emit('edited', {
				id: this.id,
				key: 'text',
				value: sNewValue
			});
		},

	},
	mounted: function(){
		
	},
	beforeUpdate: function(){
			
	},
	computed: {
		_autor: function(){
			return this.author? `Автор: ${this.author}` : "";
		},
		
		_header_style: function(){
			let oData = {};
			if(this.header_font) {
				oData['font-family'] = this.header_font;
			}
			if(this.header_size) {
				oData['font-size'] = this.header_size+"px";
			}
		
			return oData;			
		},
		_text_style: {
			cache: false,
			get(){
				let oData = {};
				
				if(this.text_font) {
					oData['font-family'] = this.text_font;
				}
				if(this.text_size) {
					oData['font-size'] = this.text_size+"px";
				}
				return oData;	
			}			
		},
		
		_img: function(){
			
			return this.img;
		}
	},

	template: `<div class='news_item' @click="onEdit">
	<!--<div class='panel'>
		<button @click="onRemove" title='Удалить'>❌</button>
		<button @click="onRandom" title='Случаный текст'>🎲</button>
		<button @click="onEdit" title='Редактировать шрифты'>🖊️</button>
	</div>-->
	<h3 
		:style="_header_style"
		
		@input="onHeaderInput">{{ header }}</h3>
	<h4
		:style="_header_style" v-if="_autor.length" 
		@input="onAuthorInput">{{ _autor }}</h4>
	<img v-if="_img" :src="_img" />
	<p
		:style="_text_style"
		
		@input="onInput">{{ text }}</p>
</div>`
});
	
var app = new Vue({
	el: '#app',
	data: {
		raw: {
			title: "Whatever Times",
			
			ableft: "░▒▓█",
			abmid: "✪",
			ablright: shuffle("│┃│|│┃│|║║".split("")).join(""),
			
			footer_text: `copyright ${new Date().getFullYear()}`,
			
			date: new Date(),
			number: new Date().getWeekNumber(),
			lorem: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu vitae elementum curabitur vitae nunc sed. Augue ut lectus arcu bibendum at varius. Pellentesque habitant morbi tristique senectus. Tristique risus nec feugiat in fermentum. Odio facilisis mauris sit amet massa vitae tortor condimentum. Est ullamcorper eget nulla facilisi etiam. Amet nisl purus in mollis nunc sed id semper risus. Ultrices in iaculis nunc sed augue lacus. Sagittis vitae et leo duis. Eget sit amet tellus cras adipiscing enim eu turpis egestas.Urna neque viverra justo nec ultrices dui. Senectus et netus et malesuada fames. Pulvinar elementum integer enim neque volutpat ac. Etiam sit amet nisl purus in mollis nunc sed id. Diam sit amet nisl suscipit. Est ante in nibh mauris cursus mattis molestie a iaculis. Nam aliquam sem et tortor. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Egestas integer eget aliquet nibh praesent tristique magna. In tellus integer feugiat scelerisque varius. Nunc eget lorem dolor sed viverra ipsum nunc aliquet. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Eu tincidunt tortor aliquam nulla. Leo a diam sollicitudin tempor.Felis eget nunc lobortis mattis aliquam. Neque convallis a cras semper auctor neque vitae. Lacinia at quis risus sed vulputate odio ut enim. Aliquet risus feugiat in ante metus dictum at tempor. Laoreet non curabitur gravida arcu ac tortor dignissim. Accumsan tortor posuere ac ut. Sed felis eget velit aliquet sagittis id consectetur purus ut. Turpis egestas sed tempus urna et pharetra. Lectus sit amet est placerat in egestas erat imperdiet. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Ut pharetra sit amet aliquam id diam maecenas. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc.Neque gravida in fermentum et sollicitudin. Risus quis varius quam quisque id diam vel quam. Lacus vel facilisis volutpat est velit. Felis imperdiet proin fermentum leo vel orci. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lacus luctus accumsan tortor posuere ac ut consequat semper. Turpis massa sed elementum tempus egestas. Risus sed vulputate odio ut enim. Sit amet commodo nulla facilisi nullam vehicula ipsum. Malesuada proin libero nunc consequat interdum varius. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis. In nulla posuere sollicitudin aliquam. Gravida quis blandit turpis cursus in hac habitasse platea dictumst.Elit duis tristique sollicitudin nibh sit amet commodo nulla. Convallis convallis tellus id interdum velit laoreet. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Non sodales neque sodales ut etiam. Facilisis mauris sit amet massa vitae tortor. Morbi tristique senectus et netus et malesuada fames. Viverra suspendisse potenti nullam ac tortor. Consectetur libero id faucibus nisl tincidunt eget nullam. Etiam tempor orci eu lobortis elementum. In aliquam sem fringilla ut morbi tincidunt augue. Augue eget arcu dictum varius. Turpis massa tincidunt dui ut ornare lectus sit amet. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Aliquam id diam maecenas ultricies mi eget. Duis tristique sollicitudin nibh sit amet commodo nulla. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit.`,
			list: [
				
			],
			side: [
				
			],
			
			real_list: []
		},
		
		editor: {
			id: "",
			header: "",
			text: "",
			img: "",
			header_font: "",
			header_size: "",
			text_font: "",
			text_size:"",
			a4: true,
		},
		
		pageSettings: {

			template: "temp_firstPage",
			templateList: [
				{
					key: 'temp_firstPage',
					title: 'Первая страница'
				},
				{
					key: 'temp_4col',
					title: '4 колонки'
				},
			],
			fontList: [
				{
					name: `"Lato", "Helvetica Neue", Helvetica, Arial, sans-serif`
				},
				{
					name: "CyrillicGoth"
				},
				{
					name: "serif"
				},
				{
					name: "FlowRounded-Regular"
				}
			],

			colons: {
				font: "",
				size:"15"
			},

			title: {
				font: "",
				size: "60"
			}
				
		},
		
		result_img: {
			start: "",
			src: ""
		},
		
		rand: randd(1,100),
		
		oConfig: {
			width: "page",
			news_api_key: "889db482b24d49539009c540de0e3b18"
		},
		
		bAppIsReady: false,	
		bEditMode: false, 
		
		bModalWinShow: false,
		sModalWinCont: ""
	},

	computed: {
		page_style: function(){
			let oData = {};
			oData[this.editor.a4? "height" : "minHeight"] = "var(--page-height)";
			oData[this.editor.a4? "width" : "width"] = "var(--page-width)";
			
			
			return oData;
		},
		colon_style: function(){
			let oData = {};
			oData['font-family'] = this.pageSettings.colons.font || "serif";
			oData['font-size'] = this.pageSettings.colons.size? `${this.pageSettings.colons.size}px` : "12px";
			return oData;
		},
		title_style: function(){
			let oData = {};
			oData['font-family'] = this.pageSettings.title.font || "CyrillicGoth";
			oData['font-size'] = this.pageSettings.title.size? `${this.pageSettings.title.size}px` : "60px";
			return oData;
		},
		
		news_list: function(){
			let aList = [];
			switch(this.raw.template) {
				case "temp_4col":
					aList = aList.concat(this.raw.list);
					while(aList.length < 10) {
						aList.push({
							header: "Нечто иное",
							text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? ",
							img: "3"
						});
					}	
					;
					break
				default: 
					aList = aList.concat(this.raw.list);
			}
			return aList;
		},
		
		news_Main: function(){			
			return (this.raw.list && this.raw.list.length)? this.raw.list[0] : {};
		},
		news_Other: function(){
			return this.raw.list.slice(1);
		},
		news_Side: function(){
			
		},
		
		news_after_first: function(){
			if(this.raw.main && this.raw.main.length>1) {
				return this.raw.main.slice(1);
			} else {
				return [];
			}
		},
		
		pretty_date: function(){
			if(!this.raw.date) {
				return '';
			}
			
			try{
				let oDate = new Date(this.raw.date);
				let options = {
					year: "numeric",
					month: "long",
					day: "numeric"
				}
				return oDate.toLocaleDateString('ru-RU', options)
			} catch (error) {
				return '';
			}
		},
		
		pretty_number: function(){
			if(!this.raw.number) {
				return '';
			}
			
			return `ВЫПУСК ${this.raw.number}`;
		},
		
		result_show: function(){
			return !!(this.result_img.src && this.result_img.src.length>0);
		}
	},
	mounted: function() {
		//this.get_real_news();
		this.prepare_fish();
		setTimeout(()=>{this.bAppIsReady = true}, 10);
	},
	methods: {
		getRandomItemData: function(){
			let sSource = this.raw.lorem;
			let aPhrases = shuffle((sSource).split(".").map(el=>el.trim()));
			let nLimit = aPhrases.length;
			
			let aNews = [];
			let aSides = [];
			
				let aParts = aPhrases.splice(0, randd(3,9))
				let sText = aParts.join(" ");
				let sHeader = aPhrases[1].split(/[^\d\w]/).slice(0,randd(2,4)).join(" ");
				let oItem = {
					id: getGUID(),
					header: sHeader,
					text: sText,
					img: "",
					
					header_font: "serif",
					header_size: null,
					text_font: "serif",
					text_size: null,
				};				
			
			
			return oItem;
		},
		prepare_fish: function(){
			let sSource = this.raw.lorem;
			let aPhrases = shuffle((sSource+sSource+sSource).split(".").map(el=>el.trim()));
			let nLimit = aPhrases.length;
			
			let aNews = [];
			let aSides = [];
			for(let i=0; i<nLimit && i<4; i++) {
				let aParts = aPhrases.splice(0, randd(3,9))
				let sText = aParts.join(" ");
				let sHeader = aPhrases[1].split(/[^\d\w]/).slice(0,randd(2,4)).join(" ");
				let oItem = {
					id: getGUID(),
					header: sHeader,
					text: sText,
					img: "",
					
					header_font: "serif",
					header_size: 25,
					text_font: shuffle(["serif", "FlowRounded-Regular"])[0],
					text_size: 14,
				};
				this.raw.list.push(oItem);
				//this.raw.main.push(oItem);
				
			}
			
			
			for (let i=0; i<nLimit && i<3; i++) {
				let aParts = aPhrases.splice(0, randd(2,4))
				let sText = aParts.join(" ");
				let sHeader = aPhrases[1].split(/[^\d\w]/).slice(0,randd(2,4)).join(" ");
				let oItem = {
					id: getGUID(),
					header: sHeader,
					text: sText,
					img: "",
					
					header_font: "serif",
					header_size: 23,
					text_font: shuffle(["serif", "FlowRounded-Regular"])[0],
					text_size: 12
				};
				this.raw.side.push(oItem);
			}
		},
		get_real_news: async function(){
			// https://newsapi.org/v2/everything?q=Apple&from=2021-11-19&sortBy=popularity&apiKey=API_KEY
			var d = new Date();
			d.setMonth(d.getMonth() - 1);
			let result = d.toLocaleDateString("en-GB", { // you can use undefined as first argument
				year: "numeric",
				month: "2-digit",
				day: "2-digit",
			});
			// console.log(result); // outputs “01/03/2018”
			let sDate = result.split("/").reverse().join("-");// `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
			let oParams = {
				q: "economics",
				from: sDate,
				sortBy: "popularity",
				apiKEY: this.oConfig.news_api_key
			};
			let aParams = [];
			for (let key in oParams) {
				aParams.push(`${key}=${oParams[key]}`);
			}
			sURL = `https://newsapi.org/v2/everything?${aParams.join("&")}`;
			let response = await fetch(sURL);

			if (response.ok) { // если HTTP-статус в диапазоне 200-299
				// получаем тело ответа (см. про этот метод ниже)
				let json = await response.json();
			} else {
				alert("Ошибка HTTP: " + response.status);
			}
		},
		
		onInitNewsItem: function(oItem){
			//element = this.$el;
		},
		
		add_news: function(){
			let sHeader = this.editor.header, 
			sText = this.editor.text,
			sImg = this.editor.img;
			
			let oItem = {
				header: sHeader,
				text: sText,
				img: sImg
			};
			
			this.news.list.push(oItem);
		},
		
		getItemById: function(sId){
			let oNewsItem = 
				this.raw.list.find(el => el.id == sId) ||
				this.raw.side.find(el => el.id == sId);
				
			return oNewsItem;
		},
		setItemById: function(sId, oData){
			let nIndex = this.raw.list.findIndex(el => el.id == sId);
			let bRet = false;
			
			if(nIndex > -1) {
				for (let key in oData) {
					this.raw.list[nIndex][key] = oData[key];
				}
				
				bRet = true;
			}
			
			nIndex = this.raw.side.findIndex(el => el.id == sId);

			if(nIndex > -1) {
				for (let key in oData) {
					this.raw.side[nIndex][key] = oData[key];
				}
				
				bRet = true;
			}
			
			return bRet;
		},
		
		save_news: function(){
			//let oNewsItem = this.getItemById(this.editor.id);
			let sId = this.editor.id;
			
			this.setItemById(sId, this.editor);
			
			//debugger;
		},
		cancel_news: function(){
			for (let key in this.editor) {
				this.editor[key] = "";
			}
		},
		remove_news: function(){
			let sId = this.editor.id;
			
			this.raw.list = this.raw.list.filter(el=>el.id!=sId);
			this.raw.side = this.raw.side.filter(el=>el.id!=sId);
		},
		onRemoveImage: function(){
			this.editor.img = "";
			this.setItemById(this.editor.id, {img: ""});
		},
		randomise_news: function(){
			let oNew = this.getRandomItemData();
			let oData = {
				header: oNew.header,
				text: oNew.text,
			};
			this.setItemById(this.editor.id, oData);
			this.editor.header = oNew.header;
			this.editor.text = oNew.text;
		},
		
		onEditNews: function(oItem){
			this.editor.id = oItem.id;
			this.editor.header = oItem.header;
			this.editor.author = oItem.author;
			this.editor.text = oItem.text;
			this.editor.img = oItem.img;
			
			this.editor.header_font = oItem.header_font;
			this.editor.header_size = oItem.header_size;
			this.editor.text_font = oItem.text_font;
			this.editor.text_size = oItem.text_size;
			
		},
		onSaveEditNews: function(oParams){
			
			let oData = {};
			oData[oParams.key] = oParams.value;
			this.setItemById(oParams.id, oData);
		},
		onSaveFromEditor: function(){
			let oData = {};
			let aFields = [
				'header',
				'author',
				'text',
				'img',
			];
			aFields.forEach(el=>{
				if(el && this.editor[el]) {
					oData[el] = this.editor[el].replaceAll('\n', '<br>');
				}
				
			});
			
			this.setItemById(this.editor.id, oData);
		},
		
		onImageFromUrl: function(oEvent){
			
			// toDataURL(
				// `https://cors-anywhere.herokuapp.com/`+this.editor.img,
				// (dataUrl) => {
					// console.log('RESULT:', dataUrl);
					
					// let oData = {};
					// oData.img = dataUrl;
					// this.setItemById(this.editor.id, oData);
				// }
			// )
			if(this.editor.img) {
				ImagetoDataURL(this.editor.img)
          .then(dataUrl => {
              console.log('DataURL:', dataUrl)
              //document.getElementById("Image1").src = dataUrl;
							
							//debugger;
							
						let oData = {};
						oData.img = dataUrl;
						this.setItemById(this.editor.id, oData);
          })
					.catch(error => {
						console.dir(error);
					}) 
			}
			
			
		},
		onImagePaste: function(oEvent){
			for (var i = 0 ; i < oEvent.clipboardData.items.length && i<1; i++) {
				var item = oEvent.clipboardData.items[i];
				console.log("Item type: " + item.type);
				if (item.type.indexOf("image") != -1) {
					//uploadFile(item.getAsFile());
					//debugger;
						
					let sUrl = URL.createObjectURL(item.getAsFile());
										
					toDataURL(
						sUrl,
						(dataUrl) => {
							console.log('RESULT:', dataUrl);
							
							let oData = {};
							oData.img = dataUrl;
							this.editor.img = dataUrl;
							this.setItemById(this.editor.id, oData);
						}
					)
						
						
				} else if (item.type.includes("text/plain")){
					
				} else {
						alert("Попробуйте вставить ссылку на изображение, или открыть через диалог загрухки файла")
						console.log("Discarding non-image paste data");
				}
	    }
		},
		
		onImageSelected: function(oEvent){
			debugger;
			let oFile = oEvent.target.files[0];
			
			var reader = new FileReader();
			reader.readAsDataURL(oFile);
			reader.onload = () => {
				let dataUrl = reader.result;
				console.log(reader.result);
				
				let oData = {};
				oData.img = dataUrl;
				this.editor.img = dataUrl;
				this.setItemById(this.editor.id, oData);
			};
			reader.onerror = function (error) {
				console.log('Error: ', error);
			};
			
		},
		
		onRandom: function(oItem){
			//let oNewsItem = this.getItemById(oItem.id);
			let oNew = this.getRandomItemData();
			
			this.setItemById(oItem.id, oNew);
			
		},
		
		clear_colons_font: function(){
			this.pageSettings.colons.font= "";
		},
		clear_title_font: function(){
			this.pageSettings.title.font= "";
		},
		
		clear_header_font: function(){
			this.editor.header_font= "";
		},
		clear_text_font: function(){
			this.editor.text_font= "";
		},
		
		editor_header_font_changed: function(oEvent){
			//debugger;
			let sNewVal = oEvent.target.value;
			
			let sId = this.editor.id;
			
			this.setItemById(sId, {"header_font": sNewVal});
			this.editor.header_font = sNewVal;
		},
		editor_text_font_changed: function(oEvent){
			//debugger;
			let sNewVal = oEvent.target.value;
			
			let sId = this.editor.id;
			
			this.setItemById(sId, {"text_font": sNewVal});
			this.editor.text_font = sNewVal;
		},
		editor_header_size_changed: function(oEvent){
			//debugger;
			let sNewVal = Number(oEvent.target.value);
			
			let sId = this.editor.id;
			
			this.setItemById(sId, {"header_size": sNewVal});
			this.editor.header_size = sNewVal;
		},
		editor_text_size_changed: function(oEvent){
			//debugger;
			let sNewVal = Number(oEvent.target.value);
			
			let sId = this.editor.id;
			
			this.setItemById(sId, {"text_size": sNewVal});
			this.editor.text_size = sNewVal;
		},
		
		onRemove: function(oItem){
			let sId = oItem.id;
			
			this.raw.list = this.raw.list.filter(el=>el.id!=sId);
			this.raw.side = this.raw.side.filter(el=>el.id!=sId);
		},
		add_in_main: function(){
			let sIndex = this.raw.list.length;
			let oItem = this.getRandomItemData();
			this.raw.list.push(oItem);
		},
		add_in_side: function(){
			let sIndex = this.raw.side.length;
			let oItem = this.getRandomItemData();
			this.raw.side.push(oItem);
			
		},
		
		startDrag (evt, item) {
			evt.dataTransfer.dropEffect = 'move'
			evt.dataTransfer.effectAllowed = 'move'
			evt.dataTransfer.setData('itemID', item.id)
		},
		onDrop (evt, list) {
			const itemID = evt.dataTransfer.getData('itemID')
			const item = this.items.find(item => item.id == itemID)
			item.list = list
		},
		
		
		save2pic: function(){
			let that = this;
			
			let oFrom = (this.editor.id && this.editor.id.length>0)? document.querySelector("#result_source") : document.querySelector("#result_source");
			
			domtoimage.toPng(oFrom)		 
				.then(function (dataUrl) {
					// var img = new Image();
					// img.src = dataUrl;
					//document.body.appendChild(img);
					//debugger;
					//document.querySelector('#result_image').appendChild(img);
					console.log(dataUrl);
					let aParts = dataUrl.split(",");
					that.result_img.start = aParts[0];
					that.result_img.src = aParts[1];
					
					setTimeout(()=>{
						
						document.querySelector('#result_image').scrollIntoView({
								behavior: 'smooth'
						});
						
					}, 10);
				})
				.catch(function (error) {
						console.error('oops, something went wrong!', error);
				});
		},
		
		show_info: function(){
			this.bModalWinShow = true;
		},
		closeMosWin: function(){
			this.bModalWinShow = false;
		},
		print: function(){
			window.print();
		}
		
	}
});