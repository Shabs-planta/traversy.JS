// Try and Catch block: 
const user = {email: 'shabsplanta@gmail.com'}

try {
   // // Produced a ReferencesError:
   // myFunction();

   // // produced a TypeError:
   // null.myFunction();

   // // produced a syntaxError.
   // console.log(eval('2+2'));
   // console.log(eval('"Hello There"'));
   // eval('hello there')

   // // produced a URIError.
   // decodeURIComponent('%');

   // creating Error
   if(!user.name) {
      // throw 'CError: User does not have a name.'
      throw new SyntaxError('User has no name');
   }

}catch(err) {
   // console.log(err);
   // console.log(err.message);
   // console.log(err.name);
   // // to check to see if type of error is true/false
   // console.log(err instanceof ReferenceError);
   // console.log(err instanceof TypeError);
   // // formarting the Error sign
   // console.log(`${err.name}: IS NULL STUPID!!!`);
   console.log(`CreatedError: ${err.message}`);
}finally {
   console.log('Finally runs reguardless of results...');
}

console.log('ReferencesError: Programming continue...')