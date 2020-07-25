export default class CostumerSchema{
    static schema = {
        name: 'Costumer',
        primaryKey: 'id',
        properties: {
            id: {type: 'int', indexed: true},
            name: 'string',
            orders: 'Order[]',
            contact: 'Contact',
            address: 'Address',
        }
    }
}