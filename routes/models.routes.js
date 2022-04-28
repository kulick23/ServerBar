module.exports = (app, pareser) => {
    const models = {
        user:{},
        roles:{},
        places:{},
        party:{},
        order:{},
        discount:{},
        coctail:{},
        categories:{},
    }
    Object.keys(models).map((model) => {
        const router = require('express').Router();
        const controller = require('../controllers/' + model + '.controller.js')
        if (model === 'user') {
            router.get('/',controller.getAll)
            router.post('/',controller.create)
            router.delete('/:id',controller.delete)
        } else if (model === 'roles') {
            router.get('/',controller.getAll)
            router.post('/',controller.create)
            router.delete('/:id',controller.delete)
        } else if (model === 'places') {
            router.get('/',controller.getAll)
            router.post('/',controller.create)
            router.delete('/:id',controller.delete)
        } else if (model === 'party') {
            router.get('/',controller.getAll)
            router.post('/',controller.create)
            router.delete('/:id',controller.delete)
        } else if (model === 'order') {
            router.get('/',controller.getAll)
            router.post('/',controller.create)
            router.delete('/:id',controller.delete)
        } else if (model === 'discount') {
            router.get('/',controller.getAll)
            router.post('/',controller.create)
            router.delete('/:id',controller.delete)
        } else if (model === 'coctail') {
            router.get('/',controller.getAll)
            router.post('/',controller.create)
            router.delete('/:id',controller.delete)
        } else if (model === 'categories') {
            router.get('/',controller.getAll)
            router.post('/',controller.create)
            router.delete('/:id',controller.delete)
        }
    })
}