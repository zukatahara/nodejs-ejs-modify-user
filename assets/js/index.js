$("#add_user").submit(e => {
    alert(`User created success!`);
})

$("#update_user").submit(function (e) {
    e.preventDefault()
    let results = $(this).serializeArray()
    console.log(results)
    let data = {};
    $.map(results, function (n, i) {
        // console.log(n,i)
        data[n['name']] = n['value'];
    })
    // console.log(data)
    let request = {
        "url": `http://localhost:3000/api/user/${data.id}`,
        "method": 'PUT',
        data
    }
    $.ajax(request).done(function (response) {
        alert('Data Updated Success!')
    })
})

if(window.location.pathname == "/"){
    $ondelelte = $("a.delete");
    $ondelelte.click(function(){
        let id = $(this).attr("data-id")
        console.log(id);
        let request = {
            "url": `http://localhost:3000/api/user/${id}`,
            "method": 'DELETE',
            
        }
        if(confirm("Chac chan xoa?")){
            $.ajax(request).done(function (response) {
                alert('Data Updated Success!')
                location.reload();
            })
        }
    })
    
    
}