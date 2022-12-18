import example from './routes/inv.routes.js'
export default function chat(router) {
    router.post(
        '/',
        [],
        async (req, res) => {
            try {

                const {
                    status,
                    text
                } = req.body
                console.log(req.body)
                console.log(status, text)
                if (status != 'DONE')
                    return res.status(400).json('Status failed!')
                const result = await example(text)
                console.log(result)
                res.status(200).json(result)
            } catch (e) {
                console.log(e)
                res.status(500).json({message: `Error in auth.inv`})
            }
        }
    )
}



