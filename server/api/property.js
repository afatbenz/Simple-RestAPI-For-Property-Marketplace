const express           = require('express');
const router            = express.Router();
const moment            = require('moment')

// const Articles = require('../model/articleModel')
const getOffers = require('../../assets/offers.json')
const configUI = require('../../assets/configUI.json')
const province = require('../../assets/province.json')
const author = require('../../assets/author.json')

const checkSys = ((req, res) => {
    res.send({code:200, message:'success'})
})

const findData = ((req, res) => {
    let filteredOffers = getOffers.offers
    if(req.body.provinceID){
        filteredOffers = filteredOffers.filter(offer => offer.provinceID === req.body.provinceID)
    }
    if(req.body.statusID){
        filteredOffers = filteredOffers.filter(offer => offer.statusID === req.body.statusID)
    }
    if(req.body.typeID){
        filteredOffers = filteredOffers.filter(offer => offer.typeID === req.body.typeID)
    }
    res.send({code:200, message:'success', data:filteredOffers})
})

const detailProperty = ((req, res) => {
    if(req.body.offerID){
        const filteredOffers = getOffers.offers.find(offer => offer.id === req.body.offerID)
        if(filteredOffers){
            const getStatus = configUI.searchStatus.find(stat => stat.id === filteredOffers.statusID)
            const getType = configUI.propertyType.find(tipe => tipe.id === filteredOffers.typeID)
            const detail = { ...filteredOffers, status: getStatus.label, type:getType.label }

            const getAuthor = author.find(user => user.id === filteredOffers.authorID)
            const getNearOffers = getOffers.offers.filter(property => property.provinceID === filteredOffers.provinceID && property.id !== filteredOffers.id)

            const response = { detail, author:getAuthor, near_offers: getNearOffers }
            res.send({code:200, message:'success', data:response})
        }else{
            res.send({code:200, message:'DATA_NOT_FOUND'})
        }
    }
})

router.get('/sys', checkSys)

router.post('/find', findData)        
router.post('/detail', detailProperty)

module.exports = router;