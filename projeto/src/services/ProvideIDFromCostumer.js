export default function getCostumerIDFromCostumerName(name, costumers){
    i = 0;
    while(i < costumers.length){
        if(name === costumers[i].name){
            return(costumers[i].costumerID);
        }
        i++
    }
    return(null);
}