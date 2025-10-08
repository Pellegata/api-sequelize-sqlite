const app = require('./src/app')
const { PORT, URL } = require('./src/config/env')


app.listen(PORT, () => {
    console.log(`Servidor escutado em ${URL}:${PORT}`)
})