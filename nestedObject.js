const data = [
    {
        name: {
            firstName: 'Elenora',
            lastName: 'Wilkinson'
        },
        company: 'Feest - Reilly',
        city: 'Hertaland',
        country: 'Qatar',
    },
    {
        name: {
            firstName: 'Berneice',
            lastName: 'Feil'
        },
        company: 'Deckow, Leuschke and Jaskolski',
        city: 'Millcreek',
        country: 'Nepal',
    },
    {
        name: {
            firstName: 'Frieda',
            lastName: 'Baumbach',            
        },
        company: 'Heidenreich, Grady and Durgan',
        city: 'Volkmanside',
        country: 'Croatia',
    },
    {
        name: {
            firstName: 'Zachery',
            lastName: 'Brown',            
        },
        company: 'Cormier - Skiles',
        city: 'Faychester',
        country: 'Saint Pierre and Miquelon',
    },
    {
        name: {
            firstName: 'Kendra',
            lastName: 'Bins',
        },
        company: 'Wehner - Wilderman',
        city: 'New Valentin',
        country: 'Senegal',
    },
    {
        name: {
            firstName: 'Lysanne',
            lastName: 'Fisher',
        },
        company: 'Schmidt LLC',
        city: 'Malachitown',
        country: 'Costa Rica',
    },
    {
        name: {
            firstName: 'Garrick',
            lastName: 'Ryan',
        },
        company: 'Ryan - Buckridge',
        city: 'East Pearl',
        country: 'Cocos (Keeling) Islands',
    },
    {
        name: {
            firstName: 'Hollis',
            lastName: 'Medhurst',
        },
        company: 'Quitzon Group',
        city: 'West Sienna',
        country: 'Papua New Guinea',
    },
    {
        name: {
            firstName: 'Arlo',
            lastName: 'Buckridge',
        },
        company: 'Konopelski - Spinka',
        city: 'Chino',
        country: 'Congo',
    },
    {
        name: {
            firstName: 'Rickie',
            lastName: 'Auer',
        },
        company: 'Lehner - Walsh',
        city: 'Nyahfield',
        country: 'Sudan',
    },
    {
        name: {
            firstName: 'Isidro',
            lastName: 'Larson',
        },
        company: 'Reichert - Paucek',
        city: 'Fort Rosinaside',
        country: 'Belize',
    },
    {
        name: {
            firstName: 'Bettie',
            lastName: 'Skiles',
        },
        company: 'Zulauf, Flatley and Rolfson',
        city: 'West Feltonchester',
        country: 'Poland',
    },
]

const fields = [
    {
        header: 'name.firstName',
        size: 120,
    },
    {
        header: 'name.lastName',
        size: 120,
    },
    {
        header: 'company',
        size: 120,
    },
    {
        header: 'city',
        size: 120,
    },
    {
        header: 'country',
        size: 120,
    }
]

function myFunction() {
    var rows = []
    data?.map((d) => {
        var rowData = {...d}
        fields?.map((f) => {
            var srch = d;
            const str = f?.header
            const sp = str.split(".")
            if(sp.length > 1) {
                sp.slice(0, (sp.length)).map(item => (srch = srch[item]))
                const key = sp[sp.length-1]
                rowData[key] = srch
                delete rowData['name']
            }
        })
        rows.push(rowData)      
    })
    return (rows)
}

console.log(myFunction())
