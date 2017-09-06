function debounce(func, context, wait) {
    let timer = null;
    return	function() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.bind(context);
        }, wait);
    };
}
export default {
    debounce
};