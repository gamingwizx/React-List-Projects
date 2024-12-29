const updateListByIterationAndSpecificElementByCondition = (objectToUpdate, elementToUpdateByKey, elementToUpdateByValue, listToUpdateByValue) => {
    let c = {}
    Object.keys(objectToUpdate).map(keys => {
        if (keys === elementToUpdateByKey) {
            c = {...c, [keys]: elementToUpdateByValue}
        } else {
            c = {...c, [keys]: listToUpdateByValue}
        }

    })
    return c
}

export default updateListByIterationAndSpecificElementByCondition