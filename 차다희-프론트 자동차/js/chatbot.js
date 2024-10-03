$(document).ready(function() {
    // 챗봇 버튼 클릭 이벤트
    $(".bar").find(".chat").click(function() {
        $(".chatIntro").show();
    });

    // 챗봇 닫기 버튼 클릭 이벤트
    $("#main-chat-logo2").click(function() {
        $(".chatIntro").hide();
    });

});