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
}

export const useAuthUtils = new AuthUtils();
