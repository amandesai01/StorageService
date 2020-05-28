var hash = async (input_string) => {
    var hash = 0, i, chr;
    for (i = 0; i < input_string.length; i++) {
        chr   = input_string.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}