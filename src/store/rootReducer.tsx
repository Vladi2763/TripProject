export type InitState = {
    purchases: Array<Purchase>,
    actualPurchases: Array<Purchase>,
    views: Array<View>,
    firstDate: string,
    secondDate: string,
    thirdDate: string,
    fourthDate: string
}

type Action = {
    type: string,
    date: string,
    purchases: Array<Purchase>,
    views: Array<View>
}

export type Purchase = {
    date: string,
    value: number
}

export type View = {
    date: string,
    view: number,
    click: number
}

const initialState: InitState = {
    purchases: [],
    actualPurchases: [],
    views: [],
    firstDate: '',
    secondDate: '',
    thirdDate: '',
    fourthDate: ''

}


const rootReducer = (state = initialState, action: Action) => {

    switch (action.type) {
        case 'GETPURCHASES': {

            return {
                ...state,
                purchases: [...action.purchases]
            }
        }
        case 'GETVIEWS': {

            return {
                ...state,
                views: [...action.views]
            }
        }
        case 'GETACTUALPURCHASES': {

            const actualPurchases = state.purchases.filter((purchase) => {

            })
            return {
                ...state,

            }
        }
        case 'ADDFIRSTDATE':

        const date = new Date(action.date).toISOString()

            return {
                ...state,
                firstDate: date
            }

        case 'ADDSECONDDATE': {

            const date = new Date(action.date).toISOString()

            return {
                ...state,
                secondDate: date
            }
        }

        case 'ADDTHIRDDATE': {

            const date = new Date(action.date).toISOString()

            return {
                ...state,
                thirdDate: date
            }
        }

        case 'ADDFOURTHDATE': {

            const date = new Date(action.date).toISOString()

            return {
                ...state,
                fourthDate: date
            }
        }

        default:
            return state;
    }


}

export default rootReducer;