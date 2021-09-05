// We have this similar to JQuery so that we don't have to type out
// the query every single time in our piecesRender.service.js class

export const $ = query => document.querySelector( query )
export const $$ = query => [ ...document.querySelectorAll( query ) ]
export const $$$ = (element, query) => element.querySelector( query )
export const deepclone = obj => JSON.parse( JSON.stringify( obj ) )

window.$ = $
window.$$ = $$