$(document).ready(function () {
    var f_inp1 = $('.f_inp1'),
        f_inp2 = $('.f_inp2');
    f_inp1.on('focus', function () {
        $(this).parent().siblings('.js-calc_sum') .prop('checked', false);
        $(this).val('');
    });

    f_inp2.on('focus', function () {
        $(this).parent().siblings('.js-calc_sum') .prop('checked', false);
        $(this).val('');
    });

    f_inp1.on('change', function () {
        var val = $(this).val();
            regExp = /[^\d]/g;
        if(val === regExp) {
            $(this).parent().siblings('.js-calc_sum') .prop('checked', false);
            $(this).val('');
        }
        if(val === 0 || val === ''){
            val = 400;
            $(this).parent().siblings('.js-calc_sum').val(val);
        }
        if (val > 0 && val < 20000){
            val = val / 100 * 4;
            val = val.toFixed(2);
            if(val <=400){
                val = 400;
            }
            $(this).parent().siblings('.js-calc_sum').val(val);
        }
        if (val >= 20001 && val <= 100000) {
            val = val / 100 * 3;
            val = 800 + val;
            val = val.toFixed(2);
            $(this).parent().siblings('.js-calc_sum').val(val);
        }
        if(val >= 100001 && val <= 200000) {
            val = val / 100 * 2;
            val = 3200 + val;
            val = val.toFixed(2);
            $(this).parent().siblings('.js-calc_sum').val(val);
        }
        if(val >= 200001 && val <= 1000000) {
            val = val / 100 * 1;
            val = 5200 + val;
            val = val.toFixed(2);
            $(this).parent().siblings('.js-calc_sum').val(val);
        }
        if(val > 1000000) {
            val = val / 100 * 0.5;
            val = 3200 + val;
            val = val.toFixed(2);
            if(val > 60000){
                val = 60000;
            }
            $(this).parent().siblings('.js-calc_sum').val(val);
        }
    });

    f_inp2.on('change', function () {
        var val = $(this).val();
        if(val === 0 || val === ''){
            val = 200;
            $(this).parent().siblings('.js-calc_sum').val(val);
        }
        if (val > 0 && val < 20000){
            val = val / 100 * 4;
            val = val  / 2;
            val = val.toFixed(2);
            if(val <=200){
                val = 200;
            }
            $(this).parent().siblings('.js-calc_sum').val(val);
        }
        if (val >= 20001 && val <= 100000) {
            val = val / 100 * 3;
            val = 800 + val;
            val = val  / 2;
            val = val.toFixed(2);
            $(this).parent().siblings('.js-calc_sum').val(val);
        }
        if(val >= 100001 && val <= 200000) {
            val = val / 100 * 2;
            val = 3200 + val;
            val = val  / 2;
            val = val.toFixed(2);
            $(this).parent().siblings('.js-calc_sum').val(val);
        }
        if(val >= 200001 && val <= 1000000) {
            val = val / 100 * 1;
            val = 5200 + val;
            val = val  / 2;
            val = val.toFixed(2);
            $(this).parent().siblings('.js-calc_sum').val(val);
        }
        if(val > 1000000) {
            val = val / 100 * 0.5;
            val = 3200 + val;
            val = val  / 2;
            val = val.toFixed(2);
            if(val > 60000){
                val = 60000;
            }
            $(this).parent().siblings('.js-calc_sum').val(val);
        }
    });

    $('.js-calc').on('change', function () {
        var val = $(this).val();

        if(val > 0) {
            $('.js-hid').val(val);
            $('.js-txt strong').text(val);

            $.fancybox.open({
                src: '#calc-modal',
                type: 'inline'
            });
        }

    });

    $('.js-sbt').on('click', function (e) {
        e.preventDefault();
        var url = '/order.html';
        $(location).attr('href', url);
    });

});