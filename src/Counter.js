import React, {useState} from 'react';

const Counter = () =>{
    const [value, setValue] = useState(0);
    // useState의 파라미터로 전달하는 값은 상태의 기본값
    // useState는 배열을 반환하는데, 배열의 첫번째 요소는 상태 값이고, 두번째 요소는 상태를 설정하는 함수임
    // 두번째 요소인 함수에 파라미터를 넣어서 호출하게 되면 전달받은 파라미터로 값이 바뀌고, 컴포넌트는 다시 렌더링됨

    return (
        <div>
            <p>
                현재 카운터 값은 <b>{value}</b> 입니다.
            </p>
            <button onClick={()=>setValue(value + 1)}>+1</button>
            <button onClick={()=>setValue(value - 1)}>-1</button>
        </div> 
    )
}

export default Counter