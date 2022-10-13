const fs = require('fs')

class Repo {
    constructor(name) {
        this.fileName = name;

        try{
            fs.accessSync(this.fileName);
        }catch(err) {
            fs.writeFileSync(this.fileName, '[]');
        }
    }

    async addNew(newData) {
        const data = await fs.promises.readFile(this.fileName, {encoding: 'utf8'});
        const dataJson = JSON.parse(data);
        // Update session if user already exists
        for(let x in dataJson) {
            if(dataJson[x].username == newData.username)
            {
                dataJson[x].session = newData.session;
                await fs.promises.writeFile(this.fileName, JSON.stringify(dataJson,null,2));
                return;
            }
        }
        // Add user and session if none currently exist
        dataJson.push(newData);
        await fs.promises.writeFile(this.fileName, JSON.stringify(dataJson,null,2));
    }

    async verify(sessionId) {
        const data = await fs.promises.readFile(this.fileName, {encoding: 'utf8'});
        const dataJson = JSON.parse(data);

        for(let x in dataJson)
        {
            if(dataJson[x].session == sessionId) { 
                return true;
            }
        }
        return false;
    }
}

module.exports = new Repo('repository.json')