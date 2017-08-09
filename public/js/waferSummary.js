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
}

function errData(data) {
  console.log("ERROR :: " + data);
}

function updatePart(field, val) {
  var obj = value;
  obj[field] = val;
  ref.set(obj);
}
