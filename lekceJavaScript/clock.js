function Clock(place, elementId, zone) {
	var self = this;
	this.extraHurs = zone;
	this.idEle = elementId;
	this.place = place;

	this.time = {h: 0, m: 0, s: 0};
	this.actDay = 0;
	this.days = ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"];

	this.setTime = function() {
		this.d = new Date();
		if(this.extraHours != 0) {
			this.d.setUTCHours(this.extraHours);
		}
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
	}

	this.showTime = function() {
		var a = [this.time.h, this.time.m, this.time.s];
		var h = document.createElement('h2');
		h.appendChild(document.createTextNode(this.place));
		var c = document.getElementById(this.idEle);
		c.innerHTML = '';
		c.appendChild(h);
		c.appendChild(document.createTextNode(this.days[this.actDay] + ", " + a.join(":")));
	}

	this.runClock = function() {
		clearInterval();
		setInterval(function() {
			self.setTime();
			self.showTime();
		}, 1000);
	}
}

window.onload = function() {
	var cl = new Clock("Můj počítač","clock",0);
	var clg = new Clock("Guatemala","clock-G",-6);
	var clh = new Clock("Moskva","clock-H",2);
	cl.runClock();
	clg.runClock();
	clh.runClock();
}