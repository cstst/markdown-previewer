export default input => {
  const lines = input.replace(/\n|[ ]{2,}/g, '<br>')
                     .split('<br><br>')
                     .map(line => '<p>' + line + '</p>');
  const newLines = lines.map((line, i) => {
    return line.replace(/<p><\/p>/, (i === 0 || i === lines.length - 1)? '' : '<br>')
  });
                        
  return newLines.join('');
}