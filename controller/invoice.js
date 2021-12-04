const stripe = require('stripe')('sk_test_51JUWsmBeXKRuUf9lVnu0soPhG5pwB6xLQzq944xEUF94JfZQ4NCqjfrNmA8gfzW1K5x4oVYC6nh52peS4EO9cPbf00FL9l8TZ1');
const invoiceRepository = require('../repository/invoice');

exports.getAllInvoices = async (req, res, next) => {
    try{
        const [invoices, _field] = await invoiceRepository.findAll();
        res.status(200).json({invoices});
    }catch (e) {
        console.log(e);
        next(e);
    }
}

exports.getInvoice = async (req, res, next) => {
    try{
        const invoiceId = parseInt(req.params.id);
        const [invoice, _field] = await invoiceRepository.findById(invoiceId);
        res.status(200).json({invoice});
    }catch (e) {
        console.log(e);
        next(e);
    }
}

exports.createInvoice = async (req, res, next) => {
    try{
        const invoiceId = parseInt(req.params.id);
        const invoice = req.body;
        console.log(invoice);
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price_data: {
                        currency: 'eur',
                        product_data: {
                            name: invoice.name,
                        },
                        unit_amount: parseInt(invoice.montant + "00"),
                    }
                    ,
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${process.env.DOMAIN}/success.html`,
            cancel_url: `${process.env.DOMAIN}/cancel.html`,
        });

        if(invoice.promo_id == undefined){
            invoice.promo_id = null;
        }
        const invoiceCreated = await invoiceRepository.save( {invoice, commentary: session.id , user_id: invoiceId});
        if (!invoiceCreated){
            res.status(500);
        }
        res.redirect(303, session.url);
    }catch (e) {
        console.log(e);
        next(e);
    }
}

exports.updateInvoice = async (req, res, next) => {
    try{
        const invoiceId = parseInt(req.params.id);
        const invoice = req.body;
        const [invoiceUpdated, _field] = await invoiceRepository.update(invoiceId, invoice);
        res.status(200).json({invoiceUpdated});
    }catch (e) {
        console.log(e);
        next(e);
    }
}

exports.deleteInvoice = async (req, res, next) => {
    try{
        const invoiceId = parseInt(req.params.id);
        const [invoice, _field] = await invoiceRepository.delete(invoiceId);
        res.status(200).json({invoice});
    }catch (e) {
        console.log(e);
        next(e);
    }
}
