import React, { Component } from 'react';
import Userfront from "@userfront/react";

Userfront.init("wn9965n5");

const SignupForm = Userfront.build({
  toolId: "bmrlnk"
});

export default class Signup extends Component {
    render() {
        return (
            <>
                <SignupForm />
            </>
        )
    }
}
