import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

const  db = await sqlite.open({
    filename:  './taxi_queue.db',
    driver:  sqlite3.Database
});

await db.migrate();


// get passenger count from database
    const PassengerCountSql=`select passenger_queue_count from taxi_queue`;
    const passengerQuery=await db.all(PassengerCountSql);
    // console.log(passengerQuery[0].passenger_queue_count)
    let PassengerCount=passengerQuery[0].passenger_queue_count;

    // get taxi count from database
    const sql=`select taxi_queue_count from taxi_queue`;
    const taxiQuery=await db.all(sql);
    let taxiCount=taxiQuery[0].taxi_queue_count;
  

export async function joinQueue() {
    // console.log('join queue')
    let passenger = 1;
    PassengerCount=passenger+PassengerCount;
    //console.log(PassengerCount)
    const sql=`update taxi_queue set passenger_queue_count=${PassengerCount} where id=1`
    return await db.run(sql);

}

export async function leaveQueue() {
    let passenger = 1; //declare the variable
    PassengerCount=PassengerCount-passenger; //formula
    const sql=`update taxi_queue set passenger_queue_count=${PassengerCount} where id=1` //magic key to access field
    return await db.run(sql); //sqlite method
}

export async function joinTaxiQueue() {
    let taxi=1
    taxiCount=taxiCount+taxi;
    const sql=`update taxi_queue set taxi_queue_count=${taxiCount} where id=1`
    return await db.run(sql); //
   
}

export async function queueLength() {
    // const sql =`select * from queueLength order by id asc`;
    // await db.all(sql);
    const sql =`update passenger_queue set passenger_queue_count where id=1`
    await db.run(sql);
    return PassengerCount
}

export async function taxiQueueLength() {
    // const sql =`select * from queueLength order by id asc`;
    // await db.run(sql);
    const sql =`update taxi_queue set taxi_queue_count where id=1` //tables
    await db.run(sql);
    return PassengerCount
}

export async function taxiDepart() {
    let myTaxiCount=1;
    if(taxiCount>0 && PassengerCount>11){
        taxiCount=taxiCount-myTaxiCount;
        PassengerCount=PassengerCount-12
        const sql=`update taxi_queue set taxi_queue_count=${taxiCount} where id=1`
        return await db.run(sql);
    }
    else{
        return
    }

}