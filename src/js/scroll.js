// Initialize controller and scenes for scrollmagic
var controller = new ScrollMagic.Controller();
var scenes = [];

// Wait for document ready
$(function () { 
    
    // Trigger for header
    var animateElem = $('#header-link').get(0);
    scenes.push(new ScrollMagic.Scene({triggerElement: "#trigger_header"})
                    // trigger animation by adding a css class
                    .on("enter", function(){
                        animateElem.style.top="0";
                    })
                    .on("leave", function(){
                        animateElem.style.top="-10vh";
                    })
                    // .addIndicators({name: "swipe down header"}) // add indicators (requires plugin)
                    .addTo(controller));


    // Trigger for introduction content
    $intro = $('#content_1').find('p').get(0);
    scenes.push(new ScrollMagic.Scene({triggerElement: "#trigger_1"})
					// trigger animation by adding a css class
					.setClassToggle($intro, "zap")
					// .addIndicators({name: "content 1 - add a class"}) // add indicators (requires plugin)
                    .reverse(false)
                    .addTo(controller));

    // Trigger for skills content
    $skill = $('#content_2').find('div').get(0);
    scenes.push(new ScrollMagic.Scene({triggerElement: "#trigger_2"})
					// trigger animation by adding a css class
					.setClassToggle($skill, "zap")
					// .addIndicators({name: "content 2 - add a class"}) // add indicators (requires plugin)
                    .reverse(false)
                    .addTo(controller));

    // Trigger for contact content
    $contact = $('#content_3 > .hide').get(0);                
    scenes.push(new ScrollMagic.Scene({triggerElement: "#trigger_3"})
					// trigger animation by adding a css class
					.setClassToggle($contact, "zap")
                    // .addIndicators({name: "content 3 - add a class"}) // add indicators (requires plugin)
                    .reverse(false)
                    .addTo(controller));

    
                    
    // Set onclick event for thumbnails
    var $id;
    var $img;
    $(document.body).on('click', '.portfolio-showcase-wrapper' ,function(){
        $id = $(this).closest('.portfolio').find('.port-id').text();
        $img = $(this).find('.small-showcase').attr('src').split("/")[2];
        $.get("image.php", { "id": $id, "img": $img }, function(resp) {
            $('#showcase-modal').find('.showcase-big').attr('src', resp.file);
            if(resp.title.length > 50){
                $('#showcase-modal').find('.modal-title').attr('style', "font-size: 1.5rem");
            } else if(resp.title.length > 30){
                $('#showcase-modal').find('.modal-title').attr('style', "font-size: 2rem");
            } else {/*use h1*/}
            $('#showcase-modal').find('.modal-title').text(resp.title);
        });
        $('#showcase-modal').modal('show');
    });

    // Set onclick event for showcase next and previous button
    $(document.body).on('click', '.modal-button' ,function(){
        if($(this).attr('id') == "next-showcase"){
            $.get("image.php", { "id": $id, "img": $img, "dir": 1 }, function(resp) {
                if(resp == "fail"){
                    alert("whoops!");
                } else{
                    $('#showcase-modal').find('.showcase-big').attr('src', resp.file);
                    if(resp.title.length > 50){
                        $('#showcase-modal').find('.modal-title').attr('style', "font-size: 1.5rem");
                    } else if(resp.title.length > 30){
                        $('#showcase-modal').find('.modal-title').attr('style', "font-size: 2rem");
                    } else {/*use h1*/}
                    $('#showcase-modal').find('.modal-title').text(resp.title);
                }
            }).done(function(){
                $img = $('#showcase-modal').find('.showcase-big').attr('src').split("/")[2];
            });
        } else{
            $.get("image.php", { "id": $id, "img": $img, "dir": 0 }, function(resp) {
                if(resp == "fail"){
                    alert("whoops!");
                } else{
                    $('#showcase-modal').find('.showcase-big').attr('src', resp.file);
                    if(resp.title.length > 50){
                        $('#showcase-modal').find('.modal-title').attr('style', "font-size: 1.5rem");
                    } else if(resp.title.length > 30){
                        $('#showcase-modal').find('.modal-title').attr('style', "font-size: 2rem");
                    } else {/*use h1*/}
                    $('#showcase-modal').find('.modal-title').text(resp.title);
                }
            }).done(function(){
                $img = $('#showcase-modal').find('.showcase-big').attr('src').split("/")[2];
            });
        }
    });

    // Set keydown event for showcase next and previous keyboard shortcut
    $(document.body).keydown(function( event ) {
        if($('#showcase-modal').hasClass('show')){
            if(event.which == 39){
                $.get("image.php", { "id": $id, "img": $img, "dir": 1 }, function(resp) {
                    if(resp == "fail"){
                        alert("whoops!");
                    } else{
                        $('#showcase-modal').find('.showcase-big').attr('src', resp.file);
                        if(resp.title.length > 50){
                            $('#showcase-modal').find('.modal-title').attr('style', "font-size: 1.5rem");
                        } else if(resp.title.length > 30){
                            $('#showcase-modal').find('.modal-title').attr('style', "font-size: 2rem");
                        } else {/*use h1*/}            
                        $('#showcase-modal').find('.modal-title').text(resp.title);
                    }
                }).done(function(){
                    $img = $('#showcase-modal').find('.showcase-big').attr('src').split("/")[2];
                });
            } else if(event.which == 37){
                $.get("image.php", { "id": $id, "img": $img, "dir": 0 }, function(resp) {
                    if(resp == "fail"){
                        alert("whoops!");
                    } else{
                        $('#showcase-modal').find('.showcase-big').attr('src', resp.file);
                        if(resp.title.length > 50){
                            $('#showcase-modal').find('.modal-title').attr('style', "font-size: 1.5rem");
                        } else if(resp.title.length > 30){
                            $('#showcase-modal').find('.modal-title').attr('style', "font-size: 2rem");
                        } else {
                            // use h1
                        }
                        $('#showcase-modal').find('.modal-title').text(resp.title);
                    }
                }).done(function(){
                    $img = $('#showcase-modal').find('.showcase-big').attr('src').split("/")[2];
                });
            } else{
             
            }
        }
    });

    // Set infinite scroll
    $('#page-body').infiniteScroll({
        path: function() {
            pageNumber = this.loadCount + 1;
            return "/portfolio.php?id=" + pageNumber;
        },
        scrollThreshold: 50,
        history: false,
        append: false,
        responseType: 'text'      
    });

    // Append the page with the new data from infinite scroll.
    $('#page-body').on( 'load.infiniteScroll', function( event, response, path ) {
        // Check if the page is done
        if(response == "done"){
            $footer = makeFooter();
            $(this).append($footer);
            // Trigger for footer content
            $footer = $('#content_footer > .hide').get(0);                
            scenes.push(new ScrollMagic.Scene({triggerElement: "#trigger_footer"})
                            // trigger animation by adding a css class
                            .setClassToggle($footer, "zap")
                            // .addIndicators({name: "content last - add a class"}) // add indicators (requires plugin)
                            .addTo(controller));
            // Trigger for header-link
            var animateElem = $('#header-link').get(0);
            scenes.push(new ScrollMagic.Scene({triggerElement: "#trigger_footer"})
                            // trigger animation by adding a css class
                            .on("enter", function(){
                                animateElem.style.top="-10vh";
                            })
                            .on("leave", function(){
                                animateElem.style.top="0";
                            })
                            // .addIndicators({name: "swipe up header"}) // add indicators (requires plugin)
                            .addTo(controller));
            // Destroy infinite scroll
            $('#page-body').infiniteScroll('destroy');            
        } else{
            // The response came from php with the correct data, so just need to append it.
            $(this).append(response);
            // Set trigger for the info animation.
            $id = $('#page-body > div:last-child').children('.port-id').text();
            $id = parseInt($id) + 3;
            $content = $('#page-body > div:last-child').find('.portfolio-detail');
            $trigger = $('#page-body > .trigger').last();
            if($content.hasClass("portfolio-left")){
                scenes.push(new ScrollMagic.Scene({triggerElement: $trigger})
                    .setClassToggle($content, "swipe-left")
                    // .addIndicators({name: "content " + $id + " - swipe left"})
                    .reverse(false)
                    .addTo(controller));
            } else {
                scenes.push(new ScrollMagic.Scene({triggerElement: $trigger})
                    .setClassToggle($content, "swipe-right")
                    // .addIndicators({name: "content " + $id + " - swipe right"})
                    .reverse(false)
                    .addTo(controller));
            }
        }
    });

    // Header-link's scroll to top
    $('#scroll-top').click(function(e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");

    });


    // Check the scroll magic scenes.
    // window.setInterval(function(){
    //     $.each(scenes, function( index, value ) {
    //         console.log(value.triggerElement())
    //         console.log(value.triggerPosition() );
    //     });      
    // }, 10000);  // Change Interval here to test. For eg: 5000 for 5 sec
         
});

