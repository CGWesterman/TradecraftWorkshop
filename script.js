//button variables
	const addNewTool = document.querySelector('#add-button');
	const removeTool = document.querySelector('#remove-button');
	const clearToolbox = document.querySelector('#clear-button');
	const backToTop = document.querySelector('#scroll-to-top');
	const gridContainer = document.querySelector('.grid-container');
	const clearToolsPopup = document.querySelector('#clear-tools-popup');
	const openPopupButton = document.querySelector('#clear-button-popup');
	const yesButton = document.querySelector('#yes');
	const noButton = document.querySelector('#no');


	//initialize buttons
	addNewTool.onclick = additionalTool;
	clearToolbox.onclick = clearAllTools;
	backToTop.onclick = goTop;
	openPopupButton.onclick = clearAllTools;
	yesButton.onclick = () => {
		gridContainer.innerHTML = ''
		localStorage.removeItem('toolbox');
		clearToolsPopup.style.display = 'none';
		saveToolsToLocalStorage();
	};
	noButton.onclick = () => {
		clearToolsPopup.style.display = 'none';
	};


//button functions

function clearAllTools() { //clears all tools
	clearToolsPopup.style.display = 'flex'; //show confirmatiion popup
};

function additionalTool() { //adds a new tool
	const newTool = document.createElement('div');
	newTool.className = 'tool';
	const icon = document.createElement('div');
	icon.className = 'icon-square';
	const innerButton = document.createElement('button');
	innerButton.textContent = 'Browse Tools';
	icon.appendChild(innerButton);
	newTool.appendChild(icon);
	gridContainer.appendChild(newTool);
	saveToolsToLocalStorage();
};

function goTop() { //takes user to top of page
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
};

function toolBrowser() {

};


//other page functions
function saveToolsToLocalStorage() { //save current state to local storage
	localStorage.setItem('toolbox', gridContainer.innerHTML);
}
window.onload = function() { //load saved state on page load
	const savedTools = localStorage.getItem('toolbox');
	if (savedTools) {
		gridContainer.innerHTML = savedTools;
	}
};