// import React, {ReactNode, useEffect, useState} from "react";
// import { AuthContext } from './index.ts'
// import {ModalWrapper, Wrapper} from "./styled.ts";
// interface AuthProviderProps {
//     children: ReactNode;
// }
//
// export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
//     const [user, setUser] = useState<string>('');
//     const [typeMessage, setTypeMessage] = useState<string>();
//     const [textArea, setTextArea] = useState<string>();
//
//     const login = (username: string) => setUser(username);
//     const logout = () => setUser('');
//
//     const value = { user, login, logout };
//
//     const sendOrder = () => {
//
//     };
//     useEffect(() => {
//
//     }, [user])
//     return <AuthContext.Provider value={value}>
//         <div className='container3333333'>
//             {children}
//             {
//                 user ? <ModalWrapper>
//                     <Wrapper>
//                     <div>Оставьте заявку
//                         и я свяжусь с вами в ближайшее время</div>
//                     <form>
//                         <input placeholder='Ваше имя' value={user} onChange={(e) => setUser(e.target.value)}/>
//                         <input placeholder='Мессенджер' value={typeMessage} onChange={(e) => setTypeMessage(e.target.value)}/>
//                         <textarea placeholder='Напишите сообщение... ' value={textArea} onChange={(e) => setTextArea(e.target.value)} />
//                         <button type='button' onClick={() => sendOrder()}>Отправить</button>
//                     </form>
//                     </Wrapper>
//                 </ModalWrapper> : null
//             }
//
//
//         </div>
//
//
//     </AuthContext.Provider>;
// };
