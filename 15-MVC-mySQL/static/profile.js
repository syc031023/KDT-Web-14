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
    window.location.href = "/";
}

async function profileEdit(id){
    const form = document.forms["profile-form"];

    if(!form.checkValidity()){
        console.log("check");
        
        form.reportValidity(); //유저에게 validity 알려줌
        return;
    }

    if(form.userid.value.length === 0 || form.name.value.length === 0 || form.userpw.value.length === 0){
        alert("빈칸을 입력해주세요.");
        return;
    }

    if(form.userid.value.length > 20){
        alert("아이디는 20글자 이하입니다.");
        return;
    }

    if(form.name.value.length > 10){
        alert("이름은 10글자 이하입니다.");
        return;
    }

    if(form.userpw.value.length > 20){
        alert("비밀번호는 20글자 이하입니다.");
        return;
    }

    const {data} = await axios({
        method: "PATCH",
        url: `/profile/${id}`,
        data: {
            id: form.id.value,
            userid: form.userid.value,
            name: form.name.value,
            userpw: form.userpw.value,
        },
    });

    console.log(data);
}
