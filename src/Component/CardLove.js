

const getStoredCardList = () => {
    const storedCardListStr = localStorage.getItem('card-list');
    if (storedCardListStr) {
        return JSON.parse(storedCardListStr);
    } else {
        return [];
    }
};

const addToStoredCardList = (id) => {
    const storedCardList = getStoredCardList();
    if (storedCardList.includes(id)) {
        console.log(id, 'already exists');
    } else {
        storedCardList.push(id);
        localStorage.setItem('card-list', JSON.stringify(storedCardList));
    }
};

const removeFromStoredCardList = (id) => {
    const storedCardList = getStoredCardList();
    const updatedCardList = storedCardList.filter((item) => item !== id);
    localStorage.setItem('card-list', JSON.stringify(updatedCardList));
};

const getStoredLoveList = () => {
    const storedLoveListStr = localStorage.getItem('Love-list');
    if (storedLoveListStr) {
        return JSON.parse(storedLoveListStr);
    } else {
        return [];
    }
};

const addToStoredLoveList = (id) => {
    const storedLoveList = getStoredLoveList();
    if (storedLoveList.includes(id)) {
        console.log(id, 'already exists');
    } else {
        storedLoveList.push(id);
        localStorage.setItem('Love-list', JSON.stringify(storedLoveList));
    }
};

const removeFromStoredLoveList = (id) => {
    const storedLoveList = getStoredLoveList();
    const updatedLoveList = storedLoveList.filter((item) => item !== id);
    localStorage.setItem('Love-list', JSON.stringify(updatedLoveList));
};

export { addToStoredCardList, addToStoredLoveList, getStoredLoveList, getStoredCardList, removeFromStoredCardList, removeFromStoredLoveList };
