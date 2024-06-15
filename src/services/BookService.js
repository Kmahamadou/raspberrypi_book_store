import axios from 'axios';


export function getBooks() {
    return axios.get('http://127.0.0.1:8000/books/')
            .then(response => response.data);
}


export function deleteBook(studentId) {
    return axios.delete('http://127.0.0.1:8000/books/' + studentId + '/', {
        method: 'DELETE',
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
        }
    }).then(response => response.data)
}



export function addBook(student) {
    return axios.post('http://127.0.0.1:8000/books/', {
        studentId:null,
        FirstName:student.FirstName.value,
        LastName:student.LastName.value,
        RegistrationNo:student.RegistrationNo.value,
        Email:student.Email.value,
        Course:student.Course.value
    })
        .then(response=>response.data)
}


export function updateBook(stuId, student) {
    return axios.put('http://127.0.0.1:8000/books/' + stuId + '/',
        {
            FirstName:student.FirstName.value,
            LastName:student.LastName.value,
            RegistrationNo:student.RegistrationNo.value,
            Email:student.Email.value,
            Course:student.Course.value,
        })
            .then(response => response.data)
}