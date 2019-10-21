const db = require('./conn');

class Executive {
    constructor(id,app,ranks){
        this.id = id;
        this.app = app;
        this.ranks = ranks;
    }

    static async getAllapptopics() {
        
        try{
            const response = await db.any(`SELECT app_rank.id,
                            app_rank.app,
                            app_rank.stdscore,
                            ranks.ranks 
                            FROM app_rank INNER JOIN ranks 
                            on app_rank.id = ranks.id 
                            ORDER BY app_rank.id;`
                );
            
            return response;

        } catch(error){
            return error.message;
        }
    }

    static async getAllranks() {

        try{
            const response = await db.any(`SELECT * FROM ranks;`);
            //console.log("response ", response);
            return response;
        }catch(error){
            return error.message;
        }
    }



static async update(app,rank){
        try{
            const response = await db.result(`UPDATE app_rank SET stdscore = ${rank} where app_rank.app = '${app}'; `);
            //console.log("response: ", response);
            return response;
        }catch(error){
            return error.message;
        }
    }
    
}

module.exports = Executive;