const url = 'http://webbase.com.vn/ceramic/product-api/get-categories-top-product';
export function getCategoriesTopProduct()
{
    return fetch(url)
    .then(res => res.json())
}