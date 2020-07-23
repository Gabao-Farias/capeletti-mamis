import Realm from 'realm';

import OrderSchema from '../model/schemas/OrderSchema';
import SpentSchema from '../model/schemas/SpentSchema';

export default function getRealm(){
    return Realm.open({
        schema: [OrderSchema, SpentSchema],
    });
}