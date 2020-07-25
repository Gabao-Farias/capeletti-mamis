export default class AddressSchema{
    static schema = {
        name: 'Address',
        primaryKey: 'costumerID',
        properties: {
            costumerID: {type: 'int', indexed: true},
            address: 'string',
            district: 'string',
            number: 'string',
        }
    }
}