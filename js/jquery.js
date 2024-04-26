/**
 * jquery 탭 기능
 */

	$(function(){
	/*
		//1. 첫번째 패널만 보여주기 
		var topDiv = $('.tabSet');
		var anchors = topDiv.find('ul.tabs a');
		var panelDivs = topDiv.find('div.panel');
		
		var lastAnchor = anchors.filter('.on');
		var lastPanel = $(lastAnchor.attr('href'));  //현재 선택돼있는 판넬값
		
		anchors.show();
		panelDivs.hide();
		lastPanel.show();
		
		
		//2. 탭을 클릭하면 해당 패널을 보여주기
		anchors.click(function(){
			var currentAnchor = $(this);
			var currentPanel = $(currentAnchor.attr('href'));
			
			lastAnchor.removeClass('on');
			currentAnchor.addClass('on');
			
			lastPanel.hide();
			currentPanel.show();
			lastAnchor = currentAnchor;
			lastPanel = currentPanel;
			
		});
	*/

	$('.tabSet').tabs();
		
	});
	