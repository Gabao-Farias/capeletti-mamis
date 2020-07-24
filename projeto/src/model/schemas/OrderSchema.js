export default class OrderSchema{
    static schema = {
        name: 'Order',
        primaryKey: 'id',
        properties: {
            id: {type: 'int', indexed: true},
            costumerID: {type: 'int', indexed: true},
            clientName: 'string',
            type: 'string',
            flavor: 'string',
            size: 'string',
            value: 'double',
            date: 'date',
            delivered: 'bool'
        }
    }
}