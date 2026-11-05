interface Book {
  readonly id: number;
  title: string;
  author: string;
  readonly isbn: number;
  genre: string;
  isAvailble: boolean;
  publishedYear: number;
}

enum MembersLimit {
    'Basic' = 3,
    'Premium' = 10,
    'Student' = 5
}

enum MemberShipType {
  basic = "Basic",
  premium = "Premium",
  student = "Student",
}
interface Member {
  readonly id: number;
  name: string;
  email: string;
  membershipType: MemberShipType;
  borrowedBook: Book[];
}

interface EBook extends Book {
  fileSize: string;
  format: string;
}

interface AudioBook extends Book {
  duration: string;
  narrator: string;
}

interface ILibrary {
  addBook(book : Book):void ;
  addMember(mem:Member):void ;
  removeBook(idNumber : number):void;
  searchByTitle(title: string ):Book[] | string;
  searchByAuthor(auth : string ):Book[] | string;
  getAvailableBooks(isbn : number ):boolean;
  borrowBook(memberId : number,bookId : number):void;
  returnBook(memberId : number , bookId : number):void;
}

class Library implements ILibrary {
    private books: Book[] = []
    private member : Member[] = []

    public addBook(book: Book): void {
        let bookExist = this.books.find((currbook) => currbook.id === book.id )
        if(bookExist){
            console.log('book exist already')
        }
        else{
            this.books.push(book)
        }
    }

    public addMember(mem: Member): void {
        let memExist = this.member.find((currMem)=> currMem.id === mem.id)
        if(!memExist){
            this.member.push(mem)
        }
        else {
            console.log('mem already exist !!')
        }
    }

    public removeBook(idNumber: number): void {
        let existBook = this.books.findIndex((currbook) => currbook.id === idNumber );
        if(existBook !== -1){
            this.books.splice(existBook,1)
        }
        else{
            console.log('book not exist')    
        }
    }

    public searchByAuthor(auth: string): Book[] | string {
        let authExist = this.books.filter((book)=>book.author.toLowerCase() === auth.toLowerCase())
        if(authExist.length > 0){
            return authExist.map((book) => book)
        }
        else{
            return 'author not exist';
        }
    }

    public searchByTitle(title: string): Book[] | string{
        let titleExist = this.books.filter((book)=>book.title.toLowerCase() === title.toLowerCase() )
        if(titleExist.length > 0){
            return titleExist.map((book) => book)
        }
        else{
            return 'title not exist';
        }
    }

    public getAvailableBooks(isbn: number): boolean {
        let isBookAvail = this.books.find((currBook) => currBook.isbn === isbn)
        if(isBookAvail){
            return isBookAvail.isAvailble
        }
        else {
            return false
        }
    }

    public borrowBook(memberId: number, bookId: number): void {
        let getMem = this.member.find((currMem)=> currMem.id === memberId)
        let limit : number ;
        if(!getMem){
            throw new Error('memberId not exist')
        }
        
        let getBook = this.books.find((currBook) => currBook.id === bookId)
        if(!getBook){
            throw new Error('bookid is not exist')
        }
        limit = MembersLimit[getMem.membershipType]
        if(getMem.borrowedBook.length >= limit){
            throw new Error('borrowed limit reached')
        }
        getMem.borrowedBook.push(getBook)
        getBook.isAvailble = false
    }

    public returnBook(memberId: number, bookId: number): void {
        let getMem = this.member.find((currMem)=> currMem.id === memberId)
        if(!getMem){
            throw new Error('memberId not exist')
        }
        
        let getBorrowedBook = getMem.borrowedBook.findIndex((brb) => brb.id === bookId)       
        
        if(getBorrowedBook === -1){
            throw new Error('bookid is not exist')
        }
        getMem.borrowedBook.slice(getBorrowedBook,1)
    }
    public getBook():void{
        console.log(this.books)
    }
    public getMember():void{
        console.log(this.member)
    }
    
}

const booksData: Book[] = [
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

const membersData: Member[] = [
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
let library = new Library()
library.addBook(booksData[0] as Book)
library.getBook()   
library.addMember(membersData[0] as Member)
library.getMember()
console.log(library.getAvailableBooks(9780735211292))
console.log(library.borrowBook(101,1))
