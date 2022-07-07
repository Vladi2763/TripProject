import {
    addViewsAndClicks, addFilteredViews, addViewsForDiagram,
    addFilteredClicks,
    addClicksForDiagram,
    addFilteredPurchases,
    addPurchasesForDiagram
} from "./SecondaryFunctions"


const initialState: InitialState = {
    purchases: [],
    actualPurchases: [],
    pastPurchases: [],
    purchasesForDiagram: [],
    firstDate: '2021-07-01',
    secondDate: '2021-07-27',
    thirdDate: '2020-07-01',
    fourthDate: '2020-07-27',
    actualViews: [],
    pastViews: [],
    views: [],
    clicks: [],
    viewsForDiagram: [],
    actualClicks: [],
    pastClicks: [],
    clicksForDiagram: []
}

export type Purchase = {
    date: string,
    value: number
}


export type View = {
    date: string,
    view: number
}


type Click = {
    date: string,
    click: number
}

type ClickForDiagram = {
    date: string | number,
    value: number
}

type purchasesForDiagram = {
    pastPurchase: Purchase,
    purchase: Purchase
}

type ClicksForDiagram = {
    click: ClickForDiagram,
    pastClick: ClickForDiagram
}

type Action = {
    type: string,
    date: string,
    purchases: Array<Purchase>,
    views: any
}


export type InitialState = {
    purchases: Array<Purchase>,
    actualPurchases: Array<Purchase>,
    pastPurchases: Array<Purchase>,
    purchasesForDiagram: Array<purchasesForDiagram>,
    firstDate: string,
    secondDate: string,
    thirdDate: string,
    fourthDate: string,
    actualViews: Array<View>,
    pastViews: Array<View>,
    views: Array<View>,
    viewsForDiagram: any,
    clicks: Array<Click>,
    actualClicks: Array<Click>,
    pastClicks: Array<Click>,
    clicksForDiagram: Array<ClicksForDiagram>
}

const rootReducer = (state = initialState, action: Action) => {

    switch (action.type) {
        case 'GETPURCHASES': {

            return {
                ...state,
                purchases: [...action.purchases]
            }
        }
        case 'GETVIEWSANDCLICKS': {

            const viewsAndClicks = addViewsAndClicks(action)

            return {
                ...state,
                views: [...viewsAndClicks.views],
                clicks: [...viewsAndClicks.clicks],
            }
            
        }
        case 'GETACTUALVIEWS': {

            const actualViews = addFilteredViews(state.firstDate, state.secondDate, state.views)

            return {
                ...state,
                actualViews: [...actualViews]
            }
        }

        case 'GETPASTVIEWS': {

            const pastViews = addFilteredViews(state.thirdDate, state.fourthDate, state.views)

            return {
                ...state,
                pastViews: [...pastViews]
            }
        }

        case 'ADDVIEWSBAR': {

            const viewsForDiagram = addViewsForDiagram(state.actualViews, state.pastViews)
            console.log(viewsForDiagram)
            return {
                ...state,
                viewsForDiagram: [...viewsForDiagram]
            }
        }

        case 'GETACTUALCLICKS': {

            const actualClicks = addFilteredClicks(state.firstDate, state.secondDate, state.clicks)

            return {
                ...state,
                actualClicks: [...actualClicks]
            }
        }
        case 'GETPASTCLICKS': {

            const pastClicks = addFilteredClicks(state.thirdDate, state.fourthDate, state.clicks)

            return {
                ...state,
                pastClicks: [...pastClicks]
            }
        }

        case 'ADDCLICKSBAR': {

            const clicksForDiagram = addClicksForDiagram(state.actualClicks, state.pastClicks)

            return {
                ...state,
                clicksForDiagram: [...clicksForDiagram]
            }
        }
        case 'GETACTUALPURCHASES': {

            const actualPurchases = addFilteredPurchases(state.firstDate, state.secondDate, state.purchases)

            return {
                ...state,
                actualPurchases: [...actualPurchases]
            }
        }
        case 'GETPASTPURCHASES': {

            const pastPurchases = addFilteredPurchases(state.thirdDate, state.fourthDate, state.purchases)

            return {
                ...state,
                pastPurchases: [...pastPurchases]
            }
        }

        case 'ADDPURCHASESBAR': {

            const purchasesForDiagram = addPurchasesForDiagram(state.actualPurchases, state.pastPurchases)

            return {
                ...state,
                purchasesForDiagram: [...purchasesForDiagram]
            }
        }

        case 'ADDFIRSTDATE':

            return {
                ...state,
                firstDate: action.date
            }

        case 'ADDSECONDDATE': {

            return {
                ...state,
                secondDate: action.date
            }
        }

        case 'ADDTHIRDDATE': {

            return {
                ...state,
                thirdDate: action.date
            }
        }

        case 'ADDFOURTHDATE': {

            return {
                ...state,
                fourthDate: action.date
            }
        }

        default:
            return state;
    }


}

export default rootReducer;