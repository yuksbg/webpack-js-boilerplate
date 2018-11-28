
// import axios from 'axios';
import Bl from 'app.ts';

class Client {
  constructor(ApiKey) {
    this._key = ApiKey;
  }

  sendEvent(eventName, Value) {
    var tr = new Bl();
    tr.sendEvent('da', '41');
    // axios.post('/', {n: tr.getName(), key: eventName, 'val': Value}).catch(function () {
    //   alert('ops');
    // });
    // console.log(eventName, Value);
  }
};

// var f = {
//   init: function () {
//     // c = new Client(ApiKey);
//   },
//   getData: function () {
//     alert('da');
//   }
// };

export default Client;
