import Firebase from 'firebase';
import {config} from './config';

Firebase.initializeApp(config);

const db = Firebase.database();

export default {
    fetchExp(){
        return db.ref('expdata/').once('value');
    },
    fetchEdu(){
        return db.ref('edudata/').once('value');
    },
    attachHitsWatcher(){
        return db.ref('hits/');
    },
    async hiAction(){
        let res = await db.ref('hits/').once('value');
        let currVal = res.val();
        currVal++;
        db.ref('hits/').set(currVal);
        return;
    },
    fetchCV(){
        return db.ref('CVlink/').once('value');
    }
}