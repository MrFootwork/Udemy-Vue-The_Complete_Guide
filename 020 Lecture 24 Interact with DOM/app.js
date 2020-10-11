var app = new Vue({
	el      : '#app',
	data    : {
		counter : 0,
		hover   : false,
		x       : 0,
		y       : 0,
	},
	methods : {
		increaseCounter   : function() {
			this.counter++
		},
		decreaseCounter   : function() {
			this.counter--
		},
		//https://012.vuejs.org/guide/events.html
		//$event access the original DOM
		customIncrease    : function(steps, event) {
			this.counter += steps
		},
		updateCoordinates : function(event) {
			this.x = event.screenX
			this.y = event.screenY
		},
	},
})
