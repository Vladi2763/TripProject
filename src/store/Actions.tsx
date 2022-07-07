import { getPurchases, getViews } from '../otherFunctions/requsts'

import { Purchase, View } from '../store/rootReducer'

type PurchaseDispatch = {
    type: string,
    purchases?: Purchase
}

type ViewDispatch = {
    type: string,
    views?: View
}

const getPurchasesAction = (purchases: Purchase) => {
    return {
        type: 'GETPURCHASES',
        purchases: purchases
    }
}

const getViewsAction = (views: View) => {
    return {
        type: 'GETVIEWSANDCLICKS',
        views: views
    }
}

const getActualPurchases = () => {
    return {
        type: 'GETACTUALPURCHASES'
    }
}

const getPastPurchases = () => {
    return {
        type: 'GETPASTPURCHASES'
    }
}

export const addPurchasesDiagram = () => {
    return {
        type: 'ADDPURCHASESBAR'
    }
}

const getActualViews = () => {
    return {
        type: 'GETACTUALVIEWS'
    }
}

const getPastViews = () => {
    return {
        type: 'GETPASTVIEWS'
    }
}

export const addViewsDiagram = () => {
    return {
        type: 'ADDVIEWSBAR'
    }
}

const getActualClicks = () => {
    return {
        type: 'GETACTUALCLICKS'
    }
}

const getPastClicks = () => {
    return {
        type: 'GETPASTCLICKS'
    }
}

export const addClicksDiagram = () => {
    return {
        type: 'ADDCLICKSBAR'
    }
}

export const getPurchasesAsyns: () => any = () => {
    return (dispatch: ({ }: PurchaseDispatch) => void) => {
        getPurchases()
            .then(purchases => {
                dispatch(getPurchasesAction(purchases))
                dispatch(getActualPurchases())
                dispatch(getPastPurchases())
                dispatch(addPurchasesDiagram())
            })
    }
}

export const getViewsAsyns: () => any = () => {
    return (dispatch: ({ }: ViewDispatch) => void) => {
        getViews()
            .then(views => {
                dispatch(getViewsAction(views))
                dispatch(getActualViews())
                dispatch(getPastViews())
                dispatch(addViewsDiagram())
                dispatch(getActualClicks())
                dispatch(getPastClicks())
                dispatch(addClicksDiagram())
            })
    }
}

