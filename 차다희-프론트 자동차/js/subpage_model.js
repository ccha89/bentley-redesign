$(function() {
    $('#Img1').mouseenter(function() {
        // 현재 마우스를 올린 이미지를 제외한 다른 이미지를 숨김
        $('#Img1,.txt').not(this).addClass('hidden');
        // 현재 마우스를 올린 이미지를 확대
        $(this).addClass('zoom');
    });

    // 마우스가 이미지에서 벗어나면 모든 이미지를 다시 보이게 하고 확대를 원래대로 돌림
    $('.image').mouseout(function() {
        // 모든 이미지를 다시 보이게 함
        $('.image,.txt').removeClass('hidden');
        // 확대된 이미지를 원래 크기로 복귀
        $(this).removeClass('zoom');
    });
});