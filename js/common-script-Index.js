window.onload = function() {

	// 공통 함수로 클릭 이벤트 처리
	function handleLiClick(event) {
		var clickedLi = event.target;
		var liId = clickedLi.id;

		// 클릭된 li에 대한 동작 설정 (예: 페이지 이동)
		if (liId == "info_north") {
			location.replace("html/info_north.html")
		} else if (liId == "info_south") {
			location.replace("html/info_south.html")
		} else if (liId == "info_eu") {
			location.replace("html/info_eu.html")
		} else if (liId == "wine_light") {
			location.replace("html/wine_light.html")
		} else if (liId == "wine_dark") {
			location.replace("html/wine_dark.html")
		}  else if (liId == "route_healing") {
			location.replace("html/route_healing.html")
		} else if (liId == "route_tasty") {
			location.replace("html/route_tasty.html")
		}
	}

	// 각 li에 대한 클릭 이벤트 추가
	var liElements = document.querySelectorAll('.menu-button .dropdown li');
	liElements.forEach(function(li) {
		li.addEventListener('click', handleLiClick);
	});

	// h1 요소에 대한 클릭 이벤트 처리
	document.getElementById('mainLink').addEventListener('click', function() {
		// main.html로 이동
		window.location.href = 'index.html';
	});
}


