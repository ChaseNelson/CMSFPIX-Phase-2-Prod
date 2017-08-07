var id;

getData(key) {
  id = key;
  database = firebase.database();
  var ref = database.ref('Wafer');
  ref.on('value', gotData, errData);
}

gotData(data) {
  var value = data.val();
  console.log(value[id]);
}

errData(data) {
  console.log("ERROR :: " + data);
}
