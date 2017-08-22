var senRef = firebase.database().ref('Sensor/');
var hdiRef = firebase.database().ref('HDI/');

var html = "";

senRef.orderByChild('name').on('value', function (snap) {
  snap.forEach(function (childSnap) {
    var key = childSnap.key;
    var name = childSnap.val().name;
    html += "<option value=\"" + key + "\">" + name + "</option>";
  });
});

document.getElementById('ofSensor').innerHTML = html;

var html = "";

hdiRef.orderByChild('name').on('value', function (snap) {
  snap.forEach(function (childSnap) {
    var key = childSnap.key;
    var name = childSnap.val().name;
    html += "<option value=\"" + key + "\">" + name + "</option>";
  });
});

document.getElementById('ofHDI').innerHTML = html;
