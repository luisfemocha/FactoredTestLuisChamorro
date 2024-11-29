// @ts-ignore
import React, { useState } from 'react';
import {TextField, Button, FormControl, Grid, Alert, AlertTitle /*, Box*/} from '@mui/material';

interface loginProps {
    onLogin: (id) => void;
    //onSignUp: () => void;
}

const Login: React.FC<loginProps> = ({ onLogin /*, onSignUp*/ }) => {
    const [id, setId] = useState("");
    // const [pass, setPass] = useState("");
    let [alert, setAlert] = useState("")

    const loginHandler = () => {
        if (! id || id==="") {
            console.log("You must provide an Employee ID");
            setAlert(
                <Alert
                    onClose={() => {}}
                    severity="warning"
                >
                    <AlertTitle> No id </AlertTitle>
                    You must provide an Employee ID.
                </Alert>)
        }
        else onLogin(id);
    }

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            direction="column"
            paddingTop={5}
        >
            {alert}
            <Grid item>
                <h1>Employee login</h1>
            </Grid>
            <Grid item>
                <FormControl>
                    <Grid
                        container
                        direction="column"
                        spacing={2}
                    >
                        <Grid item xs={12}>
                            <TextField
                                id="id"
                                label="Employee ID"
                                variant="standard"
                                type="integer"
                                value={id}
                                onChange={(event) => {
                                    setId(event.target.value)
                                }}
                            />
                        </Grid>

                        {/* SAMPLE FOR PASSWORD VERIFICATION */}
                        {/*<Grid item xs={12}>*/}
                        {/*    <TextField*/}
                        {/*        id="pass"*/}
                        {/*        label="Password"*/}
                        {/*        variant="standard"*/}
                        {/*        type="password"*/}
                        {/*        value={pass}*/}
                        {/*        onChange={(event) => {*/}
                        {/*            setPass(event.target.value)*/}
                        {/*        }}*/}
                        {/*    />*/}
                        {/*</Grid>*/}

                        <Grid item xs={12} mx={"auto"}>
                            <Button
                                variant="contained"
                                size="large"
                                onClick={loginHandler}
                            >
                                Login
                            </Button>
                        </Grid>

                        {/* SAMPLE FOR SIGNUP */}
                        {/* <Grid container fontSize={15}>*/}
                        {/*    <Grid item my={"auto"}>*/}
                        {/*        <Box>Don't have an account?</Box>*/}
                        {/*    </Grid>*/}
                        {/*    <Grid item>*/}
                        {/*        <Button*/}
                        {/*            size={"small"}*/}
                        {/*            onClick={onSignUp}*/}
                        {/*        >*/}
                        {/*            Sign up*/}
                        {/*        </Button>*/}
                        {/*    </Grid>*/}
                        {/*</Grid>*/}
                    </Grid>
                </FormControl>
            </Grid>
        </Grid>
    );
};

export default Login;