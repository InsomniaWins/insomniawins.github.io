

document.addEventListener("DOMContentLoaded", function() { 
	
	// add projects scroll ability
	let projectsScrollContainer = document.getElementById("projectsScrollContainer");
	
	projectsScrollContainer.addEventListener("wheel", (event) => {
		event.preventDefault();
		projectsScrollContainer.scrollLeft += event.deltaY;
		projectsScrollContainer.style.scrollBehavior = "auto";
	});
	
	
	// add left/right buttons for projects
	let projectsLeftButton = document.getElementById("projectsLeftButton");
	let projectsRightButton = document.getElementById("projectsRightButton");
	let projectWidth = 364;
	
	projectsRightButton.addEventListener("click", () => {
		projectsScrollContainer.style.scrollBehavior = "smooth";
		projectsScrollContainer.scrollLeft += projectWidth;
	});
	
	projectsLeftButton.addEventListener("click", () => {
		projectsScrollContainer.style.scrollBehavior = "smooth";
		projectsScrollContainer.scrollLeft -= projectWidth;
	});
	
	
	
	// add projects click ability
	let settlersProjectElement = document.getElementById("settlersProject");
	settlersProjectElement.addEventListener("click", () => {
		//window.open("https://www.w3schools.com");
	});
	
	let shotsAndGunsProjectElement = document.getElementById("shotsAndGunsProject");
	shotsAndGunsProjectElement.addEventListener("click", () => {
		window.open("https://insomnia-wins.itch.io/shots-and-guns");
	});
	
	let rollOfTheDiceProjectElement = document.getElementById("rollOfTheDiceProject");
	rollOfTheDiceProjectElement.addEventListener("click", () => {
		window.open("https://modrinth.com/mod/roll-of-the-dice");
	});

	let advancementCriterionProjectElement = document.getElementById("advancementCriterionProject");
	advancementCriterionProjectElement.addEventListener("click", () => {
		window.open("https://modrinth.com/mod/advancement-criterion");
	});

	let assignmentManagerProjectElement = document.getElementById("assignmentManagerProject");
	assignmentManagerProjectElement.addEventListener("click", () => {
		window.open("https://insomnia-wins.itch.io/assignment-manager");
	});

	let godotScriptAppenderProjectElement = document.getElementById("godotScriptAppenderProject");
	godotScriptAppenderProjectElement.addEventListener("click", () => {
		window.open("https://github.com/InsomniaWins/godot-script-appender/releases");
	});

	
	
	//"https://github.com/InsomniaWins/shots-and-guns/releases"
	
});




