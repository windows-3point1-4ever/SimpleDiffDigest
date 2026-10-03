jQuery(document).ready(function() { 
	if (window.location.href.includes("revision.php")) {
		let sdd_panelDigest = document.createElement('table');
		sdd_panelDigest.classList.add('sdd-panel');
		
		let sdd_diffTables = document.querySelectorAll('table.diff');

		let sdd_refreshbutton = document.createElement('button');
		sdd_refreshbutton.innerHTML = "Refresh digest";
		sdd_panelDigest.append(sdd_refreshbutton);

		let sdd_cuts = document.querySelectorAll('td.diff-deletedline');
		let sdd_adds = document.querySelectorAll('td.diff-addedline');

		console.log(sdd_cuts.length + " cuts");
		console.log(sdd_adds.length + " adds");

		let sdd_cutHeading = document.createElement('td');
		sdd_cutHeading.classList.add('sdd-difftype-heading');
		let sdd_cutHeadingContainer = document.createElement('tr');
		sdd_cutHeading.innerHTML = "These were cut. Click to jump to the diff line.";
		sdd_cutHeadingContainer.append(sdd_cutHeading);
		sdd_panelDigest.append(sdd_cutHeadingContainer);
		
		for (let i = 0; i < sdd_cuts.length; i++) {
			let sdd_cutEntry = document.createElement('td');
			let temprow = document.createElement('tr');			
			sdd_cutEntry = sdd_cuts[i].cloneNode(true);
			sdd_cuts[i].id = 'sdd-cut-anchor-' + i;
			sdd_cutEntry.addEventListener('click', function(){
				sdd_jump_to_anchor('sdd-add-anchor-' + i);
			});
			temprow.append(sdd_cutEntry);
			sdd_panelDigest.append(temprow);
		}

		let sdd_addHeading = document.createElement('td');
		sdd_addHeading.classList.add('sdd-difftype-heading');
		let sdd_addHeadingContainer = document.createElement('tr');
		sdd_addHeading.innerHTML = "These were cut. Click to jump to the diff line.";
		sdd_addHeadingContainer.append(sdd_addHeading);
		sdd_panelDigest.append(sdd_addHeadingContainer);
		
		for (let i = 0; i < sdd_adds.length; i++) {
			let sdd_addEntry = document.createElement('td');
			let temprow = document.createElement('tr');			
			sdd_addEntry.classList.add('diff-addedline');			
			sdd_addEntry = sdd_adds[i].cloneNode(true);
			sdd_adds[i].id = 'sdd-add-anchor-' + i;
			sdd_addEntry.addEventListener('click', function(){
				sdd_jump_to_anchor('sdd-add-anchor-' + i);
			});
			temprow.append(sdd_addEntry);
			sdd_panelDigest.append(temprow);
		}

		document.querySelector('div.revisions').prepend(sdd_panelDigest);
	} 
});

function sdd_jump_to_anchor(sdd_tgt) {
	//document.getElementById(sdd_tgt).scrollIntoView();
	const sdd_currentSelected = document.querySelector('.sdd-scrollto');
	if (sdd_currentSelected !== null) {
		sdd_currentSelected.classList.remove('sdd-scrollto');
	}
	
	const targetElement = document.getElementById(sdd_tgt);
	console.log(targetElement);
	targetElement.classList.add('sdd-scrollto');
	console.log(targetElement);
	const rect = targetElement.getBoundingClientRect();
	
	const elementTop = rect.top + window.pageYOffset;	
	
	const targetPosition = 0.8 * elementTop;
	
	window.scrollTo({
		top: targetPosition,
		behavior: 'smooth'
  });
}