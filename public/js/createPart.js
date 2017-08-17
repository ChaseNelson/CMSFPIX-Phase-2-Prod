function createHDI() {
  var name = document.getElementById('name').value;
  var location = document.getElementById('location').value;
  var status = document.getElementById('status').value;
  var time = getTime();
  data = {
    lastEdit: time,
    location: location,
    name: name,
    partType: 'HDI',
    status: status,
  };
  firebase.database().ref('HDI').push(data);
}

function createSensor() {
  var name = document.getElementById('name').value;
  var time = getTime();
  data = {
    lastEdit: time,
    name: name,
    partType: 'Sensor'
  };
  firebase.database().ref('Sensor').push(data);
}

function getTime() {
  var time = new Date();
  var h = time.getHours();
  var m = time.getMinutes();
  var s = time.getSeconds();
  var dd = time.getDate();
  var mm = time.getMonth() + 1;
  var yyyy = time.getFullYear();
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  var time = mm + '-' + dd + '-' + yyyy + ' ' + h + ':' + m + ':' + s;
  return time;
}
