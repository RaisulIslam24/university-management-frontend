import { Button, Col, Row } from 'antd';
import loginPage from "../../assets/Privacy policy-rafiki.png"
import Image from 'next/image';
import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import { SubmitHandler } from 'react-hook-form';

type FormValues = {
    id: string,
    password: string,
}

const LoginPage = () => {

    const onSubmit: SubmitHandler<FormValues>  = (data) => {
        try {
            console.log(data);
        } catch (error) {}
    };

    return (
        <Row
        justify="center"
        align="middle"
        style={{
            minHeight: "100vh",
        }}
        >
            <Col sm={12} md={16} lg={12}>
                <Image src={loginPage} width={500} alt="login image"/>
            </Col>
            <Col sm={12} md={8} lg={8}>
                <h1
                style={{
                    margin: "15px 0px"
                }}
                >First login your account</h1>
                <div>
                    <Form submitHandler={onSubmit}>
                        <div
                        style={{
                            margin: "15px 0px"
                        }}
                        >
                            <FormInput name='id' type="text" size="large" label='User Id'/>
                        </div>
                        <div>
                            <FormInput name='password' type="password" size="large" label='User Password'/>  
                        </div>
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form>
                </div>
            </Col>
        </Row>
    );
};

export default LoginPage;