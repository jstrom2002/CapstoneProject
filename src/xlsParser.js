//Note: data gathered from https://opendatatc.blob.core.windows.net/opendatatc/NCDB_1999_to_2016.csv

function getText(){
    // read text from URL location
    var request = new XMLHttpRequest();
    request.open('GET', 'https://opendatatc.blob.core.windows.net/opendatatc/NCDB_1999_to_2016.csv', true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var type = request.getResponseHeader('Content-Type');
            if (type.indexOf("text") !== 1) {
                return request.responseText;
            }
        }
    }
}

export function parseXLSX() {
    var data = getText();

    if (window.File && window.FileReader && window.FileList && window.Blob) {
        // Great success! All the File APIs are supported.
    } else {
        alert('The File APIs are not fully supported in this browser.');
    }

    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", data, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    return rawFile.send(null);


    //const XLSX = require('xlsx');
    //const workbook = XLSX.readFile(filename);
    //const days = workbook.SheetNames;
   // return console.log(XLSX.utils.sheet_to_json(workbook.Sheets(days[0])));
    //return XLSX.utils.sheet_to_json(workbook.Sheets(days[0]));
}
