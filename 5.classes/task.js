class PrintEditionItem {
  #state;
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.#state = 100;
    this.type = null;
  }
  fix() {
    if (this.#state > 0 && this.#state < 100) {
      this.state = this.#state * 1.5;
    }
  }
  set state(state) {
    if (state < 0) {
      this.#state = 0;
    } else if (state > 100) {
      this.#state = 100;
    } else {
      this.#state = state;
    }
  }
  get state() {
    return this.#state;
  }
}
class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }
  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] == value) {
        return this.books[i];
      }
    }
    return null;
  }
  giveBookByName(bookName) {
    let giveBook = null;
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name == bookName) {
        giveBook = this.books[i];
        this.books.splice(i,1);
      }
    }
    return giveBook;
  }
}

class Student {
  constructor(name) {
    this.name = name;
    this.marksForSubjects = {};
  }
  addMark(mark, subject) {
    if (mark <= 5 && mark >= 1) {
      if (!this.marksForSubjects[subject]) {
        this.marksForSubjects[subject] = [];
      }
      this.marksForSubjects[subject].push(mark);
    } else {
      console.log("Ошибка, оценка должна быть числом от 1 до 5");
    }
  }
  getAverageBySubject(subject) {
    if (this.marksForSubjects.hasOwnProperty(subject)) {
      let sum = 0;
      for (let i = 0; i < this.marksForSubjects[subject].length; i++) {
        sum += this.marksForSubjects[subject][i];
      }
      return sum / this.marksForSubjects[subject].length;
    } else {
      console.log("Несуществующий предмет");
    }
  }
  getAverage() {
    let sum = 0,
      marksLenght = 0;

    for (let key in this.marksForSubjects) {
      console.log(key);
      this.marksForSubjects[key].forEach((element) => {
        sum += element;
        marksLenght++;
      });
    }

    return sum / marksLenght;
  }
  exclude(reason) {
    delete this.marksForSubjects;
    this.excluded = reason;
  }
}
