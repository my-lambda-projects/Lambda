export default function ($) {
    var $w = $(window);
    $.fn.visible = function () {
        if (this.length < 1) return;

        var $t = this.length > 1 ? this.eq(0) : this;
        var t = $t.get(0);
        var width = $w.width();
        var height = $w.height();

        var rect = t.getBoundingClientRect();

        var visible = {
            top: rect.top < 0 ? -rect.top : 0,
            bottom: rect.bottom > height ? rect.bottom - height : 0,
            left: rect.left < 0 ? -rect.left : 0,
            right: rect.right > width ? rect.right - width : 0
        };

        return visible;
    };
}