myGrades = [100, 100, 90, 73, 78, 94, 86];

myAverage = 0;

for (let i = 1; i <= myGrades.length; i++) {

myAverage += myGrades[i];

}

myAverage = myAverage / myGrades.length;

console.log("My grade average is " + myAverage);

/* Input Validation function that is written to validate a grade input*/
function validateGrade(grade) {
    if (typeof grade !== "number" || inNaN(grade)) {
        throw new Error("This is invalid and it has to be a number");
    }
    if (grade < 0 || grade > 100) {
        throw new Error("This grade has to be in the 0 and 100 line limit");
    }
    return grade;
}

/* Custom Exception this will define a custom exception of the grades validation*/
class GradeError extends Error {
    constructor(message) {
        super(message);
        this.name = "GradeError";
    }
}

/* Input Validation Function this now has been written for a validated grading input*/
function validateGradeCustom(grade) {
    if (typeof grade !== "number" || isNaN(grade)) {
        throw new GradeError("This is invalid and does not fit the number requirement");
    }
    if (grade < 0 || grade > 100) {
        throw new GradeError("This grade has to be in the 0 and 100 line limit");
    }
    return grade;
}

/* Handling the custom exception this will do a try and catch block to call the function and handle the exception*/
try {
    console.log(validateGradeCustom(200)); //this is an example to trigger the exception
} catch (error) {
    if (error instanceof GradeError) {
        console.log("Caught a GradeError with in the system: " + error.message);
    } else {
        throw error;
    }
}