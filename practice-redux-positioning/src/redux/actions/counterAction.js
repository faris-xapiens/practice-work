export const incCounter = () => {
    return {
        type: "INCREASE_COUNT",
    }
}

export const decCounter = () => {
    return {
        type: "DECREASE_COUNT",
    }
}

export const resetCounter = () => {
    return {
        type: "RESET_COUNT",
    }
}
