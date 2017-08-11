var id = parent.document.URL.substring(parent.document.URL.indexOf('id=') + 3, parent.document.URL.length);
database = firebase.database();
var ref = database.ref('Sensor/' + id);
ref.on('value', gotData, errData);
var waferName;
var moduleName;

var lastEdit;
var name;
var keyArray   = [
  "From Wafer",
  "On Module"
];
var valueArray = [];
var fieldArray = [
  "fromWafer",
  "onModule"
];


function gotData(data) {
  value = data.val();
  name = value.name;
  lastEdit = value.lastEdit;
  for (var i = 0; i < fieldArray.length; i++) {
    if (fieldArray[i] == "fromWafer") {
      valueArray[i] = value[fieldArray[i]].name;
    } else if (fieldArray[i] == "onModule") {
      valueArray[i] = value[fieldArray[i]].name;
    } else {
      valueArray[i] = value[fieldArray[i]];
    }
  }
  renderReact();
}

function errData(data) {
  console.error(data);
}

function updatePart(field, val) {
  var obj = value;
  if (field == "onModule") {
    obj['onModule'].name = val;
  } else if (field == "fromWafer") {
    obj['fromWafer'].name = val;
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
