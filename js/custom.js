

var nerdMode = false;
var resume = [{
    "title": "Career",
    "hidden":false,
    "entryList": [{
           "title": "Lead UI Game Developer",
           "company":"WarDucks",
           "duration": "May 2021 – Present",
           "hidden":false,
           "list": [
                "Writing specifications and integration of various game features on the client and server (Unity, C#).",
                "Lead the UI Architecture and integrations on the project (assigning tasks and integration).",
                "Built up the technology stack using Noesis (WPF/C# framework).",
                "Organized training with the development team.",
            ]
        },
        {
            "title": "Unity C# Developer - UI Specialist",
            "company":"WarDucks",
            "duration": "May 2019 – May 2021",
            "hidden":false,
            "list": [
                "UI integration and architecture.",
                "Client-side and full stack Game developer.",
             ]
         },
        {
            "title": "Global Technical Support Engineer",
            "company":"PayPal",
            "duration": "November 2015 – May 2019",
           "hidden":false,
            "list": [
                "Developing internal tools (JS, C#, etc.)",
                "Supporting and troubleshooting integrations (SDKs, REST APIs)",
                "High Revenue issue handling and bug management.",
            ]
        },
        {
            "title": "Unity Game developer (Client and Server side)",
            "company":"ManaCube",
            "duration": "August 2014 – September 2015",
            "hidden":false,
            "list": [
                "Development of Dungeon Monsters on iOS and Android.",
                "Responsible of the game’s UI and UX (animations, navigation).",
                "Developed a wide set of core features of the game.",
                "Conceived and developed the game’s server.",
            ]
        },
        {
            "title": "Other",
            // "company":"",
            "duration": "August 2014 – September 2015",
            "hidden":false,
            "list": [
                "Securiloc Locster - Android Developer Internship - Geolocalisation App",
                "AAM Communication - Web development",
            ]
        },
        // {
        //     "title": "Android developer",
        //     "company":"Securiloc Locster",
        //     "duration": "June - August 2013",
        //    "hidden":true,
        //     "list": [
        //         "Refactoring an existing Android application (tag geolocalisation)."
        //     ]
        // },
        // {

        //     "title": "Web Developer",
        //     "company":"AAM Communication",
        //     "hidden":false,
        //     "duration": "July - December 2011 (Full time intership) - January - April 2013 (Part time)",
        //     "list": [
        //         "Several Website Integration (CakePHP, Drupal and Javascript.)",
        //     ]
        // },
        // {

        //     "title": "Other",
        //     "hidden":false,
        //     // "duration": "July - December 2011 (Full time intership) - January - April 2013 (Part time)",
        //     "entryList": [
        //         {
        //             "title": "Android developer (Geolocalization)",
        //             "company":"Securiloc Locster",
        //             "duration": "June - August 2013",
        //             "hidden":false,
        //             // "list": [
        //             //     "Refactoring an existing Android application (tag geolocalisation)."
        //             // ]
        //         },
        //         {
        
        //             "title": "Web Developer",
        //             "company":"AAM Communication",
        //             "hidden":false,
        //             "duration": "July - December 2011 (Full time intership) - January - April 2013 (Part time)",
        //             // "list": [
        //             //     "Several Website Integration (CakePHP, Drupal and Javascript.)",
        //             // ]
        //         },
        //     ]
        // }

    ]
},
{
    "title": "Skills",
    "hidden":false,
    "entryList": [{
            "title": "Technical",
            "column": 2,
            "hidden":false,
            "list": [
                "Object Oriented, Reactive and Functionnal programming",
                "Unity",
                "JSON, XML, Database management (Mongodb, mySQL..)",
                "Windows, Unix, MacOS, bash",
                "C#, C++, C, WPF, Python, Java, JS",
                "Network, Asynchronous, Design patterns, SOLID principle",
                "Versioning UI/console (Git, SVN, Mercurial), JIRA",
                "Photoshop & Blender (Basics)"
            ]
        },
        {
            "title": "Other skills - Language",
            "column": 2,
            "hidden":false,
            "list": [
                "Problem solving, fast learner",
                "Project management, Agile/Scrum Method",
                "UX Practice, Game Design, Game economy",
                "French (Native) and English (fluent)"
            ]
        }
    ]
},
{
    "title": "Education",
    "entryList": [{
            "title": "Master in Computer Sciences – Level 9",
            "company":"EPITECH",
            "duration": "2010 – 2015",
            "hidden":false,
            "column": 2,
            "list": [
                "Software architectures, C, C++",
                "Programming design patterns",
                "Game development",
                "Project Management"
            ]
        },
        {
            "title": "Griffith College Dublin - (Exchange program)",
            "duration": "2013 – 2014",
            "hidden":false,
            "column": 2,
            "list": [
                "Computing Science",
                "Business Management"
            ]
        },
        {
            "title": "Online courses",
            "hidden":false,
            "column": 2,
            "list": [
                "Unity certification (Udemy)",
                "Shader development, CGProgram (Udemy)",
                "Python (Udemy)",
                "Game Design (linkedin Learning)"
            ]
        }
    ]
},
{
    "hidden":false,
    "title": "Hobbies - Interests",
 //   "column": 1,
    "list": [
        "Game Jams (solo & team): Ludum Dare, Global Game Jam.",
        "Favorite games : Outer Wilds, The Binding of Isaac, The Legend of Zelda, Celeste, Metal Gear Solid, Rocket league.",
        "Interest in Sciences and curiosity for many topics.",
        "Tabletop Roleplaying and board games.",
        "Helped in developing company culture through several events (in office and remote gaming events, game clubs, Roleplay).",
    ]
}
];


