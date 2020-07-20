import Realm from 'realm';

import OrderSchema from '../schemas/OrderSchema';
import SpentSchema from '../schemas/SpentSchema';

function getRealmOrder(){
    return Realm.open({
        schema: [OrderSchema],
    })
}

function getRealmOrder(){
    return Realm.open({
        schema: [SpentSchema],
    })
}