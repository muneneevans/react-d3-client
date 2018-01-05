//register all the possible indicator actions

export const PERIODTYPES_REQUESTED = "indicators.PERIODTYPES_REQUESTED"
export const PERIODTYPES_RECEIVED = "indicators.PERIODTYPES_RECEIVED"

export const INDICATORGROUP_REQUESTED = "indicators.INDICATORGROUP_REQUESTED"
export const INDICATORGROUP_RECEIVED = "indicators.INDICATORGROUP_RECEIVED"
export const INDICATORGROUP_INDICATORS_REQUESTED =
	"indicators.INDICATORGROUP_INDICATORS_REQUESTED"
export const INDICATORGROUP_INDICATORS_RECEIVED =
	"indicators.INDICATORGROUP_INDICATORS_RECEIVED"

//#region facility specific types
export const ADD_FACILITY_INDICATOR_REQUESTED =
	"indicators.ADD_FACILITY_INDICATOR_REQUESTED"
export const ADD_FACILITY_INDICATOR_SUCCESS =
	"indicators.ADD_FACILITY_INDICATOR_SUCCESS"
export const REMOVE_FACILITY_INDICATOR_REQUESTED =
	"indicators.REMOVE_FACILITY_INDICATOR_REQUESTED"
export const REMOVE_FACILITY_INDICATOR_SUCCESS =
	"indicators.REMOVE_FACILITY_INDICATOR_SUCCESS"

export const SET_FACILITY_PERIOD_TYPE_REQUESTED =
	"indicators.SET_FACILITY_PERIOD_TYPE_REQUESTED"
export const SET_FACILITY_PERIOD_TYPE_SUCCESS =
	"indicators.SET_FACILITY_PERIOD_TYPE_SUCCESS"
export const SET_FACILITY_YEAR_REQUESTED =
	"indicators.SET_FACILITY_YEAR_REQUESTED"
export const SET_FACILITY_YEAR_SUCCESS = "indicators.SET_FACILITY_YEAR_SUCCESS"

export const GET_FACILITY_INDICATORS_VALUES_START =
	"indicators.GET_FACILITY_INDICATORS_VALUES_START"
export const GET_FACILITY_INDICATORS_VALUES_SUCCESS =
	"indicators.GET_FACILITY_INDICATORS_VALUES_SUCCESS"
export const GET_FACILITY_INDICATORS_VALUES_FAIL =
	"indicators.GET_FACILITY_INDICATORS_VALUES_FAIL"
export const GET_FACILITY_INDIVIDUAL_SELECTED_INDICATOR_VALUES_REQUESTED =
	"indicators.GET_FACILITY_INDIVIDUAL_SELECTED_INDICATOR_VALUES_REQUESTED"
export const GET_FACILITY_INDIVIDUAL_INDICATOR_VALUES_RECEIVED =
	"indicators.GET_FACILITY_INDIVIDUAL_INDICATOR_VALUES_RECEIVED"
export const GET_FACILITY_INDIVIDUAL_SELECTED_INDICATOR_VALUES_ERROR =
	"indicators.GET_FACILITY_INDIVIDUAL_SELECTED_INDICATOR_VALUES_ERROR"

export const ClEAR_FACILITY_INDICATOR_DATA_REQUESTED =
	"indicators.ClEAR_FACILITY_INDICATOR_DATA_REQUESTED"
//#endregion

//#region ward related action types

export const ADD_WARD_INDICATOR_REQUESTED =
	"indicators.ADD_WARD_INDICATOR_REQUESTED"
export const ADD_WARD_INDICATOR_SUCCESS =
	"indicators.ADD_WARD_INDICATOR_SUCCESS"
export const REMOVE_WARD_INDICATOR_REQUESTED =
	"indicators.REMOVE_WARD_INDICATOR_REQUESTED"
export const REMOVE_WARD_INDICATOR_SUCCESS =
	"indicators.REMOVE_WARD_INDICATOR_SUCCESS"

export const SET_WARD_PERIOD_TYPE_REQUESTED =
	"indicators.SET_WARD_PERIOD_TYPE_REQUESTED"
export const SET_WARD_PERIOD_TYPE_SUCCESS =
	"indicators.SET_WARD_PERIOD_TYPE_SUCCESS"
export const SET_WARD_YEAR_REQUESTED = "indicators.SET_WARD_YEAR_REQUESTED"
export const SET_WARD_YEAR_SUCCESS = "indicators.SET_WARD_YEAR_SUCCESS"

export const GET_WARD_INDICATORS_VALUES_START =
	"indicators.GET_WARD_INDICATORS_VALUES_START"
export const GET_WARD_INDICATORS_VALUES_SUCCESS =
	"indicators.GET_WARD_INDICATORS_VALUES_SUCCESS"
export const GET_WARD_INDICATORS_VALUES_FAIL =
	"indicators.GET_WARD_INDICATORS_VALUES_FAIL"
export const GET_WARD_INDIVIDUAL_INDICATOR_VALUES_REQUESTED =
	"indicators.GET_WARD_INDIVIDUAL_INDICATOR_VALUES_REQUESTED"
export const GET_WARD_INDIVIDUAL_INDICATOR_VALUES_RECEIVED =
	"indicators.GET_WARD_INDIVIDUAL_INDICATOR_VALUES_RECEIVED"
export const GET_WARD_INDIVIDUAL_INDICATOR_VALUES_ERROR =
	"indicators.GET_WARD_INDIVIDUAL_INDICATOR_VALUES_ERROR"

export const ClEAR_WARD_INDICATOR_DATA_REQUESTED =
	"indicators.ClEAR_WARD_INDICATOR_DATA_REQUESTED"
//#endregion
