function randd(min, max) {
  return Math.floor(arguments.length > 1 ? (max - min + 1) * Math.random() + min : (min + 1) * Math.random());
};

/*

oInitiativeTrackerData = {
	list: [
		{
			color: "color_5"
			ico: "ico_04_14"
			id: "1533825863452"
			initiative: "5"
			name: ""
		}
	],
	
	history: [
		{
			color: "color_0"
			ico: "ico_02_8"
			id: 1533848058487
			initiative: "20"
			name: ""
		}
	]
}

*/
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
	<div class="mod_win" @click.stop>
		<span class="bCloseInfoWin" @click="close">×</span>
		<div class="mod_win_content">
			<slot name='content'>
				
			</slot>
		</div>	
	</div>
</div>`
});

Vue.component('queueItem', {
	props: {
		color: {
			type: String,
			default: ""
		},
		initiative: {
			type: Number,
			coerce: function(str) { console.log('12'); return Number(str)},
			default: 0
		},
		id: {
			type: String,
			default: ""
		},
		ico: {
			type: String,
			default: ""
		},
		name: {
			type: String,
			default: ""
		}
	},
	data: function(){
		return {
			
		};
	},
	methods: {
		remove: function(){
			this.$emit('remove');
		},
		edit: function(){
			this.$emit('edit');
		}
	},
	computed: {
		
	},

	template: `<li class="place" style="" @dblclick="edit">
	<div class="i_item">          
		<div class="ico_bord" :data-color="color">            
			<div class="ico" :data-ico="ico"></div>            
			<div class="initiative">{{initiative}}</div>          
		</div>          
		<div class="info">            
			<div class="minus" title="Убрать" @click='remove'>-</div>            
			<div class="name" :data-id="id">{{name}}</div>          
		</div>        
	</div>
</li>`
});

Vue.component('adder', {
	props: {
		
	},
	data: function(){
		return {
			
		};
	},
	methods: {
		press: function(){
			this.$emit('press');
		}
	},
	computed: {
		
	},

	template: `<li class="separator" @click='press'>      
	<div class="simbol" title="Добавить">+</div>    
</li>`
});

Vue.component('tabs', {
	props: {
		
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

	template: `<div class='tabs'>
		<slot>
		</slot>
</div>`
});

Vue.component('tab', {
	props: {
		title: {
			type: String,
			default: ""
		},
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

	template: `<div class='tab'>
	<div>{{title}}</div>
	<div>
		<slot></slot>
	</div>
