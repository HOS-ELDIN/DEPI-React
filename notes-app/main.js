const url = "http://localhost:3000/notes"
async function getNotes() {
    const res = await fetch(url , {
        method : "GET"
    })
    const data = await res.json()
    return data
}

async function renderNotes() {
    const notes = await getNotes();
    const row = document.querySelector('.row')
    notes.forEach(note => {
        const div = document.createElement('div')
        div.className = `col-lg-3 col-md-6 col-sm-12 my-2`
        div.innerHTML = `
            <div class="card text-bg-light mb-3" style="max-width: 18rem;">
            <div class="card-header">${note.title}</div>
            <div class="card-body">
                <p class="card-text">${note.desc}</p>
                <button class="btn btn-danger" 
                onclick="deleteNote('${note.id}')"> delete note </button>
                 <button class="btn btn-success" > edit note </button>
            </div>
            </div>
        `
        row.appendChild(div)
    });
}
function addNote(event) {
    event.preventDefault();
    const titleValue = document.querySelector('#title').value
    const descValue = document.querySelector("#desc").value
    fetch(url , {
        method : "POST" , 
        body : JSON.stringify({
            title : titleValue , 
            desc : descValue
        }),
        headers : {
            "Content-type" : "application/json; charset=UTF-8"
        }
    })
    // }).then(res => res.json())
    // .then(data => console.log(data))
    // .catch(err => console.log(err))
}


function deleteNote(id) {
    fetch(`${url}/${id}` , {
        method : "DELETE"
    })
}

document.addEventListener('DOMContentLoaded' , renderNotes)
document.querySelector('form').addEventListener('submit' , addNote)