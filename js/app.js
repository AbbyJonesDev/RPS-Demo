var computerChoice = function() {
  var choice = Math.random();
  if (choice < 0.34) {
    return "rock";
  }
  else if (0.33 < choice < 0.67) {
    return 'paper';
  }
  else {
    return "scissors";
  }
};

var showComputerChoice = function(choice) {
  var text = "The computer chose " + choice;
  alert(text);
};

$(document).ready(function() {
  $('.ai-choices #rock').click(function() {
    event.preventDefault();
    var choice = computerChoice();
    if (choice === "rock") {
      showComputerChoice(choice);
      window.location.href="tie.html";
    }
    else if (choice === "paper") {
      showComputerChoice(choice);
      window.location.href = "computer_wins.html";
    }
    else {
      showComputerChoice(choice);
      window.location.href="player1_wins.html";
    }
  });
  $('.ai-choices #paper').click(function() {
    event.preventDefault();
    var choice = computerChoice();
    if (choice === "rock") {
      showComputerChoice(choice);
      window.location.href="player1_wins.html";
    }
    else if (choice === "paper") {
      showComputerChoice(choice);
      window.location.href = "tie.html";
    }
    else {
      showComputerChoice(choice);
      window.location.href="computer_wins.html";
    }
  });
  $('.ai-choices #scissors').click(function() {
    event.preventDefault();
    var choice = computerChoice();
    if (choice === "rock") {
      showComputerChoice(choice);
      window.location.href="computer_wins.html";
    }
    else if (choice === "paper") {
      showComputerChoice(choice);
      window.location.href = "player1_wins.html";
    }
    else {
      showComputerChoice(choice);
      window.location.href="tie.html";
    }
  });
});