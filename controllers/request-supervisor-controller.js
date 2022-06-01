const RequestSupervisor = require('../schemas/request-supervisor-schema')
//const Conference = require('../schemas/conference-schema')

const createRequestSupervisor = async (req, res) => {
    if (req.body) {
        const { conference } = req.body;

        const requestSupervisor = new RequestSupervisor(req.body);

        try {
            const data = await requestSupervisor.save();
           // await Conference.updateOne({ _id: conference }, { $addToSet: { workshop: workshop._id } }, (err, res) => { });
            res.status(200).send({ data: data });
        } catch (error) {
            console.error(error)
        }


    }
}


const getSingleRequestSupervisor = async (req, res) => {
    await RequestSupervisor.findById(req.params.id)
    .then(data => {
      res.status(200).send({ data: data });
    })
    .catch(error => {
      res.status(500).send({ error: error.message });
    });
  } 

module.exports = {
    createRequestSupervisor,
    getSingleRequestSupervisor,
};