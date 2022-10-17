const express           = require('express');
const router            = express.Router();

// const Articles = require('../model/articleModel')
const configUI = require('../../assets/configUI.json')
const province = require('../../assets/province.json')

const checkSys = ((req, res) => {
    res.send({code:200, message:'success'})
})

const generalConfig = ((req, res) => {
    const propertyType = configUI.propertyType
    const searchStatus = configUI.searchStatus
    const getProvince = province
    const provinces = []
    getProvince.forEach(item => {
        const provinsi = {
            id: item.id,
            province_name: item.name,
        }
        provinces.push(provinsi)
    })
    const response = { provinces, propertyType, searchStatus }
    res.send({code:200, message:'success', data:response})
})

router.get('/sys', checkSys)
router.get('/general', generalConfig) // Show All

module.exports = router;