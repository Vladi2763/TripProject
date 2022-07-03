import { getPurchases, getViews } from '../otherFunctions/requsts'

import { Purchase, View } from '../store/rootReducer'

type PurchaseDispatch = {
    type: string,
    purchases: Purchase
}

type ViewDispatch = {
    type: string,
    views: View
}

const getPurchasesAction = (purchases: Purchase) => {
    return {
        type: 'GETPURCHASES',
        purchases: purchases
    }
}

const getViewsAction = (views: View) => {
    return {
        type: 'GETVIEWS',
        views: views
    }
}

export const getPurchasesAsyns: () => any = () => {
    return (dispatch: ({ }: PurchaseDispatch) => void) => {
        getPurchases()
            .then(purchases => {
                dispatch(getPurchasesAction(purchases))
            })
    }
}

export const getViewsAsyns: () => any = () => {
    return (dispatch: ({ }: ViewDispatch) => void) => {
        getViews()
            .then(views => {
                dispatch(getViewsAction(views))
            })
    }
}

