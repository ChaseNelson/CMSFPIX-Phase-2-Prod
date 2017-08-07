var id;

function getData(key) {
  id = key;
  database = firebase.database();
  var ref = database.ref('Wafer');
  ref.on('value', gotData, errData);
}

function gotData(data) {
  var value = data.val();
  console.log(value[id]);
}

function errData(data) {
  console.log("ERROR :: " + data);
}
