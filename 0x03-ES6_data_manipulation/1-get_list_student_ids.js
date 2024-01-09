export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return []
  } else {
    const id = students.map(student => student.id)
    return id
  }

}