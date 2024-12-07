function calculateArea(width, height) {

    const widthNum = Number(width);
    const heightNum = Number(height);

    if (widthNum > 0 && heightNum > 0) {

        const area = widthNum * heightNum;
        console.log("The area of the rectangle is: " + area);
    } else {
        console.log("Please enter valid positive numbers for both width and height.");
    }
}


calculateArea(5, 3);