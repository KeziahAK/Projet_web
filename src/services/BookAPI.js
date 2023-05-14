// const getBookData = async function() {
//     const response = await fetch("https://openlibrary.org/subjects/love.json")
    
//     if (response.status == 200) {
//         return response.json()
        
//     } else {
//     new Error(response.statusText)
//     }
// }

const getBookData = async function(page) {
    const response = await fetch("https://openlibrary.org/search.json?subject=Love&page="+page+"")
      
    if (response.status == 200) {
      return response.json()
    } else {
      throw new Error(response.statusText)
    }
}



async function getAllBookData() {
    let books = []
  
    for (let page = 1; page <= 2; page++) {
      try {
        const bookData = await getBookData(page)
        books.push(...bookData.docs)
      } catch (error) {
        console.error(error)
      }
    }
  
    return books
  }

const getBookDataAnimal = async function(page) {
    const response = await fetch("https://openlibrary.org/search.json?subject=Animal&page="+page+"")
    
    if (response.status == 200) {
        return response.json()
        
    } else {
    new Error(response.statusText)
    }
}

async function getAllBookDataAnimal() {
    let books = []
  
    for (let page = 1; page <= 5; page++) {
      try {
        const bookData = await getBookDataAnimal(page)
        books.push(...bookData.docs)
      } catch (error) {
        console.error(error)
      }
    }
  
    return books
  }

const getBookDataAction = async function(page) {
    const response = await fetch("https://openlibrary.org/search.json?subject=Action&page="+page+"")
    
    if (response.status == 200) {
        return response.json()
        
    } else {
    new Error(response.statusText)
    }
}

async function getAllBookDataAction() {
    let books = []
  
    for (let page = 1; page <= 5; page++) {
      try {
        const bookData = await getBookDataAction(page)
        books.push(...bookData.docs)
      } catch (error) {
        console.error(error)
      }
    }
  
    return books
  }

const getBookDataTrend = async function() {
    const response = await fetch("https://openlibrary.org/trending/now.json")
    
    if (response.status == 200) {
        return response.json()
        
    } else {
    new Error(response.statusText)
    }
}

const getBookDataFantastic = async function(page) {
    const response = await fetch("https://openlibrary.org/search.json?subject=Fantastic&page="+page+"")
    
    if (response.status == 200) {
        return response.json()
        
    } else {
    new Error(response.statusText)
    }
}

async function getAllBookDataFantastic() {
    let books = []
  
    for (let page = 1; page <= 5; page++) {
      try {
        const bookData = await getBookDataFantastic(page)
        books.push(...bookData.docs)
      } catch (error) {
        console.error(error)
      }
    }
  
    return books
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
    const response = await fetch("https://covers.openlibrary.org/a/olid/"+id+".jpg")
    
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

export{getBookData,getImage, getAuthorImage,getBookDataFantastic, getBookDataAction, getBookDataTrend, getBookDataAnimal, getDetails, getAllBookData, getAllBookDataAction,getAllBookDataAnimal,getAllBookDataFantastic};
