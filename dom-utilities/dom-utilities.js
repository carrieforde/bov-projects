(function(window) {

    'use strict';

    var utilities = {};

    /**
     * Find the nearest ancestor matching a CSS selector for a given element.
     * 
     * @param {string}  el        The starting element.
     * @param {string}  selector  The ancestor's selector to match.
     * @returns                   The matched ancestor or null.
     */
    utilities.getAncestorBySelector = function (el, selector) {

        var el       = el.nodeType === undefined ? document.querySelector(el) : el,
            ancestor = el.parentElement;

        while (ancestor.tagName !== 'HTML') {
            if (ancestor.classList.contains(selector) || ancestor.tagName === selector.toUpperCase() || ancestor.getAttribute('id') === selector) {
                return ancestor;
            }

            ancestor = ancestor.parentElement;
        }

        return null;
    }

    /**
     * Get all the siblings relative to a CSS selector.
     * 
     * @param    {string}  selector  The CSS selector to search.
     * @returns  {array}             The collection of matching elements.
     */
    utilities.getSiblingsBySelector = function (selector) {

        var selector = selector.nodeType === undefined ? document.querySelector(selector) : selector,
            siblings = [],
            children = selector.parentElement.children;

        for (var i = 0; i < children.length; i++) {
            siblings.push(children[i]);
        }

        return siblings;
    }

    /**
     * Insert an element after an existing DOM node.
     * 
     * @param    {string}  newNode  The node to be inserted.
     * @param    {string}  refNode  The node to insert after.
     * @returns  {string}           The inserted node.
     */
    utilities.insertAfter = function (newNode, refNode) {

        refNode = refNode.nodeType === undefined ? document.querySelector(refNode) : refNode;

        if (refNode.nextElementSibling !== null) {
            refNode.parentElement.insertBefore(newNode, refNode.nextElementSibling);
        } else {
            refNode.parentElement.appendChild(newNode);
        }

        return newNode;
    }

    /**
     * Swaps the position of two elements within the DOM.
     *
     * @param    {string}   el1  The first element to swap.
     * @param    {string}   el2  The second element to swap.
     * @returns  {boolean}       Whether the swap was successful or not.
     */
    utilities.swapElements = function (el1, el2) {

        var el1 = el1.nodeType === undefined ? document.querySelector(el1) : el1,
            el2 = el2.nodeType === undefined ? document.querySelector(el2) : el2,
            clone1 = el1.cloneNode(true),
            clone2 = el2.cloneNode(true);

        try {
            el1.parentElement.insertBefore(clone2, el1);
            el2.parentElement.insertBefore(clone1, el2);

            el1.parentElement.removeChild(el1);
            el2.parentElement.removeChild(el2);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    /**
     * Removes a DOM element and all its children, returning an array of removed nodes.
     *
     * @param   {string}  selector  The element to be removed.
     * @return  {array}             The removed elements.
     */
    utilities.removeAll = function (selector) {

        var walker,
            removed = [];
        
        selector = selector.nodeType === undefined ? document.querySelectorAll(selector) : selector;

        for (const el of selector) {
            
            walker = document.createTreeWalker(el, NodeFilter.SHOW_ELEMENT, null);

            removed.push(walker.currentNode);

            for (var i = 0; i < walker.currentNode.children.length; i++) {
                var currentNode = walker.currentNode.children[i];
                removed.push(currentNode);

                if (currentNode.hasChildNodes()) {
                    for (var j = 0; j < currentNode.children.length; j++) {
                        var currentChild = currentNode.children[j];
                        removed.push(currentNode.children[j]);
                        
                        if(currentChild.hasChildNodes()) {
                            for (var k = 0; k < currentChild.children.length; k++) {
                                removed.push(currentNode.children[k]);
                            }
                        }
                    }
                }
            }
            el.parentElement.removeChild(el);
        }
        return removed;
    }

    window.utilities = utilities;
})(window);
