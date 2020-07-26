export default function costumerExists(name, costumers){
    let i = 0;

    console.log(costumers.length);

    while(i < costumers.length){
        if(name === costumers[i].name){
            console.log("Exists!");
            return(true);
        }
        i++;
    }
    console.log("Not exists!");
    return(false);
}