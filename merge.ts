export function merge(collection_1: Number[], collection_2: Number[]) {
    var result = new Array;
   while(collection_1.length>0||collection_2.length>0){
        if(collection_1.length>0&&collection_2.length>0){
            if(collection_1[0]<collection_2[0]){
                result.push(collection_1.shift())
            }
            else{
                result.push(collection_2.shift())
            }
        }
        else if(collection_2.length>0)
        {
            result.push(collection_2.shift())
        }
        else if(collection_1.length>0)
        {
            result.push(collection_1.shift())
        }
   }

    
    return result;
}