import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const params = useParams();

    return (
        <section>
            <h1>The Product Details</h1>
            <p>{params.productId}</p>
        </section>
    );
}

export default ProductDetail;