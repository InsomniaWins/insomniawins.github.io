

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
	
	//"https://github.com/InsomniaWins/shots-and-guns/releases"
	
});




