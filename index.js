const me = {
    name: 'Natalia',
    age: 6,
    // hobby: 'танцы',
    hobby: 'чтение',
    favoriteSchoolSubject: 'история',
    favoritMeet: 'картошка',
} 

function studyAtSchool(obj) {
    if (obj.hobby === 'чтение'){
        obj.status = "отличник";
        obj.hobby = 'туризм';
        obj.favoritMeet = 'овощи'; 
    } 
    if (obj.hobby !== 'чтение') {
        obj.status = "троечник";
        obj.hobby = 'дискотека';
    }
    if (Math.floor(Math.random()*10)<8){
        obj.status = 'хорошист';
        obj.hobby = 'спорт';
    }
    return obj
}
function schoolAge (obj) {
    if (obj.status === 'троечник') {
       obj.age += 9; 
    } else {
      obj.age += 11;
    }
    return obj
}

function afterSchool(obj) {
    if (obj.status === 'отличник') {
            obj.grade = 'high education'
            obj.age += 5;
            obj.skill = 'english';
            obj.oppotunities = 10;
    } 
    if (obj.status === 'хорошист')
            obj.grade = 'high education'
            obj.age += 5;
            obj.skill = 'spanish';
            obj.oppotunities = 8;
    if (obj.status === 'троечник'){
            obj.age += 4;    
            obj.grade = 'middle';
            obj.skill = 'опыт работы';
            obj.oppotunities = 5;
            }
    return obj
}

function getBodyCondition(obj) {
    if (obj.favoritMeet !== 'картошка' || obj.hobby === 'спорт') {
        obj.bodyCondition = 'good';
    }
    return obj
}

getBodyCondition(afterSchool(schoolAge(studyAtSchool(me))));

for (let key in me) {
    console.log(key);
    console.log(me[key]);
}
