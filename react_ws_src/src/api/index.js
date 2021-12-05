import ajax from './ajax'

/**
 * new changes
 */

let BASE = 'http://localhost:5000'

export const updateTotalVisitCount = () => ajax(BASE + '/totalCount')

export const getAllRecords = () => ajax(BASE + '/getAllRecords')

export const addOrUpdateRecord = (user) => ajax(BASE + '/addOrUpdateRecord',user,'POST')

export const updateWinCount = (user) => ajax(BASE + '/updateWinCount',user,'POST')

export const getIPInfo = () => ajax('https://geolocation-db.com/json/')