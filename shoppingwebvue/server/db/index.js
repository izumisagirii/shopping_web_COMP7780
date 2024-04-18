import mysql from 'mysql';

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'user99',
    password: 'user99',
    database: 'comp7780'
});

export const query = (sql, values) => {
    return new Promise((resolve, reject) => {
        pool.query(sql, values, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
};
