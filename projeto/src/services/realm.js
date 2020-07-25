import Realm from 'realm';

import OrderSchema from '../models/OrderSchema';
import SpentSchema from '../models/SpentSchema';

export default function getRealm(){
    return Realm.open({
        schema: [OrderSchema, SpentSchema],
    });
}