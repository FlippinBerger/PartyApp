function generateRows() {
    console.log("generating rows");
    var date = document.getElementById("date").value;
	var numSongs = document.getElementById("numSongs").value;

    //check the user inputs
    if (!inputIsValid(date, numSongs)) { return; }
    
    var url = 'http://127.0.0.1:5000/' + document.getElementById("date").value + '/' + numSongs;
    
    $.ajax({
        type: 'GET',
        url: url,
        success: callback
    });

}

function callback(response) {
    var table = document.getElementById("songTable");
    
    while(table.rows.length > 0) {
        table.deleteRow(0);
    }

    for(i = response.length - 1; i >= 0; --i) {
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3)
        cell1.innerHTML = i + 1;
        cell2.innerHTML = response[i]['artist'];
        cell3.innerHTML = response[i]['title'];
        cell4.innerHTML = response[i]['votes'];
    }

    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3)
    cell1.innerHTML = "#";
    cell2.innerHTML = "Artist";
    cell3.innerHTML = "Song";
    cell4.innerHTML = "Votes";
}

function inputIsValid(date, numSongs) {
    if(numSongs > 100){
        window.alert('You can\'t have more than 100 songs in the queue!')
        return false;
    }
    if(numSongs <= 0) {
        window.alert('You have to have at least 1 song!')
        return false;
    }
    return true;
}
