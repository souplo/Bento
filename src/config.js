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
        }


    ],
    // right side panels
    panels: [
        {
            icon: 'bookmark',
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
            url: 'https://example.com/',
            // optional prop to zoom the frame in/out
            zoom: 0.5
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
        latitude: 35.231651,
        longitude: -106.612022
    }
}

if (typeof window !== 'undefined') Object.assign(config, window.config)

export default config
