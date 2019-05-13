const hbs = require('hbs');

// Helpers 
hbs.registerHelper('getAnio', () => new Date().getFullYear() ); 
hbs.registerHelper('capitalizer', (text) => {
    let words = text.split(' ');
    words.forEach( (element, i) => {
        words[i] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    });
    return words.join(' ');
});