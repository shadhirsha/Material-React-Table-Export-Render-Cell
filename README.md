# Material-React-Table-Export-Render-Cell

1.MATERIAL TABLE / MATERIAL REACT TABLE Does not support nested object (render value) export to PDF. these tables support Array of Array for export rows check materialExport.js
So, This Method will help you
# NOTE: Note this render value method supports only nested object of Array.
I am working on (nested object) render value with add custom charactors or Formated Numbers


2.This Javscript Function shows how to access Array of nested objects and bring them to parent level. nestedObject.js
This Function call useful where nested object do not support.
Example:

    [{
        name: {
            firstName: 'Elenora',
            lastName: 'Wilkinson'
        },
        company: 'Feest - Reilly',
        city: 'Hertaland',
        country: 'Qatar',
    }]

    To

    [{
        firstName: 'Elenora',
        lastName: 'Wilkinson',
        company: 'Feest - Reilly',
        city: 'Hertaland',
        country: 'Qatar',
    }]


