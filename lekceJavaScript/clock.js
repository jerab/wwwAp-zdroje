clock = {
	time : {h: 0, m: 0, s: 0},
	actDay : 0,
	days : ["Nedele", "Pondelí", "Úterý", "Streda", "Ctvrtek", "Pátek", "Sobota"],
	  
	setTime : function() {
		this.d = new Date();
		this.time.h = this.d.getHours();
		if(this.time.h < 10) {
			this.time.h = "0" + this.time.h;
		}
		this.time.m = this.d.getMinutes();
		if(this.time.m < 10) {
			this.time.m = "0" + this.time.m;
		}
		this.time.s = this.d.getSeconds();
		if(this.time.s < 10) {
			this.time.s = "0" + this.time.s;
		}
		this.actDay = this.d.getDay();
	},
	
	showTime : function() {
		var a = [this.time.h, this.time.m, this.time.s];
		document.getElementById("clock").innerHTML = this.days[this.actDay] + ", " + a.join(":");
	},

	runClock : function() {
		clearInterval()
		setInterval(function() {
			clock.setTime();
			clock.showTime();
		}, 1000);
	}
}

clock.runClock();
