const { pg_pool } = require('../database')
const AccountBuilder = require("../../helpers/builder/accountbuilder");

/**
* Creates Accout with the given data
* @returns account created
*/
const createAccount = async (email, password, name, skin_id) => {
	try {
		
		var query = `INSERT INTO account(mail, password, nombre, country, skin_id, fecha_nac)
		 values ('${email}', '${password}', '${name}', 'AR', ${skin_id}, TO_DATE('DD/MM/YYYY', '18/06/2000'))
		 RETURNING account_id, password, mail, nombre, country, skin_id, fecha_nac `;
		const records = await pg_pool.query(query);
		if (records.rows.length >= 1) {
			let record = records.rows[0];

			let acct = new AccountBuilder()
			.setId(record.account_id)
			.setMail(record.mail)
			.setPassword(record.password)
			.setNombre(record.nombre)
			.setCountry(record.country)
			.setSkin(record.skin_id)
			.setNac(record.fecha_nac)
			.build();

			return acct;
		} else {
			return null;
		}
	} catch (error) {
		return null;
	}
};


/**
* Lookups for an account in the postgres database with the given account id
* If not exist returns null
* @returns account if exists else null
*/
const getAccountById = async (uid) => {
	try {

		if (uid == undefined || uid.length < 1) {
			return null
		}
		
		var query = `SELECT * from account a where a.account_id = ${uid} `;
		const records = await pg_pool.query(query);
		if (records.rows.length >= 1) {
			let record = records.rows[0];
			return new AccountBuilder()
			.setId(record.account_id)
			.setMail(record.mail)
			.setPassword(record.password)
			.setNombre(record.nombre)
			.setCountry(record.country)
			.setSkin(record.skin_id)
			.setNac(record.fecha_nac)
			.build();
		} else {
			return null;
		}
	} catch (error) {
		return null;
	}
};



/**
* Lookups for an account in the postgres database with the given mail. 
* If not exist returns null
* @returns account if exists else null
*/
const getAccount = async (mail) => {
	try {

		if (mail == undefined || mail.length < 1) {
			return null
		}
		
		var query = `SELECT * from account a where a.mail = '${mail}' `;
		const records = await pg_pool.query(query);
		if (records.rows.length >= 1) {
			let record = records.rows[0];
			return new AccountBuilder()
			.setId(record.account_id)
			.setMail(record.mail)
			.setPassword(record.password)
			.setNombre(record.nombre)
			.setCountry(record.country)
			.setSkin(record.skin_id)
			.setNac(record.fecha_nac)
			.build();
		} else {
			return null;
		}
	} catch (error) {
		return null;
	}
};

/**
* Updates Account preferences: Skin_Id.
* @returns account with updated data
*/
const updateSkin = async (account_id, skin_id) => {
	try {
		
		var query = `UPDATE account SET skin_id = ${skin_id} WHERE account_id = ${account_id} 
		 RETURNING account_id, password, mail, nombre, country, skin_id, fecha_nac `;
		const records = await pg_pool.query(query);
		if (records.rows.length >= 1) {
			let record = records.rows[0];

			let acct = new AccountBuilder()
			.setId(record.account_id)
			.setMail(record.mail)
			.setPassword(record.password)
			.setNombre(record.nombre)
			.setCountry(record.country)
			.setSkin(record.skin_id)
			.setNac(record.fecha_nac)
			.build();

			return acct;
		} else {
			return null;
		}
	} catch (error) {
		return null;
	}
};

module.exports = {
	createAccount,
	getAccount,
	getAccountById, 
	updateSkin
};