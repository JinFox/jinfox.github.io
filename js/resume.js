
// window.jsPDF = window.jspdf.jsPDF;

$('.printToPdf').click(function (e) {
    
   // var printDoc = new jsPDF();
    $(".printDark").css({ 'color': 'black' });
    var element = $('#pdf').html();
    // printDoc.
    // printDoc.html(test, 10, 10, {'width': 180});
    // printDoc.autoPrint();
    // printDoc.output("dataurlnewwindow"); // this opens a new popup,  after this the PDF opens the print window view but there are browser inconsistencies with how this is handled

    // This will implicitly create the canvas and PDF objects before saving.
    //$(element).find(".printDark").css({ 'color': 'red', 'font-size': '70%' });
    var opt = {
        margin:       1,
        filename:     'JoaquimRenardResume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 1 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      
    var worker = html2pdf().set(opt).from(element).save();
    //$(".printDark").removeAttr("style");
});

$('.printFriendly').click(function (e) {
   $("#sidebar").hide();
   $(".small-navbar").remove();
   $(".printFriendly").hide();
   $(".nerdMode").hide();
   $(".white-background").css({ 'width': '100%' });
 });
 $('.nerdMode').click(function (e) {
    $('.nerdMode').button("toggle");
    $("#jsonContainer").toggle();
    $("#nerdContainer").toggle();
  });

var resume = [{
    "title": "Career",
    "list": [{
            "title": "WarDucks - Lead UI Developer",
            "duration": "May 2019 – Present",
            "list": [
                "Conceived the technical architecture of the UI.",
                "Built up the technology stack using a WPF (Xaml/C#) framework (Noesis).",
                "Organized and gave training with the development team.",
                "Lead the UI mock-up and integration effort on the project (assigning tasks and integration).",
                "Integrating various game features on the client (Unity/C#)."
            ]
        },
        {
            "title": "PayPal – Global Technical Support Engineer",
            "duration": "November 2015 – May 2019",
            "list": [
                "Developing internal tools to support teams various tasks (JS, C#, etc.)",
                "Supporting PayPal integrations (new integration, third-party solution, PayPal SDKs, REST APIs, Networking).",
                "Programmation and debugging in JavaScript, PHP, C# and multiple languages, APIs and SDKs.",
                "Troubleshooting (Investigate, track and escalate issue to product teams).",
                "High Revenue issue handling and bug management."
            ]
        },
        {
            "title": "ManaCube – Unity Game developer (Client and Server side)",
            "duration": "August 2014 – September 2015",
            "list": [
                "Participated to the development of Dungeon Monsters™ on iOS and Android.",
                "Responsible of the game’s UI and UX (animations, navigation).",
                "Developed a wide set of core features of the game.",
                "Implemented several main game mechanics.",
                "Conceived and developed the game’s server."
            ]
        },
        {
            "title": "Securiloc Locster - Android developer",
            "hidden":true,
            "duration": "June - August 2013",
            "list": [
                "Refactoring an existing Android application (geolocalisation)."
            ]
        },
        {

            "title": "AAM Communication - Web Developer",
            "duration": "July - December 2011 (Full time intership) - January - April 2013 (Part time)",
            "list": [
                "Development of several websites for clients using cakePHP, Drupal and Javascript."
            ]
        }
    ]
},
{
    "title": "Skills",
    "list": [{
            "title": "Technical",
            "column": 2,
            "list": [
                "Object Oriented, Reactive and Functionnal programming",
                "C#, C++, C, WPF, Java, JavaScript, NodeJS, Python, PHP, HTML/CSS",
                "JSON, XML, Database management (mongodb, mySQL, etc)",
                "Versioning UI/console (Git, SVN, Mercurial), JIRA",
                "Unity",
                "Network, REST APIs, Multi-Threading",
                "Unix, Windows, MacOS, bash",
                "Photoshop & Blender (Basics)"
            ]
        },
        {
            "title": "Other skills - Language",
            "column": 2,
            "list": [
                "Problem solving and pragmatic thinking, fast learner",
                "Project management, Agile Method",
                "Game design and game economy",
                "French (Native) and English (fluent)"
            ]
        }
    ]
},
{
    "title": "Education",
    "list": [{
            "title": "Master in Computer Sciences – EPITECH (France) - Level 9",
            "duration": "2010 – 2015",
            "column": 2,
            "list": [
                "Software architectures, low level programming Languages",
                "Programming design patterns",
                "Game development",
                "Project Management"
            ]
        },
        {
            "title": "Business Management/Computing Science – Griffith College Dublin",
            "duration": "2013 – 2014",
            "column": 2,
            "list": [
                "Data structure & Algorithms",
                "Formal Specifications",
                "Computer's Graphics (Theory of rendering)",
                "Business Management"
            ]
        },
        {
            "title": "Online courses",
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
    "title": "Hobbies - Interests",
    "column": 1,
    "list": [
        "Game Jams (solo & team): Ludum Dare, Global Game Jam.",
        "Favorite games : Outer Wilds, The Binding of Isaac, The Legend of Zelda, Celeste, Metal Gear Solid",
        "Interest in Sciences and new technologies",
        "Tabletop Roleplaying and board games"
    ]
}
];

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

function displayList(list, tag, entryLevel){
    let html = "<ul>";
    for (let i = 0; i < list.length; i++) {
        let element = list[i];
        if (element.hasOwnProperty('list')) {
            html += displayEntry(element, entryLevel, true);
        }
        else { // string
            html+=`<${tag} class="printDark">${element}</${tag}>`;
        }
        
    }
    
    html += "</ul>";
    return html;
}

function displayEntry(entry, entryLevel, avoidBreaks = false) {
    let text = "";
       
    if (entry.hasOwnProperty('hidden') && entry.hidden){
        return text;
    }
    
    if (entry.hasOwnProperty('title')){
        text += `<h${entryLevel} class="printDark">${entry.title}</h${entryLevel}>`;
    }    
    
    if (entry.hasOwnProperty('duration')){
        text += `<span class="printDark"><em>${entry.duration}</em></span>`;
    }
    if (entry.hasOwnProperty('list')){
        text += displayList(entry.list, "li", entryLevel + 1);
    }
    if (avoidBreaks === true) {
        text = ` <div style="page-break-inside:avoid;">${text}</div>`;
    }
    return text;
}

function generateResumeFromJson(resume)
{
    let html = "";
    for (let i = 0; i < resume.length; i++) {
        let entry = resume[i];
        html += displayEntry(entry, 4, false);
    }

    return html;
}

$("#nerdContainer").append("<pre>" + syntaxHighlight(resume) + "</pre>").hide();
$("#jsonContainer").append(generateResumeFromJson(resume) );

