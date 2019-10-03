import { createSelector } from 'reselect'

export const languageSelector = state => state.language.data

export const ratingMaxSelector = state => state.common.ratingMax

export const defaultCommentSelector = state => state.common.showDefaultComment

export const loadingSelector = state => state.common.loading