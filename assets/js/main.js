$(document).ready(function () {
    function number() {
        var number = $(".js-number");
        number.each(function () {
            var max_number = +($(this).attr("data-max-number"));
            var input = $(this).find("input");
            var plus = $(this).find(".js-plus-number");
            var minus = $(this).find(".js-minus-number");
            plus.on("click", function () {
                var val = +(input.val());
                if (val >= max_number) {
                    return false
                } else {
                    val += 1;
                    input.val(val);
                }
            });
            minus.on("click", function () {
                var val = +(input.val());
                if (val > 1) {
                    val -= 1;
                    input.val(val);
                }
                return false;
            });
            input.on("change", function () {
                var val = +$(this).val();
                if (val > max_number) {
                    val = max_number;
                    $(this).val(val);
                }
                if (val === '') {
                    val = 1;
                    $(this).val(val);
                }
            });
        });
    }

    number();
});
$(document).ready(function () {


});

//swap

function swap(argument) {
    var elemnt1, element2;
    elemnt1 = document.getElementById('element1').innerHTML;
    elemnt2 = document.getElementById('element2').innerHTML;
    document.getElementById('element2').innerHTML = elemnt1;
    document.getElementById('element1').innerHTML = elemnt2;


};

// ===================== Footer bottom =====================

$(document).ready(function () {
    function footerAlign() {
        let footer = $('footer');
        footer.css('display', 'block');
        footer.css('height', 'auto');
        let footerHeight = footer.outerHeight();
        $('body').css('padding-bottom', footerHeight);
        footer.css('height', footerHeight);
    }

    footerAlign();
    $(window).resize(function () {
        footerAlign();
    });
});
if ($('.footer-down')[0]) {
    $('footer').css("padding-top", "80px")
}

// change img 
$(document).ready(function () {
    $(".seat-number").click(function () {
        if (!$(this).hasClass("reserved")) {
            $(this).toggleClass("active");
        }})

});