function makeFooter(){
    $footer = "<div id=\"trigger_footer\" class=\"trigger\"></div>\
                <div class=\"content dark-content one-third-content animation1 p-5 d-flex align-items-center\" id=\"content_footer\">\
                    <div class=\"w-100 hide\">\
                        <div class=\"row justify-content-center align-items-center\">\
                            <div class=\"col-sm-12 col-md-8\">\
                                <p class=\"h4 text-center\">\
                                    Created by Yohanes Keanoe &copy; 2018\
                                </p>\
                            </div>\
                        </div>\
                        <div class=\"row justify-content-center align-items-center mt-4\">\
                            <div class=\"col-8 d-none d-md-block\">\
                                <div class=\"row\">\
                                    <a href=\"mailto:keanuraharjo@hotmail.com\" class=\"col-4\">\
                                        <p class=\"h4 text-center\">\
                                            <span class=\"fas fa-envelope fa-2x\"></span>\
                                        </p>\
                                    </a>\
                                    <a href=\"https://www.linkedin.com/in/ykeanoe\" class=\"col-4\">\
                                        <p class=\"h4 text-center\">\
                                            <span class=\"fab fa-linkedin fa-2x\"></span>\
                                        </p>\
                                    </a>\
                                    <a href=\"https://www.github.com/ZankiMaru\" class=\"col-4\">\
                                        <p class=\"h4 text-center\">\
                                            <span class=\"fab fa-github-square fa-2x\"></span>\
                                        </p>\
                                    </a>\
                                </div>\
                            </div>\
                            <div class=\"col-12 justify-content-center d-flex d-md-none\">\
                                <div class=\"row col-10\">\
                                    <a href=\"mailto:keanuraharjo@hotmail.com\" class=\"col-12\">\
                                        <p class=\"h4 text-left\">\
                                            <span class=\"fas fa-envelope-square fa-2x\"></span>&emsp;keanuraharjo@hotmail.com\
                                        </p>\
                                    </a>\
                                    <a href=\"https://www.linkedin.com/in/ykeanoe\" class=\"col-12\">\
                                        <p class=\"h4 text-left\">\
                                            <span class=\"fab fa-linkedin fa-2x\"></span>&emsp;ykeanoe\
                                        </p>\
                                    </a>\
                                    <a href=\"https://www.github.com/ZankiMaru\" class=\"col-12\">\
                                        <p class=\"h4 text-left\">\
                                            <span class=\"fab fa-github-square fa-2x\"></span>&emsp;ZankiMaru\
                                        </p>\
                                    </a>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>";
    return $footer;
}
