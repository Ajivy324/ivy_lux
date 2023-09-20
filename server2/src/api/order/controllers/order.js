'use strict';
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order',({ strapi }) => ({
    async create(ctx){
        const { products, userName, email } = ctx.request.body;

        try{
            // retrieve item information
            const lineItems = await Promise.all
            products.map(async(product) => {
                const item =  await  strapi
                .service("api::item.item")
                .findOne(product.id);
            })

        } catch (error){

        }
    }
}));
