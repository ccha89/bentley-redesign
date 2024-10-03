$(function() {
    $('#Img1').mouseenter(function() {
        $('#Img1, #Img2, #Img3,.Txt-Wrap,h2').hide();
        $('.large-image1').show();
    });

    $('.large-image1').mouseleave(function() {
        $('.large-image1').hide();
        $('#Img1, #Img2, #Img3,.Txt-Wrap,h2').show();
    });
    $('#Img2').mouseenter(function() {
        $('#Img1, #Img2, #Img3,.Txt-Wrap,h2').hide();
        $('.large-image2').show();
    });

    $('.large-image2').mouseleave(function() {
        $('.large-image2').hide();
        $('#Img1, #Img2, #Img3,.Txt-Wrap,h2').show();
    });
    $('#Img3').mouseenter(function() {
        $('#Img1, #Img2, #Img3,.Txt-Wrap,h2').hide();
        $('.large-image3').show();
    });

    $('.large-image3').mouseleave(function() {
        $('.large-image3').hide();
        $('#Img1, #Img2, #Img3,.Txt-Wrap,h2').show();
    });
});