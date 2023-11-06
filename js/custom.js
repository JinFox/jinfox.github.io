

var nerdMode = false;
var resume = [{
    "title": "Career",
    "hidden":false,
    "entryList": [
        {
            "title": "Lead Game Developer",
            "company":"WarDucks",
            "duration": "June 2023 – Present",
            "hidden":false,
            "list": [
                "Sprint planning, prioritization, managing communication with internal and external team.",
                "Game design for both existing specification and new game concept.",
                "Designing and implementing gameplay mechanics and game client architecture.",
                "Game design and prototyping the game Wizard Merge."
             ]
         },
        {
           "title": "Lead UI Game Developer",
           "company":"WarDucks",
           "duration": "May 2019 – June 2023",
           "hidden":false,
           "list": [
                "Writing specifications and integration of game features (client and server, Unity).",
                "Led the UI architecture and integration efforts for a 4X Strategy mobile game. (WPF/Noesis)",
                "Assigned tasks and oversaw integration, ensuring a user-friendly interface.",
                "Organized training sessions to enhance the team's technical skills.",
            ]
        },
        {
            "title": "Global Technical Support Engineer",
            "company":"PayPal",
            "duration": "November 2015 – May 2019",
           "hidden":false,
            "list": [
                "Developing internal tools (JS, C#, etc.)",
                "Troubleshooting integrations (SDKs, REST APIs, etc.)",
                "High Revenue issue handling and support.",
            ]
        },
        {
            "title": "Unity Game developer (Client and Server side)",
            "company":"ManaCube",
            "duration": "August 2014 – September 2015",
            "hidden":false,
            "list": [
                "Development of Dungeon Monsters on iOS and Android.",
                "Successfully implemented UI/UX and client core gameplay mechanics for the game.",
                "Implemented the game server logic (node.js / Parse platform REST API)."
            ]
        },
        // Old internships
        // {
        //     "title": "Other",
        //     "duration": "August 2014 – September 2015",
        //     "hidden":false,
        //     "list": [
        //         "Securiloc Locster - Android Developer Internship - Geolocalisation App",
        //         "AAM Communication - Web development",
        //     ]
        // },
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
                "Object Oriented, Reactive, Functionnal programming, Data Oriented",
                "Unity (6+ years), Unreal Engine (basic proficiency)",
                "JSON, XML, Mongodb, mySQL",
                "Windows, Unix",
                "C# (7+ year), C++ (2 year), WPF/XAML, Python, JS",
                "Asynchronous, Threading, Networking, SOLID principles",
                "Version control (Git, SVN), JIRA",
                "Photoshop & Blender (Basics)"
            ]
        },
        {
            "title": "Other skills - Language",
            "column": 2,
            "hidden":false,
            "list": [
                "Problem solver, fast learner",
                "Agile, Sprint planning, Project management",
                "Game Design, Game economy",
                "French (native), English (fluent)"
            ]
        }
    ]
},
{
    "title": "Education",
    "entryList": [{
            "title": "Master in Computing Sciences – Level 9",
            "company":"EPITECH",
            "duration": "2010 – 2015",
            "hidden":false,
            "column": 2,
            "list": [
                "Software architectures, C, C++",
                "Design patterns, Memory management",
                "Game development",
                "Project Management"
            ]
        },
        {
            "title": "Griffith College Dublin",
            "duration": "2013 – 2014",
            "hidden":false,
            "column": 2,
            "list": [
                "Computing Science",
                "Business Management"
            ]
        },
        // {
        //     "title": "Online courses",
        //     "hidden":false,
        //     "column": 2,
        //     "list": [
        //         // "Unity certification, Python (Udemy)",
        //         "Shader development, CGProgram (Udemy)",        
        //         "Game Design (linkedin Learning)",
        //         "Unreal Engine"
        //     ]
        // }
    ]
},
{
    "hidden":false,
    "title": "Hobbies - Interests",
 //   "column": 1,
    "list": [
        "Favorite games : Outer Wilds, The Legend of Zelda, Celeste, The Binding of Isaac, Metal Gear Solid, Rocket league, Bioshock, Apex Legends.",
        "Tabletop Roleplaying and board games.",
        "Game Jams (solo & team): Ludum Dare, Global Game Jam.",
        "Curiosity for many topics (Science, technology, woodworking)",
        "Contributing to company culture through events organization (physical & remote events, game clubs, TTRPG).",
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
    // to remove the ugly link duplicate on print
    $("a").removeAttr("href");
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


