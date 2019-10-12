import models from '../../database/models';
var mjson = require('../../../src/data.json')

export default class TransactionController {
    static async createTransaction(req, res) {
        try {
            await models.Client.bulkCreate(mjson[1].Report, { ignoreDuplicates: true })
            await models.Store.bulkCreate(mjson[1].Report, { ignoreDuplicates: true })
            await models.Source.bulkCreate(mjson[1].Report, { ignoreDuplicates: true })
            mjson[1].Report.forEach(async (data) => {
                const store = await models.Store.findOne({
                    where: { storeName: data.storeName }

                })
                const source = await models.Source.findOne({
                    where: { sourceName: data.sourceName }

                })
                const client = await models.Client.findOne({
                    where: {
                        clientName: data.clientName,
                        mobileNo: data.mobileNo,
                        contactType: data.contactType
                    }
              
                })
                const { dataValues: { id: storeId } } = store;
                const { dataValues: { id: sourceId } } = source;
                const { dataValues: { id: clientId } } = client;
                const data1 = { ...data, storeId, sourceId, clientId }
                models.Transaction.create(data1)
            })
            return res.status(201).json({
                success: true,
                message: 'Successfully added clients',
            });
        } catch (error) {
            console.log(error)
        }
    };
    static async getTransactionData(req, res) {
        try {
            const userData = await models.Transaction.findAll({
                raw: true
            });
            return res.status(200).json({
                success: true,
                userData
            });
        } catch (error) {
            console.log(error)
        }
    }
}

