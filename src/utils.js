export default function formatCurrency(num){
    return "$" + Number.parseFloat(num).toFixed(2).toLocaleString() + " ";
}

