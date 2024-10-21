async function profileDelete(){
    const form = document.forms["profile-form"];
    if(!confirm("정말 삭제하시겠습니까?"))return;

    const result = await axios({
        method: "DELETE",
        url: "/profile/delete",
        data: {
            id: form.id.value,
        }
    });

    alert("회원 탈퇴 성공");
    
}
