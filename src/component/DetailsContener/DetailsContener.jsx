import './DetailsContener.css'

function DetailsContener(){

return(
    <div id='Detailsdiv' >
        <label id="tittle">PERFUME</label>
        <h1 id="header" >Gabrielle Essence De Perfum</h1>
        <p id="description">a floral, solar and Voluptuos, a floral, solar and Voluptuos,a floral, solar and Voluptuos,a floral, solar and Voluptuos,a floral, solar and Voluptuos </p>
        <div id="pricediv">
            <label id="pricelebel">$194.99</label>
            <label id="discountprice"> <s>169.99 </s></label>
        </div>
        <button id="cartbtn">
            Add to cart</button>
    </div>
)
}

export default DetailsContener