import Realm from 'realm';


import AddressSchema from '../models/AddressSchema';
import ContactSchema from '../models/ContactSchema';
import CostumerSchema from '../models/CostumerSchema';
import OrderSchema from '../models/OrderSchema';
import SpentSchema from '../models/SpentSchema';

export default function getRealm(){
    return Realm.open({
        schema: [AddressSchema, ContactSchema, CostumerSchema, OrderSchema, SpentSchema],
    });
}