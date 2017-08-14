var id = parent.document.URL.substring(parent.document.URL.indexOf('id=') + 3, parent.document.URL.length);
database = firebase.database();
var ref = database.ref('HDI/' + id);
ref.on('value', gotData, errData);

var lastEdit;
var name;
var keyArray   = [
  "Location",
  "Status",
  "On Module"
];
var valueArray = [];
var fieldArray = [
  "location",
  "status",
  "onModule"
];


function gotData(data) {
  value = data.val();
  name = value.name;
  lastEdit = value.lastEdit;
  for (var i = 0; i < fieldArray.length; i++) {
    if (fieldArray[i] == "onModule") {
      valueArray[i] = value[fieldArray[i]].name;
    } else {
      valueArray[i] = value[fieldArray[i]];
    }
  }
  renderReact();
}

function errData(data) {
  console.error("ERROR :: " + data);
}

function updatePart(field, val) {
  var obj = value;
  if (field == "onModule") {
    obj[field].name = val;
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
