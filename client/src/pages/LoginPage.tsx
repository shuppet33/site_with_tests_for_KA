import {useState} from "react";
import styled from "styled-components";
import {Controller, type FieldValues, useForm} from "react-hook-form";
import {Header} from "../components/Header";
import {Container} from "../components/Container.tsx";
import {MainTitle} from "../components/Title/MainTitle.tsx";
import {Button} from "../components/Buttons/Button.tsx";
import {Modal} from "../components/Modals/Modal.tsx";
import {SModalContent, STitle} from "../components/Header/Header.styled.ts";
import {Input} from "../components/Input/Input.tsx";
import {login} from "../api/aith.ts";

export const SModalWrapper = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
    gap: 20px;
`


export const LoginPage = () => {
    const [isOpen, setIsOpen] = useState(true)

    const {
        control,
        formState: {
            errors
        },
        handleSubmit,
        reset
    } = useForm()

    const onSubmit = (data: FieldValues) => {
        login(data)
        console.log('LOOOG', login(data))
        reset()
    }


    return (
        <>
            {isOpen && (
                <Modal closeButton
                       onClose={() => setIsOpen(false)}
                       $marginTop={'110px'}
                       $position={'center'}
                >
                    <SModalWrapper>
                        <SModalContent>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <STitle>Вход</STitle>

                                <Controller
                                    name={'login'}
                                    control={control}
                                    defaultValue={''}
                                    rules={{
                                        required: "Поле обязательно",
                                        minLength: {
                                            value: 4,
                                            message: 'Минимум 4 символов'
                                        },
                                        maxLength: {
                                            value: 30,
                                            message: 'Максимум 30 символов'
                                        },
                                        pattern: {
                                            value: /^[a-zA-Z0-9._]+$/,
                                            message: "Только буквы, цифры, точка и _"
                                        }
                                    }}

                                    render={({ field: { onChange, value }}) => <Input
                                        onChange={onChange}
                                        value={value}
                                        className={errors.login && "input error"}
                                        placeholder={'логин'}
                                    />}
                                />

                                <Controller
                                    name={'password'}
                                    control={control}
                                    defaultValue={''}
                                    rules={{
                                        required: "Поле обязательно",
                                        minLength: {
                                            value: 4,
                                            message: 'Минимум 8 символов'
                                        },
                                        maxLength: {
                                            value: 30,
                                            message: 'Максимум 30 символов'
                                        },
                                        pattern: {
                                            value: /^[a-zA-Z0-9._]+$/,
                                            message: "Только буквы, цифры, точка и _"
                                        }
                                    }}

                                    render={({ field: { onChange, value }}) => <Input
                                        onChange={onChange}
                                        value={value}
                                        className={errors.password && "input error"}
                                        type={'password'}
                                        placeholder={'пароль'}
                                    />}
                                />


                                <Button type={'submit'} $fullWidth $size={'medium'}>войти</Button>
                            </form>
                        </SModalContent>
                    </SModalWrapper>
                </Modal>
            )}

            <Header>
                <Button onClick={() => setIsOpen(true)} $size={'small'}>войти</Button>
            </Header>

            <Container>
                <MainTitle/>
            </Container></>
    )
}