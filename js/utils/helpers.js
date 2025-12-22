function el(tag, className, attrs, text, children) {
    className = className || '';
    attrs = attrs || {};
    text = text || '';
    children = children || [];

    var element = document.createElement(tag);
    if (className) element.className = className;

    for (var key in attrs) {
        if (key === 'style') {
            element.style.cssText = attrs[key];
        } else {
            element.setAttribute(key, attrs[key]);
        }
    }

    if (text) element.textContent = text;

    for (var i = 0; i < children.length; i++) {
        element.appendChild(children[i]);
    }

    return element;
}

function icon(name, className) {
    className = className || 'text-xl';
    var span = el('span', 'material-symbols-outlined ' + className);
    span.textContent = name;
    return span;
}