function toggleNerdMode(duration = 200) {
    nerdMode = nerdMode == true ? false : true;
    console.log("test " + nerdMode);
    $('.nerdMode').button("toggle");
    if (duration > 0){
        $("#jsonContainer").toggle(duration);
        $("#nerdContainer").toggle(duration);
    }
    else{
        $("#jsonContainer").toggle();
        $("#nerdContainer").toggle();
    }
}

function setPrintFriendly()
{
    $("#sidebar").hide();
    $(".small-navbar").remove();
    $(".printFriendly").hide();
    $(".nerdMode").hide();
    $(".white-background").css({ 'width': '100%' });
        
}

function removeHidden(json)
{
    if (Array.isArray(json))
    {
        json = json.filter(
            function(value, index, arr){ 
                return !isHidden(value);
            }
        );
        json.forEach(element => {
            delete element.hidden;
        });
        for (let i = 0; i < json.length; i++) {
            json[i] = removeHidden(json[i]);
        }
    }
    else if (json.hasOwnProperty('list')){
        json.list = removeHidden(json.list);
    }
    else if (json.hasOwnProperty('entryList')){
        json.entryList = removeHidden(json.entryList);
    }
    
    return json;
}

function syntaxHighlight(json) {
  if (typeof json != 'string') {
     
       json = JSON.stringify(json, undefined, 2);
  }
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
      var cls = 'number';
      if (/^"/.test(match)) {
          if (/:$/.test(match)) {
              cls = 'key';
          } else {
              cls = 'string';
          }
      } else if (/true|false/.test(match)) {
          cls = 'boolean';
      } else if (/null/.test(match)) {
          cls = 'null';
      }
      return '<span class="' + cls + '">' + match + '</span>';
  });
}


function isHidden(entry){
    return entry.hasOwnProperty('hidden') && entry.hidden;
}

function showTitle(entry, entryLevel)
{
    if (entry.hasOwnProperty('title') ){
        let prefix = "";
        if (entry.hasOwnProperty('company')){
            prefix = `<span>${entry["company"]}</span> - `;
        }
        return `<h${entryLevel} class="printDark">${prefix}${entry.title}</h${entryLevel}>`;
    }
    return "";
}

function displayList(entry, entryLevel){
    let html = "";
    let listText = "";
    if (!entry.hasOwnProperty('entryList')){
        html += showTitle(entry, entryLevel);
    }
    if (entry.hasOwnProperty('duration')){
        html += `<span class="printDark resumeDuration">${entry.duration}</span>`;
    }
    if (entry.hasOwnProperty("column") && entry.column > 1){
      
        const half = Math.ceil(entry.list.length / 2);    
        const topHalf = Math.floor(entry.list.length / 2);
        const firstHalf = entry.list.slice(0, half);
        const secondHalf = entry.list.slice(-topHalf);
        for (let i = 0; i < half; i++) {
            // html += `<div class="row">`; // row
            listText +=`<li class="printDark resumeColumn columnLeft">${firstHalf[i]}</li>`;
            if (i < secondHalf.length ) {
                listText +=`<li class="printDark resumeColumn columnRight">${secondHalf[i]}</li>`;
            }
            // html += `</div>`;
        }
        html += `<ul class="resumeColumnContainer">${listText}</ul>`;
    } else {
     
        for (let i = 0; i < entry.list.length; i++) {
            let element = entry.list[i];
            listText+=`<li class="printDark col">${element}</li>`;
        }
        html += `<ul>${listText}</ul>`;
    }
    return `<div class="resumeSection">${html}</div>`;
}

function displayEntry(entry, entryLevel, firstIteration) {
    let text = "";    
  
    // sub title 
    
  
    if (entry.hasOwnProperty('entryList')) { // entries(object) list
        let entryList = entry.entryList;
        
        for (let i = 0; i < entryList.length; i++) {
            let element = entryList[i];
            
            if (i === 0) { // helps not separating the title with the first element of a list in a printing scenario
                let firstEntry = showTitle(entry, entryLevel);
                
                firstEntry += displayEntry(element, entryLevel + 1, false);
                text += `<div class="resumeSection">${firstEntry}</div>`
            }
            else {
                text += displayEntry(element, entryLevel + 1, false);
            }
        }
        
    } else if (entry.hasOwnProperty('list')){ // text list
        text += displayList(entry, entryLevel);
        firstIteration = true;
    } else
    {
        let html = "";
        if (!entry.hasOwnProperty('entryList')){
            html += showTitle(entry, entryLevel);
        }
        if (entry.hasOwnProperty('duration')){
            html += `<span class="printDark resumeDuration">${entry.duration}</span>`;
        }
        text += `<div class="resumeSection">${html}</div>`;
    }

    if (!firstIteration){
        text = `<div class="resumeSection">${text}</div>`;
    }
    return text;
}

function generateResumeFromJson(resume)
{
    let html = "";
    for (let i = 0; i < resume.length; i++) {
        let entry = resume[i];
        html += displayEntry(entry, 4, true);
    }

    return html;
}


$('.printFriendly').click(function (e) {
    if (nerdMode === true){
        toggleNerdMode(0);  
    } 
    
    setPrintFriendly(true);
    window.print();
    setTimeout(() => {  window.location.reload(); }, 10); // reload page after print closed to have the nice print layout
 });

 $('.nerdMode').click(function (e) {
    toggleNerdMode(200);
  });

  $( document ).ready(function() {
    resume = removeHidden(resume);
    $("#nerdContainer").append("<pre>" + syntaxHighlight(resume) + "</pre>").hide();
    $("#jsonContainer").append(generateResumeFromJson(resume) );
    $(".stamp").each(function() {
        $( this ).fitText();
      });
  });


