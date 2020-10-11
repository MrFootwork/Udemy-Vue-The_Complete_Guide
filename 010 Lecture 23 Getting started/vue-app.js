var course = new Vue({
	el      : '#course',
	data    : {
		title        : 'Hello World!',
		link         : 'http://google.com',
		finishedLink : '<a href="http://google.com">Google</a>',
	},
	methods : {
		sayHello : function() {
			this.title = 'Hello'
			return this.title
		},
	},
})

var app = new Vue({
	el      : '#app',
	data    : {
		title   : 'Hello World!',
		message : 'This is the message!',
		myText  : 'This is my own text!',
	},
	methods : {
		changeTitle : function(event) {
			this.title = event.target.value
			if (this.title == 'Pandau') app3.seen = true
			else app3.seen = false
		},
	},
})

var app2 = new Vue({
	el   : '#app2',
	data : {
		message : 'You loaded this page on ' + new Date().toLocaleString(),
	},
})

var app3 = new Vue({
	el   : '#app-3',
	data : {
		seen    : true,
		message : `Loaded on ${new Date().toLocaleString()}`,
	},
})

var functionDisplay = new Vue({
	el      : '#functionDisplay',
	methods : {
		display : function() {
			return app.title
		},
	},
})

var link = new Vue({
	el   : '#linker',
	data : {
		link : 'http://google.com',
	},
})
