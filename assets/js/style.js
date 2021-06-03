window.onload = function(){
    var a = document.querySelector('.top-sellers');
    var b = document.querySelector('.features');
    var c = document.querySelector('.most-reviews');
    var r = document.querySelector('.row-top__sellers');
    var rr = document.querySelector('.row-featured');
    var rrr = document.querySelector('.row-most__reviews');
    a.addEventListener('click',()=>{
        r.style.display = 'flex';
        rr.style.display = 'none';
        rrr.style.display = 'none';
    })
    b.addEventListener('click',()=>{
        r.style.display = 'none';
        rr.style.display = 'flex';
        rrr.style.display = 'none';
    })
    c.addEventListener('click',()=>{
        r.style.display = 'none';
        rr.style.display = 'none';
        rrr.style.display = 'flex';
    })
//---------------
    var cclick = document.querySelectorAll(".footer-mid a");
    for(var i=0; i<cclick.length;i++){
        cclick[i].onclick = function(event){
            event.target.style.color = 'white';
        }
    }

}
//



///Automatic change the slide
var count=1;
	setInterval(function(){
		document.getElementById('radio'+ count).checked = true;
		count++;
		if(count>3){
			count=1;
		}
	}, 4000);

