export default class OrderSchema{
    static schema = {
        name: 'Order',
        primaryKey: 'id',
        properties: {
            id: {type: 'int', indexed: true},
            costumerID: {type: 'int', indexed: true},
            costumerName: 'string',
            type: 'string',
            flavor: 'string',
            size: 'string',
            ammount: 'int',
            value: 'double',
            delivered: 'bool',
            deliveredDate: 'date'
        }
    }
}