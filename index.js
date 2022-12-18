import chat from './chat.js'
import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors({origin: '*'}))
app.use(express.json({extended: true}))

// app.use('/api/inv', require('./chat'))
chat(app)

const PORT  = 5000

const start = async () => {
    try{
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    }catch (e){
        console.error('Server error:', e.message)
        process.exit(1)
    }
}

start()