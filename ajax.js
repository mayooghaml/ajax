
function ajax()
{

var temp= [
    
        
        {
            "S.No" : "1",
            "Name":"Rice",
            "Quantity":"10",
            "Unit":"kg",
            "Department":"Grocery"
        },
        {
         "S.No" : "2",
         "Name":"Milk",
         "Quantity":"500",
         "Unit":"ml",
         "Department":"Grocery"
        },
        {
         "S.No" : "3",
         "Name":"Tissue Paper",
         "Quantity":"5",
         "Unit":"pack",
         "Department":"Grocery"
        },
        {
         "S.No" : "4",
         "Name":"Pen",
         "Quantity":"10",
         "Unit":"nos",
         "Department":"Stationary"
        },
        {
         "S.No" : "5",
         "Name":"Banana",
         "Quantity":"2",
         "Unit":"kg",
         "Department":"Fruits"
        },
        {
         "S.No" : "6",
         "Name":"Chips",
         "Quantity":"5",
         "Unit":"packet",
         "Department":"Snacks"
        },
        {
         "S.No" : "7",
         "Name":"Fish",
         "Quantity":"1",
         "Unit":"kg",
         "Department":"Food"
        },
        {
         "S.No" : "8",
         "Name": "Oil",
         "Quantity":"1",
         "Unit":"L",
         "Department":"Edible Oil"
        },
        {
         "S.No" : "9",
         "Name":"Eggs",
         "Quantity":"10",
         "Unit":"nos",
         "Department":"Eggs"
        },
        {
         "S.No" : "10",
         "Name":"Wine",
         "Quantity":"2",
         "Unit":"L",
         "Department":"Beverages"
        }
     ]

var col = [];
        for (var i = 0; i < temp.length; i++) {
            for (var key in temp[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

var table = document.createElement("table");

var tr = table.insertRow(-1);                   

for (var i = 0; i < col.length; i++) {
    var th = document.createElement("th");     
    th.innerHTML = col[i];
    tr.appendChild(th);
}

for (var i = 0; i < temp.length; i++) {

    tr = table.insertRow(-1);

    for (var j = 0; j < col.length; j++) {
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = temp[i][col[j]];
    }
}

var divContainer = document.getElementById("demo");
divContainer.innerHTML = "";
divContainer.appendChild(table);

}
