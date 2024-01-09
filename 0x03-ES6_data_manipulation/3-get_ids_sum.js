export default function getStudentIdsSum(students) {
  const sum = students.reduce((accumulator, obj) => accumulator + obj.id, 0)
  return sum
}