database = firebase.database();
var sheetRef  = database.ref('Sheet');
var wafferRef = database.ref('Waffer');
sheetRef.on('value', gotData, errData);
wafferRef.on('value', gotData, errData);

function gotData(data) {
  var value = data.val();
  console.log(value);
  var keys = Object.keys(value);
  var partType;
  var html = "";
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    var name = value[k].name;
    partType = value[k].partType;
    html += '<tr><td>'+ name + '</td></tr>';
  }
  if (html != "" && html != null) {
    html = "<tr><th>" + partType + "</th></tr>" + html;
    var id = partType.toLowerCase() + 'List';
    document.getElementById(id).innerHTML = html;
  }
}

function errData(data) {
  console.log(data);
}
