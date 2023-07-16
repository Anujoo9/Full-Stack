const mongoose = require('mongoose');
const {
    dbUrl, minPoolSize, maxPoolSize, selectionTimout,
} = require('./configs/database');

async function connect() {
    try {
        await mongoose.connect(dbUrl, {
            minPoolSize,
            maxPoolSize,
            serverSelectionTimeoutMS: selectionTimout,
        });
    } catch (err) {
        console.log(err);
    }
}

async function disconnect() {
    try {
        await mongoose.disconnect();
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    connect,
    disconnect,
};
