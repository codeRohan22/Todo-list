//jshint esversion:6

exports.getDate = function(){
    const today = new Date();

    const options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    };

    return today.toLocaleDateString("en-us", options);
}

exports.getDay = function(){
    const today = new Date();

    const options = {
        weekday : "long",
    };

    const day = today.toLocaleDateString("en-us", options);

    return day;
}