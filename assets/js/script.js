$(document).ready(function() {
    $("#relevant-courses").click(function() {
        $("#modal-container").show();
        $("#modal-overlay").show();
        $('body').addClass('no-scroll');
    });


    $("#modal-overlay").click(function() {
        $("#modal-container").hide();
        $("#modal-overlay").hide();
        $('body').removeClass('no-scroll');
    });

    $("#modal-close").click(function() {
        $("#modal-container").hide();
        $("#modal-overlay").hide();
        $('body').removeClass('no-scroll');
    });


    $("#education-container").click(function() {
        $("#modal-container").hide();
    });
    $('#nav1').localScroll({duration:900});
    $('#education').localScroll({duration:900});
    $('#work-experience-arrow').localScroll({duration:900});
    $('#skills-arrow').localScroll({duration:900});
    $('#back-to-top').localScroll({duration:900});

    $('#esurf').click(function() {
        $('#esurf').addClass('bottom40');
        $('#esurf-bod').show();
        $('#block').addClass('bottom50');
        $('#esurf-bod').addClass('top40');
        setTimeout(function() {
            $('#esurf-body-text').show();
            $('#freelance').addClass('rotate');
            $('#ucbmls').addClass('rotate');
            $('#marketing').addClass('slide-left'); 
        }, 1000);

       
    });


    $('#marketing #job-cancel').click(function() {
        $('#esurf').removeClass('bottom40');
        $('#block').removeClass('bottom50');
        $('#esurf-bod').hide();
        $('#esurf-body-text').hide();
        $('#esurf-bod').removeClass('top40');

        $('#freelance').removeClass('rotate');
        $('#ucbmls').removeClass('rotate');
        $('#marketing').removeClass('slide-left');
        $('#esurf').removeClass('rotate');

    });

    $('#freelance').click(function() {
        $('#freelance').addClass('bottom40');
        $('#block').addClass('bottom50');
        $('#freelance-bod').show();
        $('#freelance-bod').addClass('top40');
        setTimeout(function() {
            $('#esurf').addClass('trans-down');
            $('#ucbmls').addClass('rotate');
            $('#free-box').addClass('scoot-left');
            $('#freelance-box').addClass('slide-left');
            setTimeout(function() {
                $('#freelance-body-text').show();
            }, 1000);
        }, 1000);

    });

    $('#freelance-box #job-cancel').click(function() {
        $('#freelance').removeClass('bottom40');
        $('#block').removeClass('bottom50');
        $('#freelance-bod').hide();
        $('#freelance-body-text').hide();
        $('#free-box').removeClass('scoot-left');
        $('#esurf-bod').removeClass('top40');
        $('#esurf').removeClass('trans-down');
        $('#ucbmls').removeClass('rotate');
        $('#freelance-box').removeClass('slide-left');
        $('#freelance').removeClass('scoot-left');

    });

    $('#ucbmls').click(function() {
        $('#ucbmls').addClass('bottom40');
        $('#block').addClass('bottom50');
        $('#mls-bod').show();
        $('#mls-bod').addClass('top40');
        setTimeout(function() {
            $('#esurf').addClass('trans-down');
            $('#freelance').addClass('trans-down');
            $('#ucbmls-cont').addClass('scoot-left-two');
            $('#mls-box').addClass('slide-left');
            setTimeout(function() {
                $('#freelance-body-text').show();
            }, 1000);
        }, 1000);
            

    });

    $('#mls-box #job-cancel').click(function() {
        $('#ucbmls').removeClass('bottom40');
        $('#ucbmls-cont').removeClass('scoot-left-two');
        $('#block').removeClass('bottom50');
        $('#mls-bod').hide();
        $('#freelance-body-text').hide();
        $('#esurf-bod').removeClass('top40');
        $('#esurf').removeClass('trans-down');
        $('#freelance').removeClass('trans-down');
        $('#mls-box').removeClass('slide-left');
        $('#ucbmls').removeClass('scoot-left-two');

    });

    $(window).scroll(lazyLoad);
    lazyLoad();

    function lazyLoad() {
        var wt = $(window).scrollTop();    //* top of the window
        var wb = wt + $(window).height();  //* bottom of the window

        $("#skills").each(function(){
            var ot = $(this).offset().top;  //* top of skills section
            var ob = ot + $(this).height(); //* bottom of skills section

            if(!$(this).attr("loaded") && (wt<ob && wb > ot)) {
                setTimeout(function() {    
                    $('.skill-icon-color-html').each(function(i) {
                        setTimeout(function() {
                            $("#html" + i).addClass('blue');
                        }, 150 * i);
                    });
                    $('.skill-icon-color-css').each(function(i) {
                        setTimeout(function() {
                            $("#css" + i).addClass('blue');
                        }, 150 * i);
                    });
                    $('.skill-icon-color-js').each(function(i) {
                        setTimeout(function() {
                            $("#js" + i).addClass('blue');
                        }, 150 * i);
                    });
                    $('.skill-icon-color-java').each(function(i) {
                        setTimeout(function() {
                            $("#java" + i).addClass('blue');
                        }, 150 * i);
                    });

                    $('.skill-icon-color-illus').each(function(i) {
                        setTimeout(function() {
                            $("#illus" + i).addClass('blue');
                        }, 150 * i);
                    });

                    $('.skill-icon-color-ps').each(function(i) {
                        setTimeout(function() {
                            $("#ps" + i).addClass('blue');
                        }, 150 * i);
                    });

                    $('.skill-icon-color-soc').each(function(i) {
                        setTimeout(function() {
                            $("#soc" + i).addClass('blue');
                        }, 150 * i);
                    });
                    $(this).attr("loaded",true);
                }, 1000);
            }
        });
    }


});
