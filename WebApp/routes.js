import express from 'express'
import { createOrUpdate, deleteUserById, getUserById, readAllUsers } from './db.js'

const router = express.Router()

// // READ ALL group3DDBtable
// router.get('/group3DDBtable', async (req, res) => {
//     const { success, data } = await readAllUsers()

//     if (success) {
//         const latestData = data.length > 0 ? data[0] : null;
//         return res.render('./home.ejs', { data: latestData });
//         res.render("./history.ejs", { data });
//     }
//     return res.status(500).json({ success: false, messsage: "Error" })
// })
// READ ALL group3dynamodbtable
router.get('/group3DDBtable', async (req, res) => {
    try {
        const { success, data } = await readAllUsers()

        if (success) {
            return res.render("./home.ejs", { data: data[data.length - 1] })
        }
        return res.status(500).json({ success: false, messsage: "Error" })
    }
    catch (e) {
        console.log(e)
    }
})
// READ ALL group3dynamodbtable
router.get('/history', async (req, res) => {
    try {
        const { success, data } = await readAllUsers()

        if (success) {
            return res.render("./history.ejs", { data: data.slice(0, 50) })
        }
        return res.status(500).json({ success: false, messsage: "Error" })
    }
    catch (e) {
        console.log(e)
    }
})

router.get('/group3DDBtable', async (req, res) => {
    try {
        const { success, data } = await readAllUsers()

        if (success) {
            return res.render("./history.ejs", { data: data[data.length - 1] })
        }
        return res.status(500).json({ success: false, messsage: "Error" })
    }
    catch (e) {
        console.log(e)
    }
})

// // Get group3dynamodbtable by ID
// router.get('/group3DDBtable/:id', async (req, res) => {
//     const { id } = req.params
//     const { success, data } = await getUserById(id)
//     console.log(data)
//     if (success) {
//         return res.json({ success, data })
//     }

//     return res.status(500).json({ success: false, message: "Error" })
// })


// Create group3dynamodbtable
router.post('/group3DDBtable', async (req, res) => {
    const { success, data } = await createOrUpdate(req.body)

    if (success) {
        return res.json({ success, data })
    }

    return res.status(500).json({ success: false, message: 'Error' })
})


// Update group3dynamodbtable by ID
router.put('/group3DDBtable/:id', async (req, res) => {
    const user = req.body
    const { id } = req.params
    user.id = parseInt(id)

    const { success, data } = await createOrUpdate(group3dynamodbtable)

    if (success) {
        return res.json({ success, data })
    }

    return res.status(500).json({ success: false, message: "Error" })
})


// // Delete group3dynamodbtable by Id
// router.delete('/group3DDBtable/:id', async (req, res) => {
//     const { id } = req.params
//     const { success, data } = await deleteUserById(id)
//     if (success) {
//         return res.json({ success, data })
//     }
//     return res.status(500).json({ success: false, message: 'Error' })
// })




export default router