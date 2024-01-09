export default function getStudentsByLocation(students, city) {
  const obj = students.filter(obj => obj.location === city)

  return obj
}