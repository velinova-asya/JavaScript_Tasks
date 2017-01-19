var employees = [
    {
        "ID": "1",
        "First Name": "Petar",
        "Last Name": "Lilov",
        "Occupation": "Front-end TL"
    }, {
        "ID": "3",
        "First Name": "Lyubomir",
        "Last Name": "Zaekov",
        "Occupation": "FE developer"
    }, {
        "ID": "2",
        "First Name": "Asya",
        "Last Name": "Velinova",
        "Occupation": "FE developer"
    }, {
        "ID": "4",
        "First Name": "Georgi",
        "Last Name": "Lubenov",
        "Occupation": "Designer"
    }, {
        "ID": "5",
        "First Name": "Ivan",
        "Last Name": "Merdjanov",
        "Occupation": "Designer"
    }, {
        "ID": "6",
        "First Name": "Petq",
        "Last Name": "Hristova",
        "Occupation": "Designer"
    }, {
        "ID": "7",
        "First Name": "Hristo",
        "Last Name": "Ivanov",
        "Occupation": "Production manager",
        "Special Field": "YES!"
    }, {
        "ID": "8",
        "First Name": "Kubrat",
        "Last Name": "Pulev",
        "Occupation": "R&D manager",
        "Hidden Field": "YES!"
    }, {
        "ID": "10",
        "First Name": "Dessislava",
        "Last Name": "Dobreva",
        "Occupation": "Office manager"
    }, {
        "ID": "11",
        "First Name": "Ivanka",
        "Last Name": "Valchanova",
        "Occupation": "Sales manager",
        "Hidden Field": "YES!"
    }, {
        "ID": "9",
        "First Name": "Rumen",
        "Last Name": "Radev",
        "Occupation": "IT support"
    }, {
        "ID": "12",
        "First Name": "Yavor",
        "Last Name": "Ivanov",
        "Occupation": "Marketing coordinator",
        "Special Field": "YES!"
    }
];





// ======================================================================
// ======================================================================

// 						Games drop down menu

// ======================================================================
// ======================================================================

function dropGamesF() {

	var dropContentGames = document.getElementById('drop_content_games');

	if (dropContentGames.style.display != 'block') {
		dropContentGames.style.display = 'block';
	} else {
		dropContentGames.style.display = 'none';
	}
}

function hideDropF() {

	var dropBtnGames = document.getElementsByClassName("drop_games");
	var dropContentGames = document.getElementById('drop_content_games');
	if (dropContentGames.style.display = 'block') {
		dropContentGames.style.display = 'none';
	}
}


// ======================================================================
// ======================================================================

// 					Make active link opaque

// ======================================================================
// ======================================================================

function makeOpaqueF() {

	var allFlags = document.getElementsByClassName("flag"),
		indexFlag = 0,
		flagsL = allFlags.length;
		

 	for (indexFlag; indexFlag < flagsL; indexFlag += 1) {

    	allFlags[indexFlag].addEventListener("click", function(e) {

	    	var currentFlag = this,
	    		indexFlagC = 0;

	    	for (indexFlagC; indexFlagC < flagsL; indexFlagC += 1) {
	        	
	        	if (currentFlag != allFlags[indexFlagC]) {
	        		allFlags[indexFlagC].classList.remove('active_flag');
	        	} 

	        	currentFlag.classList.add('active_flag');
	      	}

	    	e.preventDefault();
    	});
  	};
}

// ======================================================================
// ======================================================================

//			 Makes height of content of two columns equal

// ======================================================================
// ======================================================================

function makeEqualContent(tobeEqual) {
	
	var equalColumns = document.getElementsByClassName('tobeEqual'),
		tallestColumn = 0,
		indexT = 0,
		columnsL = equalColumns.length,
		elementColumn,
		elementHeight,
		indexTT = 0;

	for (indexT; indexT < columnsL; indexT += 1) {
		equalColumns[indexT].style.height = "auto";
		elementColumn = equalColumns[indexT];	
		elementHeight = elementColumn.offsetHeight;
		tallestColumn = (elementHeight > tallestColumn ? elementHeight : tallestColumn);
	}

	for (indexTT; indexTT < columnsL; indexTT += 1) {

		equalColumns[indexTT].style.height = tallestColumn + "px";
	}
}

window.addEventListener('resize', makeEqualContent);

// ======================================================================
// ======================================================================

// 					Right column drop down

// ======================================================================
// ======================================================================


