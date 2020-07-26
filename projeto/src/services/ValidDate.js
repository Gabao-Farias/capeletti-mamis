export default function isValidDate(dateString){
    let g = new Date(dateString);
    if(g.toString() === "Invalid Date"){
        return(false);
    }
    return(true);
}