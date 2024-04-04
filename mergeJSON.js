const fs = require('fs');

// Função para mesclar dois objetos JSON
function mergeJSONObjects(json1, json2) {
    return { ...json1, ...json2 };
}

// Carrega os arquivos JSON
const file1 = fs.readFileSync('arquivo1.json');
const file2 = fs.readFileSync('arquivo2.json');

// Converte os arquivos JSON para objetos JavaScript
const json1 = JSON.parse(file1);
const json2 = JSON.parse(file2);

// Mescla os objetos JSON
const mergedJson = mergeJSONObjects(json1, json2);

// Salva o JSON mesclado em um novo arquivo
fs.writeFileSync('merged.json', JSON.stringify(mergedJson, null, 2));
console.log('Arquivos JSON mesclados com sucesso!');
