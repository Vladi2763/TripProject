import {View, Click, Purchase, Action} from './rootReducer'

export const addViewsAndClicks = (action: Action) => {
    const viewsAndClicks = action.views;

    const views = [];
    const clicks = [];

    for (let i = 0; i < viewsAndClicks.length; i++) {
        let view = {
            date: viewsAndClicks[i].date,
            view: viewsAndClicks[i].view
        }
        let click = {
            date: viewsAndClicks[i].date,
            click: viewsAndClicks[i].click
        }
        views.push(view);
        clicks.push(click)
    }
    return {
        views,
        clicks
    }
}

export const addFilteredViews = (firstDate: string, secondDate: string, views: Array<View>) => {
    const start = firstDate ? new Date(firstDate) : null;

    const end = secondDate ? new Date(secondDate) : null;

    end?.setHours(3, 0, 0, 0)

    const filteredViews = views.filter((view) => {
        let date = new Date(view.date)
        return ((start && date >= start) && (end && date <= end))
    })

    return filteredViews;
}

export const addViewsForDiagram = (actualViews: Array<View>, pastViews: Array<View>) => {

    const viewsForDiagram = [];

    if (actualViews.length > 0 && pastViews.length > 0 && actualViews.length === pastViews.length) {
        for (let i = 0; i < (actualViews.length > 0 ? actualViews.length : pastViews.length); i++) {

            let view = {
                date: actualViews[i].date ? actualViews[i].date : 0,
                value: actualViews[i].view ? actualViews[i].view : 0
            }

            let pastView = {
                date: pastViews[i].date ? pastViews[i].date : 0,
                value: pastViews[i].view ? pastViews[i].view : 0
            }

            viewsForDiagram.push({
                view,
                pastView
            })

        }
    }

    return viewsForDiagram;
}

export const addFilteredClicks = (firstDate: string, secondDate: string, clicks: Array<Click>) => {
    const start = firstDate ? new Date(firstDate) : null;

    const end = secondDate ? new Date(secondDate) : null;

    end?.setHours(3, 0, 0, 0)


    const filteredClicks = clicks.filter((click) => {
        let date = new Date(click.date)
        return ((start && date >= start) && (end && date <= end))
    })

    return filteredClicks;
}

export const addClicksForDiagram = (actualClicks: Array<Click>, pastClicks: Array<Click>) => {
    const clicksForDiagram = [];

    if (actualClicks.length > 0 && pastClicks.length > 0 && actualClicks.length === pastClicks.length) {
        for (let i = 0; i < (actualClicks.length > 0 ? actualClicks.length : pastClicks.length); i++) {

            let click = {
                date: actualClicks[i].date ? actualClicks[i].date : 0,
                value: actualClicks[i].click ? actualClicks[i].click : 0
            }

            let pastClick = {
                date: pastClicks[i].date ? pastClicks[i].date : 0,
                value: pastClicks[i].click ? pastClicks[i].click : 0
            }

            clicksForDiagram.push({
                click,
                pastClick
            })

        }
    }

    return clicksForDiagram;
}

export const addFilteredPurchases = (firstDate: string, secondDate: string, purchases: Array<Purchase>) => {
    const start = firstDate ? new Date(firstDate) : null;

    const end = secondDate ? new Date(secondDate) : null;

    end?.setHours(3, 0, 0, 0)

    const filteredPurchases = purchases.filter((purchase) => {
        let date = new Date(purchase.date)
        return ((start && date >= start) && (end && date <= end))
    })

    return filteredPurchases;
}

export const addPurchasesForDiagram = (actualPurchases: Array<Purchase>, pastPurchases: Array<Purchase>) => {
    const purchasesForDiagram = [];

    if (actualPurchases.length > 0 && pastPurchases.length > 0 && actualPurchases.length === pastPurchases.length) {
        for (let i = 0; i < (actualPurchases.length > 0 ? actualPurchases.length : pastPurchases.length); i++) {

            let purchase = {
                date: actualPurchases[i].date ? actualPurchases[i].date : 'Нет данных',
                value: actualPurchases[i].value ? actualPurchases[i].value : 0
            }

            let pastPurchase = {
                date: pastPurchases[i].date ? pastPurchases[i].date : 'Нет данных',
                value: pastPurchases[i].value ? pastPurchases[i].value : 0
            }

            purchasesForDiagram.push({
                purchase,
                pastPurchase
            })

        }
    }

    return purchasesForDiagram;
}











