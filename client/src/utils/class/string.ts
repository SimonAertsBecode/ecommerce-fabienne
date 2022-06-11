export class StringManipulation {
   capitalizeFirstLetter(string: string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
   }
}

export const useStringManipulation = new StringManipulation();
