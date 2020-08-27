
export default function(value: number) {
    return (+value).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    /*
    const formatter = new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: '€',
        useGrouping: true,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    });
    return formatter.format(value);
    */
}