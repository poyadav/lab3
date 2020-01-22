'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is working");
		$(".jumbotron p").toggleClass("active");
		$("#testjs").text("Please wait...");
		$("a.thumbnail").click(projectClick);
	});

function projectClick(e){
	e.preventDefault();
	$(this).css("background-color", "#e0b0ff");
	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");
	if(descritpion.length == 0){
		$(containingProject).append("<div class = 'project-description'><p>Description of the project.</p></div>");
	}
	else{
		description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
	}
	}
}

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}