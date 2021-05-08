//  const Numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
//   const Names = ["Aaran", "Aaren", "Aodeba","Zaid", "Zain", "Zaine", "Zaineddine", "Zainedin", "Zak", "Zakaria", "Zakariya", "Zakary", "Zaki", "Zakir", "Zakk", "Zamaar", "Zander", "Zane", "Zarran", "Zayd", "Zayn", "Zayne", "Ze", "Zechariah", "Zeek", "Zeeshan", "Zeid", "Zein", "Zen", "Zendel", "Zenith", "Zennon", "Zeph", "Zerah", "Zhen", "Zhi", "Zhong", "Zhuo", "Zi", "Zidane", "Zijie", "Zinedine", "Zion", "Zishan", "Ziya", "Ziyaan", "Zohaib", "Zohair", "Zoubaeir", "Zubair", "Zubayr", "Zuriel"]
//   const Symbols = ["#", "£", "@", "%", "?", "!", "+", "$", "-", "*"]
//   const RandomName = Names[Math.floor(Math.random() * Names.length)];
//   const RandomNumber = Numbers[Math.floor(Math.random() * Numbers.length)];
//   const RandomNumber2 = Numbers[Math.floor(Math.random() * Numbers.length)];
//   const RandomSymbol = Symbols[Math.floor(Math.random() * Symbols.length)];
//   const RandomSymbol2 = Symbols[Math.floor(Math.random() * Symbols.length)];
//   const RandomSymbol3 = Symbols[Math.floor(Math.random() * Symbols.length)];
//   const RandomSymbol4 = Symbols[Math.floor(Math.random() * Symbols.length)];
//   const Password = `${RandomNumber2}${RandomSymbol}${RandomName}${RandomNumber}${RandomSymbol4}`
//   const Password2 = `${RandomNumber2}${RandomSymbol2}${RandomName}${RandomSymbol3}${RandomSymbol4}`
//   const Password3 = `${RandomNumber}${RandomNumber2}${RandomName}${RandomNumber}${RandomSymbol4}`
//   const Password4 = `${RandomSymbol2}${RandomSymbol3}${RandomName}${RandomNumber2}${RandomNumber}`
//   const Passwords = [Password, Password2, Password3, Password4]
//   const GeneratedPassword = Passwords[Math.floor(Math.random() * Passwords.length)];
//   const GeneratedPasswordToLowerCase = GeneratedPassword.toLowerCase()
//   /* Print The Passwords*/
//   console.log(GeneratedPassword)
//   console.log(GeneratedPasswordToLowerCase)



console.log( '//--------------------------------------------------------------OR-------------------------------------------------------------------------' );

function generatePassword() {
  const length = 8;
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let retVal = "";
  for ( let i = 0, n = charset.length; i < length; ++i ) {
    retVal += charset.charAt( Math.floor( Math.random() * n ) );
  }
  return retVal;
}
generatePassword( 'test' );

for ( let i = 0; i < 20; i++ ) {


  console.log( 'generatePassword(): ', generatePassword( 'test' ) );
}
console.log( '//--------------------------------------------------------------OR-------------------------------------------------------------------------' );




function password_generator( len ) {
  const length = ( len ) ? ( len ) : ( 10 );
  const string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
  const numeric = '0123456789';
  const punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  let password = "";
  let character = "";
  const crunch = true;
  while ( password.length < length ) {
    entity1 = Math.ceil( string.length * Math.random() * Math.random() );
    entity2 = Math.ceil( numeric.length * Math.random() * Math.random() );
    entity3 = Math.ceil( punctuation.length * Math.random() * Math.random() );
    hold = string.charAt( entity1 );
    hold = ( password.length % 2 == 0 ) ? ( hold.toUpperCase() ) : ( hold );
    character += hold;
    character += numeric.charAt( entity2 );
    character += punctuation.charAt( entity3 );
    password = character;
  }
  password = password.split( '' ).sort( () => {
    return 0.5 - Math.random()
  } ).join( '' );
  return password.substr( 0, len );
}

console.log( password_generator() );




console.log( '//--------------------------------------------------------------OR-------------------------------------------------------------------------' );


function generatePass( pLength ) {
  const keyListAlpha = "abcdefghijklmnopqrstuvwxyz";
  const keyListInt = "123456789";
  const keyListSpec = "!@#_";
  let password = '';
  let len = Math.ceil( pLength / 2 );
  len = len - 1;
  const lenSpec = pLength - 2 * len;

  for ( i = 0; i < len; i++ ) {
    password += keyListAlpha.charAt( Math.floor( Math.random() * keyListAlpha.length ) );
    password += keyListInt.charAt( Math.floor( Math.random() * keyListInt.length ) );
  }

  for ( i = 0; i < lenSpec; i++ )
    password += keyListSpec.charAt( Math.floor( Math.random() * keyListSpec.length ) );

  password = password.split( '' ).sort( () => {
    return 0.5 - Math.random()
  } ).join( '' );

  return password;
}





console.log( '//--------------------------------------------------------------OR-------------------------------------------------------------------------' );
