export default input => {

  const newMain = String.fromCharCode(0);
  
  /*
  if (input.match(/#{1,6} [A-Za-z]/g)) {
    const hNum = input.split('').filter(char => char === '#').length; 
    if (hNum < 7) {
      const heading = input.replace(/#{1,6} /g, `<h${hNum}>`);
      const newLine = heading.indexOf('\n');
      if (newLine === -1) {
        console.log(heading + `</h${hNum}>`)
      } else {
        console.log(heading.slice(0, newLine) + `</h${hNum}>`)
      }
    }
  }                      
  const newInput = 
         // separates sections that require a main wrapping tag(p, h1-6, ul, ol, pre, & blockquote) with a null character
    input.replace(/\n{2,}/g, newMain)
         // replaces space+space+line-feed with <br> tag
         .replace(/\s\s+\n/g, '<br>')
         // replaces 3 or more *,-, or _ on new ine with <hr> tag
         .replace(/(?<=\n|<br>)[-_*]{3,}/g, '<hr>')
         // replaces line-feed with space
         .replace(/\n/g, ' ')
         // splits sections previously separated by null character into separate strings to be wrapped in main wrapping tag
         .split(newMain);

  */       
  //
  const splitInput = input.split(/(?<=\n)(#{1,6} [A-Za-z0-9$!@#%^&*()-_+= ]{1,})|\n{2,}/g)
  return splitInput.filter(block => block !== undefined);
}