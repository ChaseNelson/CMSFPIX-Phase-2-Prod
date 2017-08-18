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
  var refStr = firebase.database().ref('HDI').push(data);
  refStr = refStr.toString();
  var str = "HDI/";
  var key = refStr.substring(refStr.indexOf(str) + str.length);
  window.location = "hdiSummary.html?id=" + key;
}

function createSensor() {
  var name = document.getElementById('name').value;
  var time = getTime();
  data = {
    lastEdit: time,
    name: name,
    partType: 'Sensor'
  };
  var refStr = firebase.database().ref('Sensor').push(data);
  refStr = refStr.toString();
  var str = "Sensor/";
  var key = refStr.substring(refStr.indexOf(str) + str.length);
  window.location = "sensorSummary.html?id=" + key;
}

function createWafer() {
  var name = document.getElementById('name').value;
  var status = document.getElementById('status').value;
  var thickness = document.getElementById('thickness').value;
  var vendor = document.getElementById('vendor').value;
  var time = getTime();
  data = {
    lastEdit: time,
    name: name,
    partType: 'Wafer',
    status: status,
    thickness: thickness,
    vendor: vendor
  };
  var refStr = firebase.database().ref('Wafer').push(data);
  refStr = refStr.toString();
  var str = "Wafer/";
  var key = refStr.substring(refStr.indexOf(str) + str.length);
  window.location = "waferSummary.html?id=" + key;
}

function createModule() {
  var name = document.getElementById('name').value;
  var processingAt = document.getElementById('processingAt').value;
  var flipChipBonder = document.getElementById('flipChipBonder').value;
  var staus = document.getElementById('status').value;
  var time = getTime();
  data = {
    flipChipBonder: flipChipBonder,
    lastEdit: time,
    name: name,
    partType: 'Bare Module',
    processingAt: processingAt,
    status: status
  };
  var refStr = firebase.database().ref('Bare Module').push(data);
  refStr = refStr.toString();
  var str = "Bare%20Module/";
  console.log(refStr);
  var key = refStr.substring(refStr.indexOf(str) + str.length);
  console.log('key :: ' + key);
  window.location = "bareModuleSummary.html?id=" + key;
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

function openSensor() {
  window.location = "newSensor.html";
}

function openHDI() {
  window.location = "newHDI.html";
}

function openWafer() {
  window.location = "newWafer.html";
}

function openModule() {
  window.location = "newModule.html";
}
