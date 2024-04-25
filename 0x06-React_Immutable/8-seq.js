import immutable from 'immutable';

const { Seq } = immutable;

export default function printBestStudents(grades) {
    Seq(grades)
        .filter(student => student.score >= 70)
        .map(student => ({
            ...student,
            firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
            lastName: student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1)
        }))
        .forEach(student => console.log(student));
}
