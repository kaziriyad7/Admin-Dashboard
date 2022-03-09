const Orders = [
    {
        productName: "foldable Mini Drone",
        productNumber: "85631",
        paymentStatus: "Due",
        shipping: "Pending",
    },
    {
        productName: "foldable Mini Drone",
        productNumber: "85631",
        paymentStatus: "Due",
        shipping: "Pending",
    },
    {
        productName: "foldable Mini Drone",
        productNumber: "85631",
        paymentStatus: "Due",
        shipping: "Pending",
    },
    {
        productName: "foldable Mini Drone",
        productNumber: "85631",
        paymentStatus: "Due",
        shipping: "Pending",
    },
    {
        productName: "foldable Mini Drone",
        productNumber: "85631",
        paymentStatus: "Due",
        shipping: "Pending",
    }
];

// fill order in table
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class= "${order.shipping === "Declined" ? 'danger' :order.shipping === 'pending' ? 'warning' : 'primary'}">${order.shipping}</td>
        <td class="primary">Details</td>
    `;

    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})