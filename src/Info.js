import React, {useReducer} from 'react';
import useInput from './useInput'

const Info = () =>{
    const [state, onChange] = useInput({
        name: '',
        nickName: '' 
    })

    const {name, nickName} = state;

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickName" value={nickName} onChange={onChange} />
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