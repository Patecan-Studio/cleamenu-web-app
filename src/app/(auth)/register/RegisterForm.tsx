'use client'

import {Card, CardBody} from "@nextui-org/card";
import { CardHeader, Input } from "@nextui-org/react";
import {GiPadlock} from "react-icons/gi";
import {Button} from "@nextui-org/button";
import {useForm} from "react-hook-form";


export default function RegisterForm(){
    const {register, handleSubmit } = useForm()

    const onSubmit  = (data: any) => {
        console.log(data);
    }


    return (
        <Card className="w-2/5 mx-auto">
            <CardHeader className={'flex flex-col items-center justify-center'}>
                <div className={'flex flex-col items-center text-secondary'}>
                    <div className={'flex flex-r items-center gap-3'}>
                        <GiPadlock size={30}/>
                        <h1>Register</h1>
                    </div>
                </div>
            </CardHeader>
            <CardBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={'space-y-4'}>
                        <Input
                            defaultValue={''}
                            label="Email"
                            variant={'bordered'}
                            {...register("email")}
                        />
                        <Input
                            defaultValue={''}
                            label="Password"
                            variant={'bordered'}
                            type="password"
                            {...register("password")}
                        />
                        <Button fullWidth color={'secondary'} type={'submit'}>Register
                        </Button>

                    </div>

                </form>
            </CardBody>
        </Card>
    )
}
