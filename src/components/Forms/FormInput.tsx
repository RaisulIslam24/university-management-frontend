"use client"

import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";

interface IInput {
    type?: string;
    name: string;
    size?: "large" | "small";
    value?: string | string[] | undefined;
    id?: string;
    placeholder?: string;
    validation?: object;
    label?: string;
}

const FormInput = ({
    type,
    name,
    size,
    value,
    id,
    placeholder,
    validation,
    label
}: IInput) => {
    const { control } = useFormContext();

    return (
        <>
            {label ? label : null}
            <Controller
            control={control}
            name={name}
            render={({ field: { field } }) => (
                type === "password" ? 
                <Input.Password
                    type={type}
                    size={size}
                    placeholder={placeholder}
                    {...field}
                    value={value ? value : field.value}
                />
            ) : (
                <Input
                    type={type}
                    size={size}
                    placeholder={placeholder}
                    {...field}
                    value={value ? value : field.value}
                />
            )}
        />
        </>
    )
};

export default FormInput;