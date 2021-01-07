const config = {
    "12hr": false, // 12 hour clock
    greetings: {
        night: "Good Night",
        morning: "Good Morning",
        afternoon: "Pleasing afternoon",
        evening: "Delightful evening",
        name: "Snapper"
    },
    // main buttons
    buttons: [
        {
            url: 'https://github.com',
            icon: 'github'
        },
        {
            url: 'https://twitch.tv',
            icon: 'twitch'
        },
                {
            url: 'vscode://',
            icon: 'code'
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
        }


    ],
    // right side panels
    panels: [
        {
            icon: 'coffee',
            items: [
                {
                    name: 'Gent',
                    url: 'https://git.gent.ooo'
                }, 
                {
                    name: 'Trello',
                    url: 'https://trello.com'
                },
                {
                    name: 'Reddit',
                    url: 'https://reddit.com'
                },
                {
                    name: 'Amazom',
                    url: 'https://amazon.com'
                },
                {
                    name: 'My Anime List',
                    url: 'https://myanimelist.net'
                },

            ]
        },
        // left side panels
        {
            url: ' ',
            // optional prop to zoom the frame in/out
            zoom: 1
        }
    ],
    
    // for weather data, remove this to remove weather
    weather: {
        // weather icon pack to use
        iconPack: 'OneDark',
        // whether to preload the icons or not
        preloadIcons: true,
        tempUnit: 'F',
        key: '1ba472bdeb003a88cf66c572ac6ffb3e',
        latitude: 32.794773,
        longitude: -116.962524
    }
}

if (typeof window !== 'undefined') Object.assign(config, window.config)

export default config