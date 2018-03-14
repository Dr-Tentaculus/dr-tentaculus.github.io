[].slice.apply(document.images).filter(is_gif_image).map(freeze_gif);

function is_gif_image(i) {
    return /^(?!data:).*\.gif/i.test(i.src);
}

function freeze_gif(i) {
    var c = document.createElement('canvas');
    var w = c.width = i.width;
    var h = c.height = i.height;
    c.getContext('2d').drawImage(i, 0, 0, w, h);
	var ctx = c.getContext('2d');
	ctx.fillStyle = "rgba(220,220,220, 0.8)";
	ctx.strokeStyle = "rgba(40,40,40, 0.8)";
	ctx.lineWidth = 5;
	ctx.beginPath();
    ctx.moveTo(50,50);
    ctx.lineTo(25,75);
    ctx.lineTo(25,25);
    ctx.lineTo(50,50);
    ctx.fill();			
    ctx.stroke();	

	i.onclick = function(oEvent){
		var i = this;
		i.parentNode.lastChild.style.display = 'inline-block';
		i.style.display = 'none';
	};
	c.onclick = function(oEvent){
		var с = this;
		c.parentNode.firstChild.style.display = 'inline-block';
		c.style.display = 'none';
	};
    try {
        i.src = c.toDataURL("image/gif"); // if possible, retain all css aspects
    } catch(e) { // cross-domain -- mimic original with all its tag attributes
        for (var j = 0, a; a = i.attributes[j]; j++){
            c.setAttribute(a.name, a.value);
		}
       // i.parentNode.replaceChild(c, i);
		i.style.display = 'none';
		c.style.cursor = 'pointer';
		c.setAttribute('data-paused-gif', true);
		i.parentNode.appendChild(c);
    }
}

// $("body").on('canvas[data-paused-gif=true]', 'click', function(){
	// $(this).hide();
	// $(this).parent().find("img").sjow();
// })