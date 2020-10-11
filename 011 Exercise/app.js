var exercise = new Vue({
	el      : '#exercise',
	data    : {
		YOUR_NAME : 'MrFootwork',
		AGE       : '35',
		IMGsource : 'https://miro.medium.com/max/5184/1*o8tTGo3vsocTKnCUyz0wHA.jpeg',
	},
	methods : {
		randomFloat : function() {
			return Math.random()
		},
	},
})
