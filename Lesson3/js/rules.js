'use strict'

{
    let allHeaders = document.getElementsByTagName('h2');
    let contentDiv = document.createElement('div');
    let uList = document.createElement('ul');

    contentDiv.id = 'content';
    contentDiv.appendChild(uList);

    for (const el of allHeaders) {
        let liElement = document.createElement('li');
        uList.appendChild(liElement);
        liElement.innerText = el.innerText;
    }

    document.body.insertBefore(contentDiv, document.getElementsByTagName('div')[0]);
}