const stripe = require('stripe')('sk_test_51JUWsmBeXKRuUf9lVnu0soPhG5pwB6xLQzq944xEUF94JfZQ4NCqjfrNmA8gfzW1K5x4oVYC6nh52peS4EO9cPbf00FL9l8TZ1');
const organisationRepository = require('../repository/organisation');

exports.getAllOrganisations = async (req, res, next) => {
    try{
        const [organisations, _field] = await organisationRepository.findAll();
        res.status(200).json({organisations});
    }catch (e) {
        console.log(e);
        next(e);
    }
}

exports.getOrganisation = async (req, res, next) => {
    try{
        const organisationId = parseInt(req.params.id);
        const [organisation, _field] = await organisationRepository.findById(organisationId);
        res.status(200).json({organisation});
    }catch (e) {
        console.log(e);
        next(e);
    }
}

exports.createOrganisation = async (req, res, next) => {
    try{
        const organisationId = parseInt(req.params.id);
        const organisation = req.body;
        console.log(organisation);
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price_data: {
                        currency: 'eur',
                        product_data: {
                            name: organisation.name,
                        },
                        unit_amount: parseInt(organisation.montant + "00"),
                    }
                    ,
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${process.env.DOMAIN}/success.html`,
            cancel_url: `${process.env.DOMAIN}/cancel.html`,
        });

        if(organisation.promo_id == undefined){
            organisation.promo_id = null;
        }
        const organisationCreated = await organisationRepository.save( {organisation, commentary: session.id , user_id: organisationId});
        if (!organisationCreated){
            res.status(500);
        }
        res.redirect(303, session.url);
    }catch (e) {
        console.log(e);
        next(e);
    }
}

exports.updateOrganisation = async (req, res, next) => {
    try{
        const organisationId = parseInt(req.params.id);
        const organisation = req.body;
        const [organisationUpdated, _field] = await organisationRepository.update(organisationId, organisation);
        res.status(200).json({organisationUpdated});
    }catch (e) {
        console.log(e);
        next(e);
    }
}

exports.deleteOrganisation = async (req, res, next) => {
    try{
        const organisationId = parseInt(req.params.id);
        const [organisation, _field] = await organisationRepository.delete(organisationId);
        res.status(200).json({organisation});
    }catch (e) {
        console.log(e);
        next(e);
    }
}
