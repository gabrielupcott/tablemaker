window.addEventListener("load", function() {

    let rowCount = 0, colCount = 0; // amount of rows and columns
    const cells = []; // array for number of cells in each row


    function newCol(header){ // function to add new column
        colCount++; // adding to column count

        // using amount of columns to give id for later reference
        let result = "<th scope=\"col\" id=\"col" + colCount + "\">" + header + "</th>"; // temporary variable for new html
        
        $("#rowHeaders").html( $("#rowHeaders").html() + result); // inject html for new column onto the end of pre-existing columns in table using jquery
    }

    function newRow(header){
        rowCount++; // adding to column count

        cells.push(0); // adding new index to array of cell counts for row

        // using amount of columns to give id for later reference
        let result = "<tr id=\"row" + rowCount + "\">"; // temporary variable for new html
        result += "<th>" + header + "</th>";
        result + "</tr>";
        
        $("#rows").html($("#rows").html() + result); // inject html for new row onto the end of pre-existing rows in table using jquery
    }

    function newCell(row, value){
        // TODO: show feedback for errors

        if (row < 0 || row > colCount){ // throwing error if row selection is out of range
            throw new Error('out of range');
        }
        else if (cells[row-1] == colCount - 1){ // throwing error if row is full
            throw new Error('full');
        }
        
        cells[row-1] ++; // add to cell count in array

        result = "<td>" + value + "</td>" // temporary variable for new html

        let selector = "#row" + row; // temporary variable for jquery selector

        $(selector).html($(selector).html() + result); // inject html for new cell onto the end of pre-existing cells in row using jquery
    }

    function clear(){
        $("#table").html("<thead> <tr id=\"rowHeaders\"></tr></thead><tbody id=\"rows\"></tbody>"); // inject blank table html into table element using jquery
    }
    
    $("#newCol").click(function(){ // event listener for new column button
        let header = $("#header").val(); // getting value of header provided
        newCol(header); // calling new column function

    });

    $("#newRow").click(function(){ // event listener for new row button
        let header = $("#header").val(); // getting value of header provided
        newRow(header); // calling new row function
    });

    $("#newCell").click(function(){ // event listener for new cell button
        let row = $("#row").val(); // getting value of row provided
        let value = $("#cellValue").val(); // getting value of cell provided

        try{ // try and catch block to catch errors from back inputs
            newCell(row, value); // calling new cell function
        } catch(e){
            // TODO: give bad input feedback
            console.log(e); // printing error to console
        }
    });

    $("#clear").click(function(){ // event listener for clear button
        clear();  // calling clear function
    });


});