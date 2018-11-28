const uuidv4 = require('uuid/v4');

class DevRoboClient {
    _key:string = ""
    private _storage_key = "test_hjdka"

    constructor(ApiKey:string) {
        this._key = ApiKey
        alert(uuidv4());
    }

    SetEvent(Key:string, Value:string) {
    }

}
export default DevRoboClient