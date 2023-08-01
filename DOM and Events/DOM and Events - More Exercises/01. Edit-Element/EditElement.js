function editElement(element, startText, replaceWith) {
    
    // element.textContent = element.textContent.replaceAll(startText, replaceWith);
    element.textContent = element.textContent.split(startText).join(replaceWith);
}