import * as types from "./actionTypes"
import FacilityService from "../../Services/FacilityService"

export function showLoading(actionType=undefined) {
    return function (dispatch, getState) {
        return dispatch({
            type: actionType
        })
    }
}

export function fetchCountySummary(countyId) {
    return function (dispatch, getState) {
        dispatch(showLoading(types.COUNTY_SUMMARY_REQUESTED))
        return FacilityService.getCountySummary(countyId)
            .then(countySummary => {
                return dispatch({
                    type: types.COUNTY_SUMMARY_RECEIVED,
                    countySummary
                })
            })
            .catch(error => {
                throw (error)
            })
    }
}

export function fetchConstituencySummary(constituencyId){
    return function(dispatch, getState){
        FacilityService.getConstituencySummary(constituencyId)
            .then(constituencySummary => {
                return dispatch({
                    type: types.CONSTITUENCY_SUMMARY_RECEIVED,
                    constituencySummary
                })
            })
            .catch(error => {
                throw(error)
            })
    }
}

export function fetchFacilities(level, id){
    return function (dispatch, getState){
        dispatch(showLoading(types.FACILITY_LIST_REQUESTED))
        return FacilityService.getFacilities(level, id)
            .then(facilities => {
                dispatch({
                    type: types.FACILITY_LIST_RECEIVED,
                    facilities
                })
            })
            .catch(error => {})
    }
}

export function fetchFacilityTypes() {
    return function (dispatch, getState) {
        return FacilityService.getFacilityTypes()
            .then(facilityTypes => {
                return dispatch({
                    type: types.FACILITY_TYPES_RECEIVED,
                    facilityTypes
                })
            })
            .catch(error => {
                throw (error)
            })
    }
}

export function fetchFacilityKephLevels() {
    return function (dispatch, getState) {
        return FacilityService.getFaciityKephLevels()
            .then(kephLevels => {
                return dispatch({
                    type: types.FACILITY_KEPH_LEVELS_RECEIVED,
                    kephLevels
                })
            })
            .catch(error => {
                throw (error)
            })
    }
}

export function changeFacilityInformationType(informationType) {
    return function (dispatch, getState) {
        return dispatch({
            type: types.CHANGE_FACILITY_INFORMATION_TYPE,
            informationType
        })
    }
}
