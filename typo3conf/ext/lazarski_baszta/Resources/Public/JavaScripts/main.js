$(document).ready(function() {
        $('#menu-toggle').click(function() {
            $("#menu-ul").toggleClass("down");
        });

        var player1 = videojs('#my-player1');
        player1.ready(function () {
        	player1.usingNativeControls = true;
        }
        // can also be `tap` or `touchend` or some other event instead of `click`
        player1.on('touchend',  function (e) {
	        if (e.target.nodeName === 'VIDEO') {
	            if (player1.paused()) {
	                player1.play();
	            } else {
	                player1.pause();
	            }
	        }
        });
        var player2 = videojs('#my-player2');
        player2.ready(function () {
        	player2.usingNativeControls = true;
        }
        // can also be `tap` or `touchend` or some other event instead of `click`
        player2.on('touchend',  function (e) {
	        if (e.target.nodeName === 'VIDEO') {
	            if (player2.paused()) {
	                player2.play();
	            } else {
	                player2.pause();
	            }
	        }
        });
        var player3 = videojs('#my-player3');
        player3.ready(function () {
        	player3.usingNativeControls = true;
    	}
        // can also be `tap` or `touchend` or some other event instead of `click`
        player3.on('touchend', function() {
            if (player3.paused()) {
                player3.play();
            } else {
                player3.pause();
            }
        });
        var player4 = videojs('#my-player4');
        player4.ready(function () {
        	player4.usingNativeControls = true;
    	}
        // can also be `tap` or `touchend` or some other event instead of `click`
        player4.on('touchend', function() {
            if (player4.paused()) {
                player4.play();
            } else {
                player4.pause();
            }
        });
    }

);