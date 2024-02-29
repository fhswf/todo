import {checkSchema} from 'express-validator';

const todoValidationRules = [
    checkSchema({
        title:{
            exists: {errorMessage: 'Titel muss vorhanden sein'},
            notEmpty: {errorMessage: 'Titel darf nicht leer sein'},
            //check if the title is present
            isLength: {options: { min: 3 },errorMessage: 'Titel muss mindestens 3 Zeichen lang sein'}                
        },
        due:{
            exists: {errorMessage: 'Fälligkeitsdatum muss vorhanden sein'},
            notEmpty: {errorMessage: 'Fälligkeitsdatum darf nicht leer sein'},
            isISO8601: {errorMessage: 'Fälligkeitsdatum muss ein gültiges Datum sein'},
        },
        status:{
            exists: {errorMessage: 'Status muss vorhanden sein'},
            notEmpty: {errorMessage: 'Status darf nicht leer sein'},
            isInt: {
                options:{min:0, max:2}, 
                errorMessage: 'Status muss zwischen 0 und 2 liegen'}
        }
    })
];

export {todoValidationRules};