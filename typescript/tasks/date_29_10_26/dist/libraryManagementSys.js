"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MembersLimit;
(function (MembersLimit) {
    MembersLimit[MembersLimit["Basic"] = 3] = "Basic";
    MembersLimit[MembersLimit["Premium"] = 10] = "Premium";
    MembersLimit[MembersLimit["Student"] = 5] = "Student";
})(MembersLimit || (MembersLimit = {}));
var MemberShipType;
(function (MemberShipType) {
    MemberShipType["basic"] = "Basic";
    MemberShipType["premium"] = "Premium";
    MemberShipType["student"] = "Student";
})(MemberShipType || (MemberShipType = {}));
class Library {
    books = [];
    member = [];
    addBook(book) {
        let bookExist = this.books.find((currbook) => currbook.id === book.id);
        if (bookExist) {
            console.log('book exist already');
        }
        else {
            this.books.push(book);
        }
    }
    addMember(mem) {
        let memExist = this.member.find((currMem) => currMem.id === mem.id);
        if (!memExist) {
            this.member.push(mem);
        }
        else {
            console.log('mem already exist !!');
        }
    }
    removeBook(idNumber) {
        let existBook = this.books.findIndex((currbook) => currbook.id === idNumber);
        if (existBook !== -1) {
            this.books.splice(existBook, 1);
        }
        else {
            console.log('book not exist');
        }
    }
    searchByAuthor(auth) {
        let authExist = this.books.filter((book) => book.author.toLowerCase() === auth.toLowerCase());
        if (authExist.length > 0) {
            return authExist.map((book) => book);
        }
        else {
            return 'author not exist';
        }
    }
    searchByTitle(title) {
        let titleExist = this.books.filter((book) => book.title.toLowerCase() === title.toLowerCase());
        if (titleExist.length > 0) {
            return titleExist.map((book) => book);
        }
        else {
            return 'title not exist';
        }
    }
    getAvailableBooks(isbn) {
        let isBookAvail = this.books.find((currBook) => currBook.isbn === isbn);
        if (isBookAvail) {
            return isBookAvail.isAvailble;
        }
        else {
            return false;
        }
    }
    borrowBook(memberId, bookId) {
        let getMem = this.member.find((currMem) => currMem.id === memberId);
        let limit;
        if (!getMem) {
            throw new Error('memberId not exist');
        }
        let getBook = this.books.find((currBook) => currBook.id === bookId);
        if (!getBook) {
            throw new Error('bookid is not exist');
        }
        limit = MembersLimit[getMem.membershipType];
        if (getMem.borrowedBook.length >= limit) {
            throw new Error('borrowed limit reached');
        }
        getMem.borrowedBook.push(getBook);
        getBook.isAvailble = false;
    }
    returnBook(memberId, bookId) {
        let getMem = this.member.find((currMem) => currMem.id === memberId);
        if (!getMem) {
            throw new Error('memberId not exist');
        }
        let getBorrowedBook = getMem.borrowedBook.findIndex((brb) => brb.id === bookId);
        if (getBorrowedBook === -1) {
            throw new Error('bookid is not exist');
        }
        getMem.borrowedBook.slice(getBorrowedBook, 1);
    }
    getBook() {
        console.log(this.books);
    }
    getMember() {
        console.log(this.member);
    }
}
const booksData = [
    {
        id: 1,
        title: "Atomic Habits",
        author: "James Clear",
        isbn: 9780735211292,
        genre: "Self-Help",
        isAvailble: true,
        publishedYear: 2018
    },
    {
        id: 2,
        title: "The Psychology of Money",
        author: "Morgan Housel",
        isbn: 9780857197689,
        genre: "Finance",
        isAvailble: true,
        publishedYear: 2020
    },
    {
        id: 3,
        title: "Clean Code",
        author: "Robert C. Martin",
        isbn: 9780132350884,
        genre: "Technology",
        isAvailble: true,
        publishedYear: 2008
    },
    {
        id: 4,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        isbn: 9781612680194,
        genre: "Finance",
        isAvailble: true,
        publishedYear: 1997
    },
    {
        id: 5,
        title: "The Alchemist",
        author: "Paulo Coelho",
        isbn: 9780061122415,
        genre: "Fiction",
        isAvailble: true,
        publishedYear: 1988
    },
    {
        id: 6,
        title: "Deep Work",
        author: "Cal Newport",
        isbn: 9781455586691,
        genre: "Productivity",
        isAvailble: true,
        publishedYear: 2016
    },
    {
        id: 7,
        title: "Ikigai",
        author: "Hector Garcia",
        isbn: 9780143130727,
        genre: "Self-Help",
        isAvailble: true,
        publishedYear: 2016
    }
];
const membersData = [
    {
        id: 101,
        name: "Vatsal Makadia",
        email: "vatsal@example.com",
        membershipType: MemberShipType.basic,
        borrowedBook: []
    },
    {
        id: 102,
        name: "Kavya Patel",
        email: "kavya@example.com",
        membershipType: MemberShipType.premium,
        borrowedBook: []
    },
    {
        id: 103,
        name: "Krishav Shah",
        email: "krishav@example.com",
        membershipType: MemberShipType.student,
        borrowedBook: []
    }
];
let library = new Library();
library.addBook(booksData[0]);
library.getBook();
library.addMember(membersData[0]);
library.getMember();
console.log(library.getAvailableBooks(9780735211292));
console.log(library.borrowBook(101, 1));
//# sourceMappingURL=libraryManagementSys.js.map