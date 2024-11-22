// import * as SQLite from "expo-sqlite";

// const database = SQLite.openDatabaseAsync("places.db");

// export function init(params) {

//     const promise = new Promise((resolve, reject) =>{
//         database.transaction((tx) => {
//           tx.executeSql(`CREATE TABLE IF NOT EXISTS places (
//                   id INTERGER PRIMARY KEY NOT NULL,
//                   title TEXT NOT NULL,
//                   imageUri TEXT NOT NULL,
//                   address TEXT NOT NULL,
//                   lat REAL NOT NULL,
//                   lng REAL NOT NULL
//                   )`,
//                   [],
//                   () =>{
//                     resolve()
//                   },
//                   (_, error) =>{
//                      reject(error)
//                   }
//               )
//         });
//     })

//     return promise;
// }


import * as SQLite from 'expo-sqlite';
 
import { Place } from '../models/place';
 
const database = SQLite.openDatabaseSync('places.db');
 
export function init() {
    return database.runAsync(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY NOT NULL,
            title TEXT NOT NULL,
            imageUri TEXT NOT NULL,
            address TEXT NOT NULL,
            lat REAL NOT NULL,
            lng REAL NOT NULL
        )
    `);
}
 