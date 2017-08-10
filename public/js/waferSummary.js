var id = parent.document.URL.substring(parent.document.URL.indexOf('id=') + 3, parent.document.URL.length);
database = firebase.database();
var ref = database.ref('Wafer/' + id);
ref.on('value', gotData, errData);

var lastEdit;
var name;
var keyArray   = [
  "Status",
  "Thickness",
  "Vendor"
];
var valueArray = [];
var fieldArray = [
  "status",
  "thickness",
  "vendor"
];


function gotData(data) {
  value = data.val();
  name = value.name;
  lastEdit = value.lastEdit;
  for (var i = 0; i < fieldArray.length; i++) {
    valueArray[i] = value[fieldArray[i]];
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
