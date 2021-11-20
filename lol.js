if (document.title.indexOf("Grades and Attendance") != -1) {
    function getSecondPart(str) {
        return str.split('_')[1];
    }


    function ins(txxt, link) {
        txt = txxt+" \n"
        var newElement;
        if (link && link.includes("keep")) {
            newElement = document.createElement("a");
        } else {
            newElement = document.createElement("div")
        }
        newElement.appendChild(document.createTextNode(txt));
        if (link && link.includes("keep")) {
            newElement.title = txt
            newElement.href = link
            newElement.target = "_blank"
        }
        document.getElementById('attByClass').appendChild(newElement);
    }
    
    function isNumeric(str) {
        if (typeof str != "string") return false  
        return !isNaN(str) &&
               !isNaN(parseFloat(str))
    }

    function getRanking(ok,lol) {
        //now get your grade :)
        var name = document.querySelector("#userName > span").innerText.split(/(\s+)/)[0];
        var users = lol.players
        var founduser;
        var foundscore;
        for (var item in users) {
            if (users[item].player_name && users[item].player_name == name) {
                founduser = users[item];
                foundscore = parseInt(item) + 1;
                break;
            }
        }

        //first request start
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"player_id":founduser.id,"score":-founduser.score});

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://keepthescore.co/api/yjxrblmwdae/score/?=&=", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        //first request end

        //second request start
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"player_id":founduser.id,"score":ok});

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://keepthescore.co/api/yjxrblmwdae/score/?=&=", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        //second request end

        console.log("a: "+name, " b: "+founduser.player_name)
        return foundscore
    }
    async function getBestrank(ok, callbac) {
        var aa = "https://keepthescore.co/api/yjxrblmwdae/board/";
        var obj = await (await fetch(aa)).json();
        ouput = (obj.players[0].player_name)
        console.log(ouput)
        ins(ouput+" has the best grade")
        ins("You have the #"+getRanking(ok,obj)+" best grade in the class","https://keepthescore.co/board/yjxrblmwdae/")
        callbac()
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
    ins("|------------------|")
    getBestrank(parseInt(getAverage("yeah")), function() {
        //credits
        ins("___________________");
        ins("Elliot's amazing #baddie. Version 0.11")
        //ew
        replaceWithLetter();
    })
} else if (document.title.indexOf("Class Score Detail") != -1) {
    //If you clicked on a grade yk
}

  //
