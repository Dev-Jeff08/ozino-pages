import Header from "./Header";
import { Links } from "@remix-run/react";
import { useEffect, useState } from "react";
import ProductDisplay from "./ProductsDisplay";

function Wine() {
    const [wines, setWines] = useState([]);

    useEffect(() => {
        async function fetchWines() {
            const response = await fetch('/wine/list.json');
            const files = await response.json();

            const allWines = [];
            for (const file of files) {
                const res = await fetch(`/wine/${file.name}`);
                const wineData = await res.json();
                allWines.push(wineData);
            }
            setWines(allWines);  // 상태 갱신 함수를 사용하여 wines 상태를 갱신
        }

        fetchWines();
    }, []);

    return (
        <div className="container">
            {wines.length > 0 && wines.map((item) => <ProductDisplay item={item}/>)}
        </div>

    )
}

export default Wine;
