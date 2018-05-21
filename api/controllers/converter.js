const Converter = require('../models/Converter')

module.exports = {
    convert (req, res) {
        const conversion = Converter.convert('Hello', 'world')
        res.send({ express: conversion })
    }
}
