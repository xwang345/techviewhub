console.log("!!!!!!!!!!!!!!!!!!!!!!!! search js");

function filterNames(){
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    console.log(filterValue);
    let tbody = document.getElementById('names');

    let tr = tbody.querySelectorAll('tr.collection-item');
    
    //console.log(li.length);

    for(let i = 0; i < tr.length; i++){
        let td = tr[i].getElementsByTagName('td')[0];
        console.log(td);
        if(td.innerHTML.toUpperCase().indexOf(filterValue)>-1){
            tr[i].style.display = '';
        } else {
            tr[i].style.display = 'none';
        }
    }
}

function init() {
    console.log("This is javascript");
    let filterInput = document.getElementById('filterInput');
    filterInput.addEventListener('keyup', filterNames);
    filterNames();

}

window.onload = function() {
    init();
}
