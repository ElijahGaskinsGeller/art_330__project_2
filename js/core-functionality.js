
"use strict";

/**
* Returns true if the given element is on screen and false if it is not.
* @returns {boolean}
* @param element DOM element.
*/
function IsOnScreen(element){
    let top = element.getClientRects()[0].top;
    let height = element.getClientRects()[0].height;

    let left = element.getClientRects()[0].left;
    let width = element.getClientRects()[0].width;

    return top < window.innerHeight && top + height > 0 &&
           left < window.innerWidth && left + width > 0;
}

/**
 * Returns a normalized float value for the given element's position relative to the screen.<br>
 * result < 0: top of the element is below the bottom of the screen <br>
 * result > 1: bottom of element is above the top of the screen
 * @returns {number}
 * @param element DOM element.
 */
function OnScreenLerpPosition(element){

    let elementHeight = element.getClientRects()[0].height;
    let elementBottom = element.getClientRects()[0].bottom;

    let screenHeight = window.innerHeight;

    return (elementHeight - elementBottom + screenHeight)/(elementHeight+screenHeight);

}

/**
 *  Returns the absolute height of the page regardless of inline elements
 * @returns {number}
 * @constructor
 */
function GetPageHeight(){
    return Math.max( document.body.scrollHeight, document.body.offsetHeight,
                     document.documentElement.clientHeight, document.documentElement.scrollHeight,
                     document.documentElement.offsetHeight );
}

/**
 * Returns a normalized position between 0 and 1 relative to the current scroll distance
 * Depends on "GetPageHeight()"
 * @returns {number}
 * @constructor
 */
function WindowScrollNormalPosition() {
    return window.scrollY / (GetPageHeight() - window.innerHeight);
}

/**
 * Returns the linear interpolation between "start" and "end" based on "amt"
 * @param start
 * @param end
 * @param amt
 * @returns {number}
 */
function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end
}

/**
 * Returns "num" clamped between "min" and "max"
 * @param num
 * @param min
 * @param max
 * @returns {number}
 */
function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
