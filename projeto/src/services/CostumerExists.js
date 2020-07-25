export default function costumerExists(name, costumers){
    let i = 0;

    while(i < costumers.length){
        if(name === costumers[i].name){
            return(true);
        }
        i++;
    }
    return(false);
}