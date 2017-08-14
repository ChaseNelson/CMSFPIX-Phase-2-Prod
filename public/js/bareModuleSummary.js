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
  console.log("ERROR :: " + data);
}

function updatePart(field, val) {
  var obj = value;
  obj[field] = val;
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