function hideOpenBtn() {

	var openBtns = document.getElementsByClassName('open_btn'),
		infoBlocks = document.getElementsByClassName('info_block'),
		indexOp = 0,
		openBtnsL = openBtns.length;

	for (indexOp; indexOp < openBtnsL; indexOp += 1) {

		openBtns[indexOp].addEventListener("click", function(e) {

			var currentHide = this,
				indexOO = 0;

			for (indexOO; indexOO < openBtnsL; indexOO += 1) {

	        	if (currentHide != openBtns[indexOO]) {
	        		openBtns[indexOO].classList.remove('active_open');
	        		infoBlocks[indexOO].classList.remove('show_info');
	        	} else if (currentHide == openBtns[indexOO]) {
	        		openBtns[indexOO].classList.add('active_open');
	        		infoBlocks[indexOO].classList.add('show_info');
	        	}
	      	}

	    	e.preventDefault();
		});
	}
}


function hideInfoBlock() {

	var openBtns = document.getElementsByClassName('open_btn'),
		infoBlocks = document.getElementsByClassName('info_block'),
		indexCl = 0,
		infoBlocksL = infoBlocks.length;

	for (indexCl; indexCl < infoBlocksL; indexCl++) {

		infoBlocks[indexCl].addEventListener("click", function(e) {

			var currentInfo = this,
				indexCC = 0;

			for (indexCC; indexCC < infoBlocksL; indexCC++) {

	        	if (currentInfo != infoBlocks[indexCC]) {
	        		infoBlocks[indexCC].classList.remove('show_info');
	        	} else if (currentInfo == infoBlocks[indexCC]) {
	        		infoBlocks[indexCC].classList.remove('show_info');
	        		openBtns[indexCC].classList.remove('active_open');
	        	}
	      	}

	    	e.preventDefault();
		});
	}
}



// ======================================================================
// ======================================================================

// 							Table

// ======================================================================
// ======================================================================

document.addEventListener("DOMContentLoaded", function(event) {

	// Call functions
	makeOpaqueF();
	hideOpenBtn();
	hideInfoBlock();


    // ==============================================================
	//					createTable
	// ==============================================================
    var createTable = function() {

	 	var keys = [],
	 	indexK = 0,
	 	employeesL = employees.length;

		for (indexK; indexK < employeesL; indexK += 1) {

	    	Object.keys(employees[indexK]).forEach(function(key){
	        	if (keys.indexOf(key) == -1) {
	            	keys.push(key);
	        	}
	    	});
		}

		// Open table
		var txt='';
		txt += "<table>"
		txt +="<tr>";

		// Put key from keys in th
		var keyIndex = 0,
			keysL = keys.length;

		for (keyIndex; keyIndex < keysL; keyIndex += 1) {
	    	txt += "<th class='keysInTable'>" + keys[keyIndex] + "</th>";
		}

		// ==============================================================
		//					sortTableByClickOnKeys
		// ==============================================================

		function sortTableByClickOnKeys() {
			
			var keysArr = document.getElementsByClassName('keysInTable'),
				ki = 0,
				keysArrL = keysArr.length;

			for (ki; ki < keysArrL; ki += 1) {
				
				keysArr[ki].addEventListener("click", function(e) {

					var currentKey = this.innerHTML;

					employees.sort(function(a, b){

						if (isNaN(a[currentKey]) && isNaN(b[currentKey])) {
							if (a[currentKey] < b[currentKey]) return -1;
							if(a[currentKey] > b[currentKey]) return 1;
							return 0;
						} else {
							return a[currentKey]-b[currentKey];
						}
					});

					// Call createTable() with sorted object
					createTable();
				});
			}
		}

		// Put data
		for (dataValue in employees) {

			txt += "<tr>";

			var indexData = 0;

			for (indexData; indexData < keysL; indexData += 1) {
				
				if (typeof(employees[dataValue][keys[indexData]]) === "undefined") {
					txt += "<td>" + "&nbsp;" + "</td>";
				} else {
					txt += "<td>" + employees[dataValue][keys[indexData]] + "</td>";
				}
	        }

	        txt += "</tr>";
	    }

	    // Close table
		txt +="</tr>";
		txt += "</table>";

		document.getElementById("tableDiv").innerHTML = txt;

		// Call functions
		makeEqualContent();
		sortTableByClickOnKeys();
	
	}; // end of createTable();


	// Call createTable() with initial object
	createTable();

}); // end of document.addEventListener("DOMContentLoaded") 