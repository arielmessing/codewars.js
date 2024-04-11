export function generateHashtag (str) {
    str = str.trim();

    if (str.length === 0) return false;

    let hashtag = '#' + str.split(/\W+/).map(x => x.charAt(0).toUpperCase() + x.substr(1)).join('');
    
    return hashtag.length > 140 ? false : hashtag;
}
