
// on benefits page creates infographic
var counter = 0;
var plusDivs = (x) => {
    var imgPics = ["../images/pic20.jpg", "../images/pic22.jpg", "../images/pic23.jpg", "../images/pic24.jpg", "../images/pic25.jpg", "../images/pic26.jpg", "../images/pic21.jpg", "../images/pic28.jpg", "../images/pic29.jpg"];
    var imgText = ["cool stat here", "cool stat here", "cool stat here", "cool stat here", "cool stat here", "cool stat here", "cool stat here", "cool stat here", "cool stat here",]
    var size = imgPics.length - 1;
    counter = counter + x;
    while (counter > size) {
        counter = 0
    }
    while (counter < 0) {
        counter = size
    }

    document.querySelector(".slideShowInfo").src = imgPics[counter];
    document.querySelector(".call2action").innerText = imgText[counter];
}

// on getting started page animates fruits
$(document).ready(() => {
    $("#packages").click(function () {
        $("#hldPkgs").css('display', 'grid');
        $("#hldPkgs").animate({ left: '10px' });
        $("#packages").css('display', 'none');
    });

    $(".frontSlide").hover(() =>
        $("#mango").animate({ top: '42rem' }, 5000),
        $("#orange").animate({ top: '42rem' }, 5000),
    )

});
