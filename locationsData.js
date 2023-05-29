const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/locations'

const generationKey = () => {
    const characters = 'ABCDEF0123456789'
    let result = ''

    for (let i = 0; i < 16; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    return result
}

const apiKey = generationKey()

const responseApi = async () => {
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'X-API-Key': apiKey,
            'content-Type': 'application/json'
        }
    })
    
    const responseData = await response.json()
    return responseData
}


const logLocation = (locations) => {
    for (const location of locations) {
        console.log(`Location: ${location.name}, recommended character Level: ${location.recommendedLevel}`)
    }
}

responseApi().then(response => {
    logLocation(response)
})


