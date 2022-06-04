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
  await RequestCoSupervisor.find({})
    .then(data => {
      res.status(200).send({ data: data });
    })
    .catch(error => {
      res.status(500).send({ error: error.message });
    });
}

// const updateRequestCoSupervisor = async (req, res) => {
//   console.log(req.body)
//   if (!req.body) {
//     return res.status(400).send({
//       message: "Data to update can not be empty!"
//     });
//   }
//   await RequestCoSupervisor.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
//     .then(data => {
//       if (!data) {
//         res.status(400).send({ message: 'cannot update conference' });
//       } else {
//         res.status(200).send({ data: data });
//         console.log('updated', data)
//       }

//     })
//     .catch(error => {
//       res.status(500).send({ error: error.message });
//     });

// }


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