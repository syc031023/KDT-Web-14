import React from 'react'
import {useForm} from 'react-hook-form';

export default function Form() {
    const {
        register, // input 할당, value 변경 감지
        handleSubmit, // form submit 발생 시 호출
        formState: {errors}, // 폼 상태 객체 - errors
        watch, // 특정 폼 필드의 값을 실시간으로 사용
    } = useForm();

    // handleSubmit(funcA[, funcB])
    // - funcA: 필수, 유효할 때 실행
    // - funcB: 선택, 유요하지 않을 때 실행

    const onValidSubmit = (data) => {
        console.log("onValid", data);
    };

    const onInValidSubmit = (err) => {
        console.log("onInvalid", err);
    };

    console.log("watch", watch("username"));

  return (
    <div>
        <h1>react-hook-form 라이브러리 데모</h1>

        <form onSubmit={handleSubmit(onValidSubmit, onInValidSubmit)}>
            <input 
                type="text"
                placeholder='username'
                {...register("username", {
                    required: "이름을 입력해주세요",
                    minLength: {
                        message: "이름은 최소 2글자 이상 작성해주세요",
                        value: 2,
                    },
                })}
            />
            {/* 에러 메시지 */}
            {errors.username?.message}
            <br />

            <input 
                type="email"
                placeholder='email'
                {...register("email", {
                    required: "이메일을 입력해주세요",
                    validate: {
                        useGmail: (email) => {
                            return (
                                email.includes("gmail.com") || "gmail로만 가입 가능합니다."
                            );
                        },
                    },
                })}
            />
            {errors.email?.message}
            <br />

            <button>Submit</button>
        </form>
    </div>
  )
}
