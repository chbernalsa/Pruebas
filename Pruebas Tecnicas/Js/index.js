$(document).ready(function(){
	if ($("#hdScore").val() === "" && sessionStorage.getItem('scores') === null){
		sessionStorage.setItem('scores', '0');
		$("#hScore").text(0);
	}else if ($("#hdScore").val() === "" && sessionStorage.getItem('scores') !== "0"){
		$("#hdScore").val(sessionStorage.getItem('scores'));
		$("#hScore").text(sessionStorage.getItem('scores'));
	}

	var popup = $("#popUp");
	var optionSelect = $("#optionsSelect");
	var optionSelect1 = $("#validateOption");
	var games = $("#game");
	popup.hide();
	optionSelect.hide();
	optionSelect1.hide();
	games.show();

	$('html, body').animate({scrollTop:0}, 0);

	$('#btnRules').click(function(){
		popup.show();
		$("body").css("overflow", "hidden");
		$('html, body').animate({scrollTop:0}, 0); 
		return false;
	});

	$("#close").click(function(){
		popup.hide();
		$("body").css("overflow", "scroll");
	});

	var paper = $("#div-paper");
	var scissors = $("#div-scissors");
	var rock = $("#div-rock");
	var user = 0;
	var bot = 0;
	var totalScore;

	paper.click(function(){
		user = 1;
		bot = Math.floor((Math.random() *3)+1);
		validateWin(user,bot);
		optionSelect.show();
		optionSelect1.show();
		games.hide();
	});

	scissors.click(function(){
		user = 2;
		bot = Math.floor((Math.random() *3)+1);
		validateWin(user,bot);
		optionSelect.show();
		optionSelect1.show();
		games.hide();
	});

	rock.click(function(){
		user = 3;
		bot = Math.floor((Math.random() *3)+1);
		validateWin(user,bot);
		optionSelect.show();
		optionSelect1.show();
		games.hide();
	});

	$("#btnReturn").click(function(){
		optionSelect.hide();
		optionSelect1.hide();
		games.show();
	});

	$("#btnReturns").click(function(){
		optionSelect.hide();
		optionSelect1.hide();
		games.show();
	});
});


function validateWin(user,bot){
	var scorePlus = parseInt(sessionStorage.getItem('scores'));
	var score = $("#hScore");
	var status = $("#Status");
	var statu = $("#Statu");
	$("#userSelect").removeClass("paper");
	$("#botSelect").removeClass("paper");
	$("#userSelect").removeClass("scissors");
	$("#botSelect").removeClass("scissors");
	$("#userSelect").removeClass("rock");
	$("#botSelect").removeClass("rock");
	if (user == bot){
		if (user == 1){
			$("#imgUser").attr("src","Images/icon-paper.svg");
			$("#userSelect").addClass("paper");
			$("#imgBot").attr("src","Images/icon-paper.svg");
			$("#botSelect").addClass("paper");
		}else if(user == 2){
			$("#imgUser").attr("src","Images/icon-scissors.svg");
			$("#userSelect").addClass("scissors");
			$("#imgBot").attr("src","Images/icon-scissors.svg");
			$("#botSelect").addClass("scissors");
		}else {
			$("#imgUser").attr("src","Images/icon-rock.svg");
			$("#userSelect").addClass("rock");
			$("#imgBot").attr("src","Images/icon-rock.svg");
			$("#botSelect").addClass("rock");
		}
		$("#game").hide();
		status.text("TIE");
		statu.text("TIE");
		scorePlus = scorePlus;
		score.text(scorePlus);
	}else if (user == 1 && bot == 2){
		$("#imgUser").attr("src","Images/icon-paper.svg");
		$("#userSelect").addClass("paper");
		$("#imgBot").attr("src","Images/icon-scissors.svg");
		$("#botSelect").addClass("scissors");
		status.text("YOU LOSE");
		statu.text("YOU LOSE");
		scorePlus = scorePlus - 1;
		score.text(scorePlus);
	}else if (user == 1 && bot == 3){
		$("#imgUser").attr("src","Images/icon-paper.svg");
		$("#userSelect").addClass("paper");
		$("#imgBot").attr("src","Images/icon-rock.svg");
		$("#botSelect").addClass("rock");
		status.text("YOU WIN");
		statu.text("YOU WIN");
		scorePlus = scorePlus + 1;
		score.text(scorePlus);
	}else if (user == 2 && bot == 1){
		$("#imgUser").attr("src","Images/icon-scissors.svg");
		$("#userSelect").addClass("scissors");
		$("#imgBot").attr("src","Images/icon-paper.svg");
		$("#botSelect").addClass("paper");
		status.text("YOU WIN");
		statu.text("YOU WIN");
		scorePlus = scorePlus + 1;
		score.text(scorePlus);
	}else if (user == 2 && bot == 3){
		$("#imgUser").attr("src","Images/icon-scissors.svg");
		$("#userSelect").addClass("scissors");
		$("#imgBot").attr("src","Images/icon-rock.svg");
		$("#botSelect").addClass("rock");
		status.text("YOU LOSE");
		statu.text("YOU LOSE");
		scorePlus = scorePlus - 1;
		score.text(scorePlus);
	}else if (user == 3 && bot == 1){
		$("#imgUser").attr("src","Images/icon-rock.svg");
		$("#userSelect").addClass("rock");
		$("#imgBot").attr("src","Images/icon-paper.svg");
		$("#botSelect").addClass("paper");
		status.text("YOU LOSE");
		statu.text("YOU LOSE");
		scorePlus = scorePlus - 1;
		score.text(scorePlus);
	}else if (user == 3 && bot == 2){
		$("#imgUser").attr("src","Images/icon-rock.svg");
		$("#userSelect").addClass("rock");
		$("#imgBot").attr("src","Images/icon-scissors.svg");
		$("#botSelect").addClass("scissors");
		status.text("YOU WIN");
		statu.text("YOU WIN");
		scorePlus = scorePlus + 1;
		score.text(scorePlus);
	}
	sessionStorage.setItem('scores', scorePlus);
	$("#hdScore").val(sessionStorage.getItem('scores'));

}