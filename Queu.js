var arr = [
    {id:1,name:"rivka",emele:"r548468129",pone:"0548468129"},
    {id:2,name:"braci",emele:"h548468129",pone:"0548468129"},
    {id:3,name:"yeudit",emele:"j548434567",pone:"0548468129"},
    {id:4,name:"sdfg",emele:"o5484623456",pone:"0548468129"},
    {id:5,name:"ertyu",emele:"t548468129",pone:"0548468129"},
    {id:6,name:"fghj",emele:"f542345678",pone:"0548468129"},
    {id:7,name:"ertyu",emele:"p54856785",pone:"0548468129"},
];

var obj = {};
    
obj.getAll = function(index)
{
    return arr;
}

obj.addItem = function(item)
{
    // if(item.emele.length<2)

    arr.push(item);
}

obj.updateItem = function(item)
{
    var  cast = obj.getItemById(item.id);
    
    cast.name = item.name;
   cast.pone=item.pone;
   if(cast.emele.includes("@"))
   cast.emele=item.emele;
}

obj.removeItem = function(id)
{
    for (var i=0; i<arr.length ; i++)
    {
        if (arr[i].id == id)
            {
                arr.splice(i, 1);
                return "success";
            }
    }
    return "faild";
}

obj.getItem = function(index)
{
    return arr[index];
}

obj.getItemById = function(id)
{
    console.log(arr.filter(x => x.id == id)[0])
    return arr.filter(x => x.id == id)[0];
  
}


module.exports = obj;