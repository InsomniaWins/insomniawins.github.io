

function getTerminalElement(lineIndex) {
	let printlnContainer = document.getElementById("printlnContainer");
	return printlnContainer.children[lineIndex];
}


function println(message, color=null) {
	
	
	let lineElement = document.createElement("p");
	lineElement.className = "aboutMeParagraph";
	lineElement.textContent = message;
	
	if (color != null) {
		lineElement.style.color = color
	}
	
	
	let printlnContainer = document.getElementById("printlnContainer");
	printlnContainer.appendChild(lineElement);
	
}


function printTerminalPrompt() {
	println("computer@system:~$ ", "white");
}


function getLatestTerminalLine() {
	let printlnContainer = document.getElementById("printlnContainer");
	return getTerminalElement(printlnContainer.childElementCount - 1);
}



document.addEventListener("DOMContentLoaded", function() { 
	
	let aboutMeParagraphElements = document.getElementsByClassName("aboutMeParagraph");
	
	function printNextCommandCharacter() {
		
		let terminalPromptElement = getLatestTerminalLine();
		
		let typingSpeed = 100;
		
		let finalString = "computer@system:~$ ./aboutme"
		
		terminalPromptElement.textContent += finalString.charAt(terminalPromptElement.textContent.length);
		
		if (terminalPromptElement.textContent.length == finalString.length) {
			
			setTimeout(() => {
				
				let lines = [
					">> Hey! My name's Andrew / Insomnia_Wins.",
					">> I'm a software and games developer open to taking requests.",
					">> I'm currently on track to earn a bachelor's degree in computer science.",
					">> Feel free to look at my projects while you're here.",
					">> If you would like to commission me, feel free to contact me at",
					"insomniawins.business@gmail.com"
				];
				
				
				let lineSpeed = 100;
				for (let i = 0; i < lines.length; i++) {
					setTimeout(()=>{
						
						println(lines[i]);
						
						if (i == lines.length - 1) {
							
							let lineElement = getLatestTerminalLine();
							lineElement.style.color = "lime";
							lineElement.style.paddingLeft = "64px";
							
						}
						
						
					}, lineSpeed * i);
					
					if (i == lines.length - 1) {
						setTimeout(() => {
							printTerminalPrompt();
							let latestTerminalLineElement = getLatestTerminalLine();
							latestTerminalLineElement.textContent += " |";
						}, lineSpeed * (i + 1))
					}
				}
				
			}, 1000);
			
		} else {
			setTimeout(printNextCommandCharacter, typingSpeed);
		}
		
	}
	
	setTimeout(() => {
		println("booting system . . .");
	}, 250);
	
	
	setTimeout(() => {
		printTerminalPrompt();
		
		setTimeout(printNextCommandCharacter, 500);
		
	}, 1000);
	
	
	
	
	
	
});




