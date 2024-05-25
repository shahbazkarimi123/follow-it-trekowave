exports.datetimeToMilliseconds=(datetimeString) =>{
    // Parse the datetime string into a Date object
    const date = new Date(datetimeString);

    // Get the time in milliseconds since January 1, 1970
    return date.getTime();
}

exports.getCurrentDateTimeFormatted=()=> {
    // Create a new Date object representing the current date and time
    const currentDate = new Date();

    // Get the individual components of the date and time
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');

    // Construct the formatted date and time string
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    // Return the formatted date and time string
    return formattedDateTime;
}

exports.getMidnightDateTime=()=> {
    const currentDate = new Date();

    // Get the individual components of the date and time
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = '00';
    const minutes = '00';
    const seconds = '00';

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}