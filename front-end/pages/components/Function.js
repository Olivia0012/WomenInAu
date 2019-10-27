const reId = [],
const relPair = []
const reId1 = [],
const relPair1 = []
const fRelation = [],
const fRelation1 = [],
const fRelation2 = [], 
const fRelation3 = [],
const dTitle =[],
const dType=[],
const dUrl=[];const pTitle =[];const pType=[];const pUrl=[]
export const Women =(relation)=>{
    for(var i=0;i<relation.length;i++){
        let l = relation[i].name.length
        let arr = relation[i].name.slice(0,l-1)
        let arr1 = relation[i].name[l-1]
        let bb= {}
        bb.id = arr1
        bb.value = relation[i].value
        if(arr == "reId"){              
            reId.push(bb)
        }else{
            relPair.push(bb)
        }
    }
    for(var j=0;j< Math.max(reId.length,relPair.length);j++){
        let cc ={}
        if(reId.length !==0){
            const reId = reId.filter(item=> item.id == JSON.stringify(j))
            cc.reId = reId[0].value
        }
        if(relPair.length !==0){
            console.log(relPair)
            const relPair = relPair.filter(item=> item.id == JSON.stringify(j))
            cc.relPair = relPair[0].value
        }
        fRelation.push(cc)
    }
    return fRelation;
}

export const Org =(relation1)=>{
    for(var i=0;i<relation1.length;i++){
        let l = relation1[i].name.length
        let arr = relation1[i].name.slice(0,l-1)
        let arr1 = relation1[i].name[l-1]
        let bb= {}
        bb.id = arr1
        bb.value = relation1[i].value
        if(arr == "reId"){              
            reId1.push(bb)
        }else{
            relPair1.push(bb)
        }
    }
    for(var j=0;j< Math.max(reId1.length,relPair1.length);j++){
        let cc ={}
        if(reId1.length !==0){
            const reId = reId1.filter(item=> item.id == JSON.stringify(j))
            cc.reId = reId[0].value
        }
        if(relPair1.length !==0){
            const relPair = relPair1.filter(item=> item.id == JSON.stringify(j))
            cc.relPair = relPair[0].value
        }
        fRelation1.push(cc)
    }
    return fRelation1;
}

export const Digital =(relation2)=>{
    for(var i=0;i<relation2.length;i++){
        let l = relation2[i].name.length
        let arr = relation2[i].name.slice(0,l-1)
        let arr1 = relation2[i].name[l-1]    
        let bb= {}
        bb.id = arr1
        bb.value = relation2[i].value
        if(arr == "dTitle"){              
            dTitle.push(bb)
        }
        else if(arr == "dType"){
            dType.push(bb)
        }
        else if(arr == "dUrl")
        {
            dUrl.push(bb)
        }
    }
    for(var j=0;j<Math.max(dTitle.length,dType.length,dUrl.length);j++){
        let cc ={}
        if(dTitle.length !==0){
            const dTitle = dTitle.filter(item=> item.id == JSON.stringify(j))
            if(dTitle.length !==0){
                cc.dTitle = dTitle[0].value
            }
            
        }
        if(dType.length !==0){
            const dType = dType.filter(item=> item.id == JSON.stringify(j)) 
            if(dType.length !==0){
                cc.dType = dType[0].value
            }
        }
        if(dUrl.length !==0){
            const dUrl = dUrl.filter(item=> item.id == JSON.stringify(j))
            if(dUrl.length !==0){
                cc.dUrl = dUrl[0].value
            }
        }
        fRelation2.push(cc)
    } 
    return fRelation2;
}

export const Publish =(relation3)=>{
    for(var i=0;i<relation3.length;i++){
        let l = relation3[i].name.length
        let arr = relation3[i].name.slice(0,l-1)
        let arr1 = relation3[i].name[l-1]
        let bb= {}
        bb.id = arr1
        bb.value = relation3[i].value
        if(arr == "pTitle"){           
            pTitle.push(bb)
        }
        else if(arr == "pType"){
            pType.push(bb)
        }
        else if(arr == "pUrl"){
            pUrl.push(bb)
        }
    }
    for(var j=0;j< Math.max(pTitle.length,pType.length,pUrl.length);j++){
        let cc ={}
        if(pTitle.length !==0){
            const pTitle = pTitle.filter(item=> item.id == JSON.stringify(j))
            cc.pTitle = pTitle[0].value
        }
        if(pType.length !==0){
            const pType = pType.filter(item=> item.id == JSON.stringify(j))
            cc.pType = pType[0].value
        }
        if(pUrl.length !==0){
            const pUrl = pUrl.filter(item=> item.id == JSON.stringify(j))
            cc.pUrl = pUrl[0].value
        }
        fRelation3.push(cc)
    }
    return fRelation3;
}