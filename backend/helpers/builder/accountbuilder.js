const Account = require("../../models/account");

class AccountBuilder {

  constructor() {
    this.entity = new Account();
  }

  setId(id) {
    this.entity.id = id;
    return this;
  } 

  setMail(mail) {
    this.entity.mail = mail;
    return this;
  }

  setPassword(password) {
    this.entity.password = password;
    return this;
  }

  setNombre(nombre) {
    this.entity.nombre = nombre;
    return this;
  }

  setCountry(country) {
    this.entity.country = country;
    return this;
  }

  setSkin(skin_id) {
    this.entity.skin_id = skin_id;
    return this;
  }

  setNac(fecha_nac) {
    this.entity.fecha_nac = fecha_nac;
    return this;
  }

  build() {
    return this.entity;
  }
}

module.exports = AccountBuilder;
