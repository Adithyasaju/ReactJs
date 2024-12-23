let Product =()=>{
    let product_name="iPhone 16";
    let Storage="128GB";
    let colour="Teal";
    let image_details="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTg8x_E1zuwyQyhLd4A879TkGuZlaSyQo1bRKB3Bg8gMKOX2BDhCruyoS9Cjm-B5Il5McwfcYyLcsZnj6DPZDJg-qIMwXfXPCb3VsHeXt8RVuT4Cyp7OB4TEEU";

    return <div>
        <h1>Product Details </h1>
        <h2>Product name:{product_name}</h2>
        <h2>Storage Capacity:{Storage}</h2>
        <h2>Colour:{colour}</h2>
        <img src={image_details} alt="" />
    </div>

}
export default Product