"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.update = exports.create = exports.findOne = exports.findAll = void 0;
const db_1 = require("../db");
// Get all users
const findAll = (callback) => {
    const queryString = `SELECT * FROM jsusers`;
    db_1.db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
        }
        const rows = result;
        const users = [];
        rows.forEach((row) => {
            const user = {
                id: row.id,
                nume: row.nume,
                prenume: row.prenume,
                email: row.email,
                datanastere: row.datanastere,
                telefon: row.telefon,
                poza: row.poza,
                dataadaugare: row.dataadaugare,
                actiune: "",
            };
            users.push(user);
        });
        callback(null, users);
    });
};
exports.findAll = findAll;
// Get one user
const findOne = (userId, callback) => {
    const queryString = `SELECT * FROM jsusers WHERE id=?`;
    db_1.db.query(queryString, userId, (err, result) => {
        if (err) {
            callback(err);
        }
        const row = result[0];
        const user = {
            id: row.id,
            nume: row.nume,
            prenume: row.prenume,
            email: row.email,
            datanastere: row.datanastere,
            telefon: row.telefon,
            //dataadaugare: row.dataadaugare,
        };
        callback(null, user);
    });
};
exports.findOne = findOne;
// create user
const create = (user, callback) => {
    const queryString = "INSERT INTO jsusers (nume, prenume, email, datanastere, telefon, poza) VALUES (?, ?, ?, ?, ?, ?)";
    console.log(user);
    db_1.db.query(queryString, [user.nume, user.prenume, user.email, user.datanastere, user.telefon, user.poza], (err, result) => {
        if (err) {
            callback(err);
        }
        const insertId = result.insertId;
        callback(null, insertId);
    });
};
exports.create = create;
// update user
const update = (user, callback) => {
    const queryString = `UPDATE jsusers SET nume=?, prenume=? WHERE id=?`;
    db_1.db.query(queryString, [user.nume, user.prenume, user.id], (err, result) => {
        if (err) {
            callback(err);
        }
        callback(null);
    });
};
exports.update = update;
// delete user
const deleteUser = (user, callback) => {
    const queryString = `DELETE FROM jsusers WHERE id=?`;
    db_1.db.query(queryString, [user.id], (err, result) => {
        if (err) {
            callback(err);
        }
        callback(null);
    });
};
exports.deleteUser = deleteUser;
