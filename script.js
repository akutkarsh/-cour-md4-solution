(function () {

var names = ["Rituraj", "Millind", "Utkarsh", "Bhaivish", "Kiran", "Jajji", "Jaiya", "Aksay"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();
