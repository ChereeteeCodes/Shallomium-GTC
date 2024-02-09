import {db, Tablename} from './db.config.js'

// This should create or Update group3-DDBtable
const createOrUpdate = async (data = {}) =>{
    const params = {
        TableName: Tablename,
        Item: data
    }

    try{
        await db.put(params).promise()
        return { success: true }
    } catch(error){
        return { success: false}
    }
}

// Read all group3-DDBtable
const readAllUsers = async()=>{
    const params = {
        TableName: Tablename
    }

    try{
        const { Items = [] } = await db.scan(params).promise()
        return { success: true, data: Items }

    } catch(error){
        return { success: false, data: null }
    }

}

// Read group3-DDBtable by ID
const getUserById = async (value, key = 'id') => {
    const params = {
        TableName: Tablename,
        Key: {
            [key]: parseInt(value)
        }
    }
    try {
        const { Item = {} } =  await db.get(params).promise()
        return { success: true, data: Item }
    } catch (error) {
        return {  success: false, data: null}        
    }
}

// Delete group3-DDBtable by ID
const deleteUserById = async(value, key = 'id' ) => { 
    const params = {
        TableName: Tablename,
        Key: {
            [key]: parseInt(value)
        }
    }
        
    try {
        await db.delete(params).promise()
        return {  success: true }

    } catch (error) {
        return{ success: false }
    }
}


export {
    createOrUpdate,
    readAllUsers,
    getUserById,
    deleteUserById
}