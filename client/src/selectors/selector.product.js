import { createSelector } from 'reselect'

export const productSelector = state => state.product

export const productDataSelector = state => state.product.list

export const productPaginationSelector = state => state.product.pagination
