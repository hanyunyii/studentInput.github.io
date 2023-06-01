import axios from "axios";

export  function  addStudent(student){
    return axios.post('student',{... student})
}

export  function  getStudent(params){
    return axios.get("student",{params:{... params}})
}