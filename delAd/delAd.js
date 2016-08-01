
function deleteAdv() {
	var spans = document.getElementsByTagName("span");
	for(var i = 0; i < spans.length; i ++) {
		var spanText = spans[i];
		try {
			if(spanText != undefined && spanText != null && spanText.innerText == "商业推广") {
				var spanNode = spanText.parentNode.parentNode;
				if(spanNode.parentNode != undefined && spanNode.parentNode.id != undefined && 
					spanNode.parentNode.id=="content_left") {
					spanNode.style.display = "none";
				} else if(spanNode.parentNode != undefined
					&& spanNode.parentNode.parentNode != undefined
					&& spanNode.parentNode.parentNode.parentNode != undefined
					&& spanNode.parentNode.parentNode.parentNode.tagName == "TD") {
					spanNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = "none";
				} else {
					spanNode.parentNode.parentNode.style.display="none";
				}
			}	
		}catch(e) {
			
		}
	}
	
}

document.addEventListener('DOMNodeInserted',deleteAdv,false);
