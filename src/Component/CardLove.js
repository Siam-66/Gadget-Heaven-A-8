const getStoredCardList = () => {
    
    const storedCardListStr = localStorage.getItem('card-list');
    if(storedCardListStr) {
        const storedCardList = JSON.parse(storedCardListStr);
        return storedCardList;
    }
    else{
        return [];
    }
}
const addToStoredCardList = (id) => {
    const storedCardList = getStoredCardList();
    if(storedCardList.includes(id)){
        console.log(id, 'already exists')
    }
    else{
        storedCardList.push(id);
        const storedCardListStr = JSON.stringify(storedCardList);
        localStorage.setItem('card-list', storedCardListStr)
    }
}

const getStoredLoveList = () => {
    
    const storedLoveListStr = localStorage.getItem('Love-list');
    if(storedLoveListStr) {
        const storedLoveList = JSON.parse(storedLoveListStr);
        return storedLoveList;
    }
    else{
        return [];
    }
}
const addToStoredLoveList = (id) => {
    const storedLoveList = getStoredLoveList();
    if(storedLoveList.includes(id)){
        console.log(id, 'already exists')
    }
    else{
        storedLoveList.push(id);
        const storedLoveListStr = JSON.stringify(storedLoveList);
        localStorage.setItem('Love-list', storedLoveListStr)
    }
}




export { addToStoredCardList , addToStoredLoveList, getStoredLoveList, getStoredCardList }