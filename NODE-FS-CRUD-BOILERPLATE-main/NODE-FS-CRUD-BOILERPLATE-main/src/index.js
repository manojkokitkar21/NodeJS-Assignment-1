const fs = require('fs/promises')
const path = require('path');

const myFileWriter = async (fileName, fileContent) => {
  const filePath = path.join(__dirname, fileName);
  await fs.writeFile(filePath, fileContent);
};

const myFileReader = async (fileName) => {
  const filePath = path.join(__dirname, fileName);
  const fileContent = await fs.readFile(filePath, 'utf-8');
  return fileContent;
};

const myFileUpdater = async (fileName, fileContent) => {
  const filePath = path.join(__dirname, fileName);
  const existingContent = await fs.readFile(filePath, 'utf-8');
  await fs.writeFile(filePath, existingContent + fileContent);
};

const myFileDeleter = async (fileName) => {
  const filePath = path.join(__dirname, fileName);
  await fs.unlink(filePath);
};





module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }