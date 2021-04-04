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
            icon: 'bookmark',
            items: [
                {
                    name: 'gent',
                    url: 'https://git.gent.ooo'
                }, 
                {
                    name: 'trello',
                    url: 'https://trello.com'
                },
                {
                    name: 'reddit',
                    url: 'https://reddit.com'
                },
                {
                    name: 'amazon',
                    url: 'https://amazon.com'
                },
                {
                    name: 'my anime list',
                    url: 'https://myanimelist.net'
                },

            ]
        },
        // left side panels
        {
            icon: 'at-sign',
            items: [
                {
                    name: 'github',
                    url: 'https://github.com/Snapperito'
                },
                {
                    name: 'discord',
                    url: 'https://discord.com/users/431883840483491850'
                },
                {
                    name: 'reddit',
                    url: 'https://www.reddit.com/u/snapperito'
                },
                {
                    name: 'steam',
                    url: 'https://steamcommunity.com/id/snapperito/'
                },
                { 
                    name: 'wishlist',
                    url: 'https://wishlist.snapper.dev'
                }
            ]
        }
    ],
    
    // for weather data, remove this to remove weather
    weather: {
        // weather icon pack to use
        iconPack: 'OneDark',
        // whether to preload the icons or not
        preloadIcons: true,
        tempUnit: 'F',
        key: 'c1deb0ff8dbf879234779a493e03e7d2',
        latitude: 32.712489,
        longitude: -117.120189
    }
}

if (typeof window !== 'undefined') Object.assign(config, window.config)

export default config