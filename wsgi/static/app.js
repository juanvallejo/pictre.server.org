var fns = [];
window.addEventListener('load',function() {
	fns.forEach(function(fn) {
		fn.call();
	});
});
window.addEventListener('resize',function() {
	fns.forEach(function(fn) {
		fn.call();
	});
});

fns.push(function() {
	var tHeight = window.innerHeight;
	var wrap = document.getElementById('inner-wrapper');

	wrap.style.top = (tHeight/2-wrap.clientHeight/2)+"px";

});