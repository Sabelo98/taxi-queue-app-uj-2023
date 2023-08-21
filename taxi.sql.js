import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

const  db = await sqlite.open({
    filename:  './taxi_queue.db',
    driver:  sqlite3.Database
});

await db.migrate();

export async function joinQueue() {
    // console.log('join queue')
    return 
}

export async function leaveQueue() {
    
}

export async function joinTaxiQueue() {
   
}

export async function queueLength() {
    // const sql =`select * from queueLength order by id asc`;
    // await db.all(sql);
       
}

export async function taxiQueueLength() {
    // const sql =`select * from queueLength order by id asc`;
    // await db.all(sql);

}

export function taxiDepart() {

}