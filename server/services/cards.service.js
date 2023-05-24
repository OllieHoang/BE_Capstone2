const card = require('../models/cards.model')
const Order = require('../models/orders.model')
const mongoose = require("mongoose");

const cardService = {
    getAll: async({query, page, limit, sort}) => {
        const skip = (page - 1) * limit
            
        return await Promise.all([
            card.countDocuments(query), 
            card.find(query).populate('genre author publisher').skip(skip).limit(limit).sort(sort)])
    },
    getBycardId: async(cardId) => {
        return await card.findOne({cardId: cardId}).populate('author publisher genre')
    },
    getById: async(id) => {
        return await card.findById(id).populate('author publisher genre')
       
    },
    getBySlug: async(slug) => {
        return await card.findOne({slug}).populate('author publisher genre')
    },
    checkIsOrdered: async(id) => {
        const ObjectId = mongoose.Types.ObjectId;
        return await Order.aggregate([
            { $unwind: "$products" },
            {
                $group: {
                    _id: "$products.product", 
                }
            },
            { $match : { _id : ObjectId(id) } }
        ])
    },
    search: async({key, page, limit}) => {
        const query = [
            {
                $lookup: {
                    from: "authors",
                    localField: "author",
                    foreignField: "_id",
                    as: "author"
                }
            },
            { 
                $match: {
                    $or: [
                        { name: { $regex: key, $options:"$i" } }, 
                        { "author.name": { $regex: key, $options:"$i" } } 
                    ]
                }
            },
        ]
        if (limit && +limit > 0) {
            const skip = (page - 1) * limit
            query.push({ $skip : skip }, { $limit: limit })
        }
        return await card.aggregate(query)
    },
    create: async(body) => {
        const { cardId, name, year, genre, author, publisher, description,
            pages, size, price, discount, imageUrl, publicId } = body
        const newcard = new card({cardId, name, year, genre, description,
            author, publisher, pages, size, price, discount, imageUrl, publicId})
        return await newcard.save()
    },
    updateById: async(id, body) => {
        const { name, year, genre, author, publisher, description,
            pages, size, price, discount, imageUrl, publicId } = body
        if (imageUrl && publicId) {
            return await card.findByIdAndUpdate(id, {
                name, year, genre, author, publisher, description,
                pages, size, price, discount, imageUrl, publicId
            }, {new: true})
        } else {
            return await card.findByIdAndUpdate(id, {
                name, year, genre, author, publisher, description,
                pages, size, price, discount
            }, {new: true})
        }
    },
    deleteById: async(id) => {
        return await card.findByIdAndDelete(id)
    }
}

module.exports = cardService
