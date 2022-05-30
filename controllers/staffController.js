const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const Staff = require('../schemas/staff-schema')


//register staff member
const registerStaff = asyncHandler(async (req, res) => {
    const { name, staffId, email, password, role } = req.body

    const staffExists = await Staff.findOne({email})
    if(staffExists){
        res.status(400)
        throw new Error('User Already Exists')
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const staff = await Staff.create({
        name, 
        staffId,
        email, 
        password: hashedPassword, 
        role
    })
})

exports.registerStaff = registerStaff;