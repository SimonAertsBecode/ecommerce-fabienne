import CryptoJS from 'crypto-js';

interface userInt {
   username: string;
   email?: string;
   password: string;
   _doc?: any;
}

export class AuthUtils {
   removePassword(user: userInt) {
      const { password, ...others } = user._doc;
      return others;
   }

   encryptPassword(password: string) {
      return CryptoJS.AES.encrypt(password, process.env.PASSWORD_SECRET!).toString();
   }
}

export const useAuthUtils = new AuthUtils();
