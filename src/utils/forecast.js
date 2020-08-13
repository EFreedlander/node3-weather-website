const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=bb0830ffd935be3b564dd1ec210aeec0&query=' + longitude + ',' + latitude + '&units=f'    

    request({url, json:true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.' + ' UV Index is ' + body.current.uv_index + '.')
        }
    })
}

module.exports = forecast