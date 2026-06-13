

var nerdMode = false;
var resume = [];


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
     // Quick scale down of the entire body text
   
    // Inject print-specific CSS to scale down text
   $(".resumeSection h4").css("font-size", "14px"); // Target the main job titles
    $(".resumeSection h5").css("font-size", "12px"); // Target the sub-roles
    $(".resumeSection li").css("font-size", "11px"); // Target the bullet points
    $(".resumeDuration").css("font-size", "10px");   // Target the dates
    $("body, .white-background").css("font-size", "11px");
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
    $.getJSON("/resume.json", function(data) {
        resume = removeHidden(data);
        $("#nerdContainer").append("<pre>" + syntaxHighlight(resume) + "</pre>").hide();
        $("#jsonContainer").append(generateResumeFromJson(resume) );
        $(".stamp").each(function() {
            $( this ).fitText();
        });
    });
  });


