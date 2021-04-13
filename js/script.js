var xhr = new XMLHttpRequest();

xhr.onload = function(){
    if(xhr.status == 200){
        responseObj = JSON.parse(xhr.responseText);
        var newContent = '';
        newContent += '<tr id="head">';
        newContent += '<th scope="col">Level</th>';
        newContent += '<th scope="col">Move</th>';
        newContent += '<th scope="col">Type</th>';
        newContent += '<th scope="col">Category</th>';
        newContent += '</tr>';
        for(var i=0; i<responseObj.info.length; i++){
            newContent += '<tr>';
            newContent += '<td>' + responseObj.info[i].level + '</td>';
            newContent += '<td>' + responseObj.info[i].move + '</td>';
            newContent += '<td>' + responseObj.info[i].type + '</td>';
            newContent += '<td>' + responseObj.info[i].category + '</td>';
            newContent += '</tr>';
        }
        var moveTable = document.getElementById('moveset');
        
        moveTable.innerHTML = newContent;
    }
}
xhr.open('GET', 'data/moveset.json', true);
xhr.send(null);