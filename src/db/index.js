import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('tiendapp.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS carts (items TEXT NOT NULL, userId TEXT PRIMARY KEY NOT NULL)',
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const updateItemsInCart = (userId, items) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `
        INSERT OR REPLACE INTO carts (items, userId)
        VALUES (?, ?)
        `,
        [JSON.stringify(items), userId],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const selectCart = (userId) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM carts WHERE userId = ? ',
        [userId],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};
