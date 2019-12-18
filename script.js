
$(document).ready(function(){

    $(".saveBtn").on("click",function() {
        console.log(this)
        var value = $(this).siblings(".description").val();
        var time = $(this).siblings(".hour").text();

        localStorage.setItem(time, value);
    });
    $("#currentDay").text(moment());
});

$(document).ready(function(){ 
    var passedTime = $("#description1").length;
    var currentTime = $("#description1").length;
    var futureTime = $("#description1").length;
    
	if (passedTime > 2) {
        $("textarea").css("background", "gray");
        console.log()
	} 
	else if (currentTime > 2) {
		$("#textarea").css("background", "green");
    }
    else if (futureTime > 2) {
        $("#textarea").css("background", "red");
    }

});
