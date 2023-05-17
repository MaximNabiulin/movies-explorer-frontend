// Класс для работы с LocalStorage
// TODO расширить функционал для взаимодействия с конкретным пользователем
class StateStorage {
  constructor(params={}) {
    const { keys } = params;
    if (!Array.isArray(keys)) {
      throw new TypeError();
    }
    if (!keys.every(key => typeof key === 'string')) {
      throw new TypeError();
    }
    this._keys = keys;
  }

  _isValidKey(key) {
    if (!this._keys.includes(key)) {
      throw new Error('неизвестный ключ');
    };
  }

  get(key) {
    this._isValidKey(key);
    return JSON.parse(localStorage.getItem(key));
  }

  getAll() {
    const result = {};
    this._keys.forEach(key => result[key] = this.get(key));
    return result;
  }

  set(key, value) {
    this._isValidKey(key);
    const currentValue = this.get(key);

    if (value === currentValue) return;

    localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key) {
    this._isValidKey(key);
    localStorage.removeItem(key);
  }

  removeAll() {
    this._keys.forEach(key => this.remove(key));
  }
}

const stateStorage = new StateStorage({
  keys: ['search-word', 'checkbox-state']
});

export default stateStorage;