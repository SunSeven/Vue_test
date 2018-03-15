var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue!'
	},
	created: function(){
		console.log("message is: " + this.message)
	}
});

var app2 = new Vue({
	el: "#app-2",
	data: {
		message: '页面加载于 ' + new Date().toLocaleString()
	}
});

var app3 = new Vue({
	el: "#app-3",
	data: {
		visible: true,
		ok: true,
		message: "你现在看到我了！"
	},
	methods: {
		hide_or_show: function(){
			if(this.ok === true){
				this.ok = false;
				this.message = "你现在看不到我了！";
			}
			else{
				this.ok = true;
				this.message = "你现在看到我了！";
			}
		}
	}
});

var app4 = new Vue({
	el: "#app-4",
	data: {
		todos: [
			{text: "学习 JavaScript"},
			{text: "学习 Vue"},
			{text: "整个牛项目"}
		]
	}
});

var app5 = new Vue({
	el: "#app-5",
	data: {
		message: "Hello, Vue.js!"
	},
	methods: {
		reverseMessage: function() {
			this.message = this.message.split('').reverse().join('')
		}
	}
});

Vue.component('todo-item', {
	props: ['todoItem'],
	template: "<li>{{ todoItem.text }}</li>"
});

var app6 = new Vue({
	el: "#app-6",
	data: {
		groceryList: [
			{id: 0, text: "蔬菜"},
			{id: 1, text: "奶酪"},
			{id: 2, text: "随便其他什么吃的"}
		]
	},
	created: function(){
		console.log("This is a created function")
	}
});

var app7 = new Vue({
	el: "#app-7",
	data: {
		items: [
			{msg: "One book"},
			{msg: "Two books"}
		]
	}
});

var app8 = new Vue({
	el: "#app-8",
	data: {
		checkedNames: [],
		checked: false
	}
})

Vue.component("kebabcase", {
	props: ["todoMessage"],
	template: "<li>{{ todoMessage }}</li>"
})

var app9 = new Vue({
	el: "#app-9"
})

Vue.component("camelcase", {
	props: ["todoMessage"],
	template: "<li>{{ todoMessage }}</li>"
})

var app10 = new Vue({
	el: "#app-10",
	data: {
		htmlStr: "<camelcase>使用算字符串模板</camelcase>"
		// htmlStr: "<div>CamelCase</div>"
	}
})

Vue.component("button-counter", {
	template: "<el-button @click=\"increamentCounter\">{{ counter }}</el-button>",
	data: function(){
	  return {counter: 0}
	},
	methods: {
		increamentCounter: function(){
			this.counter += 1;
			this.$emit("inc");
		}
	}
})

var counter_event_example = new Vue({
	el: "#counter-event-example",
	data: {
		totalcount: 0,
	},
	methods:{
		incTotal: function(){
			this.totalcount += 1;
		}
	}
})

Vue.component("message-button", {
	template: '<div><input type="text" v-model="message" /><br><el-button v-on:click="handleSendMsg">Send</el-button></div>',
	data: function(){
		return {message: "test message"}
	},
	methods: {
		handleSendMsg: function(){
			this.$emit("message", {message: this.message})
		}
	}
})

var message_event_example = new Vue({
	el: "#message-event-example",
	data: {
		messages: []
	},
	methods: {
		handleMessage: function(payload){
			this.messages.push(payload.message)
		}
	}
})