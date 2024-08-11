export default class UtilController{
    static verifyFields(...fields: string[]):boolean{
        return fields.every(field=>field);
    }

    static async fetchApi(url:string, options:{}):Promise<object | undefined>{
        try{
            const response = await fetch(url,options);
            if(!response.ok){
                throw new Error("Error with the response fetch")
            }
            const data = await response.json();
            return data;
        }catch(error){
            console.log({message: "Errro to use fetchApi", error: error});
            return undefined;
        }
    }
}