class Account {
	
	constructor() {
		this.id = null
		this.nombre = null
		this.mail = null
		this.password = null
		this.country = 'AR';
		this.skin_id = null;
		this.fecha_nac = null;
	}

	getId() {
		return this.id;
	}
	
	getMail() {
		return this.mail;
	}

	getPassword() {
		return this.password;
	}

	getNombre() {
		return this.nombre;
	}
	
	getCountry() {
		return this.country;
	}
	
	getSkin() {
		return this.skin_id;
	}
	
	getNac() {
		return this.fecha_nac;
	}
}



module.exports = Account;
