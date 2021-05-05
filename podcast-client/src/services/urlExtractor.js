export const urlExtractor = (url) => {
    var urlSplit = (window.location.href).split("/");
    var name = urlSplit[urlSplit.length-1]
    return name;
}