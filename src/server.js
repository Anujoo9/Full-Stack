const { port } = require('./configs');
const Database = require('./data-source');
const app = require('./app');

(async () => {
    try {
        await Database.connect();
        console.log('DB Connection Open!');
        app.listen(port, () => {
            console.log(`Server started at port ::: ${port}`);
        });
    } catch (err) {
        await Database.disconnect();
    }
})();
