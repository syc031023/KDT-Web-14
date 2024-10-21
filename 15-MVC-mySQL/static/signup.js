async function clickRegister() {
    const form = document.forms["register-form"];

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
            method: "POST",
            url: "/signup",
            data: {
                userid: form.userid.value,
                name: form.name.value,
                userpw: form.userpw.value,
            },
        });
    console.log(data);
    
    const {id, userid, name, userpw} = data;

    // const html = `${name}님 회원가입에 성공하셨습니다!`;
    // const result = document.querySelector(".registerResult");
    // result.innerHTML = html;
    
    form.reset();

    alert(`${name}님 회원가입에 성공하셨습니다!`);

    window.location.href = "/signin";
}