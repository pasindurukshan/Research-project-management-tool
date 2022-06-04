const Workshop = require('../schemas/workshop-schema')


const createWorkshop = async (req, res) => {
    if (req.body) {
        const { conference } = req.body;

        const workshop = new Workshop(req.body);

        try {
            const data = await workshop.save();
        
            res.status(200).send({ data: data });
        } catch (error) {
            console.error(error)
        }


    }
}


const getSingleWorkshop = async (req, res) => {
  await Workshop.find({})
    .then(data => {
      res.status(200).send({ data: data });
    })
    .catch(error => {
      res.status(500).send({ error: error.message });
    });
} 

module.exports = {
    createWorkshop,
    getSingleWorkshop
};