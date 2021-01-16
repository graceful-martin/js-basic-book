		var bigPic = document.querySelector("#cup");  
		var smallPics = document.querySelectorAll(".small");  

		for(i=0; i<smallPics.length; i++) {
			smallPics[i].addEventListener("click", function() {
				newPic = this.src;
				bigPic.setAttribute("src", newPic);
			});
		}

		var views = document.querySelector("#view")
		var details = document.querySelector("#detail")
		views.addEventListener("click", visibled) 
		
		function visibled() {
			if(details.style.display == "block") {
				details.style.display = "none"
				views.textContent = "상세 설명 보기"
			} else {
				details.style.display = "block"
				views.textContent = "상세 설명 닫기"
			}
		}