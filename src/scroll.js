// init controller
var controller = new ScrollMagic.Controller();
$(function () { // wait for document ready

    var scene = new ScrollMagic.Scene({triggerElement: "#trigger_1"})
					// trigger animation by adding a css class
					.setClassToggle("#content_1", "zap")
					.addIndicators({name: "content 1 - add a class"}) // add indicators (requires plugin)
					.addTo(controller);

    var scene = new ScrollMagic.Scene({triggerElement: "#trigger_2"})
					// trigger animation by adding a css class
					.setClassToggle("#content_2", "zap")
					.addIndicators({name: "content 2 - add a class"}) // add indicators (requires plugin)
					.addTo(controller);

});

