// To use, just give any element a 'data-maxbox-src' attribute with the full image's src
(function() { // namespace
    function init() {
        var elements = document.querySelectorAll('[data-maxbox-src]');
        
        for (var i=0; i<elements.length; i++) {
            attachOpenClickEvent(elements[i]);
        }
    }

    function attachOpenClickEvent(triggerElement) {
        triggerElement.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            open(triggerElement);
        });
    }

    // actual work happens here
    function open(element) {
        var containerElement = document.createElement('div'),
        closeElement = document.createElement('button'),
        imgElement = document.createElement('img');

        // structure:
        // -- container
        //    -- image
        //    -- close button
        containerElement.appendChild(closeElement);
        containerElement.appendChild(imgElement);

        // container
        containerElement.className = 'maxbox__container';
        containerElement.style.background = element.getAttribute('data-maxbox-bg') || '#333';

        // close button
        closeElement.className = 'maxbox__close';
        closeElement.style.color = element.getAttribute('data-maxbox-color') || '#eee';
        closeElement.style.fontFamily = element.getAttribute('data-image-font') || 'Helvetica,Arial,sans-serif';
        closeElement.innerHTML = 'X';
        closeElement.addEventListener('click', function() { // wire up close button
            document.body.removeChild(containerElement);
        });

        // image
        imgElement.className = 'maxbox__img';
        imgElement.src = element.getAttribute('data-maxbox-src'); // wire up the actual image

        document.body.appendChild(containerElement);
    }

    init();
})();