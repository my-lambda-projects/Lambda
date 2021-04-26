// check if you can make an eyedropper tool
// each drawing is on a separate layer
// fullscreen button
// F1 - show shortcuts
// F11 - enter fullscreen
// f - disable/enable menu in fullscreen mode (warning when not in fullscreen)
// b - brush
// e - eraser
// t - text
// x - color selector
// V - select tool
// O - open open menu
// CTRL + O - upload image
// SHIFT + O - load from database
// S / SHIFT + S - open save menu
// CTRL + S - localStorage save (fallback to cookie)
// CTRL + SHIFT + S - download image
// CTRL + N - dialog for blank document
// CTRL + Z - undo
// CTRL + Y / CTRL + SHIFT + Z - redo

// select tool (real time transform tool)
// brush (2 radio inputs round/square, size) (brushes)
// eraser (2 radio inputs round/square, size) (brushes)
// textTool (bold, italic, font size, font family, underline) //aligning options if it would be usefull
// {[rectangle, round rectangle, circle, polygon(number of sides)] (SHIFT will make shapes regular, CTRL is like alt in photoshop)
// line tool} (it can both work with 2 clicks or with mouse down)
// pen tool (like line tool, but with undefined points; it ends when the users presses enter)
// something for math formulas (http://www.symbolab.com/solver/limit-calculator and how google makes graphs)
// eyedropper tool (colors only from canvas)
// crop tool (for layer)
// locked layers (can't select, can't modify)

// in the database should be some default images from biology(romedic), math, physics etc.


// check if browser supports css blendings: var supportsMixBlendMode = window.getComputedStyle(document.body).mixBlendMode; (!undefined)

// TODO: remove this part
$('li > .fa').parent().addClass('disabled');
$('[data-action], .tool, .menu-open').removeClass('disabled');

var menu = {
    'text': 'textTool',
    'poly': 'polyTool'
};
/*
$(window).on('dragenter', function (e) {
    stopDefaultEvent(e);
    $('.dragndrop').show();
});
$('.dragndrop').on('dragover', function (e) {
    stopDefaultEvent(e);
    $('.dragndrop').addClass('over');
});
$('.dragndrop').on('dragexit', function (e) {
    stopDefaultEvent(e);
    $('.dragndrop').removeClass('over');
});
$(window).on('dragexit', function (e) {
    stopDefaultEvent(e);
    $('.dragndrop').removeClass('over').hide();
});

$('.dragndrop').on('drop', function (e) {
    stopDefaultEvent(e);
    $('.dragndrop').removeClass('over').hide();
    
    var files = e.originalEvent.dataTransfer.files;
    handleFiles(files);
});*/

$(function(){
    // load fonts list 
    fontsAvailable.sort();
    for(var i = 0; i < fontsAvailable.length; i++){
        $('#fontList').append('<li class="font'+ (fontsAvailable[i] == fontsAvailable['selected'] ? ' selectedFont' : '') +'">'+ fontsAvailable[i] +'</li>');
    }
    
    $('#boardWrapper').mercuryCanvas({});

//    $.mercuryCanvas.refreshSettings();
});














var loader = {};
loader.hide = function(){
    $('#loader').hide();
}
loader.show = function(){
    $('#loader').hide();
}

function error(e) {
    var r = noty({
        layout: "top",
        text: e,
        type: "error",
        timeout: false
    })
}

function warning(e) {
    var r = noty({
        layout: "top",
        text: e,
        type: "warning",
        timeout: 3000
    })
}

function success(e) {
    var r = noty({
        layout: "top",
        text: e,
        type: "success",
        timeout: false
    })
}

var fullscreen = false;
function EnterFullScreen() {
    $('#fullscreenBtn').children('i').addClass('fa-compress').removeClass('fa-expand');
    docElm = document.documentElement;
    if (docElm.requestFullscreen)
        docElm.requestFullscreen();
    else if (docElm.mozRequestFullScreen)
        docElm.mozRequestFullScreen();
    else if (docElm.webkitRequestFullScreen)
        docElm.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    else if (docElm.msRequestFullscreen)
        docElm.msRequestFullscreen();
    fullscreen = true;
    $('body').addClass('fullscreen');
}

function ExitFullScreen() {
    $('#fullscreenBtn').children('i').addClass('fa-expand').removeClass('fa-compress');
    if (document.webkitCancelFullScreen)
        document.webkitCancelFullScreen();
    else if (document.mozCancelFullScreen)
        document.mozCancelFullScreen();
    else if (document.exitFullscreen)
        document.exitFullscreen();
    fullscreen = false;
    $('body').removeClass('fullscreen');
}

$(function() {
    $(window).bind("load resize", function() {
        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
    })
    
    loader.hide();

    $('#fullscreenBtn').on('click', function(){
        if (fullscreen) {
            ExitFullScreen();
        }
        else{
            EnterFullScreen();
        }
    });
    
    $('.dropdown-menu').on('click', function (e) { e.stopPropagation(); });
});

document.addEventListener("fullscreenchange", function () {
    if (!document.fullScreen) {
        ExitFullScreen();
    }
}, false);
 
document.addEventListener("mozfullscreenchange", function () {
    if (!document.mozFullScreen) {
        ExitFullScreen();
    }
}, false);
 
document.addEventListener("webkitfullscreenchange", function () {
    if (!document.webkitIsFullScreen) {
        ExitFullScreen();
    }
}, false);
 
document.addEventListener("msfullscreenchange", function () {
    if (!document.msFullscreenElement) {
        ExitFullScreen();
    }
}, false);

$(document).on({
    'keyup': function (e) {
        e.preventDefault();
        if (e.keyCode == 27) {
            if (fullscreen) {
                ExitFullScreen();
            }
        }
        if (e.keyCode == 122) {
            if (fullscreen) {
                ExitFullScreen();
            }
            else{
                EnterFullScreen();
            }
        }
    }
});