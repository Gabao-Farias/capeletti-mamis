export default class ContactSchema{
    static schema = {
        name: 'Contact',
        primaryKey: 'costumerID',
        properties: {
            costumerID: {type: 'int', indexed: true},
            phoneNumber: 'string',
        }
    }
}