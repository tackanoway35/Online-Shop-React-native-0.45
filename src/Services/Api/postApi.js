export function postApi(url, data)
{
    //Append data to formData
    let formData = new FormData();
    // arrKey = Object.keys(data);
    // for(let i = 0; i<arrKey.length; i++)
    // {
    //     formData.append(arrKey[i] , data[arrKey[i]])
    // }
    for (let key in data)
    {
        formData.append(key, data[key])
    }
    return fetch(url, {
        method : 'post',
        headers : {
            'Content-Type' : 'multipart/form-data'
        },
        body : formData
    })
    .then(res => res.json())
    
}