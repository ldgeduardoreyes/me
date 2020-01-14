
var $circleCursor = $('.circle-cursor-3'),
    $wrapper = $('#wrapper');

function moveCircle(e) {
    TweenLite.to($circleCursor, .7, {
        css: {
            left: e.pageX,
            top: e.pageY
        }
    }, .3);
}

var flag = false;
$($wrapper).mouseover(function () {
    flag = true;
    TweenLite.to($circleCursor, 0.5, { scale: 1, autoAlpha: 1 })
    $($wrapper).on('mousemove', moveCircle);
});
$($wrapper).mouseout(function () {
    flag = false;
    TweenLite.to($circleCursor, 0.5, { scale: 0.1, autoAlpha: 0 })
});

///

var $circleCursor2 = $('.circle-cursor'),
    $wrapper2 = $('#wrapper');

function moveCircle2(e) {
    TweenLite.to($circleCursor2, .85, {
        css: {
            left: e.pageX,
            top: e.pageY
        }
    }, .6);
}

var flag2 = false;
$($wrapper2).mouseover(function () {
    flag2 = true;
    TweenLite.to($circleCursor2, 0.5, { scale: 1, autoAlpha: 1 })
    $($wrapper2).on('mousemove', moveCircle2);
});
$($wrapper2).mouseout(function () {
    flag2 = false;
    TweenLite.to($circleCursor2, 0.5, { scale: 0.1, autoAlpha: 0 })
});

////

var $circleCursor3 = $('.circle-cursor-2'),
    $wrapper3 = $('#wrapper');
function moveCircle3(e) {
    TweenLite.to($circleCursor3, .8, {
        css: {
            left: e.pageX,
            top: e.pageY
        }
    }, .9);
}

var flag3 = false;
$($wrapper3).mouseover(function () {
    flag3 = true;
    TweenLite.to($circleCursor3, 0.5, { scale: 1, autoAlpha: 1 })
    $($wrapper3).on('mousemove', moveCircle3);
});
$($wrapper3).mouseout(function () {
    flag2 = false;
    TweenLite.to($circleCursor3, 0.5, { scale: 0.1, autoAlpha: 0 })
});
