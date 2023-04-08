const getBookData = async function() {
    const response = await fetch("https://openlibrary.org/subjects/love.json")
    
    if (response.status == 200) {
        return response.json()
        
    } else {
    new Error(response.statusText)
    }
}


const getAuthorData = async function() {
    const response = await fetch("https://openlibrary.org/search/authors.json")
    
    if (response.status == 200) {
        return response.json()
        
    } else {
    new Error(response.statusText)
    }
}

const getImage = async function(id) {
    const response = await fetch("https://covers.openlibrary.org/b/id/"+id+"-M.jpg")
    
    if (response.status == 200) {
        return response.json()
        
    } else {
    new Error(response.statusText)
    }
}

const getAuthorImage = async function(id) {
    const response = await fetch("https://openlibrary.org/"+id+".json")
    
    if (response.status == 200) {
        return response.json()
        
    } else {
    new Error(response.statusText)
    }
}

export{getBookData,getImage, getAuthorData, getAuthorImage};