pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 53433;
pubcoder.page.title = pubcoder.page.title || "190";
pubcoder.page.number = pubcoder.page.number || 190;
pubcoder.page.alias = pubcoder.page.alias || "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj53441_onTap_activeActionGroupIndex = -1;
var obj53441_onTap_runningActionsCount = 0;
var obj53441_onTap_loopCount = 0;
var obj53438_onTap_activeActionGroupIndex = -1;
var obj53438_onTap_runningActionsCount = 0;
var obj53438_onTap_loopCount = 0;
var obj68062_onTap_activeActionGroupIndex = -1;
var obj68062_onTap_runningActionsCount = 0;
var obj68062_onTap_loopCount = 0;
var obj68054_onTap_activeActionGroupIndex = -1;
var obj68054_onTap_runningActionsCount = 0;
var obj68054_onTap_loopCount = 0;
var obj89161_onTap_activeActionGroupIndex = -1;
var obj89161_onTap_runningActionsCount = 0;
var obj89161_onTap_loopCount = 0;
var obj89156_onTap_activeActionGroupIndex = -1;
var obj89156_onTap_runningActionsCount = 0;
var obj89156_onTap_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
 $(window).on(PubCoder.Events.PageLoad, function(){
	window.eventObj = {};
	/*
	 * 
	 * Init SCAnimation
	 * 
	 * 
	 */
	
	/*
	 *
	 *   Init Shake
	 *
	 */
	window.addEventListener('shake', function () {
		
	}, false);
	
	/*
	 *
	 *   Init Masked Images
	 *
	 */
	 
 	/*
	 * 
	 * Init SCPhotogallery
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCQuizMulti
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCDrawer
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWPanZoom
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWMemoryGame
	 * 
	 * 
	 */
	
	/*
	 * 
	 * Init SCCrosswords
	 * 
	 * 
	 */
	
	/*
	 * 
	 * Init SCFillInTheGaps
	 * 
	 * 
	 */
	
	/*
	 * 
	 * Init SCTrueFalse
	 * 
	 * 
	 */
	
	
	/*
	 * 
	 * Init SCMatchWordWithPicture
	 * 
	 * 
	 */
	
    
    
	if(! navigator.userAgent.match(/PubCoderHelper/i)) {
		/*
		 *
	 	 *   Action Groups
	 	 *
	 	 */
		
obj53441_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53441_onTap_activeActionGroupIndex = -1;
		$("#obj53441").trigger("obj53441_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53441) {
				console.warn("de-queueing event obj53441." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53441").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53441_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_53443();
function goToPage_53443() {
	window.obj53441_onTap_runningActionsCount = obj53441_onTap_runningActionsCount + 1;
	$("#anchor1118")[0].click();
	window.obj53441_onTap_runningActionsCount = window.obj53441_onTap_runningActionsCount - 1;
if (window.obj53441_onTap_runningActionsCount < 0) {
	window.obj53441_onTap_runningActionsCount = 0;
} else if (window.obj53441_onTap_runningActionsCount == 0) {
	obj53441_onTap_actionGroup1();
}
}





















};
obj53441_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53441_onTap_activeActionGroupIndex = -1;
		$("#obj53441").trigger("obj53441_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53441) {
				console.warn("de-queueing event obj53441." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53441").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53441_onTap_activeActionGroupIndex = 1;
	





















};
obj53438_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53438_onTap_activeActionGroupIndex = -1;
		$("#obj53438").trigger("obj53438_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53438) {
				console.warn("de-queueing event obj53438." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53438").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53438_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_53440();
function goToPage_53440() {
	window.obj53438_onTap_runningActionsCount = obj53438_onTap_runningActionsCount + 1;
	$("#anchor1119")[0].click();
	window.obj53438_onTap_runningActionsCount = window.obj53438_onTap_runningActionsCount - 1;
if (window.obj53438_onTap_runningActionsCount < 0) {
	window.obj53438_onTap_runningActionsCount = 0;
} else if (window.obj53438_onTap_runningActionsCount == 0) {
	obj53438_onTap_actionGroup1();
}
}





















};
obj53438_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53438_onTap_activeActionGroupIndex = -1;
		$("#obj53438").trigger("obj53438_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53438) {
				console.warn("de-queueing event obj53438." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53438").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53438_onTap_activeActionGroupIndex = 1;
	





















};
obj68062_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68062_onTap_activeActionGroupIndex = -1;
		$("#obj68062").trigger("obj68062_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68062) {
				console.warn("de-queueing event obj68062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68062_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68062 
hide_68065();
function hide_68065() {
	var selector = "#obj68062";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68062_onTap_runningActionsCount = obj68062_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68062_onTap_runningActionsCount = window.obj68062_onTap_runningActionsCount - 1;
if (window.obj68062_onTap_runningActionsCount < 0) {
	window.obj68062_onTap_runningActionsCount = 0;
} else if (window.obj68062_onTap_runningActionsCount == 0) {
	obj68062_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68065(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68062_onTap_runningActionsCount = window.obj68062_onTap_runningActionsCount - 1;
if (window.obj68062_onTap_runningActionsCount < 0) {
	window.obj68062_onTap_runningActionsCount = 0;
} else if (window.obj68062_onTap_runningActionsCount == 0) {
	obj68062_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj68068 
stopMovie_68064();
function stopMovie_68064() {
	window.obj68062_onTap_runningActionsCount = obj68062_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68068")[0];
	myVideo.pause();
	window.obj68062_onTap_runningActionsCount = window.obj68062_onTap_runningActionsCount - 1;
if (window.obj68062_onTap_runningActionsCount < 0) {
	window.obj68062_onTap_runningActionsCount = 0;
} else if (window.obj68062_onTap_runningActionsCount == 0) {
	obj68062_onTap_actionGroup1();
}
}
















};
obj68062_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68062_onTap_activeActionGroupIndex = -1;
		$("#obj68062").trigger("obj68062_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68062) {
				console.warn("de-queueing event obj68062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68062_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68054
(function(){
	window.obj68062_onTap_runningActionsCount = obj68062_onTap_runningActionsCount + 1;

	var selector = "#obj68054";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 0;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj68062_onTap_runningActionsCount = window.obj68062_onTap_runningActionsCount - 1;
if (window.obj68062_onTap_runningActionsCount < 0) {
	window.obj68062_onTap_runningActionsCount = 0;
} else if (window.obj68062_onTap_runningActionsCount == 0) {
	obj68062_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj68062_onTap_runningActionsCount = window.obj68062_onTap_runningActionsCount - 1;
if (window.obj68062_onTap_runningActionsCount < 0) {
	window.obj68062_onTap_runningActionsCount = 0;
} else if (window.obj68062_onTap_runningActionsCount == 0) {
	obj68062_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68062_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68062_onTap_activeActionGroupIndex = -1;
		$("#obj68062").trigger("obj68062_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68062) {
				console.warn("de-queueing event obj68062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68062_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68068 
move_68067();
function move_68067() {
	window.obj68062_onTap_runningActionsCount = obj68062_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj68068");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 608;
	var moveY = 537;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj68062_onTap_runningActionsCount = window.obj68062_onTap_runningActionsCount - 1;
if (window.obj68062_onTap_runningActionsCount < 0) {
	window.obj68062_onTap_runningActionsCount = 0;
} else if (window.obj68062_onTap_runningActionsCount == 0) {
	obj68062_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68062_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68062_onTap_activeActionGroupIndex = -1;
		$("#obj68062").trigger("obj68062_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68062) {
				console.warn("de-queueing event obj68062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68062_onTap_activeActionGroupIndex = 3;
	





















};
obj68054_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68054_onTap_activeActionGroupIndex = -1;
		$("#obj68054").trigger("obj68054_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68054) {
				console.warn("de-queueing event obj68054." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68054").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68054_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68054 
hide_68057();
function hide_68057() {
	var selector = "#obj68054";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68054_onTap_runningActionsCount = obj68054_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68054_onTap_runningActionsCount = window.obj68054_onTap_runningActionsCount - 1;
if (window.obj68054_onTap_runningActionsCount < 0) {
	window.obj68054_onTap_runningActionsCount = 0;
} else if (window.obj68054_onTap_runningActionsCount == 0) {
	obj68054_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68057(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68054_onTap_runningActionsCount = window.obj68054_onTap_runningActionsCount - 1;
if (window.obj68054_onTap_runningActionsCount < 0) {
	window.obj68054_onTap_runningActionsCount = 0;
} else if (window.obj68054_onTap_runningActionsCount == 0) {
	obj68054_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj68068 
playPauseMovie_68056();
function playPauseMovie_68056() {
	window.obj68054_onTap_runningActionsCount = obj68054_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68068")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj68054_onTap_runningActionsCount = window.obj68054_onTap_runningActionsCount - 1;
if (window.obj68054_onTap_runningActionsCount < 0) {
	window.obj68054_onTap_runningActionsCount = 0;
} else if (window.obj68054_onTap_runningActionsCount == 0) {
	obj68054_onTap_actionGroup1();
}
}

















};
obj68054_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68054_onTap_activeActionGroupIndex = -1;
		$("#obj68054").trigger("obj68054_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68054) {
				console.warn("de-queueing event obj68054." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68054").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68054_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68062
(function(){
	window.obj68054_onTap_runningActionsCount = obj68054_onTap_runningActionsCount + 1;

	var selector = "#obj68062";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 0;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj68054_onTap_runningActionsCount = window.obj68054_onTap_runningActionsCount - 1;
if (window.obj68054_onTap_runningActionsCount < 0) {
	window.obj68054_onTap_runningActionsCount = 0;
} else if (window.obj68054_onTap_runningActionsCount == 0) {
	obj68054_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj68054_onTap_runningActionsCount = window.obj68054_onTap_runningActionsCount - 1;
if (window.obj68054_onTap_runningActionsCount < 0) {
	window.obj68054_onTap_runningActionsCount = 0;
} else if (window.obj68054_onTap_runningActionsCount == 0) {
	obj68054_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68054_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68054_onTap_activeActionGroupIndex = -1;
		$("#obj68054").trigger("obj68054_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68054) {
				console.warn("de-queueing event obj68054." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68054").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68054_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68068 
move_68059();
function move_68059() {
	window.obj68054_onTap_runningActionsCount = obj68054_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj68068");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-288";
	var moveY = "+=-1";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj68054_onTap_runningActionsCount = window.obj68054_onTap_runningActionsCount - 1;
if (window.obj68054_onTap_runningActionsCount < 0) {
	window.obj68054_onTap_runningActionsCount = 0;
} else if (window.obj68054_onTap_runningActionsCount == 0) {
	obj68054_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68054_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68054_onTap_activeActionGroupIndex = -1;
		$("#obj68054").trigger("obj68054_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68054) {
				console.warn("de-queueing event obj68054." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68054").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68054_onTap_activeActionGroupIndex = 3;
	





















};
obj89161_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89161_onTap_activeActionGroupIndex = -1;
		$("#obj89161").trigger("obj89161_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89161) {
				console.warn("de-queueing event obj89161." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89161").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89161_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89166 
stopAudio_89163();
function stopAudio_89163() {
	window.obj89161_onTap_runningActionsCount = obj89161_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89166")[0];
	myAudio.pause();
	window.obj89161_onTap_runningActionsCount = window.obj89161_onTap_runningActionsCount - 1;
if (window.obj89161_onTap_runningActionsCount < 0) {
	window.obj89161_onTap_runningActionsCount = 0;
} else if (window.obj89161_onTap_runningActionsCount == 0) {
	obj89161_onTap_actionGroup1();
}
}








};
obj89161_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89161_onTap_activeActionGroupIndex = -1;
		$("#obj89161").trigger("obj89161_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89161) {
				console.warn("de-queueing event obj89161." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89161").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89161_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89161 
hide_89164();
function hide_89164() {
	var selector = "#obj89161";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89161_onTap_runningActionsCount = obj89161_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89161_onTap_runningActionsCount = window.obj89161_onTap_runningActionsCount - 1;
if (window.obj89161_onTap_runningActionsCount < 0) {
	window.obj89161_onTap_runningActionsCount = 0;
} else if (window.obj89161_onTap_runningActionsCount == 0) {
	obj89161_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89164(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89161_onTap_runningActionsCount = window.obj89161_onTap_runningActionsCount - 1;
if (window.obj89161_onTap_runningActionsCount < 0) {
	window.obj89161_onTap_runningActionsCount = 0;
} else if (window.obj89161_onTap_runningActionsCount == 0) {
	obj89161_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89161_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89161_onTap_activeActionGroupIndex = -1;
		$("#obj89161").trigger("obj89161_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89161) {
				console.warn("de-queueing event obj89161." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89161").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89161_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89156
(function(){
	window.obj89161_onTap_runningActionsCount = obj89161_onTap_runningActionsCount + 1;

	var selector = "#obj89156";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 300;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj89161_onTap_runningActionsCount = window.obj89161_onTap_runningActionsCount - 1;
if (window.obj89161_onTap_runningActionsCount < 0) {
	window.obj89161_onTap_runningActionsCount = 0;
} else if (window.obj89161_onTap_runningActionsCount == 0) {
	obj89161_onTap_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj89161_onTap_runningActionsCount = window.obj89161_onTap_runningActionsCount - 1;
if (window.obj89161_onTap_runningActionsCount < 0) {
	window.obj89161_onTap_runningActionsCount = 0;
} else if (window.obj89161_onTap_runningActionsCount == 0) {
	obj89161_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89161_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89161_onTap_activeActionGroupIndex = -1;
		$("#obj89161").trigger("obj89161_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89161) {
				console.warn("de-queueing event obj89161." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89161").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89161_onTap_activeActionGroupIndex = 3;
	





















};
obj89156_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89156_onTap_activeActionGroupIndex = -1;
		$("#obj89156").trigger("obj89156_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89156) {
				console.warn("de-queueing event obj89156." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89156").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89156_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89156 
hide_89158();
function hide_89158() {
	var selector = "#obj89156";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89156_onTap_runningActionsCount = obj89156_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89156_onTap_runningActionsCount = window.obj89156_onTap_runningActionsCount - 1;
if (window.obj89156_onTap_runningActionsCount < 0) {
	window.obj89156_onTap_runningActionsCount = 0;
} else if (window.obj89156_onTap_runningActionsCount == 0) {
	obj89156_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89158(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89156_onTap_runningActionsCount = window.obj89156_onTap_runningActionsCount - 1;
if (window.obj89156_onTap_runningActionsCount < 0) {
	window.obj89156_onTap_runningActionsCount = 0;
} else if (window.obj89156_onTap_runningActionsCount == 0) {
	obj89156_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89156_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89156_onTap_activeActionGroupIndex = -1;
		$("#obj89156").trigger("obj89156_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89156) {
				console.warn("de-queueing event obj89156." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89156").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89156_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89161
(function(){
	window.obj89156_onTap_runningActionsCount = obj89156_onTap_runningActionsCount + 1;

	var selector = "#obj89161";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 300;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj89156_onTap_runningActionsCount = window.obj89156_onTap_runningActionsCount - 1;
if (window.obj89156_onTap_runningActionsCount < 0) {
	window.obj89156_onTap_runningActionsCount = 0;
} else if (window.obj89156_onTap_runningActionsCount == 0) {
	obj89156_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj89156_onTap_runningActionsCount = window.obj89156_onTap_runningActionsCount - 1;
if (window.obj89156_onTap_runningActionsCount < 0) {
	window.obj89156_onTap_runningActionsCount = 0;
} else if (window.obj89156_onTap_runningActionsCount == 0) {
	obj89156_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89156_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89156_onTap_activeActionGroupIndex = -1;
		$("#obj89156").trigger("obj89156_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89156) {
				console.warn("de-queueing event obj89156." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89156").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89156_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89166 
playAudio_89160();
function playAudio_89160() {
	window.obj89156_onTap_runningActionsCount = obj89156_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89166")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj89156_onTap_runningActionsCount = window.obj89156_onTap_runningActionsCount - 1;
if (window.obj89156_onTap_runningActionsCount < 0) {
	window.obj89156_onTap_runningActionsCount = 0;
} else if (window.obj89156_onTap_runningActionsCount == 0) {
	obj89156_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89156_onTap_runningActionsCount = window.obj89156_onTap_runningActionsCount - 1;
if (window.obj89156_onTap_runningActionsCount < 0) {
	window.obj89156_onTap_runningActionsCount = 0;
} else if (window.obj89156_onTap_runningActionsCount == 0) {
	obj89156_onTap_actionGroup3();
}
	}
}









};
obj89156_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89156_onTap_activeActionGroupIndex = -1;
		$("#obj89156").trigger("obj89156_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89156) {
				console.warn("de-queueing event obj89156." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89156").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89156_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj53441: Event Touch Down
 *
 */
$("#obj53441").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj53441_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53441_onTap is still running");
	return;
}
var obj53441_onTap_runningActionsCount = 0;
var obj53441_onTap_loopCount = 0;
obj53441_onTap_actionGroup0();
});










/*
 *
 *   obj53438: Event Touch Down
 *
 */
$("#obj53438").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj53438_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53438_onTap is still running");
	return;
}
var obj53438_onTap_runningActionsCount = 0;
var obj53438_onTap_loopCount = 0;
obj53438_onTap_actionGroup0();
});






























/*
 *
 *   obj68062: Event Touch Down
 *
 */
$("#obj68062").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68062_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68062_onTap is still running");
	return;
}
var obj68062_onTap_runningActionsCount = 0;
var obj68062_onTap_loopCount = 0;
obj68062_onTap_actionGroup0();
});










/*
 *
 *   obj68054: Event Touch Down
 *
 */
$("#obj68054").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68054_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68054_onTap is still running");
	return;
}
var obj68054_onTap_runningActionsCount = 0;
var obj68054_onTap_loopCount = 0;
obj68054_onTap_actionGroup0();
});










/*
 *
 *   obj89161: Event Touch Down
 *
 */
$("#obj89161").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89161_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89161_onTap is still running");
	return;
}
var obj89161_onTap_runningActionsCount = 0;
var obj89161_onTap_loopCount = 0;
obj89161_onTap_actionGroup0();
});










/*
 *
 *   obj89156: Event Touch Down
 *
 */
$("#obj89156").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89156_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89156_onTap is still running");
	return;
}
var obj89156_onTap_runningActionsCount = 0;
var obj89156_onTap_loopCount = 0;
obj89156_onTap_actionGroup0();
});





































		
		
		/*
		 *
	 	 *  Page is ready to be played
	 	 *
	 	 */
		XPUB.ready();
	 }
});
$(window).on(pubcoder.events.pagePlay, function() {
	$(window).trigger(pubcoder.events.pageReady);
	if (pubcoder.isInteractionObserverSupported) {
		var ob = new IntersectionObserver(function(entries) {
			$(entries).each(function (index, entry) {
				if (entry.isIntersecting) {
					$(entry.target).trigger(pubcoder.events.appear);
				} else {
					$(entry.target).trigger(pubcoder.events.disappear);
				}
			});
		}, {
			root: null,
			rootMargin: "0px",
			threshold: 0
		});
		$(".SCView").each(function (i, el) {
			ob.observe(el);
		});	
	}
	
$("#obj53457").trigger('SCEventShow');
$("#obj53441").trigger('SCEventShow');
$("#obj53438").trigger('SCEventShow');
$("#obj53436").trigger('SCEventShow');
$("#obj53459").trigger('SCEventShow');
$("#obj68062").trigger('SCEventShow');
$("#obj68054").trigger('SCEventShow');
$("#obj89161").trigger('SCEventShow');
$("#obj89156").trigger('SCEventShow');
$("#obj89166").trigger('SCEventShow');
$("#obj95009").trigger('SCEventShow');
$("#obj68068").trigger('SCEventShow');
	
});