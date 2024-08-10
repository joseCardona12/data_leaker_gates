export default class UtilController{
    static verifyFields(...fields: string[]):boolean{
        return fields.every(field=>field);
    }

    static async fetchApi(url:string, options:{}):Promise<object | undefined>{
        try{
            const data = await fetch(url,options);
            return data.json();
        }catch(error){
            console.log({message: "Errro to use fetchApi", error: error})
        }
    }
}