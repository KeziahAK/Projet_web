

    // return [
    //     {id:0,
    //     key: "OL23919A",
    //     text: [],
    //     type: "author",
    //     name: "J. K. Rowling",
    //     alternate_names: [],
    //     birth_date: "31 July 1965",
    //     top_work: "Harry Potter and the Philosopher's Stone",
    //     work_count: 162,
    //     top_subjects: [],
    //     _version_: 1702166143068799000,
    //     image: ""}
        
    // ]

const getBookData = async function() {
    const response = await fetch("https://openlibrary.org/subjects/love.json")
    if (response.status == 200) {
        return response.json()
        
    } else {
    new Error(response.statusText)
    }
}

export{getBookData};