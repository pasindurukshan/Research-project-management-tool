const RequestCoSupervisor = require('../schemas/request-co-supervisor-schema')
//const Conference = require('../schemas/conference-schema')

const createRequestCoSupervisor = async (req, res) => {
    if (req.body) {
        const { conference } = req.body;

        const requestCoSupervisor = new RequestCoSupervisor(req.body);

        try {
            const data = await requestCoSupervisor.save();
           // await Conference.updateOne({ _id: conference }, { $addToSet: { workshop: workshop._id } }, (err, res) => { });
            res.status(200).send({ data: data });
        } catch (error) {
            console.error(error)
        }


    }
}


const getSingleRequestCoSupervisor = async (req, res) => {
    await RequestCoSupervisor.findById(req.params.id)
    .then(data => {
      res.status(200).send({ data: data });
    })
    .catch(error => {
      res.status(500).send({ error: error.message });
    });
  } 

module.exports = {
    createRequestCoSupervisor,
    getSingleRequestCoSupervisor,
};