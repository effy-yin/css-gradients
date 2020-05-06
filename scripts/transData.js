const fs = require('fs');
fs.readFile('./gradients_.json', 'utf8', (err, data) => {
  if (err) throw err;
  let infos = JSON.parse(data);
  infos.map(info => {
    const nameArr = info.name.split(' ');
    info.class = nameArr[0].toLowerCase() + (nameArr.length > 1 ? '_' + nameArr[1].toLowerCase() : '') + (nameArr.length > 2 ? '_' + nameArr[2].toLowerCase() : '');
    return info;
  });

  fs.writeFile('./gradients.json', JSON.stringify(infos, null, 2), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

});
