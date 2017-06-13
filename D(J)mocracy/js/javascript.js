function generateRows() {
	var numSongs = document.getElementById("numSongs").value;
	var table = document.getElementById("songTable");
	var start = 0;

	if(numSongs > 100){
		window.alert('You can\'t have more than 100 songs in the queue!')
		return;
	}
	if(numSongs <= 0) {
		window.alert('You have to have at least 1 song!')
		return;
	}

	while(start < numSongs) {
		var row = table.insertRow(1);
    	var cell1 = row.insertCell(0);
    	var cell2 = row.insertCell(1);
    	var cell3 = row.insertCell(2);
    	var cell4 = row.insertCell(3)
    	cell1.innerHTML = numSongs - start;
    	cell2.innerHTML = "NEW CELL2";
    	cell3.innerHTML = "NEW CELL3";
    	cell4.innerHTML = 0;
    	start++;
	}

	var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3)
    cell1.innerHTML = "#";
    cell2.innerHTML = "Artist";
    cell3.innerHTML = "Song";
    cell4.innerHTML = "Votes";


}