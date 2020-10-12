new Vue({
	el       : '#exercise',
	data     : {
		effectClasses : {
			highlight : false,
			shrink    : true,
		},
		userClass     : '',
		bolClass      : false,
		isVisible     : true,
		squareLength  : 100,
		progressBar   : {
			width           : '0px',
			backgroundColor : 'lightblue',
		},
	},
	computed : {
		squareSize : function() {
			return {
				height : `${this.squareLength}px`,
				width  : `${this.squareLength}px`,
				border : '5px solid black',
			}
		},
	},
	methods  : {
		startEffect : function() {
			var vm = this
			setInterval(() => {
				vm.effectClasses.highlight = !vm.effectClasses.highlight
				vm.effectClasses.shrink = !vm.effectClasses.shrink
			}, 500)
		},
		startBar    : function() {
			var vm = this
			var width = 0
			let progress = setInterval(() => {
				width += 10
				vm.progressBar.width = width + 'px'
				if (width == 200) clearInterval(progress)
			}, 500)
		},
	},
})
