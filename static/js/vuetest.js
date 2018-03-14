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
	props: ['todo'],
	template: "<li>{{ todo.text }}</li>"
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