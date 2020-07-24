// Realm doesn't support auto-increment, so I needed to implement this by myself

export default function getNewID(objects){
    let newID = 0;
    let flag = false;
    let i = 0;
    let j = 0;

    while(j < objects.length){
        i = 0;
        flag = false;
        while(i < objects.length && flag === false){
            if(newID === objects[i].id){
                flag=true;
            }
            i++;
        }

        if(flag === false){
            return(newID);
        }

        j++;
        newID++;
    }
    return(newID);
}