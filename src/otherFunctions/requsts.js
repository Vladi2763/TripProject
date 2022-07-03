export const getPurchases = () => {
    return fetch('https://wegotrip.com/api/v2/stats/plot')
        .then(response => response.json())
        .then(value => value.purchases)
}

export const getViews = () => {
    return fetch('https://wegotrip.com/api/v2/stats/plot')
        .then(response => response.json())
        .then(value => value.views_to_clicks)
}