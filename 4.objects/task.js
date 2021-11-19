function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;
}
Student.prototype.addMark = function(mark) {
    if (this.marks === undefined) {
        this.marks = [];
        this.marks.push(mark);
    } else {
        this.marks.push(mark);
    }
}

Student.prototype.addMarks = function(...arrMarks) {
    arrMarks.forEach(element => { this.addMark(element) });
}

Student.prototype.getAverage = function() {
    return this.marks.reduce((previous, current) => { return previous + current; }) / this.marks.length;
}

Student.prototype.exclude = function(reason) {
        delete this.subject;
        delete this.marks;
        this.excluded = reason;
    }
    // ваш код для остальных методов
