import React, {useState, useEffect} from 'react';

const Info = () =>{
    const [name, setName] = useState('');
    const [nickName, setNickName] = useState('');

    useEffect(()=>{
        console.log('effect');
        console.log(name);
        return () => {
            console.log('cleanup');
            console.log(name);
        }
    },[name])
    // useEffect는 기본적으로 렌더링 되고난 직후마다 실행된다.
    // 컴포넌트가 언마운트되기 전이나, 업데이트 되기 직전에 특정 작업을 수행하고 싶다면
    // useEffect에서 cleanup함수를 반환해야 한다.
    // + 컴포넌트가 언마운트될 때에만 cleanup함수를 실행하려면 dependency로 빈 배열을 전하면 된다

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickName = e => {
        setNickName(e.target.value);
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickName} onChange={onChangeNickName} />
            </div>
            <div>
                <div>
                    <b>이름 : </b>{name}
                </div>
                <div>
                    <b>닉네임 : </b>{nickName}
                </div>
            </div>
        </div>
    )
}

export default Info