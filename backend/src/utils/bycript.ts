import bcrypt from "bcrypt";

export const encryptPassword = async(password: string): Promise<string> =>{
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

export const verifyPassword = async(password: string, passwordSave: string): Promise<boolean> =>{
    return await bcrypt.compare(password, passwordSave);
}