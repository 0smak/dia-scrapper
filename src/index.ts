import app from './app'

app.listen(app.get('port'), '0.0.0.0')
console.info(`Server running on port ${app.get('port')}`)
