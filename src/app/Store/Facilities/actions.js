import * as types from "./actionTypes"
import FacilityService from  "../../Services/FacilityService"

export function showLoading(actionType){
   return function(dispatch, getState){       
       return dispatch({
           type: actionType
       })
   }
}

export function fetchFacilityTypes(){
    return function(dispatch, getState){
        return FacilityService.getFacilityTypes()
            .then(facilityTypes => {
                return dispatch({
                    type: types.FACILITY_TYPES_RECEIVED,
                    facilityTypes
                })
            })
            .catch(error => {
                throw(error)
            })
    }
}

export function fetchFacilityKephLevels(){
    return function(dispatch, getState){
        return FacilityService.getFaciityKephLevels()
            .then(kephLevels => {
                return dispatch({
                    type: types.FACILITY_KEPH_LEVELS_RECEIVED,
                    kephLevels
                })
            })
            .catch(error => {
                throw(error)
            })
    }
}

export function fetchCountyFacilities(countyId){
    return function(dispatch, getState){
        dispatch(showLoading(types.COUNTY_FACILITIES_REQUESTED))
        return FacilityService.getCountyFacilities(countyId)
            .then(countyFacilities =>{
                return dispatch({
                    type: types.COUNTY_FACILITIES_RECEIVED,
                    countyFacilities
                })
            })
            .catch(error =>{
                throw(error)
            })
    }
}