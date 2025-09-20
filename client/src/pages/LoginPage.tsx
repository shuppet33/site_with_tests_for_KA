import {useContext, useState} from "react";
import styled from "styled-components";
import {SModalContent, STitle} from "../components/Header/Header.styled.ts";
import {Controller, type FieldValues, useForm} from "react-hook-form";
import {Header} from "../components/Header";
import {Container} from "../components/Container.tsx";
import {MainTitle} from "../components/Title/MainTitle.tsx";
import {Button} from "../components/Buttons/Button.tsx";
import {Modal} from "../components/Modals/Modal.tsx";
import {Input} from "../components/Input/Input.tsx";
import {loginAPI} from "../api/aith.ts";
import {AuthContext} from "../providers/AuthContext.tsx";
import {Loader} from "../components/Loader/Loader.tsx";

export const SModalWrapper = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
    gap: 20px;
`

const SLoaderWrapper = styled.div`
    width: 360px;
    height: 270px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const errorInputCustom = [
    {
        name: 'login',
        type: 'custom',
        message: 'неверный логин или пароль'
    },
    {
        name: 'password',
        type: 'custom',
        message: 'неверный логин или пароль'
    }
]


export const LoginPage = () => {
    const {login} = useContext(AuthContext);

    const [loader, setLoader] = useState(false)
    const [isOpen, setIsOpen] = useState(true)

    const {
        control,
        setError,
        formState: {
            errors
        },
        handleSubmit,
        reset
    } = useForm()


    const onSubmit = async (data: FieldValues) => {

        setLoader(true)

        try {
            const {role, token} = await loginAPI(data)

            if (role && token) {
                login(role, token)
                reset()

            } else {
                login(null, null)
                errorInputCustom.forEach(({ name, type, message }) => setError(name, {type, message}))
            }
        } catch (e) {
            setError("login", { type: "server", message: "Ошибка сервера. Попробуйте позже" })
        } finally {
            setLoader(false)
        }
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
                            {loader &&
                                <SLoaderWrapper>
                                    <Loader/>
                                </SLoaderWrapper>
                            }
                            {!loader && <form onSubmit={handleSubmit(onSubmit)}>
                                <STitle>Вход</STitle>

                                <Controller
                                    name={'login'}
                                    control={control}
                                    defaultValue={''}
                                    rules={{
                                        required: " поле обязательно",
                                        minLength: 4,
                                        maxLength: 30,
                                        pattern: {
                                            value: /^[a-zA-Z0-9._]+$/,
                                            message: "только буквы, цифры, точка и _"
                                        }
                                    }}

                                    render={({field: {onChange, value}}) => <Input
                                        onChange={onChange}
                                        value={value}
                                        className={errors.login && "input error"}
                                        placeholder={'логин'}

                                        error={errors.login?.message}
                                    />}
                                />

                                <Controller
                                    name={'password'}
                                    control={control}
                                    defaultValue={''}
                                    rules={{
                                        required: "поле обязательно",
                                        minLength: 4,
                                        maxLength: 30,
                                        pattern: {
                                            value: /^[a-zA-Z0-9._]+$/,
                                            message: "молько буквы, цифры, точка и _"
                                        }
                                    }}

                                    render={({field: {onChange, value}}) => <Input
                                        onChange={onChange}
                                        value={value}
                                        className={errors.password && "input error"}
                                        type={'password'}
                                        placeholder={'пароль'}

                                        error={errors.login?.message}
                                    />}
                                />


                                <Button type={'submit'} $fullWidth $size={'medium'}>войти</Button>
                            </form>}
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