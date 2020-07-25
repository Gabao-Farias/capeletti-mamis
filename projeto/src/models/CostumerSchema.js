export default class CostumerSchema{
    static schema = {
        name: 'Costumer',
        primaryKey: 'id',
        properties: {
            costumerID: {type: 'int', indexed: true},
            name: 'string',
            orders: 'Order[]',
            contact: 'Contact',
            address: 'Address',
        }
    }
}