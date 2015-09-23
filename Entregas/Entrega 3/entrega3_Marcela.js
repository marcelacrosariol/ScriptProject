function construtorObs() {

  var observer = {};
  var listaDeObs = [];

  observer.addListener = function (obs) {
    listaDeObs.push(obs);
  };


  function execEvent() {
    for (var i = 0; i < listaDeObs.length; i++) {
      var funcObs = listaDeObs[i];
      funcObs();
    }
  }

  observer.execEvent = execEvent;
  return observer;

}

var obs = construtorObs();
var listener1 = function () {
  console.log("listener 1")
};
obs.addListener(listener1);

obs.execEvent();