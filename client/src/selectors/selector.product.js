import { createSelector } from 'reselect'

export const productDataSelector = state => state.product.list
export const productRatingMaxSelector = state => state.product.ratingMax
export const productDefaultCommentSelector = state => state.product.showDefaultComment
export const productPaginationSelector = state => state.product.pagination