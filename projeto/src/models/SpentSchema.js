export default class SpentSchema{
    static schema = {
        name: 'Spent',
        primaryKey: 'id',
        properties: {
            id: {type: 'int', indexed: true},
            description: 'string',
            value: 'double',
            date: 'date',
        }
    }
}