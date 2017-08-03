database = firebase.database();
var waferRef           = database.ref('Wafer');
var sensorRef          = database.ref('Sensor');
var hdiRef             = database.ref('HDI');
var bareModuleRef      = database.ref('Bare Module');
var assembledModuleRef = database.ref('Assembled Module');
waferRef.on('value', gotData, errData);
sensorRef.on('value', gotData, errData);
hdiRef.on('value', gotData, errData);
bareModuleRef.on('value', gotData, errData);
assembledModuleRef.on('value', gotData, errData);

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
