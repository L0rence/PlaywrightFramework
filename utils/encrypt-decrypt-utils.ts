import CryptoJS from "crypto-js"


const secretKey  = process.env.SECRET_KEY ? process.env.SECRET_KEY : "";
export function encrypt_Data(data:string) {
    return CryptoJS.AES.encrypt(data,secretKey).toString();
}

export function decrypt_Data(encryptdata:string) {
    return CryptoJS.AES.decrypt(encryptdata,secretKey).toString(CryptoJS.enc.Utf8);
}