</div>`
});



var app = new Vue({
	el: '#app',
	data: {
		data: {
			list: [],
			history: [],
			round: 1
		},
		
		aColors: [
			{
				color: 'color_0'
			},
			{
				color: 'color_1'
			},
			{
				color: 'color_2'
			},
			{
				color: 'color_3'
			},
			{
				color: 'color_4'
			},
			{
				color: 'color_5'
			},
			{
				color: 'color_6'
			},
			{
				color: 'color_7'
			},
			{
				color: 'color_8'
			},
			{
				color: 'color_9'
			},
			{
				color: 'color_10'
			},
			{
				color: 'color_11'
			},
		],
		aIcons: [
			{
				icon: 'ico_0'
			},
			{
				icon: 'ico_1'
			},
			{
				icon: 'ico_2'
			},
			{
				icon: 'ico_3'
			},
			{
				icon: 'ico_4'
			},
			{
				icon: 'ico_5'
			},
			{
				icon: 'ico_6'
			},
			{
				icon: 'ico_7'
			},
			{
				icon: 'ico_8'
			},
			{
				icon: 'ico_9'
			},
			{
				icon: 'ico_10'
			},
			{
				icon: 'ico_12'
			},			
			{
				icon: 'ico_13'
			},			
			{
				icon: 'ico_14'
			},			
			{
				icon: 'ico_15'
			},			
			{
				icon: 'ico_02_0'
			},			
			{
				icon: 'ico_02_1'
			},			
			{
				icon: 'ico_02_2'
			},			
			{
				icon: 'ico_02_3'
			},	
			{
				icon: 'ico_02_4'
			},	
			{
				icon: 'ico_02_5'
			},	
			{
				icon: 'ico_02_6'
			},	
			{
				icon: 'ico_02_7'
			},	
			{
				icon: 'ico_02_8'
			},	
			{
				icon: 'ico_02_9'
			},	
			{
				icon: 'ico_02_10'
			},
			{
				icon: 'ico_02_11'
			},
			{
				icon: 'ico_02_12'
			},
			{
				icon: 'ico_02_13'
			},
			{
				icon: 'ico_02_14'
			},
			{
				icon: 'ico_02_15'
			},
			{
				icon: 'ico_04_0'
			},
			{
				icon: 'ico_04_1'
			},
			{
				icon: 'ico_04_2'
			},
			{
				icon: 'ico_04_3'
			},
			{
				icon: 'ico_04_4'
			},			
			{
				icon: 'ico_04_5'
			},			
			{
				icon: 'ico_04_6'
			},			
			{
				icon: 'ico_04_7'
			},			
			{
				icon: 'ico_04_8'
			},			
			{
				icon: 'ico_04_9'
			},
			{
				icon: 'ico_04_10'
			},
			{
				icon: 'ico_04_11'
			},
			{
				icon: 'ico_04_12'
			},
			{
				icon: 'ico_04_13'
			},
			{
				icon: 'ico_04_14'
			},
			{
				icon: 'ico_04_15'
			},
			{
				icon: 'ico_03_0'
			},
			{
				icon: 'ico_03_1'
			},
			{
				icon: 'ico_03_2'
			},
			{
				icon: 'ico_03_3'
			},
			{
				icon: 'ico_03_4'
			},
			{
				icon: 'ico_03_5'
			},
			{
				icon: 'ico_03_6'
			},
			{
				icon: 'ico_03_7'
			},
			{
				icon: 'ico_03_8'
			},
			{
				icon: 'ico_03_9'
			},
			{
				icon: 'ico_03_10'
			},
			{
				icon: 'ico_03_11'
			},
			{
				icon: 'ico_03_12'
			},
			{
				icon: 'ico_03_13'
			},
			{
				icon: 'ico_03_14'
			},			
			{
				icon: 'ico_03_15'
			},			
			{
				icon: 'ico_05_1'
			},
			{
				icon: 'ico_05_2'
			},
			{
				icon: 'ico_05_3'
			},
			{
				icon: 'ico_05_4'
			},
			{
				icon: 'ico_05_5'
			},
			{
				icon: 'ico_05_6'
			},
			{
				icon: 'ico_05_7'
			},
			{
				icon: 'ico_05_8'
			},
			{
				icon: 'ico_05_9'
			},
			{
				icon: 'ico_05_10'
			},
			{
				icon: 'ico_05_11'
			},
			{
				icon: 'ico_05_12'
			},
			{
				icon: 'ico_05_13'
			},
			{
				icon: 'ico_05_14'
			},
			{
				icon: 'ico_05_15'
			},
			
		],
		
		editor: {
			name: "",
			ico: "",
			color: "",
			initiative: 0,
			index: 0,
			mode: 'add'
		},
		
		tabs: {
			selected: "editor"
		},
		
		animate: false,
		
		oConfig: {},
		
		bModalWinShow: false
	},

	computed: {
		selected: function(){
			let oItem = (this.data.list && this.data.list.length)? this.data.list[0] : {};
			return oItem;
		},
		
		firsts: function(){
			if(this.data.list && this.data.list.length) {
				let aList = [this.data.list[0]];
				aList.push(this.data.list[1]?this.data.list[1]:this.data.list[0]);
				return aList;
			} else {
				return [];
			}
		},
		
		fullList: function(){
			
			return (this.data.list && this.data.list.length>0)? [{type: 'adder'}]
			.concat(
				this.data.list.slice(1).map(el=> [
				{
					type: 'queueItem',
					props: el
				}, 
				{
					type: 'adder', 
					props: {
					
					}
				}])
			).flat(2) 
			:
			[{type: 'adder'}];
		}
		
	},
	mounted: function() {
		this.loadConfigData();			
				
		this.bAppIsReady = true;
	},
	methods: {
		listClick: function(nIndex, sType){
			//debugger;
			if(sType == 'adder') {
				this.addItem(nIndex);
			}
		},
		
		listRemove: function(nIndex, sType){
			//debugger;
			if(sType == 'queueItem') {
				this.removeItem(nIndex);
			}
		},
		listEdit: function(nIndex, sType){
			//debugger;
			if(sType == 'queueItem') {
				this.editItem(nIndex);
			}
		},
		addItem: function(nIndex){
			
			this.editor.name = "";
			this.editor.ico = "ico_0";
			this.editor.color = "color_0";
			this.editor.initiative = 0;
			this.editor.index = ~~(nIndex/2);
			this.editor.mode = 'add';
			
			this.tabs.selected = "editor";
			
			this.bModalWinShow = true;
		},
		removeItem: function(nIndex){		
			let index = ~~(nIndex/2);
			let oItem = this.data.list[index];
			this.addHistory(oItem);
			this.data.list.splice(index, 1);
			this.setConfig('list', this.data.list);
		},
		editItem: function(nIndex){
			this.tabs.selected = "editor";
			let index = ~~(nIndex/2);
			
			let oItem = this.data.list[index];
			
			this.editor.name = oItem.name;
			this.editor.ico = oItem.ico;
			this.editor.color = oItem.color;
			this.editor.initiative = oItem.initiative;
			this.editor.mode = 'edit';
			this.editor.index = index;
			
			this.bModalWinShow = true;
		},
		
		colorSelected: function(sColor){
			//debugger;
			this.editor.color = sColor;
		},
		iconSelected: function(sIco){
			//debugger;
			this.editor.ico = sIco;
		},
		
		next_char: function(){
			if(!this.animate){
				this.animate = true;
				let oItem = this.data.list[0];
				this.data.list.push(oItem);
				setTimeout(function(){
					this.data.list.shift();
					this.animate = false;					
					this._switchRound();
				}.bind(this), 500);
			}
		},
		_switchRound: function(){
			if (this.data.list && 
			this.data.list.length && 
			this.data.list[0].initiative == Math.max(...this.data.list.map(el=>el.initiative))) {
				this.round_forward();
			}
		},
		apply: function(){
			let oItem = {
				name: this.editor.name,
				ico: this.editor.ico,
				color: this.editor.color,
				initiative: this.editor.initiative
			};
			if(this.editor.mode == 'add') {
				this.data.list.splice(this.editor.index, 0, oItem);
				//this.addHistory(oItem);
			} else {
				this.data.list[this.editor.index].name = oItem.name;
				this.data.list[this.editor.index].ico = oItem.ico;
				this.data.list[this.editor.index].color = oItem.color;
				this.data.list[this.editor.index].initiative = oItem.initiative;
			}
			this.setConfig('list', this.data.list);
			this.closeModal();
		},
		
		historyClick: function(){
			debugger;
		},
		historyRemove: function(){
			debugger;
		},
		addHistory: function(oItem){
			if(this.data.history.length>20) {
				this.data.history.pop();
			}
			oItem.initiative = Number(oItem.initiative);
			this.data.history.unshift(oItem);
			this.setConfig('history', this.data.history);
		},
		
		tab_select: function(sName){
			this.tabs.selected = sName;
		},
		
		closeModal: function(){
			this.bModalWinShow = false;
		},
		
		sortItems: function(){
			this.data.list = this.data.list.sort((a,b)=>b.initiative - a.initiative);
			this.setConfig('list', this.data.list);
		},
		
		round_back: function(){
			this.data.round--;
			if(this.data.round<1) {
				this.data.round = 1;
			}
			this.setConfig('round', this.data.round);
		},
		round_forward: function(){
			this.data.round++;
			this.setConfig('round', this.data.round);
		},
		
		setConfig: function (prop, val) {
			if(prop && val != undefined && this.oConfig) {
				this.oConfig[prop] = val;
				localStorage.setItem("oInitiativeTrackerData", JSON.stringify(this.oConfig));
			}
		},
		getConfig: function (prop) {
			this.oConfig = JSON.parse(localStorage.getItem("oInitiativeTrackerData")) || {};
			if(prop!=undefined) {
				return localStorage.getItem("oInitiativeTrackerData")? this.oConfig[prop] : null;
			}
			return ""; 
		},
		
		loadConfigData: function(){
			let aList = this.getConfig("list");
			if(aList && aList.length){
				aList.forEach(el=>{el.initiative = Number(el.initiative);})
				this.data.list = aList;					
			}
			
			let aHistory = this.getConfig("history");
			if(aHistory && aHistory.length){
				aHistory.forEach(el=>{el.initiative = Number(el.initiative);})
				this.data.history = aHistory;					
			}	
			
			let nRound = this.getConfig("round");
			if(nRound){
				this.data.round = nRound;					
			}			
		},
			
			
			
			
	}
});