if (document.title.indexOf("Grades and Attendance") != -1) {
    function getSecondPart(str) {
        return str.split('_')[1];
    }
    
    function ins(txt, pat) {
        var newElement = document.createElement("div");
        newElement.appendChild(document.createTextNode(txt));
        document.getElementById('attByClass').appendChild(newElement);
    }
    
    function isNumeric(str) {
        if (typeof str != "string") return false  
        return !isNaN(str) &&
               !isNaN(parseFloat(str))
    }
    
    function getAverage(ss) {
        var sum = 0
        var ad = 0
        var ppop = document.querySelector("#quickLookup > table.linkDescList.grid > tbody").children
        
        for (var i = 0; i < ppop.length; i++) {
            var tr = ppop[i];  
            if (tr.id) {
                var id = tr.id;
                if (id.includes("ccid")) {
                    var af = getSecondPart(id)
                    for (var ii = 0; ii < tr.children.length; ii++) {
                        var tds = tr.children[ii];
                        if (!tds.class && tds.querySelector("a"))  {
                            var urinside = tds.querySelector("a");
                            if(urinside.href.includes("score") && isNumeric(urinside.text)) {
                                sum = sum+1;
                                ad = ad+parseInt(urinside.text);
                            }
                        }
                    }
    
    
                }
            }
        }
    
        var average = (ad/sum).toFixed(1);
        console.log(average);
        if(ss != "yeah") {
            ins("Average grade - " + average);
        } else {
            return average
        }
    }
    
    function calculateLetter(grade) {
        var lettergrade = "F"; 
        if (grade == 100) {
            lettergrade = "A+"
        } else if (grade >= 93) {
            lettergrade = "A"
        } else if (grade <=92 && grade >= 90){
            lettergrade = "A-"
        } else if (grade <=89 && grade >=87){
            lettergrade = "B+"
        } else if (grade <=86 && grade >=83){
            lettergrade = "B"
        } else if (grade <=82 && grade >=80){
            lettergrade = "B-"
        } else {
            lettergrade = "Basically an F...";
        }
        return lettergrade
    }
    
    function gpa(grade) {
        var output = "1"
        if (grade >= 93) {
            output = "4.0"
        } else if (grade <=92 && grade >= 90){
            output = "3.9"
        } else if (grade <=89 && grade >=87){
            output = "3.0"
        } else if (grade <=86 && grade >=83){
            output = "2.6"
        } else if (grade <=82 && grade >=80){
            output = "2.3"
        } else {
            output = "Bro you just wouldn't get into college";
        }
        return output
    }
    
    function replaceWithLetter() {
        var ppop = document.querySelector("#quickLookup > table.linkDescList.grid > tbody").children
        
        for (var i = 0; i < ppop.length; i++) {
            var tr = ppop[i];  
            if (tr.id) {
                var id = tr.id;
                if (id.includes("ccid")) {
                    var af = getSecondPart(id)
                    for (var ii = 0; ii < tr.children.length; ii++) {
                        var tds = tr.children[ii];
                        if (!tds.class && tds.querySelector("a"))  {
                            var urinside = tds.querySelector("a");
                            if(urinside.href.includes("score") && isNumeric(urinside.text)) {
                                var grade = parseInt(urinside.text);
                                var lettergrade = calculateLetter(grade);
    
                               // console.log(lettergrade);
                                urinside.text = urinside.text+" : "+lettergrade
    
                            }
                        }
                    }
    
    
                }
            }
        }
    }
    
    ins("|------------------|")
    console.log("hah "+getAverage("yeah"))
    ins("Average letter grade - "+calculateLetter(parseInt(getAverage("yeah"))));
    ins("|------------------|")
    getAverage();
    ins("|------------------|")
    ins("GPA - "+gpa(parseInt(getAverage("yeah"))));
    
    //credits
    ins("___________________");
    ins("Credits to Elliot. Version 0.11")
    //ew
    replaceWithLetter();
} else if (document.title.indexOf("Class Score Detail") != -1) {
    //If you clicked on a grade yk
}

  //
