
import crypotojs from "crypto-js";

export default class CommonUtils{

    private secretKey:string;

    constructor(){
        this.secretKey = process.env.SECRET_KEY ? process.env.SECRET_KEY : "";
        if(process.env.SECRET_KEY){
            this.secretKey = process.env.SECRET_KEY;
        }else{
            throw new Error("Secret key is not defined in the environment variables");
        }
    }
   /**
    * Privide encrypted dat from string data
    * @param data 
    * @returns encrypted data   
    */
    public encryptData(data:string){
        const encryptedData = crypotojs.AES.encrypt(data,this.secretKey).toString();
        console.log(`Encrypted data is : ${encryptedData}`);
        return encryptedData;
    }

    /**
     * Provide decrypted data from encrypted data
     * @param encryptdata 
     * @returns decrypted data
     */
    public decryptData(encryptdata:string){
        const descyptedData = crypotojs.AES.decrypt(encryptdata,this.secretKey).toString(crypotojs.enc.Utf8);
        return descyptedData;
    }
}  
