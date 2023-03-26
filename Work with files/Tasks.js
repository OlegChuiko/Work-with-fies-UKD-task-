const fs = require('fs');

//Читання з файлу
function ReadFromFile(file){

    fs.readFile(file, 'utf8', (err, data) => {
        if(err) throw err;
        console.log(data);
    });

}

//Створення файлу
function CreateFile(file){

    fs.open(file, 'w', (err) => {
        if(err) throw err;
        console.log('File created');
    });
    
}

//Добавляння контенту
function AddContent (file, content){
    fs.appendFileSync(file, content, () => {
    });
}

//Видалення файлу
function DeleteFile(file) {
    try {
        fs.unlinkSync(file);
        console.log ('The file has been deleted');
    }
    catch (error) {
        console.log ('File not found')
    }
}

//Переміщення файлу
function MoveFile(from, where){
    try {
        fs.renameSync(from, where);
        console.log('the file has been moved');
     }
     catch (error) {
        console.log ('error');
     }
 }








