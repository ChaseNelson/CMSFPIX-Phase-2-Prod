var id = parent.document.URL.substring(parent.document.URL.indexOf('id=') + 3, parent.document.URL.length);
database = firebase.database();
var ref = database.ref('Bare Module/' + id);
ref.on('value', gotData, errData);

var lastEdit;
var name;
var keyArray   = [
  "Processing At",
  "Flip-Chip Bonder",
  "Status",
  "Comprised of Sensor",
  "Comprised of HDI"
];
var valueArray = [];
var fieldArray = [
  "processingAt",
  "flipChipBonder",
  "status",
  "ofSensor",
  "ofHDI"
];


function gotData(data) {
  value = data.val();
  name = value.name;
  lastEdit = value.lastEdit;
  for (var i = 0; i < fieldArray.length; i++) {
    if (fieldArray[i] == "ofSensor" || fieldArray[i] == "ofHDI") {
      if (value[fieldArray[i]].name.toLowerCase() == "none") {
        valueArray[i] = "";
      } else {
        valueArray[i] = value[fieldArray[i]].name;
      }
    } else {
      valueArray[i] = value[fieldArray[i]];
    }
  }
  renderReact();
}

function errData(data) {
  console.error( data);
}

function updatePart(field, val) {
  var obj = value;
  if (field == "ofSensor") {
    obj["ofSensor"].name = val;
  } else if (field == "ofHDI") {
    obj["ofHDI"].name = val;
  } else {
    obj[field] = val;
  }
  var time = new Date();
  var h = time.getHours();
  var m = time.getMinutes();
  var s = time.getSeconds();
  var dd = time.getDate();
  var mm = time.getMonth() + 1;
  var yyyy = time.getFullYear();
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  obj['lastEdit'] = mm + '-' + dd + '-' + yyyy + ' ' + h + ':' + m + ':' + s;
  ref.set(obj);
}

function toAssembled() {
  if (value == null) {
    return;
  }
  data = {
    currentLocation: '',
    flipChipBonder: value.flipChipBonder,
    location: '',
    name: value.name,
    ofHDI: value.ofHDI,
    ofSensor: value.ofSensor,
    partType: 'Assembled Module',
    processedAt: value.processingAt,
    status: value.status
  };
  // database.ref('Bare Module/' + id).remove();
  var refStr = database.ref('Assembled Module').push(data);
  str = 'Assembled%20Module/';
  refStr = refStr.substring(refStr.indexOf(str) + str.length);
  window.location = "assembledModuleSummary.html?id=" + str;
}
