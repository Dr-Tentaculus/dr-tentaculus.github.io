document.addEventListener('DOMContentLoaded', function(){

Vue.component('modalWin', {
	props: {
		title: {
			type: String,
			default: ""
		},
		content: {
			type: String,
			default: ""
		},
		width: {
			type: String,
			default: ""
		}
	},
	data: function(){
		return {
			inner_title: ""
		};
	},
	methods: {
		close: function(){
			this.$emit('close');
		}
	},
	computed: {
		_title: function(){
			return this.inner_title || this.title || "";
		},
		_content: function(){
			let sInner = this.content.trim();
			if(sInner.toLowerCase().indexOf("<h1>") == 0) {
				let nIndex = sInner.toLowerCase().indexOf("</h1>");
				this.inner_title = sInner.slice(4, nIndex);
				return sInner.slice(nIndex);
			}
			return sInner;
		},
		_width: function(){
			return this.width || "95%";
		},
		_style: function(){
			return `max-width: ${this._width}`;
		}
	},

	template: `<div class="mod_win_wrapper" style='' @click="close" @scroll.stop>
	<div class="mod_win" @click.stop :style='_style'>
		<div class='header'>
			<h1>{{_title}}</h1>
			<span class="bCloseInfoWin" @click="close">×</span>		
		</div>
		<div class="mod_win_content" >
			<slot>
			<div v-html="_content"> 
			</div>
			</slot>
		</div>	
	</div>
</div>`
});	
	
Vue.component('variants', {
	props: {	
		selected: {
			type: String,
			default: ""
		},
		items: {
			type: Array,
			default: function(){return []}
		}
		
	},
	data: function(){
		return {
			open: false
		};
	},
	methods: {
		click: function(oEvent){
			this.open = !this.open;
		},
		select: function(oEvent){
			this.open = false;
			this.$emit('select', oEvent.name);
		}
	},
	computed: {
		title: function(){
			let oSelected = this.items.find(el=>el.name == this.selected);
			return oSelected? oSelected.title : "[Выберите вариант]";
		},
		style: function(){
			return this.open? "" : "max-height: 0";
		}
	},
	created: function(){
		
	},
	template: `<a href="#" class='customSelect' @focusout="open = false">
	<div class="label bt" style="min-width:15em" @click="click" >{{title}}</div>
	<ul class="list" :style="style" >
		<li 
			v-for="item in items"
			class="option"
			@click="select(item)">
			{{item.title}}
		</li>
	</ul>
</a>`
});


Vue.component('combo_section', {
	props: {			
		selected: {
			type: Array,
			default: function(){return []}
		},	
		race: {
			type: Object
		}
		
	},
	data: function(){
		return {
			open: true
		};
	},
	methods: {
		subrace_click: function(race, subrace){
			this.$emit('subselect', {race: race, subrace: subrace});
		},
		race_click: function(race){
			this.$emit('select', race);
		}
	},
	computed: {
		_section: function(){
			return this.selected.find(el=>el.key == this.race.key)?.sub || [];
		},
		sectionChecked: function(){
			return this._section.length == this.race.sub.length;
		},
		sub_selected: function(){
			return this._section;
		},
		style: function(){
			return (this.race.sub && this.race.sub.length>1 && this.open)? "" : "max-height: 0";
		},
		_showMinMax: function(){
			return this.race.sub.length>1;
		},
		_showSub: function(){
			return this.race.sub && this.race.sub.length>1 && this.open;
		}
		
	},
	created: function(){
		
	},
	template: `<div class="selectSection">
			<span :class="{minimax: true,  min: open, max: !open}" v-if="_showMinMax" @click="open = !open"></span>
			<div>
				<input :checked="sectionChecked"  type="checkbox" :value="race.key">
				<label data-hierarchy="root"  @click="race_click(race.key)">
					{{race.title}} 
				</label>
				<ul :style="style" class='sectionList'>
					<li v-for="subrace in race.sub">
						<input type="checkbox" :checked="sub_selected.includes(subrace.key)" :value="subrace.key" :id='"ch_"+subrace.key' >
						<label data-hierarchy="child" @click="subrace_click(race.key, subrace.key)">
							 {{subrace.title}}
						</label>
					</li>
				</ul>
			</div>
		</div>`
});
	

Vue.component('combo', {
	props: {	
		items: {
			type: Array,
			default: function(){return []}
		},
		selected: {
			type: Array,
			default: function(){return []}
		}
		
	},
	data: function(){
		return {
			open: true
		};
	},
	methods: {
		subrace_click: function(oData){
			this.$emit('subselect', oData);
		},
		race_click: function(race){
			this.$emit('select', race);
		}
	},
	computed: {
		title: function(){
			let aTitle= this.items.filter(el=>el.selected).map(el=>el.title);
			return aTitle.length? aTitle.join(", ") : "Выберите список";
		},
		style: function(){
			return this.open? "" : "max-height: 0";
		}
	},
	created: function(){
		
	},
	template: `<div id="selector" class="combo_box">
	<div class="combo_box_title" data-val="dwarf normal" @click="open = !open">{{title}}</div>
	<div class="combo_box_content" :style="style">
		<combo_section 
			v-for="race in items"
			:key="race.key"
			:race="race"
			:selected="selected"
			@select="race_click"
			@subselect="subrace_click"			
			>
		</combo_section>
	</div>
	<div class="combo_box_arrow" @click="open = !open">
		<i v-show="open" class="fa fa-arrow-up"> </i>
		<i v-show="!open" class="fa fa-arrow-down"> </i>
	</div>
</div>`
});
	
	
var app = new Vue({
	el: '#app',
	data: {
		structure: [],
		variants: [],
		selected_variant: "",
		
		aSelected: [],
		
		//combo: [],
		//elected_races: [],
		//selected_subraces: [],
		names: [],
		saved_names: [],
		
		oConfig: {},
		sConfigName: "configNames",
		
		sMessageLink: "/message/?theme=dndnames",
		sHomeLink: "/",
		
		bModalInfoShow: false,
		sModalInfoCont: "",
		bModalAddShow: false,
		
		sСustomNamesString: ""
	},

	computed: {
		selected_name_list: function(){
			return this.structure.find(el=>el.key == this.selected_variant);
		},
		combo: function(){
			let oList = this.selected_name_list;
			return oList? oList.sub : [];
		},
		disable_random: function(){
			return this.aSelected.length<1;
		}
	},
	mounted: function() {
		this._loadFromLib();
		
		let oLoader = document.querySelector("#loader_overflow");
		if(oLoader) {
			oLoader.classList.add("hidden");
			//oLoader.style.opacity = 0;
			setTimeout(function(){oLoader.remove()}, 600);
		}
		this.bAppIsReady = true;		
		
		
		this.variants = this.structure.map(el=> ({name: el.key, title: el.title}));
		this.selected_variant = "names_dnd";//this.variants[0].name;
		//window.addEventListener('hashchange',()=>{this.getHash();})
		
		this.saved_names = this.getConfig("aNameLog") || [];
		
		if(location.protocol=="file:"){
			this.sMessageLink = "https://tentaculus.ru/message/?theme=dndnames";
			this.sHomeLink = "https://tentaculus.ru/";
		}
		
		this.sModalInfoCont = document.querySelector("#info_text").innerHTML;
		//document.querySelector("#info_text").remove();
		
		this.getHash();
	},
	methods: {
		_loadFromLib: function(){
			this.structure = lib_random_names.getStructure();
		},
		select_variant: function(key){
			this.selected_variant = key		
			this.aSelected=[];
			
			this.updateHash();
		},
	
		
		combo_select: function(sKey){		
			let oCurrentNode = this.aSelected.find(el=>el.key==sKey); 		
			if(oCurrentNode) {
				let oGlobalNode = this.selected_name_list.sub.find(el=>el.key==sKey);
				// если выделены все, какие есть
				if(oCurrentNode.sub.length == oGlobalNode.sub.length){
					this.aSelected = this.aSelected.filter(el=>el.key!=sKey);
				} else {
					oCurrentNode.sub = oGlobalNode.sub.map(el=>el.key);
				}
			} else {
				let aSubs = this.selected_name_list.sub.find(el=>el.key==sKey).sub.map(el=>el.key);
				this.aSelected.push({key:sKey, sub: aSubs});
			}
			
			this.updateHash();
		},
		
		combo_subselect: function({race, subrace}){
			let oRace = this.aSelected.find(el=>el.key==race);
			
			if(oRace) {
				if(oRace.sub.find(el=>el==subrace)) {
					oRace.sub = oRace.sub.filter(el=>el!=subrace);
				} else {
					oRace.sub.push(subrace);
				}
			} else {
				this.aSelected.push({key:race, sub: [subrace]});
			}
			
			this.updateHash();
		},
		
		_setSexyIco: function(aList){
			aList.forEach(oItem=> {
				switch(oItem.sex){
					case "male": oItem.sex = '<i title="Мужское имя" style="font-size: 80%" class="fa fa-mars fa-fw" aria-hidden="true"></i>'; break;
					case "female": oItem.sex = '<i title="Женское имя" class="fa fa-venus fa-fw" aria-hidden="true"></i>'; break;
					default: oItem.sex = '<i title="Универсальное или неопределенное имя" class="fa fa-genderless fa-fw" aria-hidden="true"></i>'
				} 
			});
			return aList;
		},
		generate: function(){

			let sList = this.selected_variant;
			aPath = [];
			this.aSelected.forEach(oRace => {
				let sRace = oRace.key;
				oRace.sub.forEach(sSubRace => {
					aPath.push(`${sRace}/${sSubRace}`);
				});
			})
			let nCount = 5;
			this.names = this._setSexyIco(lib_random_names.getManyFromList(sList, aPath, nCount));
		},
		
		save_name: function(oName){
			if(this.saved_names.length>19){
				this.saved_names.pop();
			}
			this.saved_names.unshift(oName);
			this.setConfig("aNameLog", this.saved_names);
		},
		remove_name: function(oName){
			this.saved_names = this.saved_names.filter(el=>el.name!=oName.name);
			this.setConfig("aNameLog", this.saved_names);
		},
		clear_saved_names: function(){
			this.saved_names = [];
			this.setConfig("aNameLog", this.saved_names);
		},
		
		setConfig: function (prop, val) {
			if(prop && val != undefined && this.oConfig) {
				this.oConfig[prop] = val;
				localStorage.setItem(this.sConfigName, JSON.stringify(this.oConfig));
			}
		},
		getConfig: function (prop) {
			this.oConfig = JSON.parse(localStorage.getItem(this.sConfigName)) || {};
			if(prop!=undefined) {
				return localStorage.getItem(this.sConfigName)? this.oConfig[prop] : [];
			}
			return false;
		},
		
		openModWin: function(){
			this.bModalInfoShow = true;
		},
		closeModWin: function(){
			this.bModalInfoShow = false;
		},
		openAddWin: function(){
			this.bModalAddShow = true;
		},
		closeAddWin: function(){
			this.bModalAddShow = false;
		},
		
		custom_names_input: function(oEvent){
			this.sСustomNamesString = oEvent.target.innerText;
		},
		setCustomNames: function(){			
			lib_random_names.addCustom(this.selected_variant, this.sСustomNamesString);
			this._loadFromLib();
			this.closeAddWin();
		},
		
		updateHash: function() {
			var aHash = [];
			if(this.selected_variant) {
				aHash.push(`list=${this.selected_variant}`);
			}			
			
			if(this.aSelected.length>0) {
				let sRace = "";
				let aCombo=[];
				this.aSelected.forEach(function(oRace){
					sRace = `${oRace.key}|${oRace.sub.join(",")}`;
					aCombo.push(sRace);
				});
				aHash.push(`data=${aCombo.join(";")}`);
			}
			
			if(aHash.length>0) {
				window.location.hash = aHash.join("&");
			} else {
				this.removeHash();
			}
		},
		removeHash: function(){
			history.pushState("", document.title, window.location.pathname + window.location.search);
			return false;
		},
		getHash: function() {
			var sHash = window.location.hash.slice(1); // /archive#q=Item_name
			sHash = decodeURIComponent(sHash);
			if(!sHash) {
				return;
			}
			var oHash = {};
			let that = this;
			let aHash = sHash.split("&");
			aHash.forEach(function(sItem){
				let aData = sItem.split("=");
				let sKey = aData[0];
				let aValues = aData[1].split(";");
				
				switch(sKey){
					case "list":
						that.selected_variant = aValues[0];
						break;
					case "data": // human|casual,atlant,rus;elf|light
						aValues.forEach(function(oRace){
							oRace = oRace.split("|");
							that.aSelected.push({key: oRace[0], sub: oRace[1].split(",")})
						});
						
						break;
				}
			});
			
			this.generate();			
		}
	}
});

});