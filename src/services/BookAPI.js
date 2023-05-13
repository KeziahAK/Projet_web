const getBookData = async function() {
    const response = await fetch("https://openlibrary.org/subjects/love.json")
    
    if (response.status == 200) {
        return response.json()
        
    } else {
    new Error(response.statusText)
    }
}

const getBookDataAnimal = async function() {
    const response = await fetch("https://openlibrary.org/subjects/Animal.json")
    
    if (response.status == 200) {
        return response.json()
        
    } else {
    new Error(response.statusText)
    }
}

const getBookDataAction = async function() {
    const response = await fetch("https://openlibrary.org/subjects/action.json")
    
    if (response.status == 200) {
        return response.json()
        
    } else {
    new Error(response.statusText)
    }
}

const getBookDataTrend = async function() {
    const response = await fetch("https://openlibrary.org/trending/now.json")
    
    if (response.status == 200) {
        return response.json()
        
    } else {
    new Error(response.statusText)
    }
}

const getBookDataFantastic = async function() {
    const response = await fetch("https://openlibrary.org/subjects/fantastic.json")
    
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

const getAuthorImage = async function(author_id) {
    const response = await fetch("https://openlibrary.org/"+author_id+".json")
    
    if (response.status == 200) {
        return response.json()
        
    } else {
    new Error(response.statusText)
    }
}

const getDetails = async function(id) {
    const response = await fetch("https://openlibrary.org/works/"+id+".json")
    
    if (response.status == 200) {
        return response.json()
        
    } else {
    new Error(response.statusText)
    }
}

export{getBookData,getImage, getAuthorImage,getBookDataFantastic, getBookDataAction, getBookDataTrend, getBookDataAnimal, getDetails};
