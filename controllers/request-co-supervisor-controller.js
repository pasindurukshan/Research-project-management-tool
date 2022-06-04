const RequestCoSupervisor = require('../schemas/request-co-supervisor-schema')


const createRequestCoSupervisor = async (req, res) => {
  if (req.body) {
    const { conference } = req.body;

    const requestCoSupervisor = new RequestCoSupervisor(req.body);

    try {
      const data = await requestCoSupervisor.save();

      res.status(200).send({ data: data });
    } catch (error) {
      console.error(error)
    }


  }
}


const getSingleRequestCoSupervisor = async (req, res) => {
  await RequestCoSupervisor.find({})
    .then(data => {
      res.status(200).send({ data: data });
    })
    .catch(error => {
      res.status(500).send({ error: error.message });
    });
}



const updateRequestCoSupervisor = async function (req, res) {
  try {
    
    let user = await RequestCoSupervisor.findById(req.params.id);
    if (!user) return res.status(400).send("User Not Found");
    user.studentId1 = req.body.studentId1
    const newUser = await user.save()
 
    res.status(200).send({ data: newUser });
  } catch (error) {
    console.error("Error (Update User) : ", error);
    res.status(500).send(error);
  }
};




module.exports = {
  createRequestCoSupervisor,
  getSingleRequestCoSupervisor,
  updateRequestCoSupervisor,
};