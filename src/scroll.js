// init controller
var controller = new ScrollMagic.Controller();
$(function () { // wait for document ready

    $intro = $('#content_1').find('p').get(0);
    $contact = $('#content_3 > .hide').get(0);

    console.log($contact);

    var scene = new ScrollMagic.Scene({triggerElement: "#trigger_1"})
					// trigger animation by adding a css class
					.setClassToggle($intro, "zap")
					.addIndicators({name: "content 1 - add a class"}) // add indicators (requires plugin)
                    .reverse(false)
                    .addTo(controller);

    var scene = new ScrollMagic.Scene({triggerElement: "#trigger_2"})
					// trigger animation by adding a css class
					.setClassToggle("#content_2", "zap")
					.addIndicators({name: "content 2 - add a class"}) // add indicators (requires plugin)
                    .reverse(false)
                    .addTo(controller);

    var scene = new ScrollMagic.Scene({triggerElement: "#trigger_3"})
					// trigger animation by adding a css class
					.setClassToggle($contact, "zap")
                    .addIndicators({name: "content 3 - add a class"}) // add indicators (requires plugin)
                    .reverse(false)
                    .addTo(controller);
                    
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger_4"})
					// trigger animation by adding a css class
					.setClassToggle("#content_4", "zap")
                    .addIndicators({name: "content 4 - add a class"}) // add indicators (requires plugin)
					.addTo(controller);
});

