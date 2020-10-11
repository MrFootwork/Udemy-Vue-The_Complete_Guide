var app = new Vue({
	el       : '#app',
	data     : {
		counter  : 0,
		counter2 : 0,
	},
	computed : {
		output : function() {
			console.log('computed')
			return this.counter > 5 ? 'größer 5' : 'kleiner 5'
		},
	},
	watch    : {
		counter : function(value) {
			var appObject = this
			setTimeout(() => {
				appObject.counter = 0
			}, 2000)
		},
	},
	methods  : {
		result : function() {
			console.log('method')
			return this.counter > 5 ? 'größer 5' : 'kleiner 5'
		},
	},
})
