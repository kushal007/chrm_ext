//alert("hellooo")
chrome.runtime.onMessage.addListener(function(request){
	var img = document.images;
	
	for (i = 0; i < img.length; i++) {
 		 //we can call the API's here for every image
	}
	//alert(img)
})