const config = {
    "12hr": true, // 12 hour clock
    greetings: {
        night: "goodnight",
        morning: "good morning",
        afternoon: "good afternoon",
        evening: "good evening",
        name: "anya"
    },
    // main buttons
    buttons: [
        {
            url: 'spotify://',
            icon: 'headphones'
        },
    
        {
            url: 'https://twitter.com',
            icon: 'twitter'
        },

        {
            url: 'https://youtube.com',
            icon: 'youtube'
        },
        {        
            url: 'https://gmail.com',
            icon: 'mail'
        },
        {
            url: 'steam://nav/library',
            icon: 'cloud-rain'
        },
        {
            url: 'https://www.twitch.tv/directory/following',
            icon: 'twitch'
        }


    ],
    // right side panels
    panels: [
        {
            icon: 'coffee',
            items: [

                {
                    name: 'reddit',
                    url: 'https://reddit.com'
                },
                {
                    name: 'amazon',
                    url: 'https://amazon.com'
                },      
                {
                    name: 'notion',
                    url: 'https://www.notion.so'
                }, 
                {
                    name: 'netflix',
                    url: 'https://www.netflix.com/browse'
                }, 
                {
                    name: 'pinterest',
                    url: 'https://www.pinterest.com/homefeed/'
                },
            ]
        },
        // left side panels
        {
            icon: 'music',
            items: [
                {
                    name: 'kendrick',
                    url: 'spotify://playlist/37i9dQZF1E39EvcW0ExA0i?si=5968ed1db1614ae9'
                },
                {
                    name: 'dad music',
                    url: 'spotify://playlist/5IhGelZd7QRYJQB54Pu1xw?si=3108c037c1e24d5c'
                },
                {
                    name: 'game soundtracks',
                    url: 'spotify://playlist/2kdwjCmCQt9nFg2Qo8Q8YK?si=ba10915cde9b4556'
                },
                {
                    name: 'faye indie stuff',
                    url: 'spotify://playlist/6jPfkilCa2PjoaaplPsvHA?si=d4a0ce966087402c'
                },
                { 
                    name: 'rainy',
                    url: 'spotify://playlist/2DU92JThdBKnw1xJb9E0Td?si=f27d273a528148fe'
                }
            ]
        }

    ],
    
    // for weather data, remove this to remove weather
    weather: {
        // weather icon pack to use
        iconPack: 'matcha',
        // whether to preload the icons or not
        preloadIcons: true,
        tempUnit: 'F',
        key: 'c1deb0ff8dbf879234779a493e03e7d2',
        latitude: 35.231651,
        longitude: -106.612022
    }
}

if (typeof window !== 'undefined') Object.assign(config, window.config)

export default config
