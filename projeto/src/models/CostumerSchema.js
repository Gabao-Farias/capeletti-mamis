export default class CostumerSchema{
    static schema = {
        name: 'Costumer',
        primaryKey: 'costumerID',
        properties: {
            costumerID: {type: 'int', indexed: true},
            name: 'string',
        }
    }
}