import convert from 'xml-js';
import fs from 'fs';
import { GameName, Games, Goal, Language, Languages } from './common';
import { parseJson } from './parseJson';

const jsons: Record<GameName, Record<Language, string>> = Games.reduce((acc, game) => {
  acc[game] = Languages.reduce((acc, language) => {
    acc[language] = '';
    return acc;
  }, {} as Record<Language, string>);
  return acc;
}, {} as Record<GameName, Record<Language, string>>);

// Go through all files in /xml folder recursively and convert them to JSON in /json folder
const convertXMLtoJSON = (dir: string) => {
  const promises = [];

  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = `${dir}/${file}`;
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      convertXMLtoJSON(filePath);
    } else {
      // Ignore non-XML files
      if (!filePath.endsWith('.xml')) return;
      console.log(filePath);

      // Read XML file
      const fileContent = fs.readFileSync(filePath, 'utf8');

      const splitFilePath = filePath.split('/');
      const game = splitFilePath[splitFilePath.length - 2] as GameName;
      const language = splitFilePath[splitFilePath.length - 1].split('.')[0] as Language;

      // Convert XML to JSON
      const json = convert.xml2json(fileContent);

      // Store JSON in memory
      jsons[game][language] = json;
    }
  };
};

convertXMLtoJSON('./src/xml');

Games.forEach((game) => {
  const result: Record<string, Goal> = {};

  console.log(`Parsing ${game}`);

  if (jsons[game].en === '') {
    console.log('No EN file found, skipping game...');
    return;
  }

  parseJson(result, jsons[game].fr, 'fr');
  parseJson(result, jsons[game].en, 'en');
  parseJson(result, jsons[game].de, 'de');
  parseJson(result, jsons[game].es, 'es');

  // Create subfolder if needed
  if (!fs.existsSync('./src/json')) {
    fs.mkdirSync('./src/json');
  }

  // Write JSON file
  fs.writeFileSync(`./src/json/${game}.json`, JSON.stringify(result, null, 2));
});

