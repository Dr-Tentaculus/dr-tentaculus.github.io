document.addEventListener('DOMContentLoaded', function(){
	
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
			return this.open? "display: block" : "display: none";
		}
	},
	created: function(){
		
	},
	template: `<div class='customSelect' @blur="open = false">
	<div class="label bt" style="min-width:15em" @click="click">{{title}}</div>
	<ul class="list" :style="style">
		<li 
			v-for="item in items"
			class="option"
			@click="select(item)">
			{{item.title}}
		</li>
	</ul>
</div>`
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
		sectionChecked: function(){
			return !!this.selected.find(el=>el.key == this.race.key);
		},
		style: function(){
			return this.open? "display: flex" : "display: none";
		},
		_showSub: function(){
			return this.race.sub && this.race.sub.length>0;
		}
		
	},
	created: function(){
		
	},
	template: `<div class="selectSection">
			<span class="{minimax: true,  min: open, max: !open}" @click="open = !open"></span>
			<div v-show="open">
				<input :checked="sectionChecked"  type="checkbox" :value="race.key">
				<label data-hierarchy="root"  @click="race_click(race.key)">
					{{race.title}} 
				</label>
				<ul v-if="_showSub">
					<li v-for="subrace in race.sub">
						<input type="checkbox" :checked="subrace.selected" :value="subrace.key" :id='"ch_"+subrace.key' >
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
			return this.open? "display: flex" : "display: none";
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
		selected_races: [],
		selected_subraces: [],
		
	},

	computed: {
		selected_name_list: function(){
			return this.structure.find(el=>el.key == this.selected_variant);
		},
		combo: function(){
			let oList = this.selected_name_list;
			return oList? oList.sub : [];
		}
	},
	mounted: function() {
		let oLoader = document.querySelector("#loader_overflow");
		if(oLoader) {
			oLoader.classList.add("hidden");
			//oLoader.style.opacity = 0;
			setTimeout(function(){oLoader.remove()}, 600);
		}
		this.bAppIsReady = true;		
		
		this.structure = lib_random_names.getStructure();
		this.variants = this.structure.map(el=> ({name: el.key, title: el.title}));
		this.selected_variant = this.variants[0].name;
		//window.addEventListener('hashchange',()=>{this.getHash();})
	},
	methods: {
		select_variant: function(key){
			this.selected_variant = key			
		},
		
		_setComboSubselect: function(sRoot, bSelect){
			let oRoot = this.combo.find(el=>el.key==sRoot);
			if(oRoot && oRoot.sub) {

				let aKeys = oRoot.sub.map(el=>el.key);
				if(bSelect){
					aKeys = aKeys.filter(sKey=>!this.selected_subraces.includes(sKey));
					this.selected_subraces = this.selected_subraces.concat(aKeys);
				} else {
					this.selected_subraces = this.selected_subraces.filter(sSub => !this.selected_subraces.includes(sSub));
				}
			}
		},
		_checkComboSelect: function(sChild){
			let oRoot = this.combo.find(function(el){
				return el.sub && el.sub.filter(function(item){
					return item.key==sChild;
				}).length>0
			});

			if(oRoot && oRoot.sub) {
				let sRoot = oRoot.key;
				let aKeys = oRoot.sub.map(el=>el.key);
				if(aKeys.filter(sKey=>this.selected_subraces.includes(sKey)).length == aKeys.length) {
					this.selected_races.push(sRoot);
				} else {
					this.selected_races = this.selected_races.filter(el=>el!=sRoot);
				}
				
			}
		},
		
		combo_select: function(sKey){			
			if(this.aSelected.find(el=>el.key==sKey)) {
				this.aSelected = this.aSelected.filter(el=>el.key!=sKey);
			} else {
				this.aSelected.push({key:sKey, sub:[]});
			}
		},
		
		combo_subselect: function({race, subrace}){
			let oRace = this.aSelected.find(el=>el.key==race);
			
			if(oRace.sub.find(el=>el.key==sKey)) {
				oRace.sub = oRace.sub.filter(el=>el.key!=sKey);
			} else {
				oRace.sub.push({key:sKey});
			}
		},
		
		updateHash: function() {
			var aHash = [];
			if(this.checked.main) {
				aHash.push(this.checked.main);
			}
			if(this.checked.section) {
				aHash.push(this.checked.section);
			}
			if(this.checked.subsection) {
				aHash.push(this.checked.subsection);
			}
			
			if(aHash.length>0) {
				window.location.hash = aHash.join("|");
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
			var oHash = {};
			
			let aHash = sHash.split("|");
			if(aHash[0]) {
				this.checked.main = aHash[0];
			}
			if(aHash[1]) {
				this.checked.section = aHash[1];
			}
			if(aHash[2]) {
				this.checked.subsection = aHash[2];
			}
			
		}
	}
});

});