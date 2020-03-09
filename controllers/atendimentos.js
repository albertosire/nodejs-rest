module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Você está no recurso atendimentos!\n'))

    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.send('Você está postando no recurso atendimentos!\n')
    })
